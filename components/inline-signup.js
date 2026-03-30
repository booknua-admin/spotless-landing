'use client';

import { useState, useEffect } from 'react';
import { getCapturedEmail, submitGatewaySignup, buildSignupUrl } from '../lib/lead-capture';

export default function InlineSignup({ toolName, toolData, valueProp }) {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const captured = getCapturedEmail();
    if (captured) setEmail(captured);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) return;
    submitGatewaySignup(email, businessName, toolName, toolData);
    setSubmitted(true);
    const url = buildSignupUrl(toolName, toolData);
    const params = new URL(url).searchParams;
    params.set('email', email);
    if (businessName) params.set('business', businessName);
    window.open(`https://app.spotlessapp.io/register?${params.toString()}`, '_blank');
  }

  if (submitted) {
    return (
      <div className="inline-signup-success">
        <span className="inline-signup-success-icon">&#10003;</span>
        <p>Opening Spotless&hellip; Your data is ready to import.</p>
      </div>
    );
  }

  return (
    <div className="inline-signup">
      {valueProp && (
        <ul className="inline-signup-value">
          {valueProp.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit} className="inline-signup-form">
        <input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inline-signup-input"
        />
        <input
          type="text"
          placeholder="Business name (optional)"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="inline-signup-input"
        />
        <button type="submit" className="btn-primary inline-signup-btn">
          Create Free Account <span>&rarr;</span>
        </button>
      </form>
      <p className="inline-signup-note">Free 14-day trial &middot; No credit card required</p>
    </div>
  );
}
