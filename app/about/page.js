import '../../css/product.css';
import '../../css/mockups.css';
import ProductCTA from '../../components/product-cta';

export const metadata = {
  title: 'About — Spotless',
  description:
    'Spotless was built by people who understand the cleaning industry. Learn about our mission, values, and the small team building the operating system for service businesses.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="product-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag animate-on-scroll">Our Story</div>
          <h1 className="animate-on-scroll">
            Built by people who understand<br />the cleaning industry
          </h1>
          <p className="section-sub animate-on-scroll" style={{ margin: '0 auto' }}>
            Spotless was born from frustration &mdash; watching cleaning company owners waste hours
            on admin that should take minutes. Juggling spreadsheets for scheduling, chasing payments
            over WhatsApp, losing leads because nobody replied fast enough. We knew there had to be
            a better way, so we built it.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="product-feature-section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="section-tag animate-on-scroll" style={{ background: 'rgba(62,207,142,0.1)', borderColor: 'rgba(62,207,142,0.2)' }}>Our Mission</div>
          <h2 className="section-title animate-on-scroll" style={{ color: 'var(--white)' }}>
            Give every service business the tools that used to be reserved for companies
            with 6-figure software budgets.
          </h2>
          <p className="animate-on-scroll" style={{ fontSize: '17px', lineHeight: '1.8', color: 'rgba(255,255,255,0.55)', maxWidth: '650px', margin: '0 auto' }}>
            Big franchise operations have had custom-built software for years. The independent
            cleaner with 5 staff and 80 regular clients? They got a notebook and a prayer.
            We&rsquo;re here to change that. Spotless gives every service business &mdash; from solo
            operators to 50-person teams &mdash; the same scheduling, payments, automation, and
            growth tools that the big players take for granted. At a price that makes sense.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="product-more-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>
            What we believe
          </h2>
          <div className="product-mini-grid animate-on-scroll">
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128736;</div>
              <h4>Built for the trade</h4>
              <p>
                We don&rsquo;t build generic software. Every feature is designed for how service
                businesses actually work &mdash; from recurring cleans to Airbnb turnovers.
              </p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#10024;</div>
              <h4>Simplicity over complexity</h4>
              <p>
                If it takes more than 2 clicks, we redesign it. Your team should never need
                training to use Spotless. If they can use a phone, they can use Spotless.
              </p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128178;</div>
              <h4>Fair pricing, always</h4>
              <p>
                No per-transaction fees. No hidden costs. No contracts. You pay one price and
                get everything. We grow when you grow &mdash; not by nickel-and-diming you.
              </p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#128150;</div>
              <h4>Customer obsessed</h4>
              <p>
                We measure success by how much time we save you, not by how many features
                we ship. Every hour of admin we eliminate is a win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="product-feature-section" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center', color: 'var(--white)', marginBottom: '48px' }}>
            Spotless in numbers
          </h2>
          <div className="animate-on-scroll" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="mockup-stat-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <div className="mockup-stat-card blue">
                <div className="mockup-stat-label">Companies</div>
                <div className="mockup-stat-value" style={{ fontSize: '28px' }}>500+</div>
                <div className="mockup-stat-change">and growing</div>
              </div>
              <div className="mockup-stat-card teal">
                <div className="mockup-stat-label">Industries Served</div>
                <div className="mockup-stat-value" style={{ fontSize: '28px' }}>12</div>
                <div className="mockup-stat-change">service verticals</div>
              </div>
              <div className="mockup-stat-card purple">
                <div className="mockup-stat-label">Jobs Managed</div>
                <div className="mockup-stat-value" style={{ fontSize: '28px' }}>2M+</div>
                <div className="mockup-stat-change">and counting</div>
              </div>
              <div className="mockup-stat-card orange">
                <div className="mockup-stat-label">Avg Rating</div>
                <div className="mockup-stat-value" style={{ fontSize: '28px' }}>4.9/5</div>
                <div className="mockup-stat-change">from our customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="product-more-section" style={{ background: 'var(--dark-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <div className="section-tag animate-on-scroll" style={{ background: 'rgba(62,207,142,0.1)', borderColor: 'rgba(62,207,142,0.2)' }}>The Team</div>
          <h2 className="section-title animate-on-scroll" style={{ color: 'var(--white)' }}>
            A small team, building fast
          </h2>
          <p className="animate-on-scroll" style={{ fontSize: '17px', lineHeight: '1.8', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '0 auto' }}>
            Spotless is built by a lean, focused team based in Ireland. We&rsquo;re not a
            100-person company with layers of management and a 12-month roadmap nobody reads.
            We&rsquo;re a small group of engineers and designers who talk to customers every day,
            ship fast, and fix things faster. When you email support, you&rsquo;re talking to
            someone who helped build the product.
          </p>
          <p className="animate-on-scroll" style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.35)', maxWidth: '500px', margin: '24px auto 0' }}>
            We don&rsquo;t do vanity headshots or &ldquo;meet the team&rdquo; grids. We&rsquo;d
            rather let the product speak for itself.
          </p>
        </div>
      </section>

      {/* CTA */}
      <ProductCTA />
    </>
  );
}
