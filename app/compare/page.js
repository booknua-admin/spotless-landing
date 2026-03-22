import ProductCTA from '../../components/product-cta';
import JsonLd from '../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../lib/seo';
import { breadcrumbSchema } from '../../lib/schema';
import { COMPETITORS, ALTERNATIVES } from '../../lib/comparisons';

const seo = getPageSeo('/compare');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
};

export default function ComparePage() {
  const competitors = Object.values(COMPETITORS);
  const alternatives = Object.values(ALTERNATIVES);

  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Compare</div>
          <h1 className="animate-on-scroll">
            Spotless vs the competition
          </h1>
          <p className="section-sub animate-on-scroll">
            See how Spotless compares to other cleaning business software. Purpose-built for cleaning
            companies, with features designed for your industry.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ color: 'var(--white)', textAlign: 'center', marginBottom: '40px' }}>
            Head-to-head comparisons
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
                  <span>{comp.focus}</span>
                </div>
                <span className="blog-card-link">See comparison &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 0 100px' }}>
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ color: 'var(--white)', textAlign: 'center', marginBottom: '40px' }}>
            Best alternatives &amp; roundups
          </h2>
          <div className="blog-grid">
            {alternatives.map((alt) => (
              <a
                key={alt.slug}
                href={`/compare/${alt.slug}`}
                className="blog-card animate-on-scroll"
              >
                <span className="blog-card-category">Roundup</span>
                <h3>{alt.name}</h3>
                <p>{alt.description}</p>
                <span className="blog-card-link">Read more &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ProductCTA />

      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Compare', url: `${SITE_URL}/compare` },
      ])} />
    </div>
  );
}
