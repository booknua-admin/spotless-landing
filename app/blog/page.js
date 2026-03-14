import { getAllPosts, getAllCategories } from '../../lib/blog';
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
              <a key={cat} href={`/blog/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} className="blog-pill">
                {cat}
              </a>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <a href={`/blog/${featured.slug}`} className="blog-featured-card animate-on-scroll">
              <div className="blog-featured-content">
                <span className="blog-card-category">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.description}</p>
                <div className="blog-card-meta">
                  <span>{featured.date}</span>
                  <span>&middot;</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="blog-card-link">Read article &rarr;</span>
              </div>
            </a>
          )}

          {/* Post grid */}
          <div className="blog-grid">
            {rest.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card animate-on-scroll">
                <span className="blog-card-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="blog-card-link">Read article &rarr;</span>
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
