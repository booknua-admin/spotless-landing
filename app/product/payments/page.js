import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Payments & Invoicing — Spotless',
  description:
    'Auto-generate invoices, accept card payments, manage recurring billing, and send payment reminders automatically.',
};

export default function PaymentsPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-icon animate-on-scroll">&#128179;</div>
          <div className="section-tag animate-on-scroll">Payments &amp; Invoicing</div>
          <h1 className="animate-on-scroll">Get paid on time,<br />every time</h1>
          <p className="section-sub animate-on-scroll">
            Invoices send themselves, cards charge on completion, and reminders chase the rest.
            98% average collection rate.
          </p>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Card Payments</h3>
              <p>
                Accept Visa, Mastercard, and all major cards directly through Spotless. Charge
                on job completion, collect deposits upfront, or set up saved cards for recurring
                customers. Powered by Stripe for rock-solid security.
              </p>
            </div>
            <div className="product-feature-visual" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>PAYMENT RECEIVED</div>
              <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--green-accent)', marginTop: '8px' }}>&euro;120.00</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>Visa ending 4242 &middot; Instant</div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Auto-Invoicing</h3>
              <p>
                Jobs finish, invoices send. Spotless generates professional, branded invoices
                automatically when a job is marked complete. Customers get a clear breakdown of
                services, and you never have to open a spreadsheet again.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>Standard Clean</span>
                  <span style={{ color: 'var(--white)', fontSize: '13px', fontWeight: 600 }}>&euro;85</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>Oven Cleaning</span>
                  <span style={{ color: 'var(--white)', fontSize: '13px', fontWeight: 600 }}>&euro;25</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                  <span style={{ color: 'var(--white)', fontSize: '14px', fontWeight: 700 }}>Total</span>
                  <span style={{ color: 'var(--lime)', fontSize: '14px', fontWeight: 700 }}>&euro;110</span>
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
              <h3>Recurring Billing</h3>
              <p>
                Set up recurring charges for regular customers. Cards are billed automatically on
                schedule — weekly, fortnightly, or monthly. Customers can manage their payment
                method through the client portal. Zero admin on your end.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[{ client: 'Johnson Family', amount: '€85/wk', status: 'Active' }, { client: 'Park View Office', amount: '€150/2wk', status: 'Active' }, { client: 'Airbnb #12', amount: '€65/clean', status: 'Active' }].map((sub, i) => (
                  <div key={i} style={{ background: 'var(--navy)', padding: '10px 14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--white)', fontSize: '13px', fontWeight: 600 }}>{sub.client}</span>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>{sub.amount}</span>
                      <span style={{ color: 'var(--green-accent)', fontSize: '11px', fontWeight: 600 }}>{sub.status}</span>
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
              <h4>Payment Reminders</h4>
              <p>Automatic gentle nudges for overdue invoices. Customise the timing and tone.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128280;</div>
              <h4>Stripe Integration</h4>
              <p>Secure, PCI-compliant payments powered by Stripe. Setup takes minutes.</p>
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
    </>
  );
}
