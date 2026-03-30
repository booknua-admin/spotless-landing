'use client';

import { useState, useEffect, useMemo } from 'react';
import CurrencySelector from '../../../components/currency-selector';
import EmailGate from '../../../components/email-gate';
import ToolGateway from '../../../components/tool-gateway';
import StickyTrialBar from '../../../components/sticky-trial-bar';
import { formatCurrency, getStoredCurrency } from '../../../lib/currency';
import { triggerPrint } from '../../../lib/pdf-export';

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const PAY_PERIODS = [
  { value: 'weekly', label: 'Weekly' },
  { value: 'biweekly', label: 'Biweekly' },
  { value: 'monthly', label: 'Monthly' },
];

function createWeek() {
  return DAY_LABELS.map((day, i) => ({
    day,
    start: i < 5 ? '08:00' : '',
    end: i < 5 ? '16:00' : '',
    breakMinutes: i < 5 ? 30 : 0,
  }));
}

function timeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function calcDayHours(entry) {
  if (!entry.start || !entry.end) return 0;
  const startMin = timeToMinutes(entry.start);
  const endMin = timeToMinutes(entry.end);
  if (endMin <= startMin) return 0;
  const worked = (endMin - startMin) / 60;
  const breakHrs = (entry.breakMinutes || 0) / 60;
  return Math.max(0, worked - breakHrs);
}

function calcWeekTotals(week) {
  let totalHours = 0;
  let regularHours = 0;
  let overtimeHours = 0;

  const dailyHours = week.map((entry) => {
    const hrs = calcDayHours(entry);
    totalHours += hrs;
    return hrs;
  });

  // Calculate overtime: hours beyond 8/day OR 40/week (whichever gives more OT)
  let dailyOT = 0;
  let dailyRegular = 0;
  dailyHours.forEach((hrs) => {
    if (hrs > 8) {
      dailyOT += hrs - 8;
      dailyRegular += 8;
    } else {
      dailyRegular += hrs;
    }
  });

  const weeklyOT = totalHours > 40 ? totalHours - 40 : 0;

  // Use whichever method yields more overtime (protects the employee)
  if (weeklyOT > dailyOT) {
    overtimeHours = weeklyOT;
    regularHours = totalHours - weeklyOT;
  } else {
    overtimeHours = dailyOT;
    regularHours = dailyRegular;
  }

  return { totalHours, regularHours, overtimeHours, dailyHours };
}

export default function TimesheetCalculator() {
  const [currency, setCurrency] = useState('EUR');
  const [employeeName, setEmployeeName] = useState('');
  const [payRate, setPayRate] = useState(25);
  const [payPeriod, setPayPeriod] = useState('weekly');
  const [overtimeMultiplier, setOvertimeMultiplier] = useState(1.5);
  const [weeks, setWeeks] = useState([createWeek()]);

  useEffect(() => {
    setCurrency(getStoredCurrency());
  }, []);

  function handleEntryChange(weekIndex, dayIndex, field, value) {
    setWeeks((prev) =>
      prev.map((week, wi) =>
        wi === weekIndex
          ? week.map((entry, di) =>
              di === dayIndex
                ? { ...entry, [field]: field === 'breakMinutes' ? Number(value) : value }
                : entry
            )
          : week
      )
    );
  }

  function addWeek() {
    setWeeks((prev) => [...prev, createWeek()]);
  }

  function removeWeek(weekIndex) {
    if (weeks.length <= 1) return;
    setWeeks((prev) => prev.filter((_, i) => i !== weekIndex));
  }

  // Real-time calculations
  const summary = useMemo(() => {
    let totalRegular = 0;
    let totalOvertime = 0;
    let totalAll = 0;
    const weekSummaries = weeks.map((week) => {
      const wt = calcWeekTotals(week);
      totalRegular += wt.regularHours;
      totalOvertime += wt.overtimeHours;
      totalAll += wt.totalHours;
      return wt;
    });

    const regularPay = totalRegular * payRate;
    const overtimePay = totalOvertime * payRate * overtimeMultiplier;
    const grossPay = regularPay + overtimePay;

    return {
      weekSummaries,
      totalHours: totalAll,
      totalRegular,
      totalOvertime,
      regularPay,
      overtimePay,
      grossPay,
    };
  }, [weeks, payRate, overtimeMultiplier]);

  function saveDraft() {
    const draft = { employeeName, payRate, payPeriod, overtimeMultiplier, weeks, currency };
    localStorage.setItem('spotless_timesheet_draft', JSON.stringify(draft));
  }

  function loadDraft() {
    const data = localStorage.getItem('spotless_timesheet_draft');
    if (!data) return;
    try {
      const draft = JSON.parse(data);
      if (draft.employeeName !== undefined) setEmployeeName(draft.employeeName);
      if (draft.payRate !== undefined) setPayRate(draft.payRate);
      if (draft.payPeriod) setPayPeriod(draft.payPeriod);
      if (draft.overtimeMultiplier !== undefined) setOvertimeMultiplier(draft.overtimeMultiplier);
      if (draft.weeks) setWeeks(draft.weeks);
      if (draft.currency) setCurrency(draft.currency);
    } catch {}
  }

  const fc = (amount) => formatCurrency(amount, currency);

  return (
    <>
      <div className="tool-form">
        <div className="tool-form-header">
          <h3>Timesheet Details</h3>
          <div className="tool-form-actions">
            <button type="button" className="tool-btn-secondary" onClick={saveDraft}>Save Draft</button>
            <button type="button" className="tool-btn-secondary" onClick={loadDraft}>Load Draft</button>
          </div>
        </div>

        <CurrencySelector onChange={setCurrency} />

        <div className="tool-section-label">Employee Details</div>
        <div className="tool-input-row">
          <div className="tool-input-group">
            <label>Employee Name</label>
            <input
              className="tool-input"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="John Smith"
            />
          </div>
          <div className="tool-input-group">
            <label>Pay Rate (per hour)</label>
            <input
              className="tool-input"
              type="number"
              min="0"
              step="0.01"
              value={payRate}
              onChange={(e) => setPayRate(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="tool-input-row">
          <div className="tool-input-group">
            <label>Pay Period</label>
            <select
              className="tool-select"
              value={payPeriod}
              onChange={(e) => setPayPeriod(e.target.value)}
            >
              {PAY_PERIODS.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
          <div className="tool-input-group">
            <label>Overtime Multiplier</label>
            <input
              className="tool-input"
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={overtimeMultiplier}
              onChange={(e) => setOvertimeMultiplier(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="tool-section-label">Time Entries</div>

        {weeks.map((week, wi) => (
          <div key={wi} className="timesheet-week-block">
            <div className="timesheet-week-header">
              <span className="timesheet-week-label">Week {wi + 1}</span>
              {weeks.length > 1 && (
                <button
                  type="button"
                  className="line-item-remove"
                  onClick={() => removeWeek(wi)}
                  title="Remove week"
                >
                  &times;
                </button>
              )}
            </div>
            <div className="timesheet-grid">
              <div className="timesheet-header">
                <span className="timesheet-day">Day</span>
                <span className="timesheet-input">Start</span>
                <span className="timesheet-input">End</span>
                <span className="timesheet-input">Break (min)</span>
                <span className="timesheet-input">Hours</span>
              </div>
              {week.map((entry, di) => {
                const dayHours = calcDayHours(entry);
                return (
                  <div className="timesheet-row" key={di}>
                    <span className="timesheet-day">{entry.day}</span>
                    <input
                      className="tool-input timesheet-input"
                      type="time"
                      value={entry.start}
                      onChange={(e) => handleEntryChange(wi, di, 'start', e.target.value)}
                    />
                    <input
                      className="tool-input timesheet-input"
                      type="time"
                      value={entry.end}
                      onChange={(e) => handleEntryChange(wi, di, 'end', e.target.value)}
                    />
                    <input
                      className="tool-input timesheet-input"
                      type="number"
                      min="0"
                      max="480"
                      value={entry.breakMinutes}
                      onChange={(e) => handleEntryChange(wi, di, 'breakMinutes', e.target.value)}
                    />
                    <span className="timesheet-input timesheet-hours">
                      {dayHours > 0 ? dayHours.toFixed(2) : '\u2014'}
                    </span>
                  </div>
                );
              })}
              <div className="timesheet-row timesheet-row-total">
                <span className="timesheet-day">Total</span>
                <span className="timesheet-input"></span>
                <span className="timesheet-input"></span>
                <span className="timesheet-input"></span>
                <span className="timesheet-input timesheet-hours">
                  {summary.weekSummaries[wi]?.totalHours.toFixed(2) || '0.00'}
                </span>
              </div>
            </div>
          </div>
        ))}

        <button type="button" className="tool-btn-secondary line-item-add" onClick={addWeek}>
          + Add Another Week
        </button>
      </div>

      <div className="tool-results">
        <div className="tool-results-title">Pay Summary</div>
        <div className="tool-result-row">
          <span className="tool-result-label">Total Hours Worked</span>
          <span className="tool-result-value">{summary.totalHours.toFixed(2)}</span>
        </div>
        <div className="tool-result-row">
          <span className="tool-result-label">Regular Hours</span>
          <span className="tool-result-value">{summary.totalRegular.toFixed(2)}</span>
        </div>
        <div className="tool-result-row">
          <span className="tool-result-label">Overtime Hours</span>
          <span className="tool-result-value">{summary.totalOvertime.toFixed(2)}</span>
        </div>
        <div className="tool-result-row">
          <span className="tool-result-label">Regular Pay</span>
          <span className="tool-result-value">{fc(summary.regularPay)}</span>
        </div>
        <div className="tool-result-row">
          <span className="tool-result-label">Overtime Pay ({overtimeMultiplier}x)</span>
          <span className="tool-result-value">{fc(summary.overtimePay)}</span>
        </div>
        <div className="tool-result-row">
          <span className="tool-result-label">Gross Pay</span>
          <span className="tool-result-value highlight">{fc(summary.grossPay)}</span>
        </div>
      </div>

      <EmailGate toolName="timesheet-calculator">
        <button className="tool-calculate-btn" onClick={triggerPrint}>
          Download PDF
        </button>
      </EmailGate>

      <ToolGateway
        toolName="timesheet-calculator"
        headline="Automate timesheets with Spotless"
        description="Employee hours tracked automatically, pay calculated in real time. No more spreadsheets."
        featureLink="/product/staff-management"
        compact
      />

      <StickyTrialBar />
    </>
  );
}
