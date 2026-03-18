'use client';

import { useState, useEffect } from 'react';
import CurrencySelector from '../../../components/currency-selector';
import EmailGate from '../../../components/email-gate';
import ToolCTA from '../../../components/tool-cta';
import StickyTrialBar from '../../../components/sticky-trial-bar';
import { formatCurrency, getStoredCurrency } from '../../../lib/currency';
import { triggerPrint } from '../../../lib/pdf-export';

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
  const [currency, setCurrency] = useState('EUR');

  useEffect(() => {
    setCurrency(getStoredCurrency());
  }, []);

  const service = SERVICE_TYPES.find((s) => s.value === form.serviceType);
  const isResidential = service?.residential;

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleAddOn(id) {
    setForm((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(id)
        ? prev.addOns.filter((a) => a !== id)
        : [...prev.addOns, id],
    }));
  }

  useEffect(() => {
    const svc = SERVICE_TYPES.find((s) => s.value === form.serviceType);
    if (!svc) return;

    const freq = FREQUENCY_OPTIONS.find((f) => f.value === form.frequency);
    const mkt = MARKET_OPTIONS.find((m) => m.value === form.market);
    const addOnTotal = form.addOns.reduce((sum, id) => {
      const addon = ADD_ONS.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);

    let basePrice;
    if (svc.flat) {
      basePrice = (svc.min + svc.max) / 2;
    } else {
      basePrice = Math.max(svc.min, form.sqft * svc.rate);
      if (svc.residential && form.bedrooms > 3) {
        basePrice += (form.bedrooms - 3) * 10;
      }
    }

    const afterMarket = basePrice * mkt.multiplier;
    const frequencyDiscount = afterMarket * freq.discount;
    const afterFrequency = afterMarket - frequencyDiscount;
    const total = afterFrequency + addOnTotal;

    const low = Math.round(total * 0.85);
    const high = Math.round(total * 1.15);
    const estimatedHours = svc.flat
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
  }, [form]);

  function renderBreakdownBar() {
    if (!results) return null;
    const { basePrice, marketAdjustment, addOnTotal, frequencyDiscount } = results;
    const positiveTotal = basePrice + Math.max(0, marketAdjustment) + addOnTotal;
    if (positiveTotal === 0) return null;

    const segments = [
      { label: 'Base Price', value: basePrice, color: '#3ECF8E' },
      { label: 'Market Adjustment', value: Math.max(0, marketAdjustment), color: '#36b5e0' },
      { label: 'Add-ons', value: addOnTotal, color: '#9b59b6' },
      { label: 'Frequency Discount', value: frequencyDiscount, color: '#ff6b6b' },
    ];

    return (
      <div style={{ marginTop: '16px' }}>
        <div className="tool-chart-bar" style={{ display: 'flex', height: '32px', borderRadius: '6px', overflow: 'hidden' }}>
          {segments.filter((s) => s.label !== 'Frequency Discount' && s.value > 0).map((seg) => (
            <div
              key={seg.label}
              className="tool-chart-segment"
              style={{
                width: `${(seg.value / positiveTotal) * 100}%`,
                backgroundColor: seg.color,
              }}
            />
          ))}
        </div>
        <div className="tool-chart-legend" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '10px' }}>
          {segments.map((seg) => (
            <div key={seg.label} className="tool-chart-legend-item" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
              <span
                className="tool-chart-legend-dot"
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: seg.color,
                  display: 'inline-block',
                }}
              />
              {seg.label}: {seg.label === 'Frequency Discount' ? '-' : ''}{formatCurrency(seg.value, currency)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="tool-form">
        <CurrencySelector value={currency} onChange={setCurrency} />

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
                {addon.label} +{formatCurrency(addon.price, currency)}
              </label>
            ))}
          </div>
        </div>
      </div>

      {results && (
        <>
          <div className="tool-results tool-results-animated">
            <div className="tool-results-title">Recommended Price</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Price Range</span>
              <span className="tool-result-value highlight">
                {formatCurrency(results.low, currency)} &ndash; {formatCurrency(results.high, currency)}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Per-Hour Rate Estimate</span>
              <span className="tool-result-value">{formatCurrency(results.perHour, currency)}/hr</span>
            </div>
            {renderBreakdownBar()}
          </div>

          <div className="tool-results tool-results-animated" style={{ marginTop: '24px' }}>
            <div className="tool-results-title">Full Breakdown</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Base Rate</span>
              <span className="tool-result-value">{formatCurrency(results.basePrice, currency)}</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Market Adjustment</span>
              <span className="tool-result-value">
                {results.marketAdjustment >= 0 ? '+' : ''}{formatCurrency(results.marketAdjustment, currency)}
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Frequency Discount</span>
              <span className="tool-result-value">-{formatCurrency(results.frequencyDiscount, currency)}</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Add-ons</span>
              <span className="tool-result-value">+{formatCurrency(results.addOnTotal, currency)}</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Total</span>
              <span className="tool-result-value highlight">{formatCurrency(results.total, currency)}</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Industry Average</span>
              <span className="tool-result-value">{formatCurrency(results.industryAvg, currency)}</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Estimated Profit Margin</span>
              <span className="tool-result-value">{results.estimatedMargin}%</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <EmailGate>
              <button className="btn-primary" onClick={triggerPrint}>
                Download PDF
              </button>
            </EmailGate>
          </div>

          <ToolCTA
            headline="Automate your pricing with Spotless"
            description="Stop guessing prices. With Spotless, set pricing rules once and let the system calculate quotes automatically."
            featureLink="/product/custom-forms"
          />
        </>
      )}

      <StickyTrialBar />
    </>
  );
}
