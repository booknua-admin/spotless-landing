import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Scheduling & Jobs — Spotless',
  description:
    'Drag-and-drop calendar, recurring jobs, pipeline management, and real-time scheduling for cleaning companies.',
};

export default function SchedulingPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-icon animate-on-scroll">&#128197;</div>
          <div className="section-tag animate-on-scroll">Scheduling &amp; Jobs</div>
          <h1 className="animate-on-scroll">Your entire week,<br />one drag away</h1>
          <p className="section-sub animate-on-scroll">
            A calendar built for cleaning companies. Drag jobs, manage recurring schedules, and track
            every lead from enquiry to completion.
          </p>
        </div>
      </section>

      {/* Hero feature 1: Calendar */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Drag-and-Drop Calendar</h3>
              <p>
                See your entire week at a glance. Drag jobs between days and time slots, assign them
                to staff members, and watch your schedule come together. Color-coded by status so
                you know what&rsquo;s confirmed, pending, and in progress.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Mon — 4 jobs', 'Tue — 6 jobs', 'Wed — 5 jobs', 'Thu — 7 jobs', 'Fri — 3 jobs'].map((day, i) => (
                  <div key={i} style={{ background: 'var(--navy)', padding: '10px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--white)', fontSize: '13px', fontWeight: 600 }}>{day}</span>
                    <span style={{ color: 'var(--green-accent)', fontSize: '12px' }}>&#10003;</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero feature 2: Pipeline */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Pipeline Management</h3>
              <p>
                Every lead and job moves through a visual pipeline — from new enquiry to quote sent
                to job confirmed to completed. Never lose track of where a customer is in your
                process. Filter by status, assignee, or service type.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                {[{ label: 'Leads', count: 12, color: 'var(--blue-accent)' }, { label: 'Quoted', count: 8, color: 'var(--orange-accent)' }, { label: 'Confirmed', count: 14, color: 'var(--green-accent)' }].map((stage, i) => (
                  <div key={i} style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: stage.color }}>{stage.count}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{stage.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero feature 3: Recurring Jobs */}
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
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[{ freq: 'Weekly', client: 'Johnson Family', color: 'var(--lime)' }, { freq: 'Fortnightly', client: 'Oak St Office', color: 'var(--blue-accent)' }, { freq: 'Monthly', client: 'Airbnb #4', color: 'var(--purple-accent)' }].map((job, i) => (
                  <div key={i} style={{ background: 'var(--navy)', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--white)', fontSize: '13px', fontWeight: 600 }}>{job.client}</span>
                    <span style={{ color: job.color, fontSize: '12px', fontWeight: 600 }}>{job.freq} &#8635;</span>
                  </div>
                ))}
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
    </>
  );
}
