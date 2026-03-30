'use client';

import { useState, useEffect } from 'react';
import CurrencySelector from '../../../components/currency-selector';
import ToolGateway from '../../../components/tool-gateway';
import { serializeToolData } from '../../../lib/lead-capture';
import StickyTrialBar from '../../../components/sticky-trial-bar';
import EmailGate from '../../../components/email-gate';
import { formatCurrency, getStoredCurrency } from '../../../lib/currency';

const SERVICE_TYPES = [
  { value: 'residential', label: 'Residential', rate: 0.10, residential: true },
  { value: 'commercial', label: 'Commercial', rate: 0.08, residential: false },
  { value: 'deep_clean', label: 'Deep Clean', rate: 0.18, residential: true },
  { value: 'move_in_out', label: 'Move-In/Out', rate: 0.15, residential: true },
  { value: 'airbnb', label: 'Airbnb Turnover', rate: 0.12, residential: true },
  { value: 'office', label: 'Office', rate: 0.08, residential: false },
  { value: 'carpet', label: 'Carpet Cleaning', rate: 0.14, residential: false },
  { value: 'window', label: 'Window Cleaning', rate: 0.09, residential: false },
  { value: 'pressure_washing', label: 'Pressure Washing', rate: 0.11, residential: false },
];

const FREQUENCY_OPTIONS = [
  { value: 'one_time', label: 'One-time', discount: 0 },
  { value: 'weekly', label: 'Weekly', discount: 0.20 },
  { value: 'biweekly', label: 'Bi-weekly', discount: 0.15 },
  { value: 'monthly', label: 'Monthly', discount: 0.10 },
];

const ADD_ONS = [
  { id: 'oven', label: 'Inside Oven', price: 35 },
  { id: 'fridge', label: 'Inside Fridge', price: 30 },
  { id: 'windows', label: 'Inside Windows', price: 40 },
  { id: 'laundry', label: 'Laundry', price: 30 },
  { id: 'ironing', label: 'Ironing', price: 25 },
  { id: 'closets', label: 'Organize Closets', price: 45 },
  { id: 'garage', label: 'Garage Cleaning', price: 50 },
  { id: 'balcony', label: 'Balcony / Patio', price: 35 },
];

const BEDROOM_SURCHARGE = 25;
const BATHROOM_SURCHARGE = 35;

export default function QuoteCalculator() {
  const [form, setForm] = useState({
    serviceType: 'residential',
    sqft: 1500,
    useSqm: false,
    bedrooms: 3,
    bathrooms: 2,
    frequency: 'one_time',
    addOns: [],
  });
  const [results, setResults] = useState(null);
  const [currency, setCurrency] = useState('USD');
  const [copied, setCopied] = useState(false);

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

  function calculate() {
    const svc = SERVICE_TYPES.find((s) => s.value === form.serviceType);
    if (!svc) return;

    const freq = FREQUENCY_OPTIONS.find((f) => f.value === form.frequency);
    const sizeInSqft = form.useSqm ? form.sqft * 10.764 : form.sqft;

    const baseCost = sizeInSqft * svc.rate;

    let roomSurcharge = 0;
    if (svc.residential) {
      roomSurcharge = form.bedrooms * BEDROOM_SURCHARGE + form.bathrooms * BATHROOM_SURCHARGE;
    }

    const addOnTotal = form.addOns.reduce((sum, id) => {
      const addon = ADD_ONS.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);

    const subtotal = baseCost + roomSurcharge + addOnTotal;
    const discountAmount = (baseCost + roomSurcharge) * freq.discount;
    const total = subtotal - discountAmount;

    setResults({
      baseCost: Math.round(baseCost),
      roomSurcharge: Math.round(roomSurcharge),
      addOnTotal: Math.round(addOnTotal),
      discountAmount: Math.round(discountAmount),
      discountPct: freq.discount,
      total: Math.round(total),
    });
  }

  function buildQuoteText() {
    if (!results) return '';
    const svc = SERVICE_TYPES.find((s) => s.value === form.serviceType);
    const freq = FREQUENCY_OPTIONS.find((f) => f.value === form.frequency);
    const sizeLabel = form.useSqm ? `${form.sqft} sqm` : `${form.sqft} sqft`;

    let text = '--- CLEANING QUOTE ---\n\n';
    text += `Service: ${svc.label}\n`;
    text += `Property Size: ${sizeLabel}\n`;
    if (svc.residential) {
      text += `Bedrooms: ${form.bedrooms}\n`;
      text += `Bathrooms: ${form.bathrooms}\n`;
    }
    text += `Frequency: ${freq.label}\n\n`;
    text += '--- BREAKDOWN ---\n';
    text += `Base Cost: ${formatCurrency(results.baseCost, currency)}\n`;
    if (svc.residential) {
      text += `Room Surcharges: ${formatCurrency(results.roomSurcharge, currency)}\n`;
    }
    if (results.addOnTotal > 0) {
      text += `Add-ons: ${formatCurrency(results.addOnTotal, currency)}\n`;
      form.addOns.forEach((id) => {
        const addon = ADD_ONS.find((a) => a.id === id);
        if (addon) text += `  - ${addon.label}: ${formatCurrency(addon.price, currency)}\n`;
      });
    }
    if (results.discountAmount > 0) {
      text += `Frequency Discount (${Math.round(results.discountPct * 100)}%): -${formatCurrency(results.discountAmount, currency)}\n`;
    }
    text += `\nTOTAL: ${formatCurrency(results.total, currency)}\n`;
    return text;
  }

  function handleCopy() {
    navigator.clipboard.writeText(buildQuoteText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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

        <div className="tool-input-group">
          <label>
            Property Size ({form.useSqm ? 'sqm' : 'sqft'})
            <button
              type="button"
              style={{
                marginLeft: '8px',
                fontSize: '12px',
                background: 'none',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                padding: '2px 8px',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
              }}
              onClick={() => handleChange('useSqm', !form.useSqm)}
            >
              Switch to {form.useSqm ? 'sqft' : 'sqm'}
            </button>
          </label>
          <input
            type="number"
            className="tool-input"
            value={form.sqft}
            min={100}
            onChange={(e) => handleChange('sqft', Number(e.target.value))}
          />
        </div>

        {isResidential && (
          <div className="tool-input-row">
            <div className="tool-input-group">
              <label>Bedrooms</label>
              <input
                type="number"
                className="tool-input"
                value={form.bedrooms}
                min={0}
                max={10}
                onChange={(e) => handleChange('bedrooms', Number(e.target.value))}
              />
            </div>
            <div className="tool-input-group">
              <label>Bathrooms</label>
              <input
                type="number"
                className="tool-input"
                value={form.bathrooms}
                min={0}
                max={10}
                onChange={(e) => handleChange('bathrooms', Number(e.target.value))}
              />
            </div>
          </div>
        )}

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

      <button className="tool-calculate-btn" onClick={calculate}>
        Calculate
      </button>

      {results && (
        <>
          <div className="tool-results tool-results-animated">
            <div className="tool-results-title">Quote Breakdown</div>
            <div className="tool-result-row">
              <span className="tool-result-label">
                Base Cost ({form.useSqm ? `${form.sqft} sqm` : `${form.sqft} sqft`} x {service.label})
              </span>
              <span className="tool-result-value">{formatCurrency(results.baseCost, currency)}</span>
            </div>
            {isResidential && (
              <div className="tool-result-row">
                <span className="tool-result-label">
                  Room Surcharges ({form.bedrooms} bed x {formatCurrency(BEDROOM_SURCHARGE, currency)} + {form.bathrooms} bath x {formatCurrency(BATHROOM_SURCHARGE, currency)})
                </span>
                <span className="tool-result-value">+{formatCurrency(results.roomSurcharge, currency)}</span>
              </div>
            )}
            {results.addOnTotal > 0 && (
              <div className="tool-result-row">
                <span className="tool-result-label">Add-ons ({form.addOns.length} selected)</span>
                <span className="tool-result-value">+{formatCurrency(results.addOnTotal, currency)}</span>
              </div>
            )}
            {results.discountAmount > 0 && (
              <div className="tool-result-row">
                <span className="tool-result-label">
                  Frequency Discount ({Math.round(results.discountPct * 100)}%)
                </span>
                <span className="tool-result-value">-{formatCurrency(results.discountAmount, currency)}</span>
              </div>
            )}
            <div className="tool-result-row" style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', marginTop: '8px' }}>
              <span className="tool-result-label">Total Quote</span>
              <span className="tool-result-value highlight">{formatCurrency(results.total, currency)}</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <EmailGate toolName="quote-calculator">
              <button className="btn-primary" onClick={handleCopy}>
                {copied ? 'Copied!' : 'Copy Quote'}
              </button>
            </EmailGate>
          </div>

          <ToolGateway
            toolName="quote-calculator"
            headline="Send this quote to clients with Spotless"
            description="Generate and send professional quotes in one click — with online acceptance built in."
            toolData={serializeToolData('quote-calculator', form, results)}
            featureLink="/product/custom-forms"
            valueProp={[
              'Send branded quotes via email or text',
              'Clients accept online with one click',
              'Auto-convert accepted quotes to scheduled jobs',
            ]}
          />
        </>
      )}

      <StickyTrialBar />
    </>
  );
}
