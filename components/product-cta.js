export default function ProductCTA() {
  return (
    <section className="final-cta">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title animate-on-scroll">
          Ready to run your cleaning business<br />like a machine?
        </h2>
        <p className="section-sub animate-on-scroll">
          Join 500+ cleaning companies who&rsquo;ve already made the switch. Your 14-day free trial
          starts now &mdash; no credit card needed.
        </p>
        <div className="final-cta-actions animate-on-scroll">
          <a href="https://app.spotlessapp.io/register" className="btn-primary btn-primary-lg">
            Start Your Free Trial <span>&rarr;</span>
          </a>
          <a href="/contact" className="btn-ghost">
            Book a Demo
          </a>
        </div>
        <div className="final-cta-note animate-on-scroll">
          Free 14-day trial &middot; No credit card required &middot; Cancel anytime
        </div>
      </div>
    </section>
  );
}
