import { notFound } from 'next/navigation';
import { getTermBySlug, getAllTermSlugs, getRelatedTerms } from '../../../lib/glossary';
import { SITE_URL } from '../../../lib/seo';
import { breadcrumbSchema, faqPageSchema } from '../../../lib/schema';
import JsonLd from '../../../components/json-ld';
import ProductCTA from '../../../components/product-cta';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTermSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const term = getTermBySlug(params.slug);

  if (!term) {
    return {};
  }

  return {
    title: `${term.term} — Cleaning Industry Glossary | Spotless`,
    description: term.definition,
    alternates: {
      canonical: `/glossary/${term.slug}`,
    },
    openGraph: {
      title: `${term.term} — Cleaning Industry Glossary | Spotless`,
      description: term.definition,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${term.term} — Cleaning Industry Glossary | Spotless`,
      description: term.definition,
    },
  };
}

export default function GlossaryTermPage({ params }) {
  const term = getTermBySlug(params.slug);

  if (!term) {
    notFound();
  }

  const relatedTerms = getRelatedTerms(params.slug);

  return (
    <div className="dark-page">
      {/* Hero */}
      <section className="product-hero" style={{ paddingBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <a href="/glossary" className="blog-back-link animate-on-scroll">
            &larr; Back to Glossary
          </a>
          <span
            className="blog-card-category animate-on-scroll"
            style={{ marginBottom: '16px', display: 'inline-block' }}
          >
            {term.category}
          </span>
          <h1 className="animate-on-scroll" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
            {term.term}
          </h1>
        </div>
      </section>

      <div className="blog-hero-divider" />

      {/* Definition */}
      <section style={{ padding: '40px 0 60px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="blog-prose">
            <h2>What is {term.term}?</h2>
            <p>{term.definition}</p>
          </div>
        </div>
      </section>

      {/* Related Terms */}
      {relatedTerms.length > 0 && (
        <section style={{ padding: '0 0 60px' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2
              className="animate-on-scroll"
              style={{
                fontSize: 'clamp(20px, 3vw, 26px)',
                marginBottom: '20px',
              }}
            >
              Related Terms
            </h2>
            <div style={{ display: 'grid', gap: '12px' }}>
              {relatedTerms.map((rt) => (
                <a
                  key={rt.slug}
                  href={`/glossary/${rt.slug}`}
                  className="blog-card animate-on-scroll"
                  style={{ padding: '16px 20px' }}
                >
                  <h3 style={{ fontSize: '17px', marginBottom: '6px' }}>{rt.term}</h3>
                  <p style={{ fontSize: '14px', opacity: 0.8, lineHeight: 1.5 }}>
                    {rt.definition.length > 120
                      ? rt.definition.slice(0, 120).trim() + '...'
                      : rt.definition}
                  </p>
                  <span className="blog-card-link" style={{ marginTop: '6px' }}>
                    Read definition &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Blog Posts */}
      {term.relatedPosts && term.relatedPosts.length > 0 && (
        <section style={{ padding: '0 0 60px' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2
              className="animate-on-scroll"
              style={{
                fontSize: 'clamp(20px, 3vw, 26px)',
                marginBottom: '20px',
              }}
            >
              Related Articles
            </h2>
            <div style={{ display: 'grid', gap: '12px' }}>
              {term.relatedPosts.map((postSlug) => (
                <a
                  key={postSlug}
                  href={`/blog/${postSlug}`}
                  className="blog-card animate-on-scroll"
                  style={{ padding: '16px 20px' }}
                >
                  <span style={{ fontSize: '16px' }}>
                    {postSlug
                      .replace(/-/g, ' ')
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </span>
                  <span className="blog-card-link" style={{ marginTop: '6px' }}>
                    Read article &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Pages */}
      {term.relatedPages && term.relatedPages.length > 0 && (
        <section style={{ padding: '0 0 60px' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2
              className="animate-on-scroll"
              style={{
                fontSize: 'clamp(20px, 3vw, 26px)',
                marginBottom: '20px',
              }}
            >
              Related Pages
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {term.relatedPages.map((pagePath) => (
                <a
                  key={pagePath}
                  href={pagePath}
                  className="blog-pill animate-on-scroll"
                >
                  {pagePath
                    .replace(/^\//, '')
                    .replace(/\//g, ' / ')
                    .replace(/-/g, ' ')
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <ProductCTA />

      {/* Structured Data */}
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Glossary', url: `${SITE_URL}/glossary` },
          { name: term.term, url: `${SITE_URL}/glossary/${term.slug}` },
        ])}
      />
      <JsonLd
        data={faqPageSchema([
          {
            question: `What is ${term.term}?`,
            answer: term.definition,
          },
        ])}
      />
    </div>
  );
}
