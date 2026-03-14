import ProductCTA from '../../../components/product-cta';
import JsonLd from '../../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../../lib/seo';
import { breadcrumbSchema } from '../../../lib/schema';

const seo = getPageSeo('/product/referrals-reviews');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
};

export default function ReferralsReviewsPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Referrals &amp; Reviews</div>
          <h1 className="animate-on-scroll">Your best marketing channel<br />is your last clean</h1>
          <p className="section-sub animate-on-scroll">
            Automatically collect reviews after every job, catch unhappy customers before they go
            public, and turn your best clients into your sales team.
          </p>

          {/* Hero mockup: Review feed */}
          <div className="animate-on-scroll" style={{ marginTop: '48px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="mockup-window">
              <div className="mockup-topbar">
                <div className="mockup-topbar-dot r"></div>
                <div className="mockup-topbar-dot y"></div>
                <div className="mockup-topbar-dot g"></div>
                <div className="mockup-topbar-url">app.spotlessapp.io/reviews</div>
              </div>
              <div className="mockup-body">
                <div className="mockup-stat-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '16px' }}>
                  <div className="mockup-stat-card">
                    <div className="mockup-stat-label">Average Rating</div>
                    <div className="mockup-stat-value">4.9 / 5</div>
                    <div className="mockup-stars" style={{ marginTop: '4px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  </div>
                  <div className="mockup-stat-card teal">
                    <div className="mockup-stat-label">This Quarter</div>
                    <div className="mockup-stat-value">247</div>
                    <div className="mockup-stat-change">reviews collected</div>
                  </div>
                  <div className="mockup-stat-card blue">
                    <div className="mockup-stat-label">Response Rate</div>
                    <div className="mockup-stat-value">34%</div>
                    <div className="mockup-stat-change">&uarr; 8% vs last quarter</div>
                  </div>
                </div>
                <div className="mockup-review-card">
                  <div className="mockup-review-header">
                    <div className="mockup-review-author">
                      <div className="mockup-avatar" style={{ background: '#3ECF8E' }}>R</div>
                      <div>
                        <div className="mockup-review-name">Rachel Kim</div>
                        <div className="mockup-review-date">2 hours ago</div>
                      </div>
                    </div>
                    <div className="mockup-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  </div>
                  <div className="mockup-review-text">&ldquo;Absolutely spotless every time. The team is always on time, friendly, and thorough. Couldn&rsquo;t recommend more highly.&rdquo;</div>
                </div>
                <div className="mockup-review-card">
                  <div className="mockup-review-header">
                    <div className="mockup-review-author">
                      <div className="mockup-avatar" style={{ background: '#5b8def' }}>M</div>
                      <div>
                        <div className="mockup-review-name">Mark O&rsquo;Brien</div>
                        <div className="mockup-review-date">Yesterday</div>
                      </div>
                    </div>
                    <div className="mockup-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  </div>
                  <div className="mockup-review-text">&ldquo;Best cleaning company we&rsquo;ve used in Dublin. The online booking was so easy and the price was exactly as quoted.&rdquo;</div>
                </div>
                <div className="mockup-review-card">
                  <div className="mockup-review-header">
                    <div className="mockup-review-author">
                      <div className="mockup-avatar" style={{ background: '#a78bfa' }}>S</div>
                      <div>
                        <div className="mockup-review-name">Sarah Thompson</div>
                        <div className="mockup-review-date">3 days ago</div>
                      </div>
                    </div>
                    <div className="mockup-stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                  </div>
                  <div className="mockup-review-text">&ldquo;Great clean overall. Would have been 5 stars but they ran slightly over time. Will definitely book again though.&rdquo;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Referral Leaderboard */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Referral Program</h3>
              <p>
                Give every customer a unique referral link. When their friend books, both get a
                reward &mdash; a discount, a free add-on, or credit. Track who referred whom, how much
                revenue each referrer generates, and watch word-of-mouth become your best channel.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/referrals</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-section-title">Referral Leaderboard</div>
                  <div className="mockup-leaderboard-row">
                    <div className="mockup-leaderboard-rank">1</div>
                    <div className="mockup-avatar sm" style={{ background: '#3ECF8E' }}>S</div>
                    <div className="mockup-leaderboard-name">Sarah Mitchell</div>
                    <div className="mockup-leaderboard-count">8 referrals</div>
                    <div className="mockup-leaderboard-value">&euro;680</div>
                  </div>
                  <div className="mockup-leaderboard-row">
                    <div className="mockup-leaderboard-rank">2</div>
                    <div className="mockup-avatar sm" style={{ background: '#5b8def' }}>M</div>
                    <div className="mockup-leaderboard-name">Mark O&rsquo;Brien</div>
                    <div className="mockup-leaderboard-count">5 referrals</div>
                    <div className="mockup-leaderboard-value">&euro;425</div>
                  </div>
                  <div className="mockup-leaderboard-row">
                    <div className="mockup-leaderboard-rank">3</div>
                    <div className="mockup-avatar sm" style={{ background: '#a78bfa' }}>R</div>
                    <div className="mockup-leaderboard-name">Rachel Kim</div>
                    <div className="mockup-leaderboard-count">3 referrals</div>
                    <div className="mockup-leaderboard-value">&euro;255</div>
                  </div>
                  <div className="mockup-leaderboard-row">
                    <div className="mockup-leaderboard-rank">4</div>
                    <div className="mockup-avatar sm" style={{ background: '#f97316' }}>D</div>
                    <div className="mockup-leaderboard-name">David Chen</div>
                    <div className="mockup-leaderboard-count">2 referrals</div>
                    <div className="mockup-leaderboard-value">&euro;170</div>
                  </div>
                  <div className="mockup-divider"></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: 'var(--text-lighter)' }}>Total referral revenue this quarter</span>
                    <span style={{ fontWeight: 700, color: 'var(--mint)' }}>&euro;3,420</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Smart routing */}
      <section className="product-feature-section">
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Smart Review Routing</h3>
              <p>
                Happy customers (4-5 stars) are directed straight to your Google Business listing to
                leave a public review. Unhappy customers (1-3 stars) are routed to a private
                feedback form so you can resolve the issue before it goes public.
              </p>
            </div>
            <div className="product-feature-visual" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <div className="mockup-window">
                <div className="mockup-topbar">
                  <div className="mockup-topbar-dot r"></div>
                  <div className="mockup-topbar-dot y"></div>
                  <div className="mockup-topbar-dot g"></div>
                  <div className="mockup-topbar-url">app.spotlessapp.io/review-routing</div>
                </div>
                <div className="mockup-body" style={{ textAlign: 'center', padding: '28px' }}>
                  <div className="mockup-section-title" style={{ textAlign: 'center' }}>How It Works</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center', marginTop: '12px' }}>
                    {/* Step 1 */}
                    <div className="mockup-flow-node trigger" style={{ padding: '12px 24px' }}>Customer rates their clean</div>
                    <div style={{ width: '2px', height: '20px', background: 'var(--border)' }}></div>
                    {/* Branch */}
                    <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div className="mockup-flow-node action" style={{ padding: '10px 20px', marginBottom: '8px' }}>4-5 &#9733;</div>
                        <div style={{ width: '2px', height: '16px', background: 'var(--border)', margin: '0 auto' }}></div>
                        <div style={{ background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '10px 16px', marginTop: '8px' }}>
                          <div style={{ fontSize: '11px', fontWeight: 700, color: '#166534' }}>&#10003; Google Review</div>
                          <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '2px' }}>Public 5-star review</div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div className="mockup-flow-node condition" style={{ padding: '10px 20px', marginBottom: '8px' }}>1-3 &#9733;</div>
                        <div style={{ width: '2px', height: '16px', background: 'var(--border)', margin: '0 auto' }}></div>
                        <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '8px', padding: '10px 16px', marginTop: '8px' }}>
                          <div style={{ fontSize: '11px', fontWeight: 700, color: '#92400e' }}>&#128274; Private Feedback</div>
                          <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '2px' }}>Resolve before public</div>
                        </div>
                      </div>
                    </div>
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
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Product', url: `${SITE_URL}/product` },
        { name: 'Referrals & Reviews', url: `${SITE_URL}/product/referrals-reviews` },
      ])} />
    </>
  );
}
