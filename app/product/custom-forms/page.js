import ProductCTA from '../../../components/product-cta';
import JsonLd from '../../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../../lib/seo';
import { breadcrumbSchema } from '../../../lib/schema';

const seo = getPageSeo('/product/custom-forms');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
};

export default function CustomFormsPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Custom Forms</div>
          <h1 className="animate-on-scroll">Turn your website into<br />a booking machine</h1>
          <p className="section-sub animate-on-scroll">
            Branded forms that capture exactly the info you need, auto-price the job, and feed
            straight into your calendar. No more email back-and-forth.
          </p>

          {/* Hero mockup: Booking Form */}
          <div className="animate-on-scroll" style={{ marginTop: '48px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="mockup-window">
              <div className="mockup-topbar">
                <div className="mockup-topbar-dot r"></div>
                <div className="mockup-topbar-dot y"></div>
                <div className="mockup-topbar-dot g"></div>
                <div className="mockup-topbar-url">yoursite.com/book-a-clean</div>
              </div>
              <div className="mockup-body" style={{ padding: '28px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>Book a Clean</div>
                <div style={{ fontSize: '12px', color: 'var(--text-lighter)', marginBottom: '20px' }}>Fill out the details below and we&rsquo;ll send you an instant quote.</div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div className="mockup-form-field">
                    <div className="mockup-form-label">Property Type</div>
                    <div className="mockup-form-input select">House &#9662;</div>
                  </div>
                  <div className="mockup-form-field">
                    <div className="mockup-form-label">Bedrooms</div>
                    <div className="mockup-form-input select">3 Bedrooms &#9662;</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div className="mockup-form-field">
                    <div className="mockup-form-label">Bathrooms</div>
                    <div className="mockup-form-input select">2 Bathrooms &#9662;</div>
                  </div>
                  <div className="mockup-form-field">
                    <div className="mockup-form-label">Cleaning Type</div>
                    <div className="mockup-form-input select">Standard Clean &#9662;</div>
                  </div>
                </div>

                <div className="mockup-form-field" style={{ marginBottom: '14px' }}>
                  <div className="mockup-form-label">Frequency</div>
                  <div className="mockup-form-radio-group">
                    <div className="mockup-form-radio"><div className="mockup-form-radio-dot active"></div> Weekly</div>
                    <div className="mockup-form-radio"><div className="mockup-form-radio-dot"></div> Fortnightly</div>
                    <div className="mockup-form-radio"><div className="mockup-form-radio-dot"></div> Monthly</div>
                    <div className="mockup-form-radio"><div className="mockup-form-radio-dot"></div> One-off</div>
                  </div>
                </div>

                <div className="mockup-form-field" style={{ marginBottom: '18px' }}>
                  <div className="mockup-form-label">Add-ons</div>
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <div className="mockup-form-checkbox"><div className="mockup-form-check active">&#10003;</div> Oven Cleaning (+&euro;25)</div>
                    <div className="mockup-form-checkbox"><div className="mockup-form-check active">&#10003;</div> Fridge (+&euro;15)</div>
                    <div className="mockup-form-checkbox"><div className="mockup-form-check"></div> Windows (+&euro;20)</div>
                    <div className="mockup-form-checkbox"><div className="mockup-form-check"></div> Laundry (+&euro;15)</div>
                  </div>
                </div>

                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '14px', textAlign: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Your Instant Quote</div>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: '#16a34a', marginTop: '4px' }}>&euro;125</div>
                  <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '2px' }}>3 bed &middot; Weekly &middot; Oven &amp; Fridge add-ons</div>
                </div>

                <div className="mockup-btn primary" style={{ width: '100%', justifyContent: 'center', padding: '10px' }}>
                  Request This Quote &rarr;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Quote Calculator */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Instant Quote Calculator</h3>
              <p>
                Set your pricing rules once and let Spotless auto-generate accurate quotes based on
                what the customer selects. Factor in property size, service type, frequency
                discounts, and add-on pricing. Customers see a price instantly.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/pricing-rules</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-section-title">Quote Breakdown</div>
                  <div className="mockup-invoice">
                    <div className="mockup-invoice-line">
                      <span>Base price (3 bed house)</span>
                      <span style={{ fontWeight: 600 }}>&euro;85.00</span>
                    </div>
                    <div className="mockup-invoice-line">
                      <span>Oven cleaning add-on</span>
                      <span style={{ fontWeight: 600 }}>+&euro;25.00</span>
                    </div>
                    <div className="mockup-invoice-line">
                      <span>Fridge add-on</span>
                      <span style={{ fontWeight: 600 }}>+&euro;15.00</span>
                    </div>
                    <div className="mockup-invoice-line">
                      <span style={{ color: 'var(--mint)' }}>Weekly frequency discount</span>
                      <span style={{ fontWeight: 600, color: 'var(--mint)' }}>-10%</span>
                    </div>
                    <div className="mockup-invoice-total">
                      <span>Customer sees</span>
                      <span>&euro;112.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Embed */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>One-Line Website Embed</h3>
              <p>
                Drop a single line of code onto your website and your booking form appears. Matches
                your brand colours, works on mobile, and updates in real-time when you change your
                services or pricing. No developer needed.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/forms/embed</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-section-title">Embed Code</div>
                  <div className="mockup-code" style={{ marginBottom: '14px' }}>
                    <span className="comment">&lt;!-- Paste this into your website --&gt;</span><br />
                    <span className="tag">&lt;script</span> <span className="attr">src</span>=<span className="str">&quot;https://app.spotlessapp.io/form/abc123.js&quot;</span><span className="tag">&gt;&lt;/script&gt;</span>
                  </div>
                  <div style={{ border: '2px dashed var(--border)', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-lighter)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Live Preview</div>
                    <div style={{ background: 'var(--bg)', borderRadius: '6px', padding: '16px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Book a Clean</div>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                        <div className="mockup-form-input" style={{ flex: 1 }}>Property type...</div>
                        <div className="mockup-form-input" style={{ flex: 1 }}>Bedrooms...</div>
                      </div>
                      <div className="mockup-btn primary" style={{ width: '100%', justifyContent: 'center', fontSize: '11px', padding: '6px' }}>Get Instant Quote</div>
                    </div>
                    <div style={{ fontSize: '10px', color: 'var(--mint)', marginTop: '6px', fontWeight: 600 }}>&#10003; Live on your website</div>
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
              <div className="product-mini-card-icon">&#127968;</div>
              <h4>Property Fields</h4>
              <p>Customisable fields for any property type &mdash; homes, offices, rentals, and more.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#10133;</div>
              <h4>Add-ons Config</h4>
              <p>Let customers select extras like oven cleaning, fridge, windows, or laundry.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <h4>Auto-Pricing</h4>
              <p>Pricing rules calculate the quote automatically based on customer selections.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#127912;</div>
              <h4>Brand Matching</h4>
              <p>Forms match your brand colours and fonts for a seamless customer experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-crosslinks">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>Works seamlessly with</h2>
          <div className="crosslink-grid animate-on-scroll">
            <a href="/product/scheduling" className="crosslink-card">
              <div className="crosslink-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
              <div>
                <h4>Scheduling &amp; Jobs</h4>
                <p>Form submissions flow straight into your calendar as new bookings.</p>
              </div>
            </a>
            <a href="/product/payments" className="crosslink-card">
              <div className="crosslink-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
              <div>
                <h4>Payments</h4>
                <p>Collect deposits or full payment right on the booking form.</p>
              </div>
            </a>
            <a href="/product/automations" className="crosslink-card">
              <div className="crosslink-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
              <div>
                <h4>Automations</h4>
                <p>Trigger confirmation emails and staff assignments on form submission.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Product', url: `${SITE_URL}/product` },
        { name: 'Custom Forms', url: `${SITE_URL}/product/custom-forms` },
      ])} />
    </>
  );
}
