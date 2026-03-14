'use client';

import { useState } from 'react';

export default function ProfitMarginCalculator() {
  const [form, setForm] = useState({
    revenue: 8000,
    jobs: 40,
    hourlyRate: 14,
    hoursPerJob: 3,
    staff: 2,
    suppliesCost: 8,
    fuel: 300,
    insurance: 150,
    software: 50,
    overhead: 200,
  });
  const [results, setResults] = useState(null);
  const [gateEmail, setGateEmail] = useState('');

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: Number(value) }));
    setResults(null);
  }

  function calculate() {
    const labourPerJob = form.hourlyRate * form.hoursPerJob * form.staff;
    const totalVariableCosts = (labourPerJob + form.suppliesCost) * form.jobs;
    const totalFixedCosts = form.fuel + form.insurance + form.software + form.overhead;
    const totalCosts = totalVariableCosts + totalFixedCosts;
    const grossProfit = form.revenue - totalVariableCosts;
    const netProfit = form.revenue - totalCosts;
    const grossMargin = form.revenue > 0 ? (grossProfit / form.revenue) * 100 : 0;
    const netMargin = form.revenue > 0 ? (netProfit / form.revenue) * 100 : 0;
    const revenuePerJob = form.jobs > 0 ? form.revenue / form.jobs : 0;
    const costPerJob = form.jobs > 0 ? totalCosts / form.jobs : 0;
    const breakEvenJobs = revenuePerJob > 0 ? Math.ceil(totalFixedCosts / (revenuePerJob - (labourPerJob + form.suppliesCost))) : 0;

    setResults({
      grossMargin: grossMargin.toFixed(1),
      netMargin: netMargin.toFixed(1),
      revenuePerJob: Math.round(revenuePerJob),
      costPerJob: Math.round(costPerJob),
      netProfit: Math.round(netProfit),
      totalCosts: Math.round(totalCosts),
      labourPerJob: Math.round(labourPerJob),
      totalVariableCosts: Math.round(totalVariableCosts),
      totalFixedCosts: Math.round(totalFixedCosts),
      breakEvenJobs,
    });
  }

  const fields = [
    { key: 'revenue', label: 'Monthly Revenue (\u20ac)', hint: 'Total monthly income before expenses' },
    { key: 'jobs', label: 'Jobs Per Month' },
    { key: 'hourlyRate', label: 'Staff Hourly Rate (\u20ac)' },
    { key: 'hoursPerJob', label: 'Average Hours Per Job' },
    { key: 'staff', label: 'Number of Staff' },
    { key: 'suppliesCost', label: 'Supplies Cost Per Job (\u20ac)' },
    { key: 'fuel', label: 'Monthly Fuel / Transport (\u20ac)' },
    { key: 'insurance', label: 'Monthly Insurance (\u20ac)' },
    { key: 'software', label: 'Monthly Software / Tools (\u20ac)' },
    { key: 'overhead', label: 'Other Monthly Overhead (\u20ac)' },
  ];

  return (
    <>
      <div className="tool-form">
        {fields.map(({ key, label, hint }, i) => {
          /* group pairs into rows */
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
                    onChange={(e) => handleChange(next.key, e.target.value)}
                  />
                  {next.hint && <div className="tool-hint">{next.hint}</div>}
                </div>
              )}
            </div>
          );
        })}

        <button className="tool-calculate-btn" onClick={calculate}>
          Calculate Margins
        </button>
      </div>

      {results && (
        <>
          <div className="tool-results">
            <div className="tool-results-title">Your Margins</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Gross Margin</span>
              <span className="tool-result-value highlight">{results.grossMargin}%</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Net Margin</span>
              <span className="tool-result-value highlight">{results.netMargin}%</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Revenue Per Job</span>
              <span className="tool-result-value">&euro;{results.revenuePerJob}</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Cost Per Job</span>
              <span className="tool-result-value">&euro;{results.costPerJob}</span>
            </div>
          </div>

          <div className="tool-gated" style={{ marginTop: '24px' }}>
            <div className="tool-gated-blur">
              <div className="tool-results">
                <div className="tool-results-title">Detailed Analysis</div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Industry Benchmark (Healthy Net Margin)</span>
                  <span className="tool-result-value">15 &ndash; 25%</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Your Status</span>
                  <span className="tool-result-value">
                    {Number(results.netMargin) >= 15 ? 'Healthy' : Number(results.netMargin) >= 8 ? 'Below average' : 'Needs attention'}
                  </span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Monthly Net Profit</span>
                  <span className="tool-result-value">&euro;{results.netProfit}</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Labour Cost Per Job</span>
                  <span className="tool-result-value">&euro;{results.labourPerJob}</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Total Variable Costs</span>
                  <span className="tool-result-value">&euro;{results.totalVariableCosts}</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Total Fixed Costs</span>
                  <span className="tool-result-value">&euro;{results.totalFixedCosts}</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Break-Even Jobs Needed</span>
                  <span className="tool-result-value">{results.breakEvenJobs} jobs/month</span>
                </div>
              </div>
            </div>
            <div className="tool-gate-overlay">
              <h4>Unlock Detailed Analysis</h4>
              <p>Enter your email to see industry benchmarks, recommendations, and your break-even point.</p>
              <div className="tool-gate-form">
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={gateEmail}
                  onChange={(e) => setGateEmail(e.target.value)}
                />
                <button>Unlock</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
