import { getAllPosts, getAllCategories, categorySlug } from '../../lib/blog';
import JsonLd from '../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../lib/seo';
import { breadcrumbSchema } from '../../lib/schema';

const seo = getPageSeo('/blog');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
};

function getCategoryIcon(category) {
  const icons = {
    'Operations': '\u2699\uFE0F',
    'Growth': '\uD83D\uDCC8',
    'Technology': '\uD83D\uDCBB',
    'Pricing': '\uD83D\uDCB0',
    'Industry': '\uD83C\uDFE2',
  };
  return icons[category] || '\uD83D\uDCDD';
}

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featured = posts.find((p) => p.featured) || posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Blog</div>
          <h1 className="animate-on-scroll">
            Resources for service<br />business owners
          </h1>
          <p className="section-sub animate-on-scroll">
            Practical guides on pricing, growth, operations, and marketing &mdash; written for people
            who actually run cleaning and service businesses.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
          {/* Category filters */}
          <div className="blog-category-pills animate-on-scroll">
            <a href="/blog" className="blog-pill active">All</a>
            {categories.map((cat) => (
              <a key={cat} href={`/blog/category/${categorySlug(cat)}`} className="blog-pill">
                {cat}
              </a>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <a href={`/blog/${featured.slug}`} className="blog-featured-card animate-on-scroll">
              <div>
                <div className="blog-featured-badge">Featured Article</div>
                <h2>{featured.title}</h2>
                <p>{featured.description}</p>
                <div className="blog-featured-meta">
                  <span>{featured.author}</span>
                  <span>&middot;</span>
                  <span>{new Date(featured.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <span>&middot;</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
              <div className="blog-featured-visual">
                {getCategoryIcon(featured.category)}
              </div>
            </a>
          )}

          {/* Section header */}
          <div className="blog-section-header">
            <h2>All Articles</h2>
            <span>{rest.length} articles</span>
          </div>

          {/* Post grid */}
          <div className="blog-grid">
            {rest.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card animate-on-scroll">
                <span className="blog-card-category">{post.category}</span>
                <h3>{post.title}</h3>
                <span className="blog-card-description">{post.description}</span>
                <div className="blog-card-footer">
                  <span className="blog-card-author">
                    <span className="blog-card-avatar">ST</span>
                    <span>{post.author}</span>
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Blog', url: `${SITE_URL}/blog` },
      ])} />
    </div>
  );
}
