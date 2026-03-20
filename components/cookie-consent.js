'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const GA_ID = 'G-4Y76CN3S7Q';

function loadGA() {
  if (document.getElementById('gtag-script')) return;
  const script = document.createElement('script');
  script.id = 'gtag-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_ID);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('spotless_cookie_consent');
    if (consent === 'accepted') {
      loadGA();
      return;
    }
    if (consent === 'declined') return;
    // No choice made yet — show banner
    setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem('spotless_cookie_consent', 'accepted');
    setVisible(false);
    loadGA();
  }

  function handleDecline() {
    localStorage.setItem('spotless_cookie_consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: 'var(--dark-light)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '20px 24px',
      animation: 'fadeUp 0.4s ease',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        flexWrap: 'wrap',
      }}>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.6,
          margin: 0,
          flex: 1,
          minWidth: '280px',
        }}>
          We use cookies to analyse site traffic and improve your experience. By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies. Read our{' '}
          <Link href="/cookie-policy" style={{ color: 'var(--mint)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            Cookie Policy
          </Link>{' '}
          for more information.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
          <button
            onClick={handleDecline}
            style={{
              padding: '10px 20px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 'var(--radius-sm)',
              color: 'rgba(255,255,255,0.7)',
              background: 'transparent',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s',
            }}
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            style={{
              padding: '10px 24px',
              background: 'var(--mint)',
              color: 'var(--dark)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s',
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
