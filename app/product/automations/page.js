import ProductCTA from '../../../components/product-cta';
import JsonLd from '../../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../../lib/seo';
import { breadcrumbSchema } from '../../../lib/schema';

const seo = getPageSeo('/product/automations');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
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
              <div className="product-mini-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              <h4>Auto-Assignment</h4>
              <p>Automatically assign jobs to the nearest, most available, or best-rated staff.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div>
              <h4>Status Triggers</h4>
              <p>Trigger actions when job status changes &mdash; confirmed, started, completed, cancelled.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
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
              <div className="crosslink-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
              <div>
                <h4>Scheduling</h4>
                <p>Automations trigger based on job events in your calendar.</p>
              </div>
            </a>
            <a href="/product/payments" className="crosslink-card">
              <div className="crosslink-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
              <div>
                <h4>Payments</h4>
                <p>Auto-invoice on job completion, remind on overdue payments.</p>
              </div>
            </a>
            <a href="/product/referrals-reviews" className="crosslink-card">
              <div className="crosslink-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <div>
                <h4>Referrals &amp; Reviews</h4>
                <p>Trigger review requests and referral rewards automatically.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Product', url: `${SITE_URL}/product` },
        { name: 'Automations', url: `${SITE_URL}/product/automations` },
      ])} />
    </>
  );
}
