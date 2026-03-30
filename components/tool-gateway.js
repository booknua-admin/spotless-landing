'use client';

import { buildSignupUrl } from '../lib/lead-capture';
import InlineSignup from './inline-signup';

export default function ToolGateway({
  toolName,
  headline,
  description,
  toolData,
  featureLink,
  valueProp,
  compact,
}) {
  const signupUrl = buildSignupUrl(toolName, toolData);

  if (compact) {
    return (
      <div className="tool-cta-card">
        <div className="tool-cta-content">
          <h4>{headline || 'Want to automate this?'}</h4>
          <p>{description || 'Try Spotless free for 14 days — no credit card required.'}</p>
        </div>
        <div className="tool-cta-actions">
          <a href={signupUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
            Start Free Trial <span>&rarr;</span>
          </a>
          {featureLink && (
            <a href={featureLink} className="tool-cta-learn">Learn more</a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="tool-gateway">
      <div className="tool-gateway-header">
        <h4>{headline || 'Continue in Spotless'}</h4>
        <p>{description || 'Save your work and manage everything in one place.'}</p>
      </div>
      <InlineSignup
        toolName={toolName}
        toolData={toolData}
        valueProp={valueProp}
      />
      <div className="tool-gateway-alt">
        <a href={signupUrl} className="tool-gateway-skip" target="_blank" rel="noopener noreferrer">
          or continue without saving &rarr;
        </a>
        {featureLink && (
          <a href={featureLink} className="tool-gateway-learn">See how it works in Spotless</a>
        )}
      </div>
    </div>
  );
}
