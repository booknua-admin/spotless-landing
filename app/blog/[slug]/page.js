import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import ProductCTA from '../../../components/product-cta';
import JsonLd from '../../../components/json-ld';
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '../../../lib/blog';
import { articleSchema, breadcrumbSchema } from '../../../lib/schema';
import { SITE_URL } from '../../../lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} — Spotless`,
    description: post.description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

const mdxComponents = {
  a: (props) => {
    const isExternal = props.href?.startsWith('http');
    return (
      <a
        {...props}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      />
    );
  },
  blockquote: (props) => <blockquote className="blog-blockquote" {...props} />,
  table: (props) => (
    <div className="blog-table-wrap">
      <table {...props} />
    </div>
  ),
  InlineCTA: ({ title, description, href, label }) => (
    <div className="blog-inline-cta">
      <p className="blog-inline-cta-title">{title || 'Ready to streamline your cleaning business?'}</p>
      <p className="blog-inline-cta-desc">{description || 'Spotless helps cleaning companies schedule jobs, collect payments, and manage their team — all in one platform. Start your free trial today.'}</p>
      <a href={href || 'https://app.spotlessapp.io/register'} className="btn-primary">{label || 'Try It Free'} &rarr;</a>
    </div>
  ),
  Callout: ({ type, title, children }) => (
    <div className={`blog-callout${type === 'warning' ? ' blog-callout-warning' : type === 'info' ? ' blog-callout-info' : ''}`}>
      {title && <p className="blog-callout-title">{title}</p>}
      {children}
    </div>
  ),
  StatRow: ({ children }) => <div className="blog-stat-row">{children}</div>,
  Stat: ({ number, label }) => (
    <div className="blog-stat-card">
      <div className="blog-stat-number">{number}</div>
      <div className="blog-stat-label">{label}</div>
    </div>
  ),
  KeyTakeaway: ({ title, children }) => (
    <div className="blog-key-takeaway">
      <p className="blog-key-takeaway-title">{title || 'Key Takeaways'}</p>
      {children}
    </div>
  ),
};

export default async function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const related = getRelatedPosts(params.slug, 3);

  return (
    <div className="dark-page">
      <article>
        <section className="product-hero" style={{ paddingBottom: '40px' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <a href="/blog" className="blog-back-link animate-on-scroll">&larr; Back to Blog</a>
            <span className="blog-card-category animate-on-scroll" style={{ marginBottom: '16px', display: 'inline-block' }}>
              {post.category}
            </span>
            <h1 className="animate-on-scroll" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              {post.title}
            </h1>
            <p className="section-sub animate-on-scroll">{post.description}</p>
            <div className="blog-post-meta animate-on-scroll">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>{post.date}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        <div className="blog-hero-divider" />

        <section style={{ padding: '40px 0 80px' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="blog-prose">
              {content}
            </div>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="product-more-section">
          <div className="container">
            <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>
              Related articles
            </h2>
            <div className="blog-grid" style={{ maxWidth: '1000px', margin: '40px auto 0' }}>
              {related.map((r) => (
                <a key={r.slug} href={`/blog/${r.slug}`} className="blog-card animate-on-scroll">
                  <span className="blog-card-category">{r.category}</span>
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                  <div className="blog-card-meta">
                    <span>{r.date}</span>
                    <span>&middot;</span>
                    <span>{r.readTime}</span>
                  </div>
                  <span className="blog-card-link">Read article &rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <ProductCTA />

      <JsonLd data={articleSchema(post)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Blog', url: `${SITE_URL}/blog` },
        { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
      ])} />
    </div>
  );
}
