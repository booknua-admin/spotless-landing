'use client';

import { useState, useEffect } from 'react';
import CurrencySelector from '../../../components/currency-selector';
import EmailGate from '../../../components/email-gate';
import ToolCTA from '../../../components/tool-cta';
import StickyTrialBar from '../../../components/sticky-trial-bar';
import { formatCurrency, getStoredCurrency } from '../../../lib/currency';
import { triggerPrint } from '../../../lib/pdf-export';

const CHART_COLORS = {
  'Gross Wages': '#3ECF8E',
  'Employment Taxes': '#36b5e0',
  Insurance: '#9b59b6',
  'Equipment & Supplies': '#f39c12',
  'Vehicle & Fuel': '#e74c3c',
  Training: '#1abc9c',
  Uniforms: '#3498db',
};

export default function EmployeeCostCalculator() {
  const [form, setForm] = useState({
    hourlyWage: 15,
    hoursPerWeek: 35,
    taxRate: 13.8,
    insurance: 50,
    equipment: 75,
    vehicle: 200,
    training: 25,
    uniform: 15,
  });
  const [results, setResults] = useState(null);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    setCurrency(getStoredCurrency());
  }, []);

  useEffect(() => {
    const grossMonthly = form.hourlyWage * form.hoursPerWeek * 4.33;
    const taxes = grossMonthly * (form.taxRate / 100);
    const additionalCosts =
      form.insurance + form.equipment + form.vehicle + form.training + form.uniform;
    const totalMonthly = grossMonthly + taxes + additionalCosts;
    const totalAnnual = totalMonthly * 12;
    const effectiveHourly = totalMonthly / (form.hoursPerWeek * 4.33);

    const margin30 = effectiveHourly / (1 - 0.3);
    const margin40 = effectiveHourly / (1 - 0.4);
    const margin50 = effectiveHourly / (1 - 0.5);

    const breakdown = [
      { label: 'Gross Wages', cost: Math.round(grossMonthly) },
      { label: 'Employment Taxes', cost: Math.round(taxes) },
      { label: 'Insurance', cost: form.insurance },
      { label: 'Equipment & Supplies', cost: form.equipment },
      { label: 'Vehicle & Fuel', cost: form.vehicle },
      { label: 'Training', cost: form.training },
      { label: 'Uniforms', cost: form.uniform },
    ];

    setResults({
      grossMonthly: Math.round(grossMonthly),
      taxes: Math.round(taxes),
      totalMonthly: Math.round(totalMonthly),
      totalAnnual: Math.round(totalAnnual),
      effectiveHourly: effectiveHourly.toFixed(2),
      margin30: margin30.toFixed(2),
      margin40: margin40.toFixed(2),
      margin50: margin50.toFixed(2),
      breakdown,
    });
  }, [form]);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: Number(value) }));
  }

  const fields = [
    { key: 'hourlyWage', label: 'Hourly Wage' },
    { key: 'hoursPerWeek', label: 'Hours Per Week' },
    { key: 'taxRate', label: 'Employment Tax Rate (%)', hint: 'e.g. 13.8% for UK employer NI' },
    { key: 'insurance', label: 'Insurance Per Employee/Month' },
    { key: 'equipment', label: 'Equipment & Supplies/Month' },
    { key: 'vehicle', label: 'Vehicle & Fuel/Month' },
    { key: 'training', label: 'Training Cost/Month' },
    { key: 'uniform', label: 'Uniform Cost/Month' },
  ];

  return (
    <>
      <div className="tool-form">
        <CurrencySelector onChange={(code) => setCurrency(code)} />

        {fields.map(({ key, label, hint }, i) => {
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
                  min={0}
                  step={key === 'taxRate' ? 0.1 : 1}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
                {hint && <div className="tool-hint">{hint}</div>}
              </div>
              {next && (
                <div className="tool-input-group">
                  <label>{next.label}</label>
                  <input
                    type="number"
                    className="tool-input"
                    value={form[next.key]}
                    min={0}
                    step={next.key === 'taxRate' ? 0.1 : 1}
                    onChange={(e) => handleChange(next.key, e.target.value)}
                  />
                  {next.hint && <div className="tool-hint">{next.hint}</div>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {results && (
        <>
          <div className="tool-results tool-results-animated">
            <div className="tool-results-title">Total Employee Cost</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Gross Monthly Wage</span>
              <span className="tool-result-value">
                {formatCurrency(results.grossMonthly, currency)}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Employment Taxes</span>
              <span className="tool-result-value">
                {formatCurrency(results.taxes, currency)}/mo
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Total Monthly Cost</span>
              <span className="tool-result-value highlight">
                {formatCurrency(results.totalMonthly, currency)}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Total Annual Cost</span>
              <span className="tool-result-value highlight">
                {formatCurrency(results.totalAnnual, currency)}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Effective Hourly Rate</span>
              <span className="tool-result-value highlight">
                {formatCurrency(Number(results.effectiveHourly), currency)}/hr
              </span>
            </div>
          </div>

          {/* Cost Breakdown Bar */}
          <div className="tool-results tool-results-animated" style={{ marginTop: '24px' }}>
            <div className="tool-results-title">Cost Breakdown</div>
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
              {results.breakdown
                .filter((item) => item.cost > 0)
                .map((item) => {
                  const pct = (item.cost / results.totalMonthly) * 100;
                  return (
                    <div
                      key={item.label}
                      title={`${item.label}: ${formatCurrency(item.cost, currency)}`}
                      style={{
                        width: `${pct}%`,
                        backgroundColor: CHART_COLORS[item.label] || '#ccc',
                        minWidth: pct > 0 ? '2px' : '0',
                      }}
                    />
                  );
                })}
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px 16px',
                marginBottom: '16px',
              }}
            >
              {results.breakdown
                .filter((item) => item.cost > 0)
                .map((item) => (
                  <span
                    key={item.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        borderRadius: '2px',
                        backgroundColor: CHART_COLORS[item.label] || '#ccc',
                      }}
                    />
                    {item.label}
                  </span>
                ))}
            </div>
            {results.breakdown.map((item) => (
              <div className="tool-result-row" key={item.label}>
                <span className="tool-result-label">{item.label}</span>
                <span className="tool-result-value">
                  {formatCurrency(item.cost, currency)}/mo
                </span>
              </div>
            ))}
          </div>

          {/* Markup / Margin Table */}
          <div className="tool-results tool-results-animated" style={{ marginTop: '24px' }}>
            <div className="tool-results-title">What to Charge Per Hour</div>
            <p style={{ fontSize: '14px', margin: '0 0 16px', opacity: 0.8 }}>
              Based on the effective cost of {formatCurrency(Number(results.effectiveHourly), currency)}/hr,
              here is what you need to charge to maintain your desired profit margin:
            </p>
            <div className="tool-result-row">
              <span className="tool-result-label">30% Profit Margin</span>
              <span className="tool-result-value highlight">
                {formatCurrency(Number(results.margin30), currency)}/hr
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">40% Profit Margin</span>
              <span className="tool-result-value highlight">
                {formatCurrency(Number(results.margin40), currency)}/hr
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">50% Profit Margin</span>
              <span className="tool-result-value highlight">
                {formatCurrency(Number(results.margin50), currency)}/hr
              </span>
            </div>
          </div>

          {/* Visual Comparison Bars */}
          <div className="tool-results tool-results-animated" style={{ marginTop: '24px' }}>
            <div className="tool-results-title">Hourly Rate Comparison</div>
            {[
              { label: 'Base Wage', value: form.hourlyWage, color: '#3ECF8E' },
              {
                label: 'True Cost',
                value: Number(results.effectiveHourly),
                color: '#36b5e0',
              },
              { label: 'Charge (30%)', value: Number(results.margin30), color: '#f39c12' },
              { label: 'Charge (40%)', value: Number(results.margin40), color: '#e74c3c' },
              { label: 'Charge (50%)', value: Number(results.margin50), color: '#9b59b6' },
            ].map((bar) => {
              const maxVal = Number(results.margin50) * 1.1;
              const pct = maxVal > 0 ? (bar.value / maxVal) * 100 : 0;
              return (
                <div key={bar.label} style={{ marginBottom: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '13px',
                      marginBottom: '4px',
                    }}
                  >
                    <span>{bar.label}</span>
                    <span>{formatCurrency(bar.value, currency)}/hr</span>
                  </div>
                  <div
                    style={{
                      height: '20px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: `${Math.min(100, pct)}%`,
                        height: '100%',
                        backgroundColor: bar.color,
                        borderRadius: '4px',
                        transition: 'width 0.3s ease',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <EmailGate toolName="employee-cost-calculator">
              <button className="btn-secondary" onClick={triggerPrint}>
                Download PDF
              </button>
            </EmailGate>
          </div>

          <ToolCTA
            headline="Track employee costs automatically with Spotless"
            description="Spotless tracks hours, calculates payroll costs, and shows you real-time profitability per cleaner. Start your 14-day free trial."
            featureLink="/product/reporting"
          />
        </>
      )}

      <StickyTrialBar />
    </>
  );
}
