import ProductCTA from '../../../components/product-cta';
import JsonLd from '../../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../../lib/seo';
import { breadcrumbSchema } from '../../../lib/schema';

const seo = getPageSeo('/product/payments');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
};

export default function PaymentsPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Payments &amp; Invoicing</div>
          <h1 className="animate-on-scroll">Stop chasing money.<br />Let it chase you.</h1>
          <p className="section-sub animate-on-scroll">
            Invoices send themselves, cards charge on completion, and reminders chase the rest.
            98% average collection rate.
          </p>

          {/* Hero mockup: Transaction list */}
          <div className="animate-on-scroll" style={{ marginTop: '48px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="mockup-window">
              <div className="mockup-topbar">
                <div className="mockup-topbar-dot r"></div>
                <div className="mockup-topbar-dot y"></div>
                <div className="mockup-topbar-dot g"></div>
                <div className="mockup-topbar-url">app.spotlessapp.io/payments</div>
              </div>
              <div className="mockup-body">
                <div className="mockup-stat-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '16px' }}>
                  <div className="mockup-stat-card">
                    <div className="mockup-stat-label">This Month</div>
                    <div className="mockup-stat-value">&euro;8,420</div>
                    <div className="mockup-stat-change">&uarr; 18%</div>
                  </div>
                  <div className="mockup-stat-card teal">
                    <div className="mockup-stat-label">Collection Rate</div>
                    <div className="mockup-stat-value">98%</div>
                  </div>
                  <div className="mockup-stat-card orange">
                    <div className="mockup-stat-label">Overdue</div>
                    <div className="mockup-stat-value">&euro;170</div>
                    <div className="mockup-stat-change" style={{ color: 'var(--orange-accent)' }}>2 invoices</div>
                  </div>
                </div>
                <table className="mockup-table">
                  <thead>
                    <tr><th>Invoice</th><th>Customer</th><th>Date</th><th>Amount</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#INV-0251</td><td>Johnson Family</td><td>Mar 14</td>
                      <td style={{ fontWeight: 600 }}>&euro;85.00</td>
                      <td><span className="mockup-badge green">Paid</span></td>
                    </tr>
                    <tr>
                      <td>#INV-0250</td><td>Park View Office</td><td>Mar 13</td>
                      <td style={{ fontWeight: 600 }}>&euro;220.00</td>
                      <td><span className="mockup-badge green">Paid</span></td>
                    </tr>
                    <tr>
                      <td>#INV-0249</td><td>Oak Street</td><td>Mar 12</td>
                      <td style={{ fontWeight: 600 }}>&euro;150.00</td>
                      <td><span className="mockup-badge orange">Pending</span></td>
                    </tr>
                    <tr>
                      <td>#INV-0248</td><td>Ellis Residence</td><td>Mar 10</td>
                      <td style={{ fontWeight: 600 }}>&euro;95.00</td>
                      <td><span className="mockup-badge green">Paid</span></td>
                    </tr>
                    <tr>
                      <td>#INV-0247</td><td>Maple Court</td><td>Mar 8</td>
                      <td style={{ fontWeight: 600 }}>&euro;120.00</td>
                      <td><span className="mockup-badge red">Overdue</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Invoice */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Professional Auto-Invoicing</h3>
              <p>
                Jobs finish, invoices send. Spotless generates professional, branded invoices
                automatically when a job is marked complete. Customers get a clear breakdown of
                services, and you never have to open a spreadsheet again.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/invoice/INV-0251</div>
                </div>
                <div className="mockup-body" style={{ padding: '24px' }}>
                  <div className="mockup-invoice">
                    <div className="mockup-invoice-header">
                      <div>
                        <div className="mockup-invoice-title">Invoice #INV-0251</div>
                        <div className="mockup-invoice-number">Johnson Family &middot; Mar 14, 2026</div>
                      </div>
                      <span className="mockup-badge green">Paid</span>
                    </div>
                    <div className="mockup-invoice-line">
                      <span>Standard House Clean (3 bed)</span>
                      <span style={{ fontWeight: 600 }}>&euro;85.00</span>
                    </div>
                    <div className="mockup-invoice-line">
                      <span>Oven Cleaning</span>
                      <span style={{ fontWeight: 600 }}>&euro;25.00</span>
                    </div>
                    <div className="mockup-invoice-line">
                      <span>Fridge Clean</span>
                      <span style={{ fontWeight: 600 }}>&euro;15.00</span>
                    </div>
                    <div className="mockup-invoice-line">
                      <span style={{ color: 'var(--mint)' }}>Weekly discount (10%)</span>
                      <span style={{ fontWeight: 600, color: 'var(--mint)' }}>-&euro;12.50</span>
                    </div>
                    <div className="mockup-invoice-total">
                      <span>Total</span>
                      <span>&euro;112.50</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '14px' }}>
                    <div className="mockup-btn primary" style={{ padding: '10px 32px' }}>Pay Now &mdash; &euro;112.50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Recurring Billing */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Recurring Billing Dashboard</h3>
              <p>
                Set up recurring charges for regular customers. Cards are billed automatically on
                schedule &mdash; weekly, fortnightly, or monthly. Customers can manage their payment
                method through the client portal. Zero admin on your end.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/subscriptions</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-main-header">
                    <div className="mockup-main-title">Active Subscriptions</div>
                    <div className="mockup-btn primary">+ New Subscription</div>
                  </div>
                  <table className="mockup-table">
                    <thead>
                      <tr><th>Customer</th><th>Amount</th><th>Frequency</th><th>Next Billing</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Johnson Family</td><td style={{ fontWeight: 600 }}>&euro;85.00</td>
                        <td>Weekly</td><td>Mar 21</td>
                        <td><span className="mockup-badge green">Active</span></td>
                      </tr>
                      <tr>
                        <td>Park View Office</td><td style={{ fontWeight: 600 }}>&euro;150.00</td>
                        <td>Fortnightly</td><td>Mar 27</td>
                        <td><span className="mockup-badge green">Active</span></td>
                      </tr>
                      <tr>
                        <td>Mitchell Home</td><td style={{ fontWeight: 600 }}>&euro;75.00</td>
                        <td>Monthly</td><td>Apr 1</td>
                        <td><span className="mockup-badge green">Active</span></td>
                      </tr>
                      <tr>
                        <td>Airbnb #12</td><td style={{ fontWeight: 600 }}>&euro;65.00</td>
                        <td>Per clean</td><td>On demand</td>
                        <td><span className="mockup-badge blue">On demand</span></td>
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
              <div className="product-mini-card-icon">&#128276;</div>
              <h4>Payment Reminders</h4>
              <p>Automatic gentle nudges for overdue invoices. Customise the timing and tone.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128280;</div>
              <h4>Secure Payments</h4>
              <p>PCI-compliant payment processing built in. Setup takes minutes.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#8634;</div>
              <h4>Refunds</h4>
              <p>Process full or partial refunds directly from the dashboard in two clicks.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128424;</div>
              <h4>Receipts</h4>
              <p>Branded receipts sent automatically after every successful payment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-crosslinks">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>Works seamlessly with</h2>
          <div className="crosslink-grid animate-on-scroll">
            <a href="/product/finance" className="crosslink-card">
              <div className="crosslink-icon">&#128200;</div>
              <div>
                <h4>Finance Tools</h4>
                <p>Every payment feeds into your revenue dashboards and reports.</p>
              </div>
            </a>
            <a href="/product/scheduling" className="crosslink-card">
              <div className="crosslink-icon">&#128197;</div>
              <div>
                <h4>Scheduling</h4>
                <p>Invoices generate automatically when jobs are marked complete.</p>
              </div>
            </a>
            <a href="/product/automations" className="crosslink-card">
              <div className="crosslink-icon">&#9889;</div>
              <div>
                <h4>Automations</h4>
                <p>Trigger follow-ups, review requests, or alerts based on payment status.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Product', url: `${SITE_URL}/product` },
        { name: 'Payments', url: `${SITE_URL}/product/payments` },
      ])} />
    </>
  );
}
