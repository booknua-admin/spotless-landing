'use client';

import { useState, useEffect } from 'react';
import CurrencySelector from '../../../components/currency-selector';
import EmailGate from '../../../components/email-gate';
import ToolCTA from '../../../components/tool-cta';
import StickyTrialBar from '../../../components/sticky-trial-bar';
import { formatCurrency, getStoredCurrency } from '../../../lib/currency';
import { triggerPrint } from '../../../lib/pdf-export';

export default function ROICalculator() {
  const [form, setForm] = useState({
    cleaners: 5,
    jobsPerWeek: 30,
    adminHoursPerWeek: 10,
    hourlyRate: 25,
    monthlySoftwareCost: 29,
  });
  const [results, setResults] = useState(null);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    setCurrency(getStoredCurrency());
  }, []);

  useEffect(() => {
    const monthlyAdminTimeSaved = form.adminHoursPerWeek * 0.6;
    const monthlyMoneySaved = monthlyAdminTimeSaved * 4.33 * form.hourlyRate;
    const annualSavings = monthlyMoneySaved * 12;
    const annualSoftwareCost = form.monthlySoftwareCost * 12;
    const roiPercentage =
      annualSoftwareCost > 0
        ? ((annualSavings - annualSoftwareCost) / annualSoftwareCost) * 100
        : 0;
    const dailySavings = monthlyMoneySaved / 30;
    const paybackDays =
      dailySavings > 0 ? Math.ceil(form.monthlySoftwareCost / dailySavings) : 0;

    setResults({
      monthlyAdminTimeSaved: monthlyAdminTimeSaved.toFixed(1),
      monthlyMoneySaved: Math.round(monthlyMoneySaved),
      annualSavings: Math.round(annualSavings),
      annualSoftwareCost,
      roiPercentage: Math.round(roiPercentage),
      paybackDays,
    });
  }, [form]);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: Number(value) }));
  }

  function getRoiColor(roi) {
    if (roi < 100) return '#ff6b6b';
    if (roi <= 300) return '#ffc107';
    return '#3ECF8E';
  }

  const fields = [
    { key: 'cleaners', label: 'Number of Cleaners', min: 1, max: 100 },
    { key: 'jobsPerWeek', label: 'Average Jobs Per Week', min: 1, max: 100 },
    { key: 'adminHoursPerWeek', label: 'Hours Spent on Admin Per Week', min: 1, max: 40 },
    { key: 'hourlyRate', label: 'Your Hourly Rate', min: 1 },
    { key: 'monthlySoftwareCost', label: 'Monthly Software Cost', min: 0 },
  ];

  return (
    <>
      <div className="tool-form">
        <CurrencySelector onChange={(code) => setCurrency(code)} />

        {fields.map(({ key, label, min, max }, i) => {
          const isEven = i % 2 === 0;
          const next = fields[i + 1];
          if (!isEven) return null;
          return (
            <div className="tool-input-row" key={key}>
              <div className="tool-input-group">
                <label>{label}</label>
                <input
                  type="number"
                  className="tool-input"
                  value={form[key]}
                  min={min}
                  max={max}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              </div>
              {next && (
                <div className="tool-input-group">
                  <label>{next.label}</label>
                  <input
                    type="number"
                    className="tool-input"
                    value={form[next.key]}
                    min={next.min}
                    max={next.max}
                    onChange={(e) => handleChange(next.key, e.target.value)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {results && (
        <>
          <div className="tool-results tool-results-animated">
            <div className="tool-results-title">Your ROI</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Monthly Admin Time Saved</span>
              <span className="tool-result-value highlight">
                {results.monthlyAdminTimeSaved} hours/week
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Monthly Money Saved</span>
              <span className="tool-result-value highlight">
                {formatCurrency(results.monthlyMoneySaved, currency)}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Annual Savings</span>
              <span className="tool-result-value">
                {formatCurrency(results.annualSavings, currency)}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Annual Software Cost</span>
              <span className="tool-result-value">
                {formatCurrency(results.annualSoftwareCost, currency)}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">ROI</span>
              <span
                className="tool-result-value highlight"
                style={{ color: getRoiColor(results.roiPercentage) }}
              >
                {results.roiPercentage}%
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Payback Period</span>
              <span className="tool-result-value highlight">{results.paybackDays} days</span>
            </div>
          </div>

          {/* ROI Gauge */}
          <div className="tool-gauge" style={{ marginTop: '24px' }}>
            <div
              className="tool-gauge-fill"
              style={{
                width: Math.min(100, Math.max(0, results.roiPercentage / 10)) + '%',
                backgroundColor: getRoiColor(results.roiPercentage),
              }}
            />
          </div>
          <div className="tool-gauge-labels">
            <span>0%</span>
            <span>500%</span>
            <span>1000%+</span>
          </div>

          {/* Summary */}
          <div className="tool-results tool-results-animated" style={{ marginTop: '24px' }}>
            <div className="tool-results-title">Summary</div>
            <p style={{ fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
              Spotless would save you{' '}
              <strong>{results.monthlyAdminTimeSaved} hours per week</strong> and{' '}
              <strong>{formatCurrency(results.monthlyMoneySaved, currency)} per month</strong>,
              paying for itself in just <strong>{results.paybackDays} days</strong>. Over a year,
              that&apos;s{' '}
              <strong>{formatCurrency(results.annualSavings, currency)} in savings</strong> against a{' '}
              {formatCurrency(results.annualSoftwareCost, currency)} investment &mdash; a{' '}
              <strong>{results.roiPercentage}% return</strong>.
            </p>
          </div>

          {/* Savings Breakdown Bar */}
          <div className="tool-results tool-results-animated" style={{ marginTop: '24px' }}>
            <div className="tool-results-title">Annual Savings vs Cost</div>
            <div
              className="tool-chart-bar"
              style={{
                display: 'flex',
                height: '32px',
                borderRadius: '6px',
                overflow: 'hidden',
                marginBottom: '12px',
              }}
            >
              {results.annualSavings + results.annualSoftwareCost > 0 && (
                <>
                  <div
                    style={{
                      width:
                        (results.annualSavings /
                          (results.annualSavings + results.annualSoftwareCost)) *
                          100 +
                        '%',
                      backgroundColor: '#3ECF8E',
                    }}
                    title={`Savings: ${formatCurrency(results.annualSavings, currency)}`}
                  />
                  <div
                    style={{
                      width:
                        (results.annualSoftwareCost /
                          (results.annualSavings + results.annualSoftwareCost)) *
                          100 +
                        '%',
                      backgroundColor: '#e74c3c',
                    }}
                    title={`Software Cost: ${formatCurrency(results.annualSoftwareCost, currency)}`}
                  />
                </>
              )}
            </div>
            <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
              <span>
                <span style={{ color: '#3ECF8E' }}>&bull;</span> Annual Savings
              </span>
              <span>
                <span style={{ color: '#e74c3c' }}>&bull;</span> Software Cost
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <EmailGate toolName="roi-calculator">
              <button className="btn-secondary" onClick={triggerPrint}>
                Download PDF
              </button>
            </EmailGate>
          </div>

          <ToolCTA
            headline="See the ROI for yourself with a free trial"
            description="Start your 14-day free trial and experience how much time Spotless saves on scheduling, invoicing, and team management."
            featureLink="/product/reporting"
          />
        </>
      )}

      <StickyTrialBar />
    </>
  );
}
