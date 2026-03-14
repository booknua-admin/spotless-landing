import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Automations — Spotless',
  description:
    'Build workflows that handle confirmation emails, job assignments, pricing adjustments, and follow-ups automatically.',
};

export default function AutomationsPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-icon animate-on-scroll">&#9889;</div>
          <div className="section-tag animate-on-scroll">Automations</div>
          <h1 className="animate-on-scroll">Set it once,<br />never think about it again</h1>
          <p className="section-sub animate-on-scroll">
            Build workflows that handle the repetitive stuff — confirmations, assignments, reminders,
            follow-ups — so you can focus on growing the business.
          </p>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Workflow Builder</h3>
              <p>
                Simple if-this-then-that rules. &ldquo;When a job is completed, send the invoice.
                When payment is received, request a review. When a new booking comes in, assign the
                nearest available staff.&rdquo; Build them in minutes, run them forever.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Job completed → Send invoice', 'Payment received → Request review', 'New booking → Assign nearest staff', 'No-show → Alert manager'].map((rule, i) => (
                  <div key={i} style={{ background: 'var(--navy)', padding: '12px 16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--lime)', fontWeight: 700 }}>&#9889;</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Pricing Rules</h3>
              <p>
                Set dynamic pricing based on property size, service type, time of day, frequency,
                or custom criteria. Weekends cost more? Deep cleans have a minimum? Loyalty
                customers get 10% off? Set the rules and let Spotless calculate every quote.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[{ rule: 'Weekend surcharge', value: '+15%' }, { rule: 'Weekly discount', value: '-10%' }, { rule: 'Deep clean minimum', value: '€120' }].map((r, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>{r.rule}</span>
                    <span style={{ color: 'var(--lime)', fontSize: '13px', fontWeight: 600 }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Alerts &amp; Notifications</h3>
              <p>
                Get notified about the things that matter — missed check-ins, overdue payments,
                cancelled jobs, or low review scores. Set up alerts for yourself, your managers, or
                your whole team. Stay on top without micromanaging.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[{ text: 'Late check-in: Sarah M. — 42 Oak St', color: 'var(--orange-accent)' }, { text: 'Payment overdue: Johnson Family (3 days)', color: 'var(--red-accent)' }, { text: 'New 5-star review from Rachel K.', color: 'var(--green-accent)' }].map((alert, i) => (
                  <div key={i} style={{ background: 'var(--navy)', padding: '10px 14px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: alert.color, flexShrink: 0 }}></span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>{alert.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-more-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>And that&rsquo;s not all</h2>
          <div className="product-mini-grid animate-on-scroll">
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128100;</div>
              <h4>Auto-Assignment</h4>
              <p>Automatically assign jobs to the nearest, most available, or best-rated staff.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128260;</div>
              <h4>Status Triggers</h4>
              <p>Trigger actions when job status changes — confirmed, started, completed, cancelled.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128231;</div>
              <h4>Email Sequences</h4>
              <p>Welcome emails, booking confirmations, follow-ups — all sent automatically.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128295;</div>
              <h4>Services Config</h4>
              <p>Define your service catalogue with durations, pricing, and required equipment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-crosslinks">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>Works seamlessly with</h2>
          <div className="crosslink-grid animate-on-scroll">
            <a href="/product/scheduling" className="crosslink-card">
              <div className="crosslink-icon">&#128197;</div>
              <div>
                <h4>Scheduling</h4>
                <p>Automations trigger based on job events in your calendar.</p>
              </div>
            </a>
            <a href="/product/payments" className="crosslink-card">
              <div className="crosslink-icon">&#128179;</div>
              <div>
                <h4>Payments</h4>
                <p>Auto-invoice on job completion, remind on overdue payments.</p>
              </div>
            </a>
            <a href="/product/referrals-reviews" className="crosslink-card">
              <div className="crosslink-icon">&#11088;</div>
              <div>
                <h4>Referrals &amp; Reviews</h4>
                <p>Trigger review requests and referral rewards automatically.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />
    </>
  );
}
