export const metadata = {
  title: 'Page Not Found | Spotless',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="hero">
      <div className="container">
        <div className="niche-hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot">!</span>
            That page could not be found
          </div>
          <h1>
            Let&apos;s get you back to <span className="highlight">Spotless.</span>
          </h1>
          <p className="niche-hero-sub">
            The page you requested does not exist or has been moved.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <a href="/" className="btn-primary btn-primary-lg">
              Return Home <span>&rarr;</span>
            </a>
            <a href="/blog" className="btn-ghost">
              Blog
            </a>
            <a href="/tools" className="btn-ghost">
              Free Tools
            </a>
            <a href="/pricing" className="btn-ghost">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
