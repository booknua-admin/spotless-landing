import ProductCTA from '../../../components/product-cta';
import JsonLd from '../../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../../lib/seo';
import { breadcrumbSchema } from '../../../lib/schema';

const seo = getPageSeo('/product/staff-management');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
};

export default function StaffManagementPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Staff Management</div>
          <h1 className="animate-on-scroll">Your team, sorted.<br />No group chat required.</h1>
          <p className="section-sub animate-on-scroll">
            Assign jobs, track hours, manage shifts, and run payroll &mdash; all from one place. Your staff
            see everything they need on their phone.
          </p>

          {/* Hero mockup: Staff roster */}
          <div className="animate-on-scroll" style={{ marginTop: '48px', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="mockup-window">
              <div className="mockup-topbar">
                <div className="mockup-topbar-dot r"></div>
                <div className="mockup-topbar-dot y"></div>
                <div className="mockup-topbar-dot g"></div>
                <div className="mockup-topbar-url">app.spotlessapp.io/staff</div>
              </div>
              <div className="mockup-body">
                <div className="mockup-main-header">
                  <div className="mockup-main-title">Staff Roster</div>
                  <div className="mockup-btn primary">+ Add Staff</div>
                </div>
                <table className="mockup-table">
                  <thead>
                    <tr><th>Team Member</th><th>Status</th><th>Today&rsquo;s Jobs</th><th>Hours (Week)</th><th>Rating</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div className="mockup-avatar" style={{ background: '#3ECF8E' }}>S</div>
                        <div><div style={{ fontWeight: 600 }}>Sarah Mitchell</div><div style={{ fontSize: '10px', color: 'var(--text-lighter)' }}>Senior Cleaner</div></div>
                      </td>
                      <td><span className="mockup-status-dot active"></span> On site</td>
                      <td>4 / 4</td>
                      <td>38h</td>
                      <td><span className="mockup-stars" style={{ fontSize: '11px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span></td>
                    </tr>
                    <tr>
                      <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div className="mockup-avatar" style={{ background: '#5b8def' }}>J</div>
                        <div><div style={{ fontWeight: 600 }}>James Kelly</div><div style={{ fontSize: '10px', color: 'var(--text-lighter)' }}>Cleaner</div></div>
                      </td>
                      <td><span className="mockup-status-dot away"></span> Travelling</td>
                      <td>2 / 3</td>
                      <td>32h</td>
                      <td><span className="mockup-stars" style={{ fontSize: '11px' }}>&#9733;&#9733;&#9733;&#9733;&#9734;</span></td>
                    </tr>
                    <tr>
                      <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div className="mockup-avatar" style={{ background: '#a78bfa' }}>L</div>
                        <div><div style={{ fontWeight: 600 }}>Lucy Parker</div><div style={{ fontSize: '10px', color: 'var(--text-lighter)' }}>Cleaner</div></div>
                      </td>
                      <td><span className="mockup-status-dot active"></span> On site</td>
                      <td>3 / 5</td>
                      <td>40h</td>
                      <td><span className="mockup-stars" style={{ fontSize: '11px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span></td>
                    </tr>
                    <tr>
                      <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div className="mockup-avatar" style={{ background: '#f97316' }}>D</div>
                        <div><div style={{ fontWeight: 600 }}>Dan Murphy</div><div style={{ fontSize: '10px', color: 'var(--text-lighter)' }}>Part-time</div></div>
                      </td>
                      <td><span className="mockup-status-dot offline"></span> Off today</td>
                      <td>&mdash;</td>
                      <td>16h</td>
                      <td><span className="mockup-stars" style={{ fontSize: '11px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Time Tracking */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>GPS-Verified Time Tracking</h3>
              <p>
                Staff clock in and out from the mobile app. GPS-verified check-ins so you know
                they&rsquo;re at the right location. Hours are tracked automatically and feed directly
                into payroll &mdash; no timesheets, no disputes.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/time-tracking</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-section-title">Today&rsquo;s Time Log &mdash; Sarah Mitchell</div>
                  <table className="mockup-table">
                    <thead>
                      <tr><th>Job</th><th>Clock In</th><th>Clock Out</th><th>Duration</th><th>Verified</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Johnson Residence</td><td>8:55 AM</td><td>10:42 AM</td>
                        <td style={{ fontWeight: 600 }}>1h 47m</td>
                        <td><span className="mockup-badge green">GPS &#10003;</span></td>
                      </tr>
                      <tr>
                        <td>42 Oak Street</td><td>11:10 AM</td><td>12:55 PM</td>
                        <td style={{ fontWeight: 600 }}>1h 45m</td>
                        <td><span className="mockup-badge green">GPS &#10003;</span></td>
                      </tr>
                      <tr>
                        <td>Airbnb Turnover</td><td>1:30 PM</td><td>&mdash;</td>
                        <td style={{ fontWeight: 600, color: 'var(--mint)' }}>In progress</td>
                        <td><span className="mockup-badge green">GPS &#10003;</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', gap: '16px', fontSize: '12px' }}>
                    <span style={{ color: 'var(--text-lighter)' }}>Total today:</span>
                    <span style={{ fontWeight: 700 }}>5h 22m+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Payroll */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Payroll Summary</h3>
              <p>
                Hours tracked, rates applied, payroll calculated. Export payroll reports for your
                accountant or integrate with your payroll provider. See labour costs per job, per
                team, or per week. No more Friday afternoon spreadsheet sessions.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/payroll</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-main-header">
                    <div className="mockup-main-title">Payroll &mdash; Week of Mar 14</div>
                    <div className="mockup-btn outline">Export CSV</div>
                  </div>
                  <table className="mockup-table">
                    <thead>
                      <tr><th>Staff Member</th><th>Hours</th><th>Rate</th><th>Overtime</th><th>Total</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div className="mockup-avatar sm" style={{ background: '#3ECF8E' }}>S</div> Sarah M.
                        </td>
                        <td>38h</td><td>&euro;15/hr</td><td>0h</td>
                        <td style={{ fontWeight: 700 }}>&euro;570.00</td>
                      </tr>
                      <tr>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div className="mockup-avatar sm" style={{ background: '#5b8def' }}>J</div> James K.
                        </td>
                        <td>32h</td><td>&euro;15/hr</td><td>0h</td>
                        <td style={{ fontWeight: 700 }}>&euro;480.00</td>
                      </tr>
                      <tr>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div className="mockup-avatar sm" style={{ background: '#a78bfa' }}>L</div> Lucy P.
                        </td>
                        <td>40h</td><td>&euro;15/hr</td><td>2h</td>
                        <td style={{ fontWeight: 700 }}>&euro;630.00</td>
                      </tr>
                      <tr>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div className="mockup-avatar sm" style={{ background: '#f97316' }}>D</div> Dan M.
                        </td>
                        <td>16h</td><td>&euro;14/hr</td><td>0h</td>
                        <td style={{ fontWeight: 700 }}>&euro;224.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mockup-invoice-total">
                    <span>Total Payroll</span>
                    <span>&euro;1,904.00</span>
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
              <div className="product-mini-card-icon">&#128276;</div>
              <h4>Open Shifts</h4>
              <p>Post open shifts and let available staff claim them &mdash; first come, first served.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128260;</div>
              <h4>Shift Swaps</h4>
              <p>Staff swap shifts between themselves with manager approval. No phone calls needed.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128205;</div>
              <h4>Geofences</h4>
              <p>GPS-verified clock-ins ensure staff are at the right job site before starting.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128295;</div>
              <h4>Equipment</h4>
              <p>Track equipment assignments and ensure the right tools are at the right job.</p>
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
                <h4>Scheduling &amp; Jobs</h4>
                <p>Staff assignments tie directly into the job calendar.</p>
              </div>
            </a>
            <a href="/product/finance" className="crosslink-card">
              <div className="crosslink-icon">&#128200;</div>
              <div>
                <h4>Finance Tools</h4>
                <p>Payroll data flows into your financial reports automatically.</p>
              </div>
            </a>
            <a href="/product/automations" className="crosslink-card">
              <div className="crosslink-icon">&#9889;</div>
              <div>
                <h4>Automations</h4>
                <p>Auto-assign staff based on location, availability, or skills.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Product', url: `${SITE_URL}/product` },
        { name: 'Staff Management', url: `${SITE_URL}/product/staff-management` },
      ])} />
    </>
  );
}
