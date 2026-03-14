'use client';

import { useState } from 'react';

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

export default function StartupCostCalculator() {
  const [form, setForm] = useState({
    businessType: 'residential',
    teamSize: 'solo',
    equipmentLevel: 'basic',
    vehicle: 'no',
    marketing: 'low',
  });
  const [results, setResults] = useState(null);
  const [gateEmail, setGateEmail] = useState('');

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setResults(null);
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

  return (
    <>
      <div className="tool-form">
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

        <button className="tool-calculate-btn" onClick={calculate}>
          Calculate Costs
        </button>
      </div>

      {results && (
        <>
          <div className="tool-results">
            <div className="tool-results-title">Estimated Costs</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Total Startup Cost</span>
              <span className="tool-result-value highlight">
                &euro;{results.totalStartup.toLocaleString()}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Monthly Operating Cost</span>
              <span className="tool-result-value">
                &euro;{results.totalMonthly.toLocaleString()}/mo
              </span>
            </div>
          </div>

          <div className="tool-gated" style={{ marginTop: '24px' }}>
            <div className="tool-gated-blur">
              <div className="tool-results">
                <div className="tool-results-title">Itemized Startup Breakdown</div>
                {results.itemizedBreakdown.map((item) => (
                  <div className="tool-result-row" key={item.label}>
                    <span className="tool-result-label">{item.label}</span>
                    <span className="tool-result-value">
                      &euro;{item.cost.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="tool-results" style={{ marginTop: '16px' }}>
                <div className="tool-results-title">Monthly Breakdown</div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Supplies</span>
                  <span className="tool-result-value">&euro;{results.suppliesMonthly}/mo</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Marketing</span>
                  <span className="tool-result-value">&euro;{results.marketingMonthly}/mo</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Software</span>
                  <span className="tool-result-value">&euro;{results.softwareMonthly}/mo</span>
                </div>
                {results.teamWageMonthly > 0 && (
                  <div className="tool-result-row">
                    <span className="tool-result-label">Staff Wages</span>
                    <span className="tool-result-value">
                      &euro;{results.teamWageMonthly.toLocaleString()}/mo
                    </span>
                  </div>
                )}
              </div>
              <div className="tool-results" style={{ marginTop: '16px' }}>
                <div className="tool-results-title">Break-Even Analysis</div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Est. Monthly Revenue</span>
                  <span className="tool-result-value">
                    &euro;{results.monthlyRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Est. Monthly Profit</span>
                  <span className="tool-result-value">
                    &euro;{results.monthlyProfit.toLocaleString()}
                  </span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Months to Break Even</span>
                  <span className="tool-result-value highlight">
                    {results.monthsToBreakEven} months
                  </span>
                </div>
              </div>
            </div>
            <div className="tool-gate-overlay">
              <h4>Unlock Full Breakdown</h4>
              <p>Enter your email to see the itemized cost breakdown, monthly operating details, and break-even analysis.</p>
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

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a href="/product/custom-forms" className="btn-primary">
              Manage your business with Spotless <span>&rarr;</span>
            </a>
          </div>
        </>
      )}
    </>
  );
}
