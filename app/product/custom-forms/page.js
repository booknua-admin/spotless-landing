import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Custom Booking Forms — Spotless',
  description:
    'Build branded booking and quote request forms that embed on your website. Capture property details and auto-generate accurate quotes.',
};

export default function CustomFormsPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-icon animate-on-scroll">&#128221;</div>
          <div className="section-tag animate-on-scroll">Custom Forms</div>
          <h1 className="animate-on-scroll">Turn your website into<br />a booking machine</h1>
          <p className="section-sub animate-on-scroll">
            Branded forms that capture exactly the info you need, auto-price the job, and feed
            straight into your calendar. No more email back-and-forth.
          </p>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Booking Forms</h3>
              <p>
                Drag-and-drop form builder with fields for property type, bedrooms, bathrooms,
                square footage, cleaning frequency, and custom add-ons. Customers fill it out on
                your site and you get a complete booking request with zero phone calls.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(200,230,49,0.15)', color: 'var(--lime)', padding: '8px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600 }}>Property Type &#10003;</span>
                <span style={{ background: 'rgba(91,141,239,0.15)', color: 'var(--blue-accent)', padding: '8px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600 }}>Bedrooms &#10003;</span>
                <span style={{ background: 'rgba(52,211,153,0.15)', color: 'var(--green-accent)', padding: '8px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600 }}>Frequency &#10003;</span>
                <span style={{ background: 'rgba(167,139,250,0.15)', color: 'var(--purple-accent)', padding: '8px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600 }}>Add-ons &#10003;</span>
                <span style={{ background: 'rgba(249,115,22,0.15)', color: 'var(--orange-accent)', padding: '8px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600 }}>Schedule &#10003;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Quote Builder</h3>
              <p>
                Set your pricing rules once and let Spotless auto-generate accurate quotes based on
                what the customer selects. Factor in property size, service type, frequency
                discounts, and add-on pricing. Customers see a price instantly.
              </p>
            </div>
            <div className="product-feature-visual" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>AUTO-GENERATED QUOTE</div>
              <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--lime)', marginTop: '8px' }}>&euro;95</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>3 bed &middot; Weekly &middot; Standard clean</div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Website Embed</h3>
              <p>
                Drop a single line of code onto your website and your booking form appears. Matches
                your brand colours, works on mobile, and updates in real-time when you change your
                services or pricing. No developer needed.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ background: 'var(--navy)', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '12px', color: 'var(--lime)' }}>
                &lt;script src=&quot;spotless.js&quot;&gt;&lt;/script&gt;
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
              <p>Customisable fields for any property type — homes, offices, rentals, and more.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#10133;</div>
              <h4>Add-ons Config</h4>
              <p>Let customers select extras like oven cleaning, fridge, windows, or laundry.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128176;</div>
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
              <div className="crosslink-icon">&#128197;</div>
              <div>
                <h4>Scheduling &amp; Jobs</h4>
                <p>Form submissions flow straight into your calendar as new bookings.</p>
              </div>
            </a>
            <a href="/product/payments" className="crosslink-card">
              <div className="crosslink-icon">&#128179;</div>
              <div>
                <h4>Payments</h4>
                <p>Collect deposits or full payment right on the booking form.</p>
              </div>
            </a>
            <a href="/product/automations" className="crosslink-card">
              <div className="crosslink-icon">&#9889;</div>
              <div>
                <h4>Automations</h4>
                <p>Trigger confirmation emails and staff assignments on form submission.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />
    </>
  );
}
