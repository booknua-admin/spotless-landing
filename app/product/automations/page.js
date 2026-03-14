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
          <div className="section-tag animate-on-scroll">Automations</div>
          <h1 className="animate-on-scroll">Build it once.<br />Let it run forever.</h1>
          <p className="section-sub animate-on-scroll">
            Build workflows that handle the repetitive stuff &mdash; confirmations, assignments, reminders,
            follow-ups &mdash; so you can focus on growing the business.
          </p>

          {/* Hero mockup: Workflow builder */}
          <div className="animate-on-scroll" style={{ marginTop: '48px', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="mockup-window">
              <div className="mockup-topbar">
                <div className="mockup-topbar-dot r"></div>
                <div className="mockup-topbar-dot y"></div>
                <div className="mockup-topbar-dot g"></div>
                <div className="mockup-topbar-url">app.spotlessapp.io/automations</div>
              </div>
              <div className="mockup-body">
                <div className="mockup-main-header">
                  <div className="mockup-main-title">Workflows</div>
                  <div className="mockup-btn primary">+ New Workflow</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Workflow 1 */}
                  <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>Post-Job Invoice &amp; Review</div>
                      <span className="mockup-badge green">Active</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}>
                      <div className="mockup-flow-node trigger">Job Completed</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node action">Send Invoice</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node condition">Wait 24h</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node action">Request Review</div>
                    </div>
                  </div>
                  {/* Workflow 2 */}
                  <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>Smart Staff Assignment</div>
                      <span className="mockup-badge green">Active</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}>
                      <div className="mockup-flow-node trigger">New Booking</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node condition">Check Availability</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node action">Assign Nearest</div>
                    </div>
                  </div>
                  {/* Workflow 3 */}
                  <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>Overdue Payment Alert</div>
                      <span className="mockup-badge green">Active</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}>
                      <div className="mockup-flow-node trigger">Invoice Overdue</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node action">Send Reminder</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node condition">Wait 3 days</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node action">Alert Manager</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Pricing Rules */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Dynamic Pricing Rules</h3>
              <p>
                Set dynamic pricing based on property size, service type, time of day, frequency,
                or custom criteria. Weekends cost more? Deep cleans have a minimum? Loyalty
                customers get 10% off? Set the rules and let Spotless calculate every quote.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/pricing-rules</div>
                </div>
                <div className="mockup-body">
                  <table className="mockup-table">
                    <thead>
                      <tr><th>Rule Name</th><th>Condition</th><th>Adjustment</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 600 }}>Weekend surcharge</td>
                        <td>Saturday or Sunday</td>
                        <td style={{ fontWeight: 600, color: 'var(--orange-accent)' }}>+15%</td>
                        <td><span className="mockup-badge green">Active</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600 }}>Weekly loyalty discount</td>
                        <td>Frequency = Weekly</td>
                        <td style={{ fontWeight: 600, color: 'var(--mint)' }}>-10%</td>
                        <td><span className="mockup-badge green">Active</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600 }}>Deep clean minimum</td>
                        <td>Service = Deep Clean</td>
                        <td style={{ fontWeight: 600 }}>Min &euro;120</td>
                        <td><span className="mockup-badge green">Active</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600 }}>Large property premium</td>
                        <td>Bedrooms &gt; 4</td>
                        <td style={{ fontWeight: 600, color: 'var(--orange-accent)' }}>+&euro;25</td>
                        <td><span className="mockup-badge green">Active</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600 }}>Referral discount</td>
                        <td>Has referral code</td>
                        <td style={{ fontWeight: 600, color: 'var(--mint)' }}>-15%</td>
                        <td><span className="mockup-badge blue">Draft</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Alerts */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Smart Alerts &amp; Notifications</h3>
              <p>
                Get notified about the things that matter &mdash; missed check-ins, overdue payments,
                cancelled jobs, or low review scores. Set up alerts for yourself, your managers, or
                your whole team. Stay on top without micromanaging.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/alerts</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-section-title">Recent Alerts</div>
                  <div className="mockup-alert-card red">
                    <div className="mockup-alert-dot"></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>Payment overdue</div>
                      <div style={{ fontSize: '11px', opacity: 0.7 }}>Johnson Family &mdash; &euro;85.00 (3 days overdue)</div>
                    </div>
                    <span className="mockup-badge red">Urgent</span>
                  </div>
                  <div className="mockup-alert-card amber">
                    <div className="mockup-alert-dot"></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>Late check-in</div>
                      <div style={{ fontSize: '11px', opacity: 0.7 }}>James K. &mdash; 42 Oak Street (15 min late)</div>
                    </div>
                    <span className="mockup-badge orange">Warning</span>
                  </div>
                  <div className="mockup-alert-card green">
                    <div className="mockup-alert-dot"></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>New 5-star review</div>
                      <div style={{ fontSize: '11px', opacity: 0.7 }}>Rachel Kim left a 5-star review on Google</div>
                    </div>
                    <span className="mockup-badge green">Good</span>
                  </div>
                  <div className="mockup-alert-card blue">
                    <div className="mockup-alert-dot"></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>New booking request</div>
                      <div style={{ fontSize: '11px', opacity: 0.7 }}>4 Bed Deep Clean &mdash; Maple Court area</div>
                    </div>
                    <span className="mockup-badge blue">Info</span>
                  </div>
                </div>
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
              <p>Trigger actions when job status changes &mdash; confirmed, started, completed, cancelled.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128231;</div>
              <h4>Email Sequences</h4>
              <p>Welcome emails, booking confirmations, follow-ups &mdash; all sent automatically.</p>
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
