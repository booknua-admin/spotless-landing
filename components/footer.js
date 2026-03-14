export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="/" className="nav-logo" style={{ display: 'inline-flex' }}>
              <span className="nav-logo-text">Spotless.</span>
            </a>
            <p className="footer-brand-text">
              The operating system for modern cleaning companies. Built by people who understand the
              industry, for people who run it.
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href="/product">Platform Overview</a>
            <a href="/product/scheduling">Scheduling &amp; Jobs</a>
            <a href="/product/custom-forms">Custom Forms</a>
            <a href="/product/payments">Payments</a>
            <a href="/product/staff-management">Staff Management</a>
            <a href="/product/finance">Finance</a>
            <a href="/product/referrals-reviews">Referrals &amp; Reviews</a>
            <a href="/product/automations">Automations</a>
            <a href="/#pricing">Pricing</a>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <a href="/residential">Residential Cleaning</a>
            <a href="/commercial">Commercial Cleaning</a>
            <a href="/airbnb">Airbnb Turnovers</a>
            <a href="/move-in-out">Move-In / Move-Out</a>
            <a href="/deep-cleaning">Deep Cleaning</a>
            <a href="/post-construction">Post-Construction</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">&copy; 2026 Spotless. All rights reserved.</div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
