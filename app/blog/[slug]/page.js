import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import ProductCTA from '../../../components/product-cta';
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '../../../lib/blog';

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
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
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
};

export default async function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
  });

  const related = getRelatedPosts(params.slug, 3);

  return (
    <>
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

        <section style={{ padding: '0 0 80px' }}>
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
    </>
  );
}
