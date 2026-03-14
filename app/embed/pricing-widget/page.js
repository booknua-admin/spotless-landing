'use client';

import { useState } from 'react';

const BASE_RATES = {
  'residential-standard': 35,
  'residential-deep': 55,
  'move-in-out': 65,
  'airbnb-rental': 40,
  'office-commercial': 30,
  'post-construction': 75,
};

const SERVICE_LABELS = {
  'residential-standard': 'Residential Standard',
  'residential-deep': 'Deep Clean',
  'move-in-out': 'Move In / Move Out',
  'airbnb-rental': 'Airbnb / Rental',
  'office-commercial': 'Office / Commercial',
  'post-construction': 'Post-Construction',
};

const FREQUENCY_DISCOUNTS = {
  'one-time': 1,
  'weekly': 0.8,
  'biweekly': 0.85,
  'monthly': 0.9,
};

const FREQUENCY_LABELS = {
  'one-time': 'One-Time',
  'weekly': 'Weekly',
  'biweekly': 'Bi-Weekly',
  'monthly': 'Monthly',
};

export default function PricingWidgetPage() {
  const [serviceType, setServiceType] = useState('residential-standard');
  const [propertySize, setPropertySize] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [result, setResult] = useState(null);
  const [email, setEmail] = useState('');
  const [gateSubmitted, setGateSubmitted] = useState(false);

  const handleCalculate = () => {
    const size = parseInt(propertySize, 10);
    if (!size || size <= 0) return;

    const base = BASE_RATES[serviceType];
    const discount = FREQUENCY_DISCOUNTS[frequency];
    const sizeMultiplier = size / 100;
    const rawPrice = base * sizeMultiplier * discount;

    const low = Math.round(rawPrice * 0.9);
    const high = Math.round(rawPrice * 1.15);

    setResult({ low: Math.max(low, 40), high: Math.max(high, 55) });
  };

  const handleGateSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setGateSubmitted(true);
  };

  return (
    <div className="embed-container">
      <div className="embed-card">
        <h2 className="embed-title">Cleaning Price Calculator</h2>
        <p className="embed-subtitle">Get an instant price estimate for your cleaning job.</p>

        <div className="embed-input-group">
          <label>Service Type</label>
          <select
            className="embed-select"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            {Object.entries(SERVICE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div className="embed-input-group">
          <label>Property Size (sq ft)</label>
          <input
            className="embed-input"
            type="number"
            placeholder="e.g. 1200"
            min="100"
            value={propertySize}
            onChange={(e) => setPropertySize(e.target.value)}
          />
        </div>

        <div className="embed-input-group">
          <label>Frequency</label>
          <select
            className="embed-select"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            {Object.entries(FREQUENCY_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <button className="embed-btn" onClick={handleCalculate}>
          Calculate
        </button>

        {result && (
          <>
            <div className="embed-result">
              <div className="embed-result-label">Estimated Price Range</div>
              <div className="embed-result-value">
                &euro;{result.low} &ndash; &euro;{result.high}
              </div>
            </div>

            {!gateSubmitted ? (
              <div className="embed-gate">
                <h4>Get the full breakdown</h4>
                <p>Enter your email to receive a detailed pricing report.</p>
                <form className="embed-gate-form" onSubmit={handleGateSubmit}>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">Unlock</button>
                </form>
              </div>
            ) : (
              <div className="embed-gate">
                <h4>Check your inbox!</h4>
                <p>We&rsquo;ve sent a detailed breakdown to {email}.</p>
              </div>
            )}
          </>
        )}
      </div>

      <div className="embed-powered-by">
        Powered by <a href="https://spotlessapp.io" target="_blank" rel="noopener noreferrer">Spotless</a>
      </div>
    </div>
  );
}
