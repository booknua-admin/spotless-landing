'use client';

import { useState, useCallback } from 'react';
import ToolGateway from '../../../components/tool-gateway';
import StickyTrialBar from '../../../components/sticky-trial-bar';

const NICHES = [
  { value: 'general', label: 'General Cleaning' },
  { value: 'residential', label: 'Residential / House Cleaning' },
  { value: 'commercial', label: 'Commercial / Office Cleaning' },
  { value: 'pressure_washing', label: 'Pressure Washing' },
  { value: 'window', label: 'Window Cleaning' },
  { value: 'carpet', label: 'Carpet Cleaning' },
  { value: 'pool', label: 'Pool Cleaning' },
  { value: 'auto', label: 'Auto Detailing' },
  { value: 'maid', label: 'Maid Service' },
  { value: 'janitorial', label: 'Janitorial' },
  { value: 'airbnb', label: 'Airbnb / Turnover' },
  { value: 'eco', label: 'Eco / Green Cleaning' },
];

const STYLES = [
  { value: 'professional', label: 'Professional' },
  { value: 'modern', label: 'Modern / Techy' },
  { value: 'friendly', label: 'Friendly / Approachable' },
  { value: 'premium', label: 'Premium / Luxury' },
  { value: 'fun', label: 'Fun / Catchy' },
];

const ADJECTIVES = {
  professional: ['Elite', 'Premier', 'Precision', 'Executive', 'Superior', 'Apex', 'Summit', 'Paramount', 'Sterling', 'Signature', 'Trusted', 'Reliable', 'First Choice', 'Gold Standard', 'Pinnacle'],
  modern: ['Swift', 'Pulse', 'Flux', 'Vibe', 'Nova', 'Shift', 'Sync', 'Neon', 'Pixel', 'Bolt', 'Dash', 'Hive', 'Core', 'Edge', 'Loop'],
  friendly: ['Happy', 'Sunny', 'Bright', 'Cozy', 'Fresh', 'Cheerful', 'Caring', 'Gentle', 'Warm', 'Kind', 'Breezy', 'Peachy', 'Lovely', 'Tidy', 'Neat'],
  premium: ['Luxe', 'Prestige', 'Majestic', 'Royal', 'Grand', 'Opulent', 'Refined', 'Noble', 'Imperial', 'Sovereign', 'Regal', 'Platinum', 'Diamond', 'Sapphire', 'Velvet'],
  fun: ['Sparkle', 'Fizz', 'Pop', 'Zip', 'Dazzle', 'Swish', 'Swoosh', 'Zing', 'Snap', 'Splash', 'Glimmer', 'Twinkle', 'Shimmer', 'Gleam', 'Flash'],
};

const NICHE_WORDS = {
  general: ['Clean', 'Cleaning', 'Spotless', 'Shine', 'Gleam', 'Polish', 'Pristine', 'Fresh', 'Pure', 'Clear'],
  residential: ['Home', 'House', 'Domestic', 'Household', 'Living', 'Nest', 'Haven', 'Dwelling', 'Abode', 'Hearth'],
  commercial: ['Office', 'Commercial', 'Corporate', 'Facility', 'Business', 'Workplace', 'Enterprise', 'Property', 'Building', 'Complex'],
  pressure_washing: ['Power', 'Pressure', 'Blast', 'Wash', 'Hydro', 'Jet', 'Surge', 'Force', 'Flow', 'Stream'],
  window: ['Window', 'Glass', 'Pane', 'View', 'Crystal', 'Vision', 'Clarity', 'Transparent', 'Light', 'Clear'],
  carpet: ['Carpet', 'Fiber', 'Floor', 'Rug', 'Fabric', 'Textile', 'Deep Clean', 'Surface', 'Restoration', 'Refresh'],
  pool: ['Pool', 'Aqua', 'Swim', 'Water', 'Blue', 'Tide', 'Wave', 'Splash', 'Marine', 'Crystal'],
  auto: ['Auto', 'Detail', 'Shine', 'Gloss', 'Motor', 'Drive', 'Chrome', 'Polish', 'Buff', 'Finish'],
  maid: ['Maid', 'Tidy', 'Neat', 'Organized', 'Orderly', 'Spotless', 'Immaculate', 'Flawless', 'Perfect', 'Impeccable'],
  janitorial: ['Janitorial', 'Maintenance', 'Facility', 'Service', 'Operations', 'Building', 'Site', 'Property', 'Estate', 'Grounds'],
  airbnb: ['Turnover', 'Guest Ready', 'Check-In', 'Host', 'Stay', 'Rental', 'Property', 'Welcome', 'Refresh', 'Reset'],
  eco: ['Green', 'Eco', 'Natural', 'Pure', 'Earth', 'Leaf', 'Bio', 'Organic', 'Sustainable', 'Fresh'],
};

const SUFFIXES = [
  'Co.', 'Services', 'Solutions', 'Group', 'Team', 'Crew', 'Squad',
  'Pros', 'Experts', 'Specialists', 'Masters', 'Works', 'Hub', 'Lab',
  'Studio', 'Care', 'Plus', 'Zone', 'HQ',
];

const PATTERNS = [
  // [Adj] [Niche] [Suffix]
  (adj, niche, suffix) => `${adj} ${niche} ${suffix}`,
  // [Adj][Niche] (compound)
  (adj, niche) => `${adj}${niche}`,
  // [Niche] [Adj] [Suffix]
  (adj, niche, suffix) => `${niche} ${adj} ${suffix}`,
  // The [Adj] [Niche]
  (adj, niche) => `The ${adj} ${niche}`,
  // [Adj] & [Adj] [Suffix]
  (adj, niche, suffix, adj2) => adj2 ? `${adj} & ${adj2} ${suffix}` : `${adj} ${niche} ${suffix}`,
  // [Niche][Suffix] (e.g., CleanPros)
  (adj, niche, suffix) => `${niche}${suffix.replace(/[.\s]/g, '')}`,
  // [City] [Niche] [Suffix] (placeholder)
  (adj, niche, suffix) => `[City] ${niche} ${suffix}`,
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateNames(niche, style, keyword, count = 10) {
  const adjectives = ADJECTIVES[style] || ADJECTIVES.professional;
  const nicheWords = NICHE_WORDS[niche] || NICHE_WORDS.general;
  const names = new Set();
  let attempts = 0;

  while (names.size < count && attempts < 200) {
    attempts++;
    const adj = pickRandom(adjectives);
    const adj2 = pickRandom(adjectives);
    const nicheWord = keyword || pickRandom(nicheWords);
    const suffix = pickRandom(SUFFIXES);
    const pattern = pickRandom(PATTERNS);

    const name = pattern(adj, nicheWord, suffix, adj2);
    if (name && name.length > 3 && name.length < 40) {
      names.add(name);
    }
  }

  return Array.from(names);
}

export default function NameGenerator() {
  const [niche, setNiche] = useState('general');
  const [style, setStyle] = useState('professional');
  const [keyword, setKeyword] = useState('');
  const [names, setNames] = useState([]);
  const [saved, setSaved] = useState([]);
  const [copied, setCopied] = useState(null);

  const generate = useCallback(() => {
    const results = generateNames(niche, style, keyword.trim() || null, 10);
    setNames(results);
  }, [niche, style, keyword]);

  function saveName(name) {
    setSaved((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  }

  function copyName(name) {
    navigator.clipboard.writeText(name).then(() => {
      setCopied(name);
      setTimeout(() => setCopied(null), 1500);
    });
  }

  function copyAll() {
    const text = saved.length > 0 ? saved.join('\n') : names.join('\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopied('__all__');
      setTimeout(() => setCopied(null), 1500);
    });
  }

  return (
    <>
      <div className="tool-form">
        <div className="tool-input-row">
          <div className="tool-input-group">
            <label>Business Niche</label>
            <select
              className="tool-select"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
            >
              {NICHES.map((n) => (
                <option key={n.value} value={n.value}>{n.label}</option>
              ))}
            </select>
          </div>
          <div className="tool-input-group">
            <label>Name Style</label>
            <select
              className="tool-select"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              {STYLES.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="tool-input-group">
          <label>Custom Keyword (optional)</label>
          <input
            type="text"
            className="tool-input"
            value={keyword}
            placeholder="e.g., Sparkle, Diamond, your city name..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <button
          className="btn-primary"
          onClick={generate}
          style={{ width: '100%', marginTop: '8px' }}
        >
          Generate Names
        </button>
      </div>

      {names.length > 0 && (
        <div className="tool-results tool-results-animated">
          <div className="tool-results-title">Generated Names</div>
          {names.map((name) => (
            <div
              key={name}
              className="tool-result-row"
              style={{ cursor: 'pointer' }}
            >
              <span
                className="tool-result-value"
                style={{ fontSize: '16px', flex: 1 }}
              >
                {name}
              </span>
              <span style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => saveName(name)}
                  style={{
                    background: saved.includes(name) ? 'var(--mint)' : 'transparent',
                    border: '1px solid var(--mint)',
                    color: saved.includes(name) ? 'var(--dark)' : 'var(--mint)',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    transition: 'all 0.2s',
                  }}
                >
                  {saved.includes(name) ? 'Saved' : 'Save'}
                </button>
                <button
                  onClick={() => copyName(name)}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--border)',
                    color: copied === name ? 'var(--mint)' : 'var(--text-lighter)',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    transition: 'all 0.2s',
                  }}
                >
                  {copied === name ? 'Copied!' : 'Copy'}
                </button>
              </span>
            </div>
          ))}

          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            <button
              className="btn-primary"
              onClick={generate}
              style={{ flex: 1 }}
            >
              Generate More
            </button>
            <button
              onClick={copyAll}
              style={{
                background: 'transparent',
                border: '1px solid var(--border)',
                color: copied === '__all__' ? 'var(--mint)' : 'var(--white)',
                borderRadius: 'var(--radius-xs)',
                padding: '10px 20px',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              {copied === '__all__' ? 'Copied All!' : `Copy ${saved.length > 0 ? 'Saved' : 'All'}`}
            </button>
          </div>
        </div>
      )}

      {saved.length > 0 && (
        <div className="tool-results" style={{ marginTop: '24px' }}>
          <div className="tool-results-title">
            Your Shortlist ({saved.length})
          </div>
          {saved.map((name) => (
            <div key={name} className="tool-result-row">
              <span className="tool-result-value" style={{ fontSize: '16px', flex: 1 }}>
                {name}
              </span>
              <button
                onClick={() => saveName(name)}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--red-accent)',
                  color: 'var(--red-accent)',
                  borderRadius: '6px',
                  padding: '4px 12px',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <ToolGateway
        toolName="name-generator"
        headline="Ready to launch? Set up your business in Spotless"
        description="Once you have the perfect name, set up branded booking forms, invoices, and a customer portal."
        featureLink="/product/custom-forms"
        compact
      />

      <StickyTrialBar />
    </>
  );
}
