import { notFound } from 'next/navigation';
import ProductCTA from '../../../components/product-cta';
import JsonLd from '../../../components/json-ld';
import { SITE_URL } from '../../../lib/seo';
import { breadcrumbSchema } from '../../../lib/schema';
import {
  getCompetitor,
  getAllCompetitorSlugs,
  FEATURE_LABELS,
  getAlternative,
  getAllAlternativeSlugs,
  COMPETITORS,
} from '../../../lib/comparisons';

export const dynamicParams = false;

export function generateStaticParams() {
  const competitorParams = getAllCompetitorSlugs().map((slug) => ({ slug }));
  const alternativeParams = getAllAlternativeSlugs().map((slug) => ({ slug }));
  return [...competitorParams, ...alternativeParams];
}

export function generateMetadata({ params }) {
  const comp = getCompetitor(params.slug);
  if (comp) {
    const title = `${comp.name} Alternative | Spotless vs ${comp.name} | Spotless`;
    const description = `Compare Spotless to ${comp.name}. See features, pricing, and why cleaning companies choose Spotless as their ${comp.name} alternative.`;
    return {
      title,
      description,
      openGraph: { title, description, type: 'website' },
      twitter: { card: 'summary_large_image', title, description },
    };
  }

  const alt = getAlternative(params.slug);
  if (alt) {
    return {
      title: alt.title,
      description: alt.description,
      openGraph: { title: alt.title, description: alt.description, type: 'website' },
      twitter: { card: 'summary_large_image', title: alt.title, description: alt.description },
    };
  }

  return {};
}

function CompetitorPage({ comp }) {
  const featureEntries = Object.entries(comp.features);

  return (
    <div className="dark-page">
      {/* Hero */}
      <section className="product-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag animate-on-scroll">vs {comp.name}</div>
          <h1 className="animate-on-scroll">
            Spotless vs {comp.name}
          </h1>
          <p className="section-sub animate-on-scroll" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {comp.description}
          </p>
          <div className="hero-actions animate-on-scroll" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <a href="https://app.spotlessapp.io/register" className="btn-primary btn-primary-lg">
              Try Spotless Free <span>&rarr;</span>
            </a>
            <a href="/compare" className="btn-ghost">
              See all comparisons
            </a>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="product-feature-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center', color: 'var(--white)', marginBottom: '48px' }}>
            Feature comparison
          </h2>
          <div className="animate-on-scroll" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="mockup-window">
              <div className="mockup-topbar">
                <div className="mockup-topbar-dot r"></div>
                <div className="mockup-topbar-dot y"></div>
                <div className="mockup-topbar-dot g"></div>
                <div className="mockup-topbar-url">Spotless vs {comp.name}</div>
              </div>
              <div className="mockup-body" style={{ padding: '0' }}>
                <table className="mockup-table" style={{ fontSize: '14px' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '50%' }}>Feature</th>
                      <th style={{ textAlign: 'center' }}>Spotless</th>
                      <th style={{ textAlign: 'center' }}>{comp.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureEntries.map(([key, val]) => (
                      <tr key={key}>
                        <td>{FEATURE_LABELS[key] || key}</td>
                        <td style={{ textAlign: 'center', color: val.spotless ? 'var(--green-accent)' : 'var(--text-lighter)' }}>
                          {val.spotless ? '\u2713' : '\u2014'}
                        </td>
                        <td style={{ textAlign: 'center', color: val.competitor ? 'var(--green-accent)' : 'var(--text-lighter)' }}>
                          {val.competitor ? '\u2713' : '\u2014'}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td style={{ fontWeight: 600 }}>Starting price</td>
                      <td style={{ textAlign: 'center', fontWeight: 600 }}>Free</td>
                      <td style={{ textAlign: 'center' }}>{comp.pricing}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="product-feature-section" style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="product-feature-grid animate-on-scroll">
            <div className="product-feature-content">
              <h3>Why cleaning companies switch from {comp.name} to Spotless</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {comp.spotlessAdvantages.map((adv) => (
                  <li key={adv} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--mint)', flexShrink: 0 }}>&#10003;</span>
                    <span style={{ color: 'rgba(255,255,255,0.75)' }}>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="product-feature-content">
              <h3>{comp.name} limitations</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {comp.limitations.map((lim) => (
                  <li key={lim} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--text-lighter)', flexShrink: 0 }}>&mdash;</span>
                    <span style={{ color: 'rgba(255,255,255,0.55)' }}>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-hero" style={{ minHeight: 'auto', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title animate-on-scroll" style={{ color: 'var(--white)' }}>
            Ready to switch from {comp.name}?
          </h2>
          <p className="section-sub animate-on-scroll" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            Start your free trial today. No credit card required. Set up takes less than 5 minutes.
          </p>
          <div className="hero-actions animate-on-scroll" style={{ justifyContent: 'center' }}>
            <a href="https://app.spotlessapp.io/register" className="btn-primary btn-primary-lg">
              Start Free Trial <span>&rarr;</span>
            </a>
            <a href="/contact" className="btn-ghost">
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />

      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Compare', url: `${SITE_URL}/compare` },
        { name: `vs ${comp.name}`, url: `${SITE_URL}/compare/${comp.slug}` },
      ])} />
    </div>
  );
}

function AlternativesPage({ alt }) {
  const competitors = alt.competitors
    .map((slug) => COMPETITORS[slug])
    .filter(Boolean);

  return (
    <div className="dark-page">
      {/* Hero */}
      <section className="product-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag animate-on-scroll">Compare</div>
          <h1 className="animate-on-scroll">{alt.title}</h1>
          <p className="section-sub animate-on-scroll" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {alt.description}
          </p>
          <div className="hero-actions animate-on-scroll" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <a href="https://app.spotlessapp.io/register" className="btn-primary btn-primary-lg">
              Try Spotless Free <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Spotless */}
      <section className="product-feature-section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center', color: 'var(--white)', marginBottom: '48px' }}>
            Why Spotless is the #1 {alt.name} alternative
          </h2>
          <div className="animate-on-scroll" style={{ display: 'grid', gap: '16px' }}>
            {[
              'Purpose-built for cleaning companies — not a generic field service tool',
              'Free plan available with no credit card required',
              'Supports 12+ service verticals from one platform',
              'Built-in Google review collection and referral programs',
              'Cleaning-specific scheduling with recurring job templates',
              'Built-in payment processing with auto-billing',
              'Works for UK, Ireland, and international markets',
            ].map((point) => (
              <div key={point} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--mint)', flexShrink: 0, fontWeight: 700 }}>&#10003;</span>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="product-feature-section" style={{ padding: '0 0 80px' }}>
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center', color: 'var(--white)', marginBottom: '48px' }}>
            How other alternatives compare
          </h2>
          <div className="blog-grid">
            {competitors.map((comp) => (
              <a
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="blog-card animate-on-scroll"
              >
                <span className="blog-card-category">vs {comp.name}</span>
                <h3>Spotless vs {comp.name}</h3>
                <p>{comp.tagline}</p>
                <div className="blog-card-meta">
                  <span>{comp.market}</span>
                  <span>&middot;</span>
                  <span>{comp.pricing}</span>
                </div>
                <span className="blog-card-link">See full comparison &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="product-hero" style={{ minHeight: 'auto', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title animate-on-scroll" style={{ color: 'var(--white)' }}>
            Ready to try the best cleaning software?
          </h2>
          <p className="section-sub animate-on-scroll" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            Start your free trial today. No credit card required. Set up takes less than 5 minutes.
          </p>
          <div className="hero-actions animate-on-scroll" style={{ justifyContent: 'center' }}>
            <a href="https://app.spotlessapp.io/register" className="btn-primary btn-primary-lg">
              Start Free Trial <span>&rarr;</span>
            </a>
            <a href="/contact" className="btn-ghost">
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <ProductCTA />

      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Compare', url: `${SITE_URL}/compare` },
        { name: alt.name, url: `${SITE_URL}/compare/${alt.slug}` },
      ])} />
    </div>
  );
}

export default function ComparisonPage({ params }) {
  const comp = getCompetitor(params.slug);
  if (comp) return <CompetitorPage comp={comp} />;

  const alt = getAlternative(params.slug);
  if (alt) return <AlternativesPage alt={alt} />;

  notFound();
}
