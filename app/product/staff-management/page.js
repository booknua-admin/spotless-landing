import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Staff Management — Spotless',
  description:
    'Assign jobs, track hours, manage shifts, handle payroll, and give your team real-time schedule visibility.',
};

export default function StaffManagementPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-icon animate-on-scroll">&#128101;</div>
          <div className="section-tag animate-on-scroll">Staff Management</div>
          <h1 className="animate-on-scroll">Your team, sorted.<br />No group chat required.</h1>
          <p className="section-sub animate-on-scroll">
            Assign jobs, track hours, manage shifts, and run payroll — all from one place. Your staff
            see everything they need on their phone.
          </p>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Team Assignment</h3>
              <p>
                Assign jobs to individuals or teams with a click. See who&rsquo;s available, who&rsquo;s
                nearby, and who has the right skills. Reassign on the fly when things change —
                your team gets notified instantly on their mobile app.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[{ name: 'Sarah M.', jobs: 4, status: 'On site' }, { name: 'James K.', jobs: 3, status: 'Travelling' }, { name: 'Lucy P.', jobs: 5, status: 'Available' }].map((staff, i) => (
                  <div key={i} style={{ background: 'var(--navy)', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ color: 'var(--white)', fontSize: '13px', fontWeight: 600 }}>{staff.name}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>{staff.jobs} jobs today</div>
                    </div>
                    <span style={{ color: staff.status === 'Available' ? 'var(--lime)' : 'var(--green-accent)', fontSize: '12px', fontWeight: 600 }}>{staff.status}</span>
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
              <h3>Time Tracking</h3>
              <p>
                Staff clock in and out from the mobile app. GPS-verified check-ins so you know
                they&rsquo;re at the right location. Hours are tracked automatically and feed directly
                into payroll — no timesheets, no disputes.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1, background: 'var(--navy)', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>This Week</div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--white)' }}>142<span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>hrs</span></div>
                </div>
                <div style={{ flex: 1, background: 'var(--navy)', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>On Time</div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--green-accent)' }}>97%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Payroll</h3>
              <p>
                Hours tracked, rates applied, payroll calculated. Export payroll reports for your
                accountant or integrate with your payroll provider. See labour costs per job, per
                team, or per week. No more Friday afternoon spreadsheet sessions.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[{ name: 'Sarah M.', hours: '38h', amount: '€570' }, { name: 'James K.', hours: '32h', amount: '€480' }, { name: 'Lucy P.', hours: '40h', amount: '€600' }].map((pay, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                    <span style={{ color: 'var(--white)', fontSize: '13px', fontWeight: 600 }}>{pay.name}</span>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{pay.hours}</span>
                      <span style={{ color: 'var(--lime)', fontSize: '13px', fontWeight: 600 }}>{pay.amount}</span>
                    </div>
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
              <div className="product-mini-card-icon">&#128276;</div>
              <h4>Open Shifts</h4>
              <p>Post open shifts and let available staff claim them — first come, first served.</p>
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
    </>
  );
}
