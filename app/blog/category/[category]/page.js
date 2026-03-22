import { notFound } from 'next/navigation';
import { getAllCategories, getPostsByCategory, categorySlug } from '../../../../lib/blog';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCategories().map((cat) => ({
    category: categorySlug(cat),
  }));
}

export function generateMetadata({ params }) {
  const category = getAllCategories().find(
    (c) => categorySlug(c) === params.category,
  );

  if (!category) {
    return {};
  }

  return {
    title: `${category} — Spotless Blog`,
    description: `Articles about ${category.toLowerCase()} for cleaning and service business owners.`,
  };
}

export default function CategoryPage({ params }) {
  const allCategories = getAllCategories();
  const category = allCategories.find(
    (c) => categorySlug(c) === params.category,
  );

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category);

  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <a href="/blog" className="blog-back-link animate-on-scroll">&larr; All articles</a>
          <div className="section-tag animate-on-scroll">{category}</div>
          <h1 className="animate-on-scroll">{category}</h1>
          <p className="section-sub animate-on-scroll">
            {posts.length} article{posts.length !== 1 ? 's' : ''} in this category.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
          <div className="blog-category-pills animate-on-scroll">
            <a href="/blog" className="blog-pill">All</a>
            {allCategories.map((cat) => (
              <a
                key={cat}
                href={`/blog/category/${categorySlug(cat)}`}
                className={`blog-pill${cat === category ? ' active' : ''}`}
              >
                {cat}
              </a>
            ))}
          </div>

          {/* Section header */}
          <div className="blog-section-header">
            <h2>{category}</h2>
            <span>{posts.length} articles</span>
          </div>

          <div className="blog-grid">
            {posts.map((post) => (
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
    </div>
  );
}
