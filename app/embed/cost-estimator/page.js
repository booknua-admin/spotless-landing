'use client';

import { useState } from 'react';

const PRICE_RANGES = {
  'residential-standard': {
    small: [60, 80],
    medium: [80, 120],
    large: [120, 180],
    xl: [180, 280],
  },
  'residential-deep': {
    small: [100, 140],
    medium: [140, 220],
    large: [220, 320],
    xl: [320, 450],
  },
  'move-in-out': {
    small: [120, 160],
    medium: [160, 260],
    large: [260, 380],
    xl: [380, 520],
  },
  'airbnb-rental': {
    small: [70, 100],
    medium: [100, 150],
    large: [150, 220],
    xl: [220, 320],
  },
  'office-commercial': {
    small: [80, 120],
    medium: [120, 200],
    large: [200, 300],
    xl: [300, 450],
  },
  'post-construction': {
    small: [150, 220],
    medium: [220, 350],
    large: [350, 500],
    xl: [500, 700],
  },
};

const SERVICE_LABELS = {
  'residential-standard': 'Residential Standard',
  'residential-deep': 'Deep Clean',
  'move-in-out': 'Move In / Move Out',
  'airbnb-rental': 'Airbnb / Rental',
  'office-commercial': 'Office / Commercial',
  'post-construction': 'Post-Construction',
};

const SIZE_LABELS = {
  small: 'Small (up to 800 sq ft)',
  medium: 'Medium (800\u20131,500 sq ft)',
  large: 'Large (1,500\u20132,500 sq ft)',
  xl: 'Extra Large (2,500+ sq ft)',
};

export default function CostEstimatorPage() {
  const [serviceType, setServiceType] = useState('residential-standard');
  const [propertySize, setPropertySize] = useState('medium');
  const [result, setResult] = useState(null);
  const [email, setEmail] = useState('');
  const [gateSubmitted, setGateSubmitted] = useState(false);

  const handleCalculate = () => {
    const range = PRICE_RANGES[serviceType][propertySize];
    setResult({ low: range[0], high: range[1] });
  };

  const handleGateSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setGateSubmitted(true);
  };

  return (
    <div className="embed-container">
      <div className="embed-card">
        <h2 className="embed-title">How Much Does Cleaning Cost?</h2>
        <p className="embed-subtitle">Select your service and property size for an instant estimate.</p>

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
          <label>Property Size</label>
          <select
            className="embed-select"
            value={propertySize}
            onChange={(e) => setPropertySize(e.target.value)}
          >
            {Object.entries(SIZE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <button className="embed-btn" onClick={handleCalculate}>
          See Prices
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
                <h4>Get a detailed quote for your property</h4>
                <p>Enter your email and we&rsquo;ll send a personalized estimate.</p>
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
                <p>We&rsquo;ve sent a detailed quote to {email}.</p>
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
