'use client';

import { useState, useEffect } from 'react';
import { submitEmail, isEmailCaptured, getCapturedEmail } from '../lib/lead-capture';

export default function EmailGate({ toolName, onUnlocked, children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (isEmailCaptured()) {
      setUnlocked(true);
      if (onUnlocked) onUnlocked();
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (email && email.includes('@') && email.includes('.')) {
      submitEmail(email, toolName);
      setUnlocked(true);
      setShowForm(false);
      if (onUnlocked) onUnlocked();
    }
  }

  function handleClick() {
    if (unlocked) return;
    setShowForm(true);
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <div style={{ pointerEvents: 'none' }}>
          {children}
        </div>
      </div>
      {showForm && (
        <div className="email-gate-modal">
          <div className="email-gate-modal-content">
            <button className="email-gate-close" onClick={() => setShowForm(false)}>&times;</button>
            <h4>Get Your Free PDF</h4>
            <p>Enter your email to download. One unlock gives you access to all our free tools.</p>
            <form onSubmit={handleSubmit} className="email-gate-form">
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <button type="submit">Download PDF</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
