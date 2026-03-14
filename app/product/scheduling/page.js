import ProductCTA from '../../../components/product-cta';
import JsonLd from '../../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../../lib/seo';
import { breadcrumbSchema } from '../../../lib/schema';

const seo = getPageSeo('/product/scheduling');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
};

export default function SchedulingPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Scheduling &amp; Jobs</div>
          <h1 className="animate-on-scroll">Your entire week,<br />one drag away</h1>
          <p className="section-sub animate-on-scroll">
            A calendar built for cleaning companies. Drag jobs, manage recurring schedules, and track
            every lead from enquiry to completion.
          </p>

          {/* Hero mockup: Weekly Calendar */}
          <div className="animate-on-scroll" style={{ marginTop: '48px', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="mockup-window">
              <div className="mockup-topbar">
                <div className="mockup-topbar-dot r"></div>
                <div className="mockup-topbar-dot y"></div>
                <div className="mockup-topbar-dot g"></div>
                <div className="mockup-topbar-url">app.spotlessapp.io/schedule</div>
              </div>
              <div className="mockup-body">
                <div className="mockup-main-header">
                  <div className="mockup-main-title">Week of Mar 14 &ndash; 18</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div className="mockup-btn ghost">&larr; Prev</div>
                    <div className="mockup-btn ghost">Next &rarr;</div>
                    <div className="mockup-btn primary">+ Add Job</div>
                  </div>
                </div>
                <div className="mockup-calendar">
                  <div className="mockup-cal-day">
                    <div className="mockup-cal-day-header">Mon 14</div>
                    <div className="mockup-cal-event green">9:00 Johnson</div>
                    <div className="mockup-cal-event blue">11:00 Oak St</div>
                    <div className="mockup-cal-event green">14:00 Airbnb #3</div>
                    <div className="mockup-cal-event purple">16:00 Deep Cln</div>
                  </div>
                  <div className="mockup-cal-day">
                    <div className="mockup-cal-day-header">Tue 15</div>
                    <div className="mockup-cal-event blue">8:30 Park View</div>
                    <div className="mockup-cal-event green">10:00 Ellis Rd</div>
                    <div className="mockup-cal-event orange">13:00 Quote Visit</div>
                    <div className="mockup-cal-event green">15:30 Mitchell</div>
                  </div>
                  <div className="mockup-cal-day">
                    <div className="mockup-cal-day-header">Wed 16</div>
                    <div className="mockup-cal-event green">9:00 Harris</div>
                    <div className="mockup-cal-event teal">11:30 Airbnb #7</div>
                    <div className="mockup-cal-event blue">14:00 Office Cln</div>
                    <div className="mockup-cal-event green">16:30 Kim</div>
                  </div>
                  <div className="mockup-cal-day">
                    <div className="mockup-cal-day-header">Thu 17</div>
                    <div className="mockup-cal-event purple">9:00 Deep Cln</div>
                    <div className="mockup-cal-event green">12:00 Weekly</div>
                    <div className="mockup-cal-event blue">15:00 Retail</div>
                  </div>
                  <div className="mockup-cal-day">
                    <div className="mockup-cal-day-header">Fri 18</div>
                    <div className="mockup-cal-event green">9:00 O&rsquo;Brien</div>
                    <div className="mockup-cal-event teal">11:00 Turnover</div>
                    <div className="mockup-cal-event orange">14:00 New Lead</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Pipeline */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Pipeline Management</h3>
              <p>
                Every lead and job moves through a visual pipeline &mdash; from new enquiry to quote sent
                to job confirmed to completed. Never lose track of where a customer is in your
                process. Filter by status, assignee, or service type.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/pipeline</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-kanban">
                    <div className="mockup-kanban-col">
                      <div className="mockup-kanban-header">
                        <div className="mockup-kanban-title">New Leads</div>
                        <div className="mockup-kanban-count">5</div>
                      </div>
                      <div className="mockup-kanban-card">
                        <div className="mockup-kanban-card-label">Sarah Thompson</div>
                        <div className="mockup-kanban-card-meta">3 bed house &middot; Weekly</div>
                      </div>
                      <div className="mockup-kanban-card">
                        <div className="mockup-kanban-card-label">Park View Office</div>
                        <div className="mockup-kanban-card-meta">Commercial &middot; Daily</div>
                      </div>
                      <div className="mockup-kanban-card">
                        <div className="mockup-kanban-card-label">Airbnb #14</div>
                        <div className="mockup-kanban-card-meta">Turnover &middot; One-off</div>
                      </div>
                    </div>
                    <div className="mockup-kanban-col">
                      <div className="mockup-kanban-header">
                        <div className="mockup-kanban-title">Quoted</div>
                        <div className="mockup-kanban-count">3</div>
                      </div>
                      <div className="mockup-kanban-card">
                        <div className="mockup-kanban-card-label">Ellis Road &mdash; &euro;95</div>
                        <div className="mockup-kanban-card-meta">Awaiting response</div>
                      </div>
                      <div className="mockup-kanban-card">
                        <div className="mockup-kanban-card-label">Maple Ct &mdash; &euro;120</div>
                        <div className="mockup-kanban-card-meta">Sent 2 days ago</div>
                      </div>
                    </div>
                    <div className="mockup-kanban-col">
                      <div className="mockup-kanban-header">
                        <div className="mockup-kanban-title">Confirmed</div>
                        <div className="mockup-kanban-count">8</div>
                      </div>
                      <div className="mockup-kanban-card">
                        <div className="mockup-kanban-card-label">Johnson Family</div>
                        <div className="mockup-kanban-card-meta">Mon 9:00 &middot; Sarah M.</div>
                      </div>
                      <div className="mockup-kanban-card">
                        <div className="mockup-kanban-card-label">42 Oak Street</div>
                        <div className="mockup-kanban-card-meta">Mon 11:00 &middot; James K.</div>
                      </div>
                      <div className="mockup-kanban-card">
                        <div className="mockup-kanban-card-label">Mitchell Home</div>
                        <div className="mockup-kanban-card-meta">Wed 9:00 &middot; Lucy P.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Recurring Jobs */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Recurring Jobs</h3>
              <p>
                Set up weekly, fortnightly, or monthly recurring schedules and let them run
                themselves. Jobs auto-populate on the calendar, staff get notified, and customers get
                reminders. Your bread and butter, on autopilot.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/recurring</div>
                </div>
                <div className="mockup-body">
                  <table className="mockup-table">
                    <thead>
                      <tr><th>Customer</th><th>Service</th><th>Frequency</th><th>Next Run</th><th>Assignee</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Johnson Family</td>
                        <td>Standard Clean</td>
                        <td><span className="mockup-badge green">Weekly</span></td>
                        <td>Mon, Mar 14</td>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div className="mockup-avatar sm" style={{ background: '#3ECF8E' }}>S</div> Sarah M.
                        </td>
                      </tr>
                      <tr>
                        <td>Oak St Office</td>
                        <td>Office Clean</td>
                        <td><span className="mockup-badge blue">Fortnightly</span></td>
                        <td>Tue, Mar 15</td>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div className="mockup-avatar sm" style={{ background: '#5b8def' }}>J</div> James K.
                        </td>
                      </tr>
                      <tr>
                        <td>Airbnb #4</td>
                        <td>Turnover Clean</td>
                        <td><span className="mockup-badge purple">Per booking</span></td>
                        <td>Wed, Mar 16</td>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div className="mockup-avatar sm" style={{ background: '#a78bfa' }}>L</div> Lucy P.
                        </td>
                      </tr>
                      <tr>
                        <td>Park View</td>
                        <td>Commercial Deep</td>
                        <td><span className="mockup-badge orange">Monthly</span></td>
                        <td>Fri, Mar 25</td>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div className="mockup-avatar sm" style={{ background: '#f97316' }}>T</div> Team A
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More features grid */}
      <section className="product-more-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>And that&rsquo;s not all</h2>
          <div className="product-mini-grid animate-on-scroll">
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128203;</div>
              <h4>Bookings</h4>
              <p>Accept and manage bookings with instant confirmation and customer notifications.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128196;</div>
              <h4>Quotes</h4>
              <p>Generate accurate quotes based on property size, service type, and add-ons.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128064;</div>
              <h4>Today&rsquo;s Jobs</h4>
              <p>A focused daily view showing exactly what needs to happen today and who&rsquo;s doing it.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128100;</div>
              <h4>Customers</h4>
              <p>Full customer profiles with job history, preferences, access codes, and notes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="product-crosslinks">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>Works seamlessly with</h2>
          <div className="crosslink-grid animate-on-scroll">
            <a href="/product/staff-management" className="crosslink-card">
              <div className="crosslink-icon">&#128101;</div>
              <div>
                <h4>Staff Management</h4>
                <p>Assign staff to scheduled jobs and track their availability.</p>
              </div>
            </a>
            <a href="/product/custom-forms" className="crosslink-card">
              <div className="crosslink-icon">&#128221;</div>
              <div>
                <h4>Custom Forms</h4>
                <p>Bookings from your forms flow straight into the calendar.</p>
              </div>
            </a>
            <a href="/product/automations" className="crosslink-card">
              <div className="crosslink-icon">&#9889;</div>
              <div>
                <h4>Automations</h4>
                <p>Auto-assign jobs, send reminders, and trigger follow-ups.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Product', url: `${SITE_URL}/product` },
        { name: 'Scheduling', url: `${SITE_URL}/product/scheduling` },
      ])} />
    </>
  );
}
