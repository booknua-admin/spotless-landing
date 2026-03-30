'use client';

import { useState, useEffect } from 'react';
import CurrencySelector from '../../../components/currency-selector';
import EmailGate from '../../../components/email-gate';
import ToolGateway from '../../../components/tool-gateway';
import { serializeToolData } from '../../../lib/lead-capture';
import StickyTrialBar from '../../../components/sticky-trial-bar';
import { formatCurrency, getStoredCurrency } from '../../../lib/currency';
import { triggerPrint } from '../../../lib/pdf-export';

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
  const [currency, setCurrency] = useState('EUR');

  useEffect(() => {
    setCurrency(getStoredCurrency());
  }, []);

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

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: Number(value) }));
  }

  function getMarginColor(margin) {
    const n = Number(margin);
    if (n < 8) return '#ff6b6b';
    if (n <= 15) return '#ffc107';
    return '#3ECF8E';
  }

  function getHealthLabel(margin) {
    const n = Number(margin);
    if (n < 8) return { label: 'Needs attention', className: 'danger' };
    if (n <= 15) return { label: 'Below average', className: 'warning' };
    return { label: 'Healthy', className: 'healthy' };
  }

  function computeWhatIfTips() {
    if (!results) return [];
    const tips = [];
    const netMarginNum = Number(results.netMargin);

    // Tip 1: Increase prices by 10%
    const newRevenue10 = form.revenue * 1.1;
    const labourPerJob = form.hourlyRate * form.hoursPerJob * form.staff;
    const totalVariableCosts = (labourPerJob + form.suppliesCost) * form.jobs;
    const totalFixedCosts = form.fuel + form.insurance + form.software + form.overhead;
    const totalCosts = totalVariableCosts + totalFixedCosts;
    const newNetMargin10 = newRevenue10 > 0 ? ((newRevenue10 - totalCosts) / newRevenue10) * 100 : 0;
    tips.push(`Increase prices by 10% → new net margin: ${newNetMargin10.toFixed(1)}%`);

    // Tip 2: Reduce supply costs by 20%
    const reducedSupplies = form.suppliesCost * 0.8;
    const savedPerMonth = (form.suppliesCost - reducedSupplies) * form.jobs;
    tips.push(`Reduce supply costs by 20% → save ${formatCurrency(Math.round(savedPerMonth), currency)}/month`);

    // Tip 3: Add 5 more jobs per month
    const newJobs = form.jobs + 5;
    const newRevenuePerJob = form.jobs > 0 ? form.revenue / form.jobs : 0;
    const newTotalRevenue = newRevenuePerJob * newJobs;
    const newTotalVariable = (labourPerJob + form.suppliesCost) * newJobs;
    const newTotalCosts = newTotalVariable + totalFixedCosts;
    const newNetProfit = newTotalRevenue - newTotalCosts;
    const newNetMarginJobs = newTotalRevenue > 0 ? ((newNetProfit / newTotalRevenue) * 100).toFixed(1) : '0.0';
    tips.push(`Add 5 more jobs/month → new net margin: ${newNetMarginJobs}%`);

    return tips;
  }

  const fields = [
    { key: 'revenue', label: 'Monthly Revenue', hint: 'Total monthly income before expenses' },
    { key: 'jobs', label: 'Jobs Per Month' },
    { key: 'hourlyRate', label: 'Staff Hourly Rate' },
    { key: 'hoursPerJob', label: 'Average Hours Per Job' },
    { key: 'staff', label: 'Number of Staff' },
    { key: 'suppliesCost', label: 'Supplies Cost Per Job' },
    { key: 'fuel', label: 'Monthly Fuel / Transport' },
    { key: 'insurance', label: 'Monthly Insurance' },
    { key: 'software', label: 'Monthly Software / Tools' },
    { key: 'overhead', label: 'Other Monthly Overhead' },
  ];

  const health = results ? getHealthLabel(results.netMargin) : null;

  return (
    <>
      <div className="tool-form">
        <CurrencySelector onChange={(code) => setCurrency(code)} />

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
      </div>

      <button className="tool-calculate-btn" onClick={calculate}>
        Calculate
      </button>

      {results && (
        <>
          <div className="tool-results tool-results-animated">
            <div className="tool-results-title">Your Margins</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Gross Margin</span>
              <span className="tool-result-value highlight">{results.grossMargin}%</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Net Margin</span>
              <span className="tool-result-value highlight">
                {results.netMargin}%
                <span className={`tool-health-badge ${health.className}`}>{health.label}</span>
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Revenue Per Job</span>
              <span className="tool-result-value">{formatCurrency(results.revenuePerJob, currency)}</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Cost Per Job</span>
              <span className="tool-result-value">{formatCurrency(results.costPerJob, currency)}</span>
            </div>
          </div>

          {/* Margin Gauge */}
          <div className="tool-gauge" style={{ marginTop: '24px' }}>
            <div
              className="tool-gauge-fill"
              style={{
                width: Math.min(100, Math.max(0, Number(results.netMargin))) + '%',
                backgroundColor: getMarginColor(results.netMargin),
              }}
            />
          </div>
          <div className="tool-gauge-labels">
            <span>0%</span>
            <span>15%</span>
            <span>30%+</span>
          </div>

          {/* Cost Breakdown Chart */}
          <div className="tool-results tool-results-animated" style={{ marginTop: '24px' }}>
            <div className="tool-results-title">Cost Breakdown</div>
            <div className="tool-chart-bar">
              {results.totalCosts > 0 && (
                <>
                  <div
                    style={{
                      width: ((results.labourPerJob * form.jobs) / results.totalCosts * 100) + '%',
                      backgroundColor: '#3ECF8E',
                    }}
                    title={`Labour: ${formatCurrency(results.labourPerJob * form.jobs, currency)}`}
                  />
                  <div
                    style={{
                      width: ((form.suppliesCost * form.jobs) / results.totalCosts * 100) + '%',
                      backgroundColor: '#36b5e0',
                    }}
                    title={`Variable (supplies): ${formatCurrency(form.suppliesCost * form.jobs, currency)}`}
                  />
                  <div
                    style={{
                      width: (results.totalFixedCosts / results.totalCosts * 100) + '%',
                      backgroundColor: '#9b59b6',
                    }}
                    title={`Fixed: ${formatCurrency(results.totalFixedCosts, currency)}`}
                  />
                </>
              )}
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '8px', fontSize: '13px' }}>
              <span><span style={{ color: '#3ECF8E' }}>&bull;</span> Labour</span>
              <span><span style={{ color: '#36b5e0' }}>&bull;</span> Variable</span>
              <span><span style={{ color: '#9b59b6' }}>&bull;</span> Fixed</span>
            </div>
          </div>

          {/* Detailed Analysis - fully ungated */}
          <div className="tool-results tool-results-animated" style={{ marginTop: '24px' }}>
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
              <span className="tool-result-value">{formatCurrency(results.netProfit, currency)}</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Labour Cost Per Job</span>
              <span className="tool-result-value">{formatCurrency(results.labourPerJob, currency)}</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Total Variable Costs</span>
              <span className="tool-result-value">{formatCurrency(results.totalVariableCosts, currency)}</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Total Fixed Costs</span>
              <span className="tool-result-value">{formatCurrency(results.totalFixedCosts, currency)}</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Break-Even Jobs Needed</span>
              <span className="tool-result-value">{results.breakEvenJobs} jobs/month</span>
            </div>
          </div>

          {/* What-If Tips */}
          <div className="tool-whatif" style={{ marginTop: '24px' }}>
            <div className="tool-results-title">What-If Scenarios</div>
            <ul>
              {computeWhatIfTips().map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>

          {/* PDF Export behind EmailGate */}
          <div style={{ marginTop: '24px' }}>
            <EmailGate toolName="profit-margin-calculator">
              <button className="tool-calculate-btn" onClick={triggerPrint}>
                Download PDF
              </button>
            </EmailGate>
          </div>

          <ToolGateway
            toolName="profit-margin-calculator"
            headline="Track real margins with Spotless"
            description="See profit margins update live as you complete jobs — revenue, costs, and margins tracked automatically."
            toolData={serializeToolData('profit-margin-calculator', form, results)}
            featureLink="/product/finance"
            valueProp={[
              'Real-time margin tracking per job and per client',
              'Automatic cost and revenue recording',
              'Monthly and weekly profitability reports',
            ]}
          />
        </>
      )}

      <StickyTrialBar />
    </>
  );
}
