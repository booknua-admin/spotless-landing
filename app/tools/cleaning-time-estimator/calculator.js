'use client';

import { useState, useEffect } from 'react';
import CurrencySelector from '../../../components/currency-selector';
import EmailGate from '../../../components/email-gate';
import ToolGateway from '../../../components/tool-gateway';
import { serializeToolData } from '../../../lib/lead-capture';
import StickyTrialBar from '../../../components/sticky-trial-bar';
import { formatCurrency, getStoredCurrency } from '../../../lib/currency';
import { triggerPrint } from '../../../lib/pdf-export';

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
  const [currency, setCurrency] = useState('EUR');

  useEffect(() => {
    setCurrency(getStoredCurrency());
  }, []);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
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
      adjustedHours,
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
        <CurrencySelector onChange={(code) => setCurrency(code)} />

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
      </div>

      <button className="tool-calculate-btn" onClick={calculate}>
        Calculate
      </button>

      {results && (
        <>
          <div className="tool-results tool-results-animated">
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

          <div className="tool-results tool-results-animated" style={{ marginTop: '16px' }}>
            <div className="tool-results-title">Team Comparison</div>
            <div className="tool-result-row">
              <span className="tool-result-label">1 person</span>
              <span className="tool-result-value">
                {(results.adjustedHours / 1).toFixed(1)} hrs
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">2 people</span>
              <span className="tool-result-value">
                {(results.adjustedHours / 2).toFixed(1)} hrs
              </span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">3 people</span>
              <span className="tool-result-value">
                {(results.adjustedHours / 3).toFixed(1)} hrs
              </span>
            </div>
          </div>

          <div className="tool-results tool-results-animated" style={{ marginTop: '16px' }}>
            <div className="tool-results-title">Per-Room Breakdown</div>
            {results.roomBreakdown.map((r) => {
              const roomTotal = r.time * r.count;
              const pct = Number(results.totalRoomTime) > 0
                ? (roomTotal / Number(results.totalRoomTime)) * 100
                : 0;
              return (
                <div key={r.room} style={{ marginBottom: '12px' }}>
                  <div className="tool-result-row">
                    <span className="tool-result-label">
                      {r.room} {r.count > 1 ? `(x${r.count})` : ''}
                    </span>
                    <span className="tool-result-value">
                      {roomTotal.toFixed(1)} hrs
                    </span>
                  </div>
                  <div
                    style={{
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(0,0,0,0.06)',
                      marginTop: '4px',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        borderRadius: '4px',
                        width: `${pct}%`,
                        backgroundColor: 'var(--mint)',
                      }}
                    />
                  </div>
                </div>
              );
            })}
            <div className="tool-result-row">
              <span className="tool-result-label">Total Room Time</span>
              <span className="tool-result-value highlight">{results.totalRoomTime} hrs</span>
            </div>
          </div>

          <div className="tool-results tool-results-animated" style={{ marginTop: '16px' }}>
            <div className="tool-results-title">Staff &amp; Pricing</div>
            <div className="tool-result-row">
              <span className="tool-result-label">Recommended Staff</span>
              <span className="tool-result-value">{results.staffRecommended} people</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Suggested Rate</span>
              <span className="tool-result-value">{formatCurrency(results.suggestedRate, currency)}/hr</span>
            </div>
            <div className="tool-result-row">
              <span className="tool-result-label">Suggested Price</span>
              <span className="tool-result-value highlight">{formatCurrency(results.suggestedPrice, currency)}</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <EmailGate toolName="cleaning-time-estimator">
              <button className="btn-secondary" onClick={triggerPrint}>
                Download PDF
              </button>
            </EmailGate>
          </div>

          <ToolGateway
            toolName="cleaning-time-estimator"
            headline="Build schedules based on these estimates"
            description="Let Spotless calculate job durations and schedule your team automatically."
            toolData={serializeToolData('cleaning-time-estimator', form, results)}
            featureLink="/product/scheduling"
            valueProp={[
              'Auto-calculate job duration from property details',
              'Optimise team schedules and routes',
              'Track actual vs estimated times per job',
            ]}
          />
        </>
      )}

      <StickyTrialBar />
    </>
  );
}
