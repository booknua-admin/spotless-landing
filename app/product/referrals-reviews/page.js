import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Referrals & Reviews — Spotless',
  description:
    'Automatically collect reviews, funnel happy customers to Google, run referral programs, and build a 5-star reputation on autopilot.',
};

export default function ReferralsReviewsPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-icon animate-on-scroll">&#11088;</div>
          <div className="section-tag animate-on-scroll">Referrals &amp; Reviews</div>
          <h1 className="animate-on-scroll">A 5-star reputation,<br />built on autopilot</h1>
          <p className="section-sub animate-on-scroll">
            Automatically collect reviews after every job, catch unhappy customers before they go
            public, and turn your best clients into your sales team.
          </p>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Review Collection</h3>
              <p>
                After every completed job, Spotless sends a friendly review request to the customer.
                Timing is everything — we ask when the clean smell is still fresh. Average response
                rate: 34%. That means hundreds of reviews you&rsquo;d never have gotten.
              </p>
            </div>
            <div className="product-feature-visual" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: 800, color: 'var(--white)' }}>4.9<span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.3)' }}>/5</span></div>
              <div style={{ color: '#f59e0b', fontSize: '20px', letterSpacing: '3px', marginTop: '4px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>247 reviews collected this quarter</div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Referral Program</h3>
              <p>
                Give every customer a unique referral link. When their friend books, both get a
                reward — a discount, a free add-on, or credit. Track who referred whom, how much
                revenue each referrer generates, and watch word-of-mouth become your best channel.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[{ name: 'Sarah M.', referrals: 8, revenue: '€680' }, { name: 'Mark O.', referrals: 5, revenue: '€425' }, { name: 'Rachel K.', referrals: 3, revenue: '€255' }].map((ref, i) => (
                  <div key={i} style={{ background: 'var(--navy)', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ color: 'var(--white)', fontSize: '13px', fontWeight: 600 }}>{ref.name}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>{ref.referrals} referrals</div>
                    </div>
                    <span style={{ color: 'var(--lime)', fontSize: '13px', fontWeight: 600 }}>{ref.revenue}</span>
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
              <h3>Google Reviews Funnel</h3>
              <p>
                Happy customers (4-5 stars) are directed straight to your Google Business listing to
                leave a public review. Unhappy customers (1-3 stars) are routed to a private
                feedback form so you can resolve the issue before it goes public.
              </p>
            </div>
            <div className="product-feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--green-accent)' }}>4-5 &#9733;</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>&rarr; Google</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--orange-accent)' }}>1-3 &#9733;</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>&rarr; Private</div>
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
              <div className="product-mini-card-icon">&#127873;</div>
              <h4>Discounts</h4>
              <p>Create discount codes for promotions, loyalty rewards, or seasonal offers.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128200;</div>
              <h4>Rating Analytics</h4>
              <p>Track your average rating over time, by service type, and by staff member.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128172;</div>
              <h4>Review Responses</h4>
              <p>Respond to reviews directly from Spotless. Templates for common responses.</p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128588;</div>
              <h4>Social Proof</h4>
              <p>Embed your best reviews on your website with auto-updating widgets.</p>
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
                <h4>Scheduling</h4>
                <p>Review requests trigger automatically when jobs are marked complete.</p>
              </div>
            </a>
            <a href="/product/custom-forms" className="crosslink-card">
              <div className="crosslink-icon">&#128221;</div>
              <div>
                <h4>Custom Forms</h4>
                <p>Referral codes work inside your booking forms for seamless tracking.</p>
              </div>
            </a>
            <a href="/product/automations" className="crosslink-card">
              <div className="crosslink-icon">&#9889;</div>
              <div>
                <h4>Automations</h4>
                <p>Build custom workflows around review scores and referral milestones.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />
    </>
  );
}
