'use client';

import { useState, useEffect } from 'react';
import CurrencySelector from '../../../components/currency-selector';
import EmailGate from '../../../components/email-gate';
import ToolGateway from '../../../components/tool-gateway';
import { serializeToolData } from '../../../lib/lead-capture';
import StickyTrialBar from '../../../components/sticky-trial-bar';
import { formatCurrency, getStoredCurrency } from '../../../lib/currency';
import { triggerPrint } from '../../../lib/pdf-export';

const BUSINESS_TYPES = [
  { value: 'residential', label: 'Residential Cleaning' },
  { value: 'commercial', label: 'Commercial Cleaning' },
  { value: 'specialist', label: 'Specialist (Carpet, Windows, etc.)' },
];

const TEAM_SIZES = [
  { value: 'solo', label: 'Solo' },
  { value: 'small', label: '2-3 People' },
  { value: 'medium', label: '4-10 People' },
];

const EQUIPMENT_LEVELS = [
  { value: 'basic', label: 'Basic' },
  { value: 'professional', label: 'Professional' },
  { value: 'premium', label: 'Premium' },
];

const VEHICLE_OPTIONS = [
  { value: 'no', label: 'No' },
  { value: 'yes', label: 'Yes' },
];

const MARKETING_BUDGETS = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

const EQUIPMENT_COSTS = {
  residential: { basic: 300, professional: 800, premium: 2000 },
  commercial: { basic: 600, professional: 2000, premium: 5000 },
  specialist: { basic: 1000, professional: 3500, premium: 8000 },
};

const INSURANCE_COSTS = {
  residential: 600,
  commercial: 1200,
  specialist: 1500,
};

const SUPPLY_COSTS_MONTHLY = {
  solo: 100,
  small: 250,
  medium: 600,
};

const VEHICLE_COST = 5000;

const MARKETING_COSTS = {
  low: 200,
  medium: 800,
  high: 2000,
};

const SOFTWARE_COST = 50;
const LEGAL_LICENSING = 500;

const CHART_COLORS = {
  Equipment: '#3ECF8E',
  'Insurance (Annual)': '#36b5e0',
  'Initial Supplies': '#9b59b6',
  Vehicle: '#f39c12',
  'Marketing (Launch)': '#e74c3c',
  'Legal & Licensing': '#1abc9c',
};

export default function StartupCostCalculator() {
  const [form, setForm] = useState({
    businessType: 'residential',
    teamSize: 'solo',
    equipmentLevel: 'basic',
    vehicle: 'no',
    marketing: 'low',
  });
  const [results, setResults] = useState(null);
  const [currency, setCurrency] = useState('EUR');

  useEffect(() => {
    setCurrency(getStoredCurrency());
  }, []);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function calculate() {
    const equipment = EQUIPMENT_COSTS[form.businessType][form.equipmentLevel];
    const insurance = INSURANCE_COSTS[form.businessType];
    const suppliesMonthly = SUPPLY_COSTS_MONTHLY[form.teamSize];
    const initialSupplies = suppliesMonthly * 2;
    const vehicleCost = form.vehicle === 'yes' ? VEHICLE_COST : 0;
    const marketingInitial = MARKETING_COSTS[form.marketing];
    const marketingMonthly = Math.round(marketingInitial * 0.4);
    const softwareMonthly = SOFTWARE_COST;
    const legal = LEGAL_LICENSING;

    const totalStartup = equipment + insurance + initialSupplies + vehicleCost + marketingInitial + legal;
    const monthlyOperating = suppliesMonthly + marketingMonthly + softwareMonthly;

    // Wage costs for team
    const teamWageMonthly =
      form.teamSize === 'solo' ? 0 :
      form.teamSize === 'small' ? 3200 :
      8000;
    const totalMonthly = monthlyOperating + teamWageMonthly;

    // Revenue estimates per month
    const avgJobPrice =
      form.businessType === 'residential' ? 120 :
      form.businessType === 'commercial' ? 350 :
      200;
    const jobsPerWeek =
      form.teamSize === 'solo' ? 8 :
      form.teamSize === 'small' ? 18 :
      40;
    const monthlyRevenue = avgJobPrice * jobsPerWeek * 4;
    const monthlyProfit = monthlyRevenue - totalMonthly;
    const monthsToBreakEven = monthlyProfit > 0 ? Math.ceil(totalStartup / monthlyProfit) : 99;

    const itemizedBreakdown = [
      { label: 'Equipment', cost: equipment },
      { label: 'Insurance (Annual)', cost: insurance },
      { label: 'Initial Supplies', cost: initialSupplies },
      { label: 'Vehicle', cost: vehicleCost },
      { label: 'Marketing (Launch)', cost: marketingInitial },
      { label: 'Legal & Licensing', cost: legal },
    ];

    setResults({
      totalStartup,
      totalMonthly,
      itemizedBreakdown,
      monthsToBreakEven,
      monthlyRevenue,
      monthlyProfit,
      suppliesMonthly,
      marketingMonthly,
      softwareMonthly,
      teamWageMonthly,
    });
  }

  // Build 6-month projection data
  function buildProjection() {
    if (!results) return [];
    const months = [];
    let cumulative = -results.totalStartup;
    for (let i = 1; i <= 6; i++) {
      const profit = results.monthlyRevenue - results.totalMonthly;
      cumulative += profit;
      months.push({
        month: i,
        revenue: results.monthlyRevenue,
        costs: results.totalMonthly,
        profit,
        cumulative,
      });
    }
    return months;
  }

  return (
    <>
      <div className="tool-form">
        <CurrencySelector onChange={(code) => setCurrency(code)} />

        <div className="tool-input-group">
          <label>Business Type</label>
          <select
            className="tool-select"
            value={form.businessType}
            onChange={(e) => handleChange('businessType', e.target.value)}
          >
            {BUSINESS_TYPES.map((b) => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
        </div>

        <div className="tool-input-row">
          <div className="tool-input-group">
            <label>Starting Team</label>
            <select
              className="tool-select"
              value={form.teamSize}
              onChange={(e) => handleChange('teamSize', e.target.value)}
            >
              {TEAM_SIZES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
          <div className="tool-input-group">
            <label>Equipment Level</label>
            <select
              className="tool-select"
              value={form.equipmentLevel}
              onChange={(e) => handleChange('equipmentLevel', e.target.value)}
            >
              {EQUIPMENT_LEVELS.map((e) => (
                <option key={e.value} value={e.value}>{e.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="tool-input-row">
          <div className="tool-input-group">
            <label>Vehicle Needed?</label>
            <select
              className="tool-select"
              value={form.vehicle}
              onChange={(e) => handleChange('vehicle', e.target.value)}
            >
              {VEHICLE_OPTIONS.map((v) => (
                <option key={v.value} value={v.value}>{v.label}</option>
              ))}
            </select>
          </div>
          <div className="tool-input-group">
            <label>Marketing Budget</label>
            <select
              className="tool-select"
              value={form.marketing}
              onChange={(e) => handleChange('marketing', e.target.value)}
            >
              {MARKETING_BUDGETS.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button className="tool-calculate-btn" onClick={calculate}>
        Calculate
      </button>

      {results && (
        <>
          <div className="tool-results tool-results-animated">
            <div className="tool-results-title">Estimated Costs</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Total Startup Cost</span>
              <span className="tool-result-value highlight">
                {formatCurrency(results.totalStartup, currency)}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Monthly Operating Cost</span>
              <span className="tool-result-value">
                {formatCurrency(results.totalMonthly, currency)}/mo
              </span>
            </div>
          </div>

          <div className="tool-results tool-results-animated" style={{ marginTop: '16px' }}>
            <div className="tool-results-title">Startup Cost Breakdown</div>
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
              {results.itemizedBreakdown
                .filter((item) => item.cost > 0)
                .map((item) => {
                  const pct = (item.cost / results.totalStartup) * 100;
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', marginBottom: '16px' }}>
              {results.itemizedBreakdown
                .filter((item) => item.cost > 0)
                .map((item) => (
                  <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
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
            {results.itemizedBreakdown.map((item) => (
              <div className="tool-result-row" key={item.label}>
                <span className="tool-result-label">{item.label}</span>
                <span className="tool-result-value">
                  {formatCurrency(item.cost, currency)}
                </span>
              </div>
            ))}
          </div>

          <div className="tool-results tool-results-animated" style={{ marginTop: '16px' }}>
            <div className="tool-results-title">Monthly Breakdown</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Supplies</span>
              <span className="tool-result-value">{formatCurrency(results.suppliesMonthly, currency)}/mo</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Marketing</span>
              <span className="tool-result-value">{formatCurrency(results.marketingMonthly, currency)}/mo</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Software</span>
              <span className="tool-result-value">{formatCurrency(results.softwareMonthly, currency)}/mo</span>
            </div>
            {results.teamWageMonthly > 0 && (
              <div className="tool-result-row">
                <span className="tool-result-label">Staff Wages</span>
                <span className="tool-result-value">
                  {formatCurrency(results.teamWageMonthly, currency)}/mo
                </span>
              </div>
            )}
          </div>

          <div className="tool-results tool-results-animated" style={{ marginTop: '16px' }}>
            <div className="tool-results-title">Break-Even Analysis</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Est. Monthly Revenue</span>
              <span className="tool-result-value">
                {formatCurrency(results.monthlyRevenue, currency)}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Est. Monthly Profit</span>
              <span className="tool-result-value">
                {formatCurrency(results.monthlyProfit, currency)}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Months to Break Even</span>
              <span className="tool-result-value highlight">
                {results.monthsToBreakEven} months
              </span>
            </div>
          </div>

          <div className="tool-results tool-results-animated" style={{ marginTop: '16px' }}>
            <div className="tool-results-title">6-Month Projection</div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border, #e0e0e0)' }}>
                    <th style={{ textAlign: 'left', padding: '8px 12px' }}>Month</th>
                    <th style={{ textAlign: 'right', padding: '8px 12px' }}>Revenue</th>
                    <th style={{ textAlign: 'right', padding: '8px 12px' }}>Costs</th>
                    <th style={{ textAlign: 'right', padding: '8px 12px' }}>Profit</th>
                    <th style={{ textAlign: 'right', padding: '8px 12px' }}>Cumulative P&amp;L</th>
                  </tr>
                </thead>
                <tbody>
                  {buildProjection().map((row) => (
                    <tr key={row.month} style={{ borderBottom: '1px solid var(--border, #eee)' }}>
                      <td style={{ padding: '8px 12px' }}>{row.month}</td>
                      <td style={{ textAlign: 'right', padding: '8px 12px' }}>
                        {formatCurrency(row.revenue, currency)}
                      </td>
                      <td style={{ textAlign: 'right', padding: '8px 12px' }}>
                        {formatCurrency(row.costs, currency)}
                      </td>
                      <td style={{ textAlign: 'right', padding: '8px 12px', color: row.profit >= 0 ? 'var(--mint, #3ECF8E)' : '#e74c3c' }}>
                        {formatCurrency(row.profit, currency)}
                      </td>
                      <td style={{ textAlign: 'right', padding: '8px 12px', fontWeight: 600, color: row.cumulative >= 0 ? 'var(--mint, #3ECF8E)' : '#e74c3c' }}>
                        {formatCurrency(row.cumulative, currency)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <EmailGate toolName="startup-cost-calculator">
              <button className="btn-secondary" onClick={triggerPrint}>
                Download PDF
              </button>
            </EmailGate>
          </div>

          <ToolGateway
            toolName="startup-cost-calculator"
            headline="Launch your business with Spotless"
            description="Track startup costs, monthly expenses, and revenue all in one place from day one."
            toolData={serializeToolData('startup-cost-calculator', form, results)}
            featureLink="/product/scheduling"
            valueProp={[
              'Scheduling, invoicing, and CRM from the start',
              'Track expenses against your budget',
              'Grow from solo to team without switching tools',
            ]}
          />
        </>
      )}

      <StickyTrialBar />
    </>
  );
}
