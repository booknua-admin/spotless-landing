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
          <div className="product-categories-grid animate-on-scroll">
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
            <div className="story-visual">
              <div className="story-visual-inner">
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <span style={{ background: 'rgba(200,230,49,0.15)', color: 'var(--lime)', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600 }}>3 Bed House &#10003;</span>
                  <span style={{ background: 'rgba(91,141,239,0.15)', color: 'var(--blue-accent)', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600 }}>Weekly &#10003;</span>
                  <span style={{ background: 'rgba(52,211,153,0.15)', color: 'var(--green-accent)', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600 }}>Deep Clean &#10003;</span>
                  <span style={{ background: 'rgba(167,139,250,0.15)', color: 'var(--purple-accent)', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600 }}>Oven + Fridge &#10003;</span>
                </div>
                <div style={{ textAlign: 'center', marginTop: '24px' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>ESTIMATED QUOTE</div>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--lime)', marginTop: '4px' }}>&euro;85</div>
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
            <div className="story-visual">
              <div className="story-visual-inner">
                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                  {['9:00 — Johnson Residence', '11:00 — 42 Oak Street', '14:00 — Airbnb Turnover'].map((job, i) => (
                    <div key={i} style={{ background: 'var(--navy)', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--white)', fontSize: '13px', fontWeight: 600 }}>{job}</span>
                      <span style={{ color: 'var(--green-accent)', fontSize: '12px', fontWeight: 600 }}>Confirmed</span>
                    </div>
                  ))}
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
            <div className="story-visual">
              <div className="story-visual-inner">
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ flex: 1, background: 'var(--navy)', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Active</div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--white)' }}>8</div>
                  </div>
                  <div style={{ flex: 1, background: 'var(--navy)', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>On Time</div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--green-accent)' }}>97%</div>
                  </div>
                  <div style={{ flex: 1, background: 'var(--navy)', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Hours</div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--lime)' }}>142</div>
                  </div>
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
            <div className="story-visual">
              <div className="story-visual-inner">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>THIS MONTH</div>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--white)', marginTop: '4px' }}>&euro;12,840</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>COLLECTED</div>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--green-accent)', marginTop: '4px' }}>98%</div>
                  </div>
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
            <div className="story-visual">
              <div className="story-visual-inner" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>ANNUAL REVENUE</div>
                <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--white)', marginTop: '4px' }}>&euro;154,200</div>
                <div style={{ fontSize: '14px', color: 'var(--green-accent)', fontWeight: 600, marginTop: '4px' }}>&#9650; 23% vs last year</div>
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
            <div className="story-visual">
              <div className="story-visual-inner" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px', fontWeight: 800, color: 'var(--white)' }}>4.9<span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.3)' }}>/5</span></div>
                <div style={{ color: '#f59e0b', fontSize: '20px', letterSpacing: '3px', marginTop: '4px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>247 reviews this quarter</div>
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
            <div className="story-visual">
              <div className="story-visual-inner">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Job completed → Send invoice', 'Payment received → Request review', 'New booking → Assign nearest staff'].map((rule, i) => (
                    <div key={i} style={{ background: 'var(--navy)', padding: '12px 16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: 'var(--lime)', fontWeight: 700 }}>&#9889;</span>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>{rule}</span>
                    </div>
                  ))}
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
