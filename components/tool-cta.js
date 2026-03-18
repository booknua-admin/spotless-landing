'use client';

export default function ToolCTA({ headline, description, featureLink }) {
  return (
    <div className="tool-cta-card">
      <div className="tool-cta-content">
        <h4>{headline || 'Want to automate this?'}</h4>
        <p>{description || 'Try Spotless free for 14 days — no credit card required.'}</p>
      </div>
      <div className="tool-cta-actions">
        <a href="https://app.spotlessapp.io/register" className="btn-primary">
          Start Free Trial <span>&rarr;</span>
        </a>
        {featureLink && (
          <a href={featureLink} className="tool-cta-learn">Learn more</a>
        )}
      </div>
    </div>
  );
}
