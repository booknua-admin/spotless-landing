'use client';

import { useState } from 'react';

const PROPERTY_TYPES = [
  { value: 'house', label: 'House', baseRate: 0.0035 },
  { value: 'apartment', label: 'Apartment', baseRate: 0.003 },
  { value: 'office', label: 'Office', baseRate: 0.0025 },
  { value: 'airbnb', label: 'Airbnb / Short-Term Rental', baseRate: 0.004 },
];

const CONDITIONS = [
  { value: 'maintained', label: 'Well Maintained', multiplier: 1.0 },
  { value: 'moderate', label: 'Moderate', multiplier: 1.5 },
  { value: 'heavy', label: 'Heavy / Neglected', multiplier: 2.0 },
];

const TEAM_SIZES = [
  { value: '1', label: '1 Person', divisor: 1 },
  { value: '2', label: '2 People', divisor: 2 },
  { value: '3', label: '3+ People', divisor: 3 },
];

const SERVICE_LEVELS = [
  { value: 'standard', label: 'Standard Clean', multiplier: 1.0 },
  { value: 'deep', label: 'Deep Clean', multiplier: 1.6 },
  { value: 'move', label: 'Move-In/Out', multiplier: 2.0 },
];

const ROOM_TIMES = {
  kitchen: { standard: 0.5, deep: 0.9, move: 1.2 },
  bathroom: { standard: 0.35, deep: 0.6, move: 0.8 },
  bedroom: { standard: 0.25, deep: 0.45, move: 0.6 },
  living: { standard: 0.3, deep: 0.5, move: 0.7 },
  hallway: { standard: 0.15, deep: 0.25, move: 0.35 },
};

export default function TimeEstimator() {
  const [form, setForm] = useState({
    propertyType: 'house',
    sqft: 1500,
    condition: 'maintained',
    teamSize: '1',
    serviceLevel: 'standard',
  });
  const [results, setResults] = useState(null);
  const [gateEmail, setGateEmail] = useState('');

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setResults(null);
  }

  function calculate() {
    const property = PROPERTY_TYPES.find((p) => p.value === form.propertyType);
    const condition = CONDITIONS.find((c) => c.value === form.condition);
    const team = TEAM_SIZES.find((t) => t.value === form.teamSize);
    const service = SERVICE_LEVELS.find((s) => s.value === form.serviceLevel);

    const sqft = Math.max(500, Math.min(5000, form.sqft));
    const baseHours = sqft * property.baseRate * service.multiplier;
    const adjustedHours = baseHours * condition.multiplier;
    const teamHours = adjustedHours / team.divisor;

    const low = Math.max(0.5, teamHours * 0.85);
    const high = teamHours * 1.15;

    // Per-room breakdown based on property size
    const numBedrooms = Math.max(1, Math.round(sqft / 500));
    const numBathrooms = Math.max(1, Math.round(sqft / 750));
    const serviceKey = form.serviceLevel === 'move' ? 'move' : form.serviceLevel;

    const roomBreakdown = [
      { room: 'Kitchen', count: 1, time: ROOM_TIMES.kitchen[serviceKey] * condition.multiplier },
      { room: 'Bathroom', count: numBathrooms, time: ROOM_TIMES.bathroom[serviceKey] * condition.multiplier },
      { room: 'Bedroom', count: numBedrooms, time: ROOM_TIMES.bedroom[serviceKey] * condition.multiplier },
      { room: 'Living Area', count: 1, time: ROOM_TIMES.living[serviceKey] * condition.multiplier },
      { room: 'Hallway / Entry', count: 1, time: ROOM_TIMES.hallway[serviceKey] * condition.multiplier },
    ];

    const totalRoomTime = roomBreakdown.reduce((sum, r) => sum + r.time * r.count, 0);
    const staffNeeded = Math.ceil(adjustedHours / 3);
    const suggestedRate = form.serviceLevel === 'deep' ? 45 : form.serviceLevel === 'move' ? 50 : 35;
    const suggestedPrice = Math.round(adjustedHours * suggestedRate);

    setResults({
      low: low.toFixed(1),
      high: high.toFixed(1),
      totalHours: teamHours.toFixed(1),
      roomBreakdown,
      totalRoomTime: totalRoomTime.toFixed(1),
      staffRecommended: Math.max(staffNeeded, Number(form.teamSize)),
      suggestedPrice,
      suggestedRate,
    });
  }

  return (
    <>
      <div className="tool-form">
        <div className="tool-input-group">
          <label>Property Type</label>
          <select
            className="tool-select"
            value={form.propertyType}
            onChange={(e) => handleChange('propertyType', e.target.value)}
          >
            {PROPERTY_TYPES.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>

        <div className="tool-input-group">
          <label>Property Size (sq ft)</label>
          <input
            type="number"
            className="tool-input"
            value={form.sqft}
            min={500}
            max={5000}
            onChange={(e) => handleChange('sqft', Number(e.target.value))}
          />
        </div>

        <div className="tool-input-row">
          <div className="tool-input-group">
            <label>Condition</label>
            <select
              className="tool-select"
              value={form.condition}
              onChange={(e) => handleChange('condition', e.target.value)}
            >
              {CONDITIONS.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
          <div className="tool-input-group">
            <label>Team Size</label>
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
        </div>

        <div className="tool-input-group">
          <label>Service Level</label>
          <select
            className="tool-select"
            value={form.serviceLevel}
            onChange={(e) => handleChange('serviceLevel', e.target.value)}
          >
            {SERVICE_LEVELS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <button className="tool-calculate-btn" onClick={calculate}>
          Estimate Time
        </button>
      </div>

      {results && (
        <>
          <div className="tool-results">
            <div className="tool-results-title">Estimated Cleaning Time</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Time Range</span>
              <span className="tool-result-value highlight">
                {results.low} &ndash; {results.high} hours
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Best Estimate</span>
              <span className="tool-result-value">{results.totalHours} hours</span>
            </div>
          </div>

          <div className="tool-gated" style={{ marginTop: '24px' }}>
            <div className="tool-gated-blur">
              <div className="tool-results">
                <div className="tool-results-title">Per-Room Breakdown</div>
                {results.roomBreakdown.map((r) => (
                  <div className="tool-result-row" key={r.room}>
                    <span className="tool-result-label">
                      {r.room} {r.count > 1 ? `(x${r.count})` : ''}
                    </span>
                    <span className="tool-result-value">
                      {(r.time * r.count).toFixed(1)} hrs
                    </span>
                  </div>
                ))}
                <div className="tool-result-row">
                  <span className="tool-result-label">Total Room Time</span>
                  <span className="tool-result-value highlight">{results.totalRoomTime} hrs</span>
                </div>
              </div>
              <div className="tool-results" style={{ marginTop: '16px' }}>
                <div className="tool-results-title">Staff &amp; Pricing</div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Recommended Staff</span>
                  <span className="tool-result-value">{results.staffRecommended} people</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Suggested Rate</span>
                  <span className="tool-result-value">&euro;{results.suggestedRate}/hr</span>
                </div>
                <div className="tool-result-row">
                  <span className="tool-result-label">Suggested Price</span>
                  <span className="tool-result-value highlight">&euro;{results.suggestedPrice}</span>
                </div>
              </div>
            </div>
            <div className="tool-gate-overlay">
              <h4>Unlock Full Breakdown</h4>
              <p>Enter your email to see the per-room breakdown, staff allocation, and suggested pricing.</p>
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
              Automate your scheduling with Spotless <span>&rarr;</span>
            </a>
          </div>
        </>
      )}
    </>
  );
}
