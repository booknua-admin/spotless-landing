'use client';

import { useState } from 'react';

const WIDGETS = [
  {
    id: 'pricing-widget',
    title: 'Pricing Calculator',
    description: 'Let visitors estimate cleaning prices directly on your site.',
    height: 600,
  },
  {
    id: 'quote-widget',
    title: 'Quote Request Form',
    description: 'Capture leads with an embeddable quote request form.',
    height: 700,
  },
  {
    id: 'cost-estimator',
    title: 'Cost Estimator',
    description: 'Show visitors instant cost estimates for cleaning services.',
    height: 550,
  },
];

export default function EmbedPage() {
  const [selected, setSelected] = useState(WIDGETS[0]);
  const [copied, setCopied] = useState(false);

  const embedCode = `<iframe src="https://spotlessapp.io/embed/${selected.id}" width="100%" height="${selected.height}" frameborder="0" style="border:none;border-radius:12px;"></iframe>`;

  function handleCopy() {
    navigator.clipboard.writeText(embedCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      /* fallback: select the text */
    });
  }

  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Embed</div>
          <h1 className="animate-on-scroll">Embed Spotless Widgets</h1>
          <p className="section-sub animate-on-scroll">
            Add interactive pricing tools to your website. Capture leads and help your
            visitors get instant cleaning estimates &mdash; all branded with your business.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          {/* Widget selector cards */}
          <div className="tool-grid grid-3 animate-on-scroll" style={{ marginBottom: '48px' }}>
            {WIDGETS.map((w) => (
              <button
                key={w.id}
                className="tool-card"
                onClick={() => { setSelected(w); setCopied(false); }}
                style={{
                  textAlign: 'left',
                  cursor: 'pointer',
                  border: selected.id === w.id
                    ? '2px solid var(--mint)'
                    : '2px solid var(--border-color)',
                  background: selected.id === w.id
                    ? 'rgba(62,207,142,0.06)'
                    : 'var(--dark-light)',
                }}
              >
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </button>
            ))}
          </div>

          {/* Preview + Embed Code */}
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="tool-form" style={{ padding: '32px' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--white)', fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '20px', fontWeight: 700 }}>
                Preview: {selected.title}
              </h3>
              <div style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '32px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <iframe
                  src={`/embed/${selected.id}`}
                  width="100%"
                  height={selected.height}
                  style={{ border: 'none', display: 'block' }}
                  title={selected.title}
                />
              </div>

              <h3 style={{ marginBottom: '12px', color: 'var(--white)', fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '18px', fontWeight: 700 }}>
                Embed Code
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                Copy the code below and paste it into your website&rsquo;s HTML.
              </p>
              <div className="embed-code-block">
                <code>{embedCode}</code>
              </div>
              <button
                type="button"
                className="embed-copy-btn"
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy Embed Code'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
