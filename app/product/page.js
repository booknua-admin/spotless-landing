export const metadata = {
  title: 'Spotless Platform — The Complete OS for Cleaning Companies',
  description:
    'See how Spotless handles every part of your cleaning business — from booking to payment, staff to reviews. One platform, zero chaos.',
};

export default function ProductOverviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Platform Overview</div>
          <h1 className="animate-on-scroll">
            One platform.<br />Every part of your business.
          </h1>
          <p className="section-sub animate-on-scroll">
            From the first booking request to the 5-star review, Spotless runs your entire cleaning
            company. Here&rsquo;s what a day looks like when everything just works.
          </p>

          {/* Dashboard Mockup */}
          <div className="animate-on-scroll" style={{ marginTop: '48px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="mockup-window">
              <div className="mockup-topbar">
                <div className="mockup-topbar-dot r"></div>
                <div className="mockup-topbar-dot y"></div>
                <div className="mockup-topbar-dot g"></div>
                <div className="mockup-topbar-url">app.spotlessapp.io/dashboard</div>
              </div>
              <div className="mockup-sidebar-layout">
                <div className="mockup-sidebar">
                  <div className="mockup-sidebar-brand">Spotless.</div>
                  <div className="mockup-sidebar-item active">
                    <span className="mockup-sidebar-icon">&#9679;</span> Overview
                  </div>
                  <div className="mockup-sidebar-item">
                    <span className="mockup-sidebar-icon">&#128197;</span> Schedule
                  </div>
                  <div className="mockup-sidebar-item">
                    <span className="mockup-sidebar-icon">&#128101;</span> Customers
                  </div>
                  <div className="mockup-sidebar-item">
                    <span className="mockup-sidebar-icon">&#128179;</span> Invoices
                  </div>
                  <div className="mockup-sidebar-item">
                    <span className="mockup-sidebar-icon">&#128100;</span> Staff
                  </div>
                  <div className="mockup-sidebar-item">
                    <span className="mockup-sidebar-icon">&#128200;</span> Finance
                  </div>
                </div>
                <div className="mockup-main-content">
                  <div className="mockup-main-header">
                    <div className="mockup-main-title">Dashboard</div>
                    <div className="mockup-btn primary">+ New</div>
                  </div>
                  <div className="mockup-stat-row" style={{ marginBottom: '16px' }}>
                    <div className="mockup-stat-card blue">
                      <div className="mockup-stat-label">Jobs Today</div>
                      <div className="mockup-stat-value">12</div>
                      <div className="mockup-stat-change">3 in progress</div>
                    </div>
                    <div className="mockup-stat-card teal">
                      <div className="mockup-stat-label">Revenue (MTD)</div>
                      <div className="mockup-stat-value">&euro;14,280</div>
                      <div className="mockup-stat-change">&uarr; 23% vs last month</div>
                    </div>
                    <div className="mockup-stat-card orange">
                      <div className="mockup-stat-label">Pending Invoices</div>
                      <div className="mockup-stat-value">4</div>
                      <div className="mockup-stat-change" style={{ color: 'var(--orange-accent)' }}>&euro;680 outstanding</div>
                    </div>
                    <div className="mockup-stat-card purple">
                      <div className="mockup-stat-label">Avg Rating</div>
                      <div className="mockup-stat-value">4.9</div>
                      <div className="mockup-stat-change">247 reviews</div>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <div className="mockup-section-title">Today&rsquo;s Schedule</div>
                      <div className="mockup-alert-card green">
                        <div className="mockup-alert-dot"></div>
                        9:00 &mdash; Johnson Residence (Sarah M.)
                      </div>
                      <div className="mockup-alert-card blue">
                        <div className="mockup-alert-dot"></div>
                        11:00 &mdash; 42 Oak Street (James K.)
                      </div>
                      <div className="mockup-alert-card green">
                        <div className="mockup-alert-dot"></div>
                        14:00 &mdash; Airbnb Turnover (Lucy P.)
                      </div>
                    </div>
                    <div>
                      <div className="mockup-section-title">Action Required</div>
                      <div className="mockup-alert-card amber">
                        <div className="mockup-alert-dot"></div>
                        Quote request &mdash; 4 Bed Deep Clean
                      </div>
                      <div className="mockup-alert-card amber">
                        <div className="mockup-alert-dot"></div>
                        Payment overdue &mdash; Park View Office
                      </div>
                      <div className="mockup-alert-card blue">
                        <div className="mockup-alert-dot"></div>
                        New review &mdash; 5 stars from Rachel K.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-categories-grid animate-on-scroll" style={{ marginTop: '56px' }}>
            <a href="/product/scheduling" className="product-category-card">
              <div className="mega-menu-icon">&#128197;</div>
              <h4>Scheduling</h4>
            </a>
            <a href="/product/custom-forms" className="product-category-card">
              <div className="mega-menu-icon">&#128221;</div>
              <h4>Custom Forms</h4>
            </a>
            <a href="/product/payments" className="product-category-card">
              <div className="mega-menu-icon">&#128179;</div>
              <h4>Payments</h4>
            </a>
            <a href="/product/staff-management" className="product-category-card">
              <div className="mega-menu-icon">&#128101;</div>
              <h4>Staff</h4>
            </a>
            <a href="/product/finance" className="product-category-card">
              <div className="mega-menu-icon">&#128200;</div>
              <h4>Finance</h4>
            </a>
            <a href="/product/referrals-reviews" className="product-category-card">
              <div className="mega-menu-icon">&#11088;</div>
              <h4>Reviews</h4>
            </a>
            <a href="/product/automations" className="product-category-card">
              <div className="mega-menu-icon">&#9889;</div>
              <h4>Automations</h4>
            </a>
            <a href="/#pricing" className="product-category-card">
              <div className="mega-menu-icon">&#128176;</div>
              <h4>Pricing</h4>
            </a>
          </div>
        </div>
      </section>

      {/* Story 1: Win the work */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid animate-on-scroll">
            <div className="story-content">
              <div className="story-label">Morning &mdash; Win the Work</div>
              <h2>Leads come in while you sleep</h2>
              <p>
                Your booking forms sit on your website collecting quote requests 24/7. Customers pick
                their property type, square footage, frequency, and extras &mdash; and Spotless
                auto-generates an accurate quote before you&rsquo;ve had your first coffee.
              </p>
              <a href="/product/custom-forms" className="story-link">
                Explore Custom Forms <span>&rarr;</span>
              </a>
            </div>
            <div className="story-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window" style={{ width: '100%' }}>
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">yoursite.com/book</div>
                </div>
                <div className="mockup-body" style={{ padding: '24px' }}>
                  <div className="mockup-section-title" style={{ fontSize: '14px', marginBottom: '16px' }}>Request a Quote</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                    <div className="mockup-form-field">
                      <div className="mockup-form-label">Property Type</div>
                      <div className="mockup-form-input select">House &#9662;</div>
                    </div>
                    <div className="mockup-form-field">
                      <div className="mockup-form-label">Bedrooms</div>
                      <div className="mockup-form-input select">3 Bedrooms &#9662;</div>
                    </div>
                  </div>
                  <div className="mockup-form-field" style={{ marginBottom: '14px' }}>
                    <div className="mockup-form-label">Frequency</div>
                    <div className="mockup-form-radio-group">
                      <div className="mockup-form-radio"><div className="mockup-form-radio-dot active"></div> Weekly</div>
                      <div className="mockup-form-radio"><div className="mockup-form-radio-dot"></div> Fortnightly</div>
                      <div className="mockup-form-radio"><div className="mockup-form-radio-dot"></div> One-off</div>
                    </div>
                  </div>
                  <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Estimated Quote</div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#16a34a', marginTop: '4px' }}>&euro;85</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 2: Schedule the day */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid animate-on-scroll">
            <div className="story-content">
              <div className="story-label">Schedule &mdash; Own the Calendar</div>
              <h2>Drag, drop, done</h2>
              <p>
                Your whole week laid out in a drag-and-drop calendar. Recurring jobs auto-populate,
                new bookings slot right in, and your pipeline shows every lead from enquiry to
                confirmed job. No spreadsheets, no sticky notes.
              </p>
              <a href="/product/scheduling" className="story-link">
                Explore Scheduling <span>&rarr;</span>
              </a>
            </div>
            <div className="story-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window" style={{ width: '100%' }}>
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/schedule</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-calendar">
                    <div className="mockup-cal-day">
                      <div className="mockup-cal-day-header">Mon 14</div>
                      <div className="mockup-cal-event green">9:00 Johnson</div>
                      <div className="mockup-cal-event blue">11:00 Oak St</div>
                      <div className="mockup-cal-event green">14:00 Airbnb</div>
                      <div className="mockup-cal-event purple">16:00 Deep Cln</div>
                    </div>
                    <div className="mockup-cal-day">
                      <div className="mockup-cal-day-header">Tue 15</div>
                      <div className="mockup-cal-event blue">8:30 Park View</div>
                      <div className="mockup-cal-event green">10:00 Ellis Rd</div>
                      <div className="mockup-cal-event orange">13:00 Quote</div>
                    </div>
                    <div className="mockup-cal-day">
                      <div className="mockup-cal-day-header">Wed 16</div>
                      <div className="mockup-cal-event green">9:00 Mitchell</div>
                      <div className="mockup-cal-event teal">11:30 Airbnb</div>
                      <div className="mockup-cal-event blue">14:00 Office</div>
                      <div className="mockup-cal-event green">16:30 Kim</div>
                    </div>
                    <div className="mockup-cal-day">
                      <div className="mockup-cal-day-header">Thu 17</div>
                      <div className="mockup-cal-event purple">9:00 Deep Cln</div>
                      <div className="mockup-cal-event green">12:00 Harris</div>
                      <div className="mockup-cal-event blue">15:00 Retail</div>
                    </div>
                    <div className="mockup-cal-day">
                      <div className="mockup-cal-day-header">Fri 18</div>
                      <div className="mockup-cal-event green">9:00 Weekly</div>
                      <div className="mockup-cal-event teal">11:00 Turnover</div>
                      <div className="mockup-cal-event orange">14:00 New Lead</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 3: Your team, sorted */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid animate-on-scroll">
            <div className="story-content">
              <div className="story-label">Team &mdash; Your People, Sorted</div>
              <h2>Everyone knows where to be</h2>
              <p>
                Staff see their schedule in real-time, clock in with geofencing, and swap shifts
                without calling you. Open shifts get filled automatically, and payroll calculates
                itself based on tracked hours.
              </p>
              <a href="/product/staff-management" className="story-link">
                Explore Staff Management <span>&rarr;</span>
              </a>
            </div>
            <div className="story-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window" style={{ width: '100%' }}>
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/staff</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-stat-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '14px' }}>
                    <div className="mockup-stat-card blue">
                      <div className="mockup-stat-label">Active Staff</div>
                      <div className="mockup-stat-value">8</div>
                    </div>
                    <div className="mockup-stat-card">
                      <div className="mockup-stat-label">Jobs Today</div>
                      <div className="mockup-stat-value">14</div>
                    </div>
                    <div className="mockup-stat-card teal">
                      <div className="mockup-stat-label">On Time Rate</div>
                      <div className="mockup-stat-value">97%</div>
                    </div>
                  </div>
                  <table className="mockup-table">
                    <thead>
                      <tr><th>Staff</th><th>Status</th><th>Jobs</th><th>Hours</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div className="mockup-avatar" style={{ background: '#3ECF8E' }}>S</div> Sarah M.
                        </td>
                        <td><span className="mockup-status-dot active"></span> On site</td>
                        <td>4</td>
                        <td>6.5h</td>
                      </tr>
                      <tr>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div className="mockup-avatar" style={{ background: '#5b8def' }}>J</div> James K.
                        </td>
                        <td><span className="mockup-status-dot away"></span> Travelling</td>
                        <td>3</td>
                        <td>4.0h</td>
                      </tr>
                      <tr>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div className="mockup-avatar" style={{ background: '#a78bfa' }}>L</div> Lucy P.
                        </td>
                        <td><span className="mockup-status-dot active"></span> On site</td>
                        <td>5</td>
                        <td>7.0h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 4: Get paid */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid animate-on-scroll">
            <div className="story-content">
              <div className="story-label">Money &mdash; Get Paid, Automatically</div>
              <h2>Invoices that chase themselves</h2>
              <p>
                Jobs finish, invoices send themselves, cards get charged on completion, and gentle
                reminders chase late payers. You go from chasing money to watching it land. 98%
                collection rate, on average.
              </p>
              <a href="/product/payments" className="story-link">
                Explore Payments <span>&rarr;</span>
              </a>
            </div>
            <div className="story-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window" style={{ width: '100%' }}>
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/invoices</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-stat-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '14px' }}>
                    <div className="mockup-stat-card">
                      <div className="mockup-stat-label">This Month</div>
                      <div className="mockup-stat-value">&euro;12,840</div>
                    </div>
                    <div className="mockup-stat-card teal">
                      <div className="mockup-stat-label">Collected</div>
                      <div className="mockup-stat-value">98%</div>
                    </div>
                    <div className="mockup-stat-card orange">
                      <div className="mockup-stat-label">Outstanding</div>
                      <div className="mockup-stat-value">&euro;256</div>
                    </div>
                  </div>
                  <table className="mockup-table">
                    <thead>
                      <tr><th>Invoice</th><th>Customer</th><th>Amount</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#INV-0247</td><td>Johnson Family</td><td>&euro;85.00</td>
                        <td><span className="mockup-badge green">Paid</span></td>
                      </tr>
                      <tr>
                        <td>#INV-0248</td><td>Park View Office</td><td>&euro;220.00</td>
                        <td><span className="mockup-badge green">Paid</span></td>
                      </tr>
                      <tr>
                        <td>#INV-0249</td><td>Oak Street</td><td>&euro;150.00</td>
                        <td><span className="mockup-badge orange">Pending</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 5: Know your numbers */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid animate-on-scroll">
            <div className="story-content">
              <div className="story-label">Finance &mdash; Know Your Numbers</div>
              <h2>Your business, at a glance</h2>
              <p>
                Revenue by service type, payout schedules, contract values, and expense tracking
                &mdash; all in real-time dashboards. Export anything for your accountant, or just
                enjoy knowing exactly where you stand.
              </p>
              <a href="/product/finance" className="story-link">
                Explore Finance Tools <span>&rarr;</span>
              </a>
            </div>
            <div className="story-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window" style={{ width: '100%' }}>
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/finance</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-stat-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '14px' }}>
                    <div className="mockup-stat-card blue">
                      <div className="mockup-stat-label">Annual Revenue</div>
                      <div className="mockup-stat-value">&euro;154,200</div>
                      <div className="mockup-stat-change">&uarr; 23% vs last year</div>
                    </div>
                    <div className="mockup-stat-card">
                      <div className="mockup-stat-label">Monthly Avg</div>
                      <div className="mockup-stat-value">&euro;12,850</div>
                      <div className="mockup-stat-change">&uarr; 12%</div>
                    </div>
                    <div className="mockup-stat-card purple">
                      <div className="mockup-stat-label">Net Margin</div>
                      <div className="mockup-stat-value">34%</div>
                      <div className="mockup-stat-change">&uarr; 4pts</div>
                    </div>
                  </div>
                  <div className="mockup-section-title">Recent Transactions</div>
                  <table className="mockup-table">
                    <thead>
                      <tr><th>Description</th><th>Amount</th><th>Type</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Johnson &mdash; Standard Clean</td><td style={{ color: '#16a34a', fontWeight: 600 }}>+&euro;85</td><td><span className="mockup-badge green">Income</span></td></tr>
                      <tr><td>Park View &mdash; Deep Clean</td><td style={{ color: '#16a34a', fontWeight: 600 }}>+&euro;220</td><td><span className="mockup-badge green">Income</span></td></tr>
                      <tr><td>Stripe processing fee</td><td style={{ color: '#dc2626', fontWeight: 600 }}>-&euro;4.20</td><td><span className="mockup-badge gray">Fee</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 6: Grow on autopilot */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid animate-on-scroll">
            <div className="story-content">
              <div className="story-label">Growth &mdash; Grow on Autopilot</div>
              <h2>5-star reputation, zero effort</h2>
              <p>
                After every job, Spotless automatically requests a review. Happy customers get
                funnelled to Google. Unhappy ones get caught before they go public. Meanwhile, your
                referral program turns every client into a sales rep.
              </p>
              <a href="/product/referrals-reviews" className="story-link">
                Explore Referrals &amp; Reviews <span>&rarr;</span>
              </a>
            </div>
            <div className="story-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window" style={{ width: '100%' }}>
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/reviews</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-stat-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '14px' }}>
                    <div className="mockup-stat-card">
                      <div className="mockup-stat-label">Avg Rating</div>
                      <div className="mockup-stat-value">4.9 / 5</div>
                    </div>
                    <div className="mockup-stat-card teal">
                      <div className="mockup-stat-label">This Quarter</div>
                      <div className="mockup-stat-value">247</div>
                      <div className="mockup-stat-change">reviews collected</div>
                    </div>
                    <div className="mockup-stat-card blue">
                      <div className="mockup-stat-label">Referral Revenue</div>
                      <div className="mockup-stat-value">&euro;3,420</div>
                    </div>
                  </div>
                  <div className="mockup-review-card">
                    <div className="mockup-review-header">
                      <div className="mockup-review-author">
                        <div className="mockup-avatar" style={{ background: '#3ECF8E' }}>R</div>
                        <div className="mockup-review-name">Rachel K.</div>
                      </div>
                      <div className="mockup-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    </div>
                    <div className="mockup-review-text">&ldquo;Absolutely spotless every time. The team is always on time and professional.&rdquo;</div>
                  </div>
                  <div className="mockup-review-card">
                    <div className="mockup-review-header">
                      <div className="mockup-review-author">
                        <div className="mockup-avatar" style={{ background: '#5b8def' }}>M</div>
                        <div className="mockup-review-name">Mark O.</div>
                      </div>
                      <div className="mockup-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    </div>
                    <div className="mockup-review-text">&ldquo;Best cleaning service we&rsquo;ve used. Booking online was so easy.&rdquo;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 7: Let the system work */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid animate-on-scroll">
            <div className="story-content">
              <div className="story-label">Automations &mdash; Let the System Work</div>
              <h2>Set it once, never think about it again</h2>
              <p>
                Confirmation emails, follow-up messages, pricing adjustments, job assignments &mdash;
                build workflows that handle the repetitive stuff so you can focus on growing the
                business, not running it.
              </p>
              <a href="/product/automations" className="story-link">
                Explore Automations <span>&rarr;</span>
              </a>
            </div>
            <div className="story-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window" style={{ width: '100%' }}>
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/automations</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-section-title">Active Workflows</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}>
                      <div className="mockup-flow-node trigger">Job Completed</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node action">Send Invoice</div>
                      <div style={{ marginLeft: '12px' }}><span className="mockup-badge green">Active</span></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}>
                      <div className="mockup-flow-node trigger">Payment Received</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node condition">Rating Check</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node action">Request Review</div>
                      <div style={{ marginLeft: '12px' }}><span className="mockup-badge green">Active</span></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}>
                      <div className="mockup-flow-node trigger">New Booking</div>
                      <div className="mockup-flow-arrow"></div>
                      <div className="mockup-flow-node action">Assign Nearest Staff</div>
                      <div style={{ marginLeft: '12px' }}><span className="mockup-badge green">Active</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title animate-on-scroll">
            Ready to run your cleaning business<br />like a machine?
          </h2>
          <p className="section-sub animate-on-scroll">
            Join 500+ cleaning companies who&rsquo;ve already made the switch. Your 14-day free
            trial starts now &mdash; no credit card needed.
          </p>
          <div className="final-cta-actions animate-on-scroll">
            <a href="#" className="btn-primary btn-primary-lg">
              Start Your Free Trial <span>&rarr;</span>
            </a>
            <a href="#" className="btn-ghost">
              Book a Demo
            </a>
          </div>
          <div className="final-cta-note animate-on-scroll">
            Free 14-day trial &middot; No credit card required &middot; Cancel anytime
          </div>
        </div>
      </section>
    </>
  );
}
