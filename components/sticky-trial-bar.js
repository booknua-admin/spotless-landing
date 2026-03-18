'use client';

import { useState, useEffect } from 'react';

export default function StickyTrialBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('spotless_trial_bar_dismissed')) {
      setDismissed(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  function handleDismiss() {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem('spotless_trial_bar_dismissed', '1');
  }

  if (dismissed || !visible) return null;

  return (
    <div className="sticky-trial-bar">
      <div className="sticky-trial-bar-content">
        <span>Like this tool? <strong>Try Spotless free for 14 days</strong> — manage your entire cleaning business in one place.</span>
        <a href="https://app.spotlessapp.io/register" className="sticky-trial-bar-btn">Start Free Trial</a>
        <button className="sticky-trial-bar-close" onClick={handleDismiss}>&times;</button>
      </div>
    </div>
  );
}
