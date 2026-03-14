'use client';

import { useState } from 'react';

const SERVICE_TYPES = [
  { value: 'residential_standard', label: 'Residential Standard', rate: 0.06, min: 65, residential: true },
  { value: 'residential_deep', label: 'Residential Deep Clean', rate: 0.10, min: 95, residential: true },
  { value: 'commercial', label: 'Commercial Office', rate: 0.04, min: 120, residential: false },
  { value: 'pressure_washing', label: 'Pressure Washing', rate: 0.08, min: 100, residential: false },
  { value: 'window_cleaning', label: 'Window Cleaning', rate: 0.05, min: 60, residential: false },
  { value: 'carpet', label: 'Carpet Cleaning', rate: 0.07, min: 80, residential: false },
  { value: 'auto_detailing', label: 'Auto Detailing', rate: 0, min: 80, max: 200, flat: true, residential: false },
  { value: 'pool', label: 'Pool Cleaning', rate: 0, min: 75, max: 150, flat: true, residential: false },
  { value: 'pest_control', label: 'Pest Control', rate: 0, min: 100, max: 250, flat: true, residential: false },
  { value: 'soft_washing', label: 'Soft Washing', rate: 0.06, min: 100, residential: false },
  { value: 'junk_removal', label: 'Junk Removal', rate: 0, min: 100, max: 400, flat: true, residential: false },
  { value: 'airbnb', label: 'Airbnb Turnover', rate: 0.08, min: 65, residential: true },
  { value: 'move_in_out', label: 'Move-In/Out', rate: 0.09, min: 90, residential: true },
];

const FREQUENCY_OPTIONS = [
  { value: 'one_off', label: 'One-off', discount: 0 },
  { value: 'weekly', label: 'Weekly', discount: 0.15 },
  { value: 'fortnightly', label: 'Fortnightly', discount: 0.10 },
  { value: 'monthly', label: 'Monthly', discount: 0.05 },
];

const MARKET_OPTIONS = [
  { value: 'budget', label: 'Budget Market', multiplier: 0.8 },
  { value: 'average', label: 'Average Market', multiplier: 1.0 },
  { value: 'premium', label: 'Premium Market', multiplier: 1.3 },
];

const ADD_ONS = [
  { id: 'oven', label: 'Oven Clean', price: 25 },
  { id: 'fridge', label: 'Fridge Clean', price: 15 },
  { id: 'windows', label: 'Inside Windows', price: 20 },
  { id: 'carpet_shampoo', label: 'Carpet Shampoo', price: 35 },
  { id: 'laundry', label: 'Laundry', price: 15 },
];

export default function PricingCalculator() {
  const [form, setForm] = useState({
    serviceType: 'residential_standard',
    sqft: 1500,
    bedrooms: 3,
    frequency: 'one_off',
    addOns: [],
    market: 'average',
  });
  const [results, setResults] = useState(null);
  const [gateEmail, setGateEmail] = useState('');

  const service = SERVICE_TYPES.find((s) => s.value === form.serviceType);
  const isResidential = service?.residential;

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setResults(null);
  }

  function toggleAddOn(id) {
    setForm((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(id)
        ? prev.addOns.filter((a) => a !== id)
        : [...prev.addOns, id],
    }));
    setResults(null);
  }

  function calculate() {
    const freq = FREQUENCY_OPTIONS.find((f) => f.value === form.frequency);
    const mkt = MARKET_OPTIONS.find((m) => m.value === form.market);
    const addOnTotal = form.addOns.reduce((sum, id) => {
      const addon = ADD_ONS.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);

    let basePrice;
    if (service.flat) {
      basePrice = (service.min + service.max) / 2;
    } else {
      basePrice = Math.max(service.min, form.sqft * service.rate);
      if (isResidential && form.bedrooms > 3) {
        basePrice += (form.bedrooms - 3) * 10;
      }
    }

    const afterMarket = basePrice * mkt.multiplier;
    const frequencyDiscount = afterMarket * freq.discount;
    const afterFrequency = afterMarket - frequencyDiscount;
    const total = afterFrequency + addOnTotal;

    const low = Math.round(total * 0.85);
    const high = Math.round(total * 1.15);
    const estimatedHours = service.flat
      ? 2
      : Math.max(1, form.sqft / 800);
    const perHour = Math.round(total / estimatedHours);

    setResults({
      low,
      high,
      total: Math.round(total),
      perHour,
      basePrice: Math.round(basePrice),
      marketAdjustment: Math.round(afterMarket - basePrice),
      frequencyDiscount: Math.round(frequencyDiscount),
      addOnTotal,
      estimatedHours: estimatedHours.toFixed(1),
      industryAvg: Math.round(basePrice * 1.05),
      estimatedMargin: Math.round(((total - total * 0.55) / total) * 100),
    });
  }

  return (
    <>
      <div className="tool-form">
        <div className="tool-input-group">
          <label>Service Type</label>
          <select
            className="tool-select"
            value={form.serviceType}
            onChange={(e) => handleChange('serviceType', e.target.value)}
          >
            {SERVICE_TYPES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        {!service?.flat && (
          <div className="tool-input-row">
            <div className="tool-input-group">
              <label>Property Size (sq ft)</label>
              <input
                type="number"
                className="tool-input"
                value={form.sqft}
                min={100}
                onChange={(e) => handleChange('sqft', Number(e.target.value))}
              />
            </div>
            {isResidential && (
              <div className="tool-input-group">
                <label>Bedrooms</label>
                <input
                  type="number"
                  className="tool-input"
                  value={form.bedrooms}
                  min={1}
                  max={10}
                  onChange={(e) => handleChange('bedrooms', Number(e.target.value))}
                />
              </div>
            )}
          </div>
        )}

        <div className="tool-input-row">
          <div className="tool-input-group">
            <label>Frequency</label>
            <select
              className="tool-select"
              value={form.frequency}
              onChange={(e) => handleChange('frequency', e.target.value)}
            >
              {FREQUENCY_OPTIONS.map((f) => (
                <option key={f.value} value={f.value}>{f.label}</option>
              ))}
            </select>
          </div>
          <div className="tool-input-group">
            <label>Market</label>
            <select
              className="tool-select"
              value={form.market}
              onChange={(e) => handleChange('market', e.target.value)}
            >
              {MARKET_OPTIONS.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="tool-input-group">
          <label>Add-ons</label>
          <div className="tool-checkbox-group">
            {ADD_ONS.map((addon) => (
              <label key={addon.id} className="tool-checkbox-label">
                <input
                  type="checkbox"
                  checked={form.addOns.includes(addon.id)}
                  onChange={() => toggleAddOn(addon.id)}
                />
                {addon.label} +&euro;{addon.price}
              </label>
            ))}
          </div>
        </div>

        <button className="tool-calculate-btn" onClick={calculate}>
          Calculate Price
        </button>
      </div>

      {results && (
        <>
          <div className="tool-results">
            <div className="tool-results-title">Recommended Price</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Price Range</span>
              <span className="tool-result-value highlight">
                &euro;{results.low} &ndash; &euro;{results.high}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Per-Hour Rate Estimate</span>
              <span className="tool-result-value">&euro;{results.perHour}/hr</span>
            </div>
          </div>

          <div className="tool-gated" style={{ marginTop: '24px' }}>
            <div className="tool-gated-blur">
              <div className="tool-results">
                <div className="tool-results-title">Full Breakdown</div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Base Rate</span>
                  <span className="tool-result-value">&euro;{results.basePrice}</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Market Adjustment</span>
                  <span className="tool-result-value">
                    {results.marketAdjustment >= 0 ? '+' : ''}&euro;{results.marketAdjustment}
                  </span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Frequency Discount</span>
                  <span className="tool-result-value">-&euro;{results.frequencyDiscount}</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Add-ons</span>
                  <span className="tool-result-value">+&euro;{results.addOnTotal}</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Total</span>
                  <span className="tool-result-value highlight">&euro;{results.total}</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Industry Average</span>
                  <span className="tool-result-value">&euro;{results.industryAvg}</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Estimated Profit Margin</span>
                  <span className="tool-result-value">{results.estimatedMargin}%</span>
                </div>
              </div>
            </div>
            <div className="tool-gate-overlay">
              <h4>Unlock Full Breakdown</h4>
              <p>Enter your email to see the detailed pricing breakdown, industry comparison, and profit estimate.</p>
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
              Automate your pricing with Spotless <span>&rarr;</span>
            </a>
          </div>
        </>
      )}
    </>
  );
}
