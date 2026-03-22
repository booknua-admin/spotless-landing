import { getAllTerms, getAllCategories, getTermsByCategory } from '../../lib/glossary';
import { SITE_URL } from '../../lib/seo';
import { breadcrumbSchema } from '../../lib/schema';
import JsonLd from '../../components/json-ld';
import ProductCTA from '../../components/product-cta';

export const metadata = {
  title: 'Cleaning Industry Glossary — Key Terms & Definitions | Spotless',
  description:
    'Learn the essential cleaning industry terms every business owner should know. From COSHH to SLA, our glossary covers compliance, pricing, metrics, and operations.',
  alternates: {
    canonical: '/glossary',
  },
  openGraph: {
    title: 'Cleaning Industry Glossary — Key Terms & Definitions | Spotless',
    description:
      'Learn the essential cleaning industry terms every business owner should know. From COSHH to SLA, our glossary covers compliance, pricing, metrics, and operations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Industry Glossary — Key Terms & Definitions | Spotless',
    description:
      'Learn the essential cleaning industry terms every business owner should know. From COSHH to SLA, our glossary covers compliance, pricing, metrics, and operations.',
  },
};

export default function GlossaryPage() {
  const categories = getAllCategories();

  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Glossary</div>
          <h1 className="animate-on-scroll">
            Cleaning Industry Glossary
          </h1>
          <p className="section-sub animate-on-scroll">
            The essential terms, metrics, and acronyms every cleaning business owner should
            know &mdash; explained in plain English.
          </p>

          {/* Category anchor links */}
          <div className="blog-category-pills animate-on-scroll" style={{ marginTop: '24px' }}>
            {categories.map((cat) => (
              <a key={cat} href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`} className="blog-pill">
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {categories.map((category) => {
            const terms = getTermsByCategory(category);
            return (
              <div
                key={category}
                id={category.toLowerCase().replace(/\s+/g, '-')}
                style={{ marginBottom: '56px' }}
              >
                <h2
                  className="animate-on-scroll"
                  style={{
                    fontSize: 'clamp(20px, 3vw, 26px)',
                    marginBottom: '24px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {category}
                </h2>
                <div style={{ display: 'grid', gap: '16px' }}>
                  {terms.map((term) => (
                    <a
                      key={term.slug}
                      href={`/glossary/${term.slug}`}
                      className="blog-card animate-on-scroll"
                      style={{ padding: '20px 24px' }}
                    >
                      <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{term.term}</h3>
                      <p style={{ fontSize: '15px', opacity: 0.8, lineHeight: 1.6 }}>
                        {term.definition.length > 160
                          ? term.definition.slice(0, 160).trim() + '...'
                          : term.definition}
                      </p>
                      <span className="blog-card-link" style={{ marginTop: '8px' }}>
                        Read definition &rarr;
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ProductCTA />

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Glossary', url: `${SITE_URL}/glossary` },
        ])}
      />
    </div>
  );
}
