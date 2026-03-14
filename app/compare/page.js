import ProductCTA from '../../components/product-cta';
import JsonLd from '../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../lib/seo';
import { breadcrumbSchema } from '../../lib/schema';
import { COMPETITORS } from '../../lib/comparisons';

const seo = getPageSeo('/compare');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
};

export default function ComparePage() {
  const competitors = Object.values(COMPETITORS);

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

      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
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

      <ProductCTA />

      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Compare', url: `${SITE_URL}/compare` },
      ])} />
    </div>
  );
}
