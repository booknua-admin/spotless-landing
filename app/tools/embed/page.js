'use client';

import { useState } from 'react';

const WIDGETS = [
  {
    id: 'pricing-widget',
    title: 'Pricing Calculator Widget',
    description: 'Let visitors estimate cleaning prices on your site.',
    height: 600,
  },
  {
    id: 'quote-widget',
    title: 'Quote Request Widget',
    description: 'Capture leads with an embeddable quote form.',
    height: 650,
  },
  {
    id: 'cost-estimator',
    title: 'Cost Estimator Widget',
    description: 'Show visitors instant cost estimates for cleaning services.',
    height: 500,
  },
];

export default function EmbedPage() {
  const [selected, setSelected] = useState(WIDGETS[0]);
  const [copied, setCopied] = useState(false);

  const embedCode = `<iframe src="https://spotlessapp.io/embed/${selected.id}" width="100%" height="${selected.height}" frameborder="0" style="border:none;border-radius:12px;"></iframe>`;

  function handleCopy() {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Embed</div>
          <h1 className="animate-on-scroll">Embed Spotless Widgets</h1>
          <p className="section-sub animate-on-scroll">
            Add interactive pricing tools to your website. Capture leads and help your visitors get instant estimates.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          {/* Widget selector cards */}
          <div className="tool-grid animate-on-scroll" style={{ marginBottom: '48px' }}>
            {WIDGETS.map((w) => (
              <button
                key={w.id}
                className={`tool-card ${selected.id === w.id ? 'active' : ''}`}
                onClick={() => { setSelected(w); setCopied(false); }}
                style={{ textAlign: 'left', cursor: 'pointer', border: selected.id === w.id ? '2px solid var(--mint)' : '2px solid transparent' }}
              >
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="tool-form" style={{ padding: '32px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--light)' }}>Preview</h3>
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
              <iframe
                src={`/embed/${selected.id}`}
                width="100%"
                height={selected.height}
                style={{ border: 'none', display: 'block' }}
                title={selected.title}
              />
            </div>

            <h3 style={{ marginBottom: '12px', color: 'var(--light)' }}>Embed Code</h3>
            <div className="embed-code-block">
              <code>{embedCode}</code>
            </div>
            <button className="embed-copy-btn" onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy Embed Code'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
