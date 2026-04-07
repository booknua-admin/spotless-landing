import ProductCTA from '../../../components/product-cta';
import JsonLd from '../../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../../lib/seo';
import { breadcrumbSchema } from '../../../lib/schema';

const seo = getPageSeo('/product/finance');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
};

export default function FinancePage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Finance Tools</div>
          <h1 className="animate-on-scroll">Your numbers, finally<br />in one place</h1>
          <p className="section-sub animate-on-scroll">
            Revenue dashboards, transaction history, payout tracking, and export-ready reports.
            Everything your accountant wishes you&rsquo;d had from day one.
          </p>

          {/* Hero mockup: Revenue Dashboard */}
          <div className="animate-on-scroll" style={{ marginTop: '48px', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="mockup-window">
              <div className="mockup-topbar">
                <div className="mockup-topbar-dot r"></div>
                <div className="mockup-topbar-dot y"></div>
                <div className="mockup-topbar-dot g"></div>
                <div className="mockup-topbar-url">app.spotlessapp.io/finance</div>
              </div>
              <div className="mockup-body">
                <div className="mockup-stat-row" style={{ marginBottom: '16px' }}>
                  <div className="mockup-stat-card blue">
                    <div className="mockup-stat-label">Monthly Revenue</div>
                    <div className="mockup-stat-value">&euro;18,420</div>
                    <div className="mockup-stat-change">&uarr; 12% vs last month</div>
                  </div>
                  <div className="mockup-stat-card teal">
                    <div className="mockup-stat-label">Collected</div>
                    <div className="mockup-stat-value">&euro;17,230</div>
                    <div className="mockup-stat-change">93.5% rate</div>
                  </div>
                  <div className="mockup-stat-card orange">
                    <div className="mockup-stat-label">Outstanding</div>
                    <div className="mockup-stat-value">&euro;1,190</div>
                    <div className="mockup-stat-change" style={{ color: 'var(--orange-accent)' }}>6 invoices</div>
                  </div>
                  <div className="mockup-stat-card purple">
                    <div className="mockup-stat-label">Net Profit</div>
                    <div className="mockup-stat-value">&euro;6,260</div>
                    <div className="mockup-stat-change">&uarr; 34% margin</div>
                  </div>
                </div>
                {/* Mini revenue chart approximation */}
                <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px' }}>
                  <div className="mockup-section-title">Revenue Trend (6 months)</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '80px' }}>
                    {[45, 52, 58, 65, 72, 82].map((h, i) => (
                      <div key={i} style={{ flex: 1, background: i === 5 ? 'var(--mint)' : '#e5e7eb', borderRadius: '4px 4px 0 0', height: `${h}%`, transition: 'height 0.3s' }}></div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                    {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((m, i) => (
                      <div key={i} style={{ flex: 1, textAlign: 'center', fontSize: '9px', color: 'var(--text-lighter)' }}>{m}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Transactions */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Full Transaction History</h3>
              <p>
                Every payment, refund, and fee in one searchable list. Filter by date, customer,
                service type, or payment method. Click into any transaction for the full story &mdash;
                which job, which staff member, which customer.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/transactions</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-main-header">
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div className="mockup-btn ghost">All</div>
                      <div className="mockup-btn ghost">Income</div>
                      <div className="mockup-btn ghost">Fees</div>
                      <div className="mockup-btn ghost">Refunds</div>
                    </div>
                    <div className="mockup-btn outline">Export</div>
                  </div>
                  <table className="mockup-table">
                    <thead>
                      <tr><th>Date</th><th>Description</th><th>Amount</th><th>Type</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Mar 14</td><td>Johnson &mdash; Standard Clean</td><td style={{ color: '#16a34a', fontWeight: 600 }}>+&euro;85.00</td><td><span className="mockup-badge green">Income</span></td></tr>
                      <tr><td>Mar 14</td><td>Processing fee</td><td style={{ color: '#dc2626', fontWeight: 600 }}>-&euro;2.77</td><td><span className="mockup-badge gray">Fee</span></td></tr>
                      <tr><td>Mar 13</td><td>Park View &mdash; Deep Clean</td><td style={{ color: '#16a34a', fontWeight: 600 }}>+&euro;220.00</td><td><span className="mockup-badge green">Income</span></td></tr>
                      <tr><td>Mar 13</td><td>Processing fee</td><td style={{ color: '#dc2626', fontWeight: 600 }}>-&euro;6.68</td><td><span className="mockup-badge gray">Fee</span></td></tr>
                      <tr><td>Mar 12</td><td>Airbnb #3 &mdash; Turnover</td><td style={{ color: '#16a34a', fontWeight: 600 }}>+&euro;65.00</td><td><span className="mockup-badge green">Income</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Payouts */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Payout Timeline</h3>
              <p>
                Track when money hits your bank account. See pending payouts, completed transfers,
                and upcoming amounts. Reconcile with your bank in seconds instead of hours.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/payouts</div>
                </div>
                <div className="mockup-body">
                  <table className="mockup-table">
                    <thead>
                      <tr><th>Payout</th><th>Amount</th><th>Transactions</th><th>Status</th><th>Arrival</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>PO-0034</td>
                        <td style={{ fontWeight: 700 }}>&euro;2,840.00</td>
                        <td>14 payments</td>
                        <td><span className="mockup-badge green">Deposited</span></td>
                        <td>Mar 12</td>
                      </tr>
                      <tr>
                        <td>PO-0035</td>
                        <td style={{ fontWeight: 700 }}>&euro;1,960.00</td>
                        <td>9 payments</td>
                        <td><span className="mockup-badge orange">In transit</span></td>
                        <td>Mar 15</td>
                      </tr>
                      <tr>
                        <td>PO-0036</td>
                        <td style={{ fontWeight: 700 }}>&euro;3,120.00</td>
                        <td>16 payments</td>
                        <td><span className="mockup-badge blue">Pending</span></td>
                        <td>Mar 19</td>
                      </tr>
                    </tbody>
                  </table>
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
              <div className="product-mini-card-icon">&#128196;</div>
              <h4>Contracts</h4>
              <p>Track contract values, renewal dates, and recurring revenue from long-term clients.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
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
              <div className="crosslink-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
              <div>
                <h4>Payments &amp; Invoicing</h4>
                <p>Every payment automatically feeds into your financial dashboards.</p>
              </div>
            </a>
            <a href="/product/staff-management" className="crosslink-card">
              <div className="crosslink-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
              <div>
                <h4>Staff Management</h4>
                <p>Payroll costs tracked alongside revenue for true profitability.</p>
              </div>
            </a>
            <a href="/product/scheduling" className="crosslink-card">
              <div className="crosslink-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
              <div>
                <h4>Scheduling</h4>
                <p>See revenue per job, per day, or per service type directly from the calendar.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Product', url: `${SITE_URL}/product` },
        { name: 'Finance', url: `${SITE_URL}/product/finance` },
      ])} />
    </>
  );
}
