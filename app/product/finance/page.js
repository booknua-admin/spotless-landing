import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Finance Tools — Spotless',
  description:
    'Revenue analytics, transaction tracking, payout management, and financial reporting for cleaning companies.',
};

export default function FinancePage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-icon animate-on-scroll">&#128200;</div>
          <div className="section-tag animate-on-scroll">Finance Tools</div>
          <h1 className="animate-on-scroll">Know exactly where<br />your money goes</h1>
          <p className="section-sub animate-on-scroll">
            Revenue dashboards, transaction history, payout tracking, and export-ready reports.
            Everything your accountant wishes you&rsquo;d had from day one.
          </p>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Revenue Analytics</h3>
              <p>
                Real-time dashboards showing revenue by service type, by team, by time period. See
                what&rsquo;s growing, what&rsquo;s declining, and where your most profitable work
                comes from. Month-over-month comparisons at a glance.
              </p>
            </div>
            <div className="product-feature-visual" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>THIS MONTH</div>
              <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--white)', marginTop: '8px' }}>&euro;18,420</div>
              <div style={{ fontSize: '14px', color: 'var(--green-accent)', fontWeight: 600, marginTop: '4px' }}>&#9650; 12% vs last month</div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Transactions</h3>
              <p>
                Every payment, refund, and fee in one searchable list. Filter by date, customer,
                service type, or payment method. Click into any transaction for the full story —
                which job, which staff member, which customer.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[{ desc: 'Johnson — Standard Clean', amount: '+€85', color: 'var(--green-accent)' }, { desc: 'Park View — Deep Clean', amount: '+€220', color: 'var(--green-accent)' }, { desc: 'Stripe Fee', amount: '-€4.20', color: 'var(--red-accent)' }].map((tx, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>{tx.desc}</span>
                    <span style={{ color: tx.color, fontSize: '13px', fontWeight: 600 }}>{tx.amount}</span>
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
              <h3>Payouts</h3>
              <p>
                Track when money hits your bank account. See pending payouts, completed transfers,
                and upcoming amounts. Reconcile with your bank in seconds instead of hours.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[{ date: 'Mar 14', amount: '€2,840', status: 'Deposited' }, { date: 'Mar 16', amount: '€1,960', status: 'Pending' }].map((payout, i) => (
                  <div key={i} style={{ background: 'var(--navy)', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ color: 'var(--white)', fontSize: '13px', fontWeight: 600 }}>{payout.amount}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>{payout.date}</div>
                    </div>
                    <span style={{ color: payout.status === 'Deposited' ? 'var(--green-accent)' : 'var(--orange-accent)', fontSize: '12px', fontWeight: 600 }}>{payout.status}</span>
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
              <div className="product-mini-card-icon">&#128196;</div>
              <h4>Contracts</h4>
              <p>Track contract values, renewal dates, and recurring revenue from long-term clients.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128202;</div>
              <h4>Reports</h4>
              <p>Pre-built reports for revenue, expenses, staff costs, and profitability.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128229;</div>
              <h4>Audit &amp; Export</h4>
              <p>Export any data to CSV or PDF. Full audit trail for every financial transaction.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128184;</div>
              <h4>Expense Tracking</h4>
              <p>Log supplies, fuel, and other costs against jobs to see true profitability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-crosslinks">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>Works seamlessly with</h2>
          <div className="crosslink-grid animate-on-scroll">
            <a href="/product/payments" className="crosslink-card">
              <div className="crosslink-icon">&#128179;</div>
              <div>
                <h4>Payments &amp; Invoicing</h4>
                <p>Every payment automatically feeds into your financial dashboards.</p>
              </div>
            </a>
            <a href="/product/staff-management" className="crosslink-card">
              <div className="crosslink-icon">&#128101;</div>
              <div>
                <h4>Staff Management</h4>
                <p>Payroll costs tracked alongside revenue for true profitability.</p>
              </div>
            </a>
            <a href="/product/scheduling" className="crosslink-card">
              <div className="crosslink-icon">&#128197;</div>
              <div>
                <h4>Scheduling</h4>
                <p>See revenue per job, per day, or per service type directly from the calendar.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />
    </>
  );
}
