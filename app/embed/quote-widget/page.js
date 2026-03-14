'use client';

import { useState } from 'react';

export default function QuoteWidgetPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'residential-standard',
    propertySize: '',
    message: '',
  });

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="embed-container">
      <div className="embed-card">
        {!submitted ? (
          <>
            <h2 className="embed-title">Get a Free Quote</h2>
            <p className="embed-subtitle">Fill in the details below and we&rsquo;ll get back to you with a custom quote.</p>

            <form action="#" onSubmit={handleSubmit}>
              <div className="embed-input-group">
                <label>Name</label>
                <input
                  className="embed-input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update('name')}
                  required
                />
              </div>

              <div className="embed-input-group">
                <label>Email</label>
                <input
                  className="embed-input"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update('email')}
                  required
                />
              </div>

              <div className="embed-input-group">
                <label>Phone</label>
                <input
                  className="embed-input"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={update('phone')}
                />
              </div>

              <div className="embed-input-group">
                <label>Service Type</label>
                <select
                  className="embed-select"
                  value={form.serviceType}
                  onChange={update('serviceType')}
                >
                  <option value="residential-standard">Residential Standard</option>
                  <option value="residential-deep">Deep Clean</option>
                  <option value="move-in-out">Move In / Move Out</option>
                  <option value="airbnb-rental">Airbnb / Rental</option>
                  <option value="office-commercial">Office / Commercial</option>
                  <option value="post-construction">Post-Construction</option>
                </select>
              </div>

              <div className="embed-input-group">
                <label>Property Size (sq ft)</label>
                <input
                  className="embed-input"
                  type="number"
                  placeholder="e.g. 1200"
                  min="100"
                  value={form.propertySize}
                  onChange={update('propertySize')}
                />
              </div>

              <div className="embed-input-group">
                <label>Message</label>
                <textarea
                  className="embed-input"
                  placeholder="Any special requests or details..."
                  rows={3}
                  value={form.message}
                  onChange={update('message')}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button className="embed-btn" type="submit">
                Request Quote
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>&#10003;</div>
            <h2 className="embed-title" style={{ marginBottom: 8 }}>Thanks!</h2>
            <p style={{ color: '#6b7280', fontSize: 14, margin: 0 }}>
              We&rsquo;ll be in touch within 24 hours.
            </p>
          </div>
        )}
      </div>

      <div className="embed-powered-by">
        Powered by <a href="https://spotlessapp.io" target="_blank" rel="noopener noreferrer">Spotless</a>
      </div>
    </div>
  );
}
