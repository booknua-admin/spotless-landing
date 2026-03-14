'use client';

export default function Navbar() {
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="container">
          <a href="/" className="nav-logo">
            <div className="nav-logo-icon">&#10022;</div>
            <span className="nav-logo-text">Spotless</span>
          </a>
          <ul className="nav-links">
            <li className="nav-item has-mega-menu">
              <button className="nav-link-btn" aria-expanded="false" aria-haspopup="true">
                Product <span className="nav-chevron">&#9662;</span>
              </button>
              <div className="mega-menu" role="menu">
                <div className="container">
                  <div className="mega-menu-inner">
                    <div className="mega-menu-grid">
                      <a href="/product/scheduling" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128197;</div>
                        <div>
                          <div className="mega-menu-title">Scheduling &amp; Jobs</div>
                          <div className="mega-menu-desc">Drag-and-drop calendar, recurring jobs, pipeline</div>
                        </div>
                      </a>
                      <a href="/product/custom-forms" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128221;</div>
                        <div>
                          <div className="mega-menu-title">Custom Forms</div>
                          <div className="mega-menu-desc">Embeddable booking &amp; quote request forms</div>
                        </div>
                      </a>
                      <a href="/product/payments" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128179;</div>
                        <div>
                          <div className="mega-menu-title">Payments &amp; Invoicing</div>
                          <div className="mega-menu-desc">Cards, auto-invoicing, recurring billing</div>
                        </div>
                      </a>
                      <a href="/product/staff-management" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128101;</div>
                        <div>
                          <div className="mega-menu-title">Staff Management</div>
                          <div className="mega-menu-desc">Teams, shifts, time tracking, payroll</div>
                        </div>
                      </a>
                      <a href="/product/finance" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128200;</div>
                        <div>
                          <div className="mega-menu-title">Finance Tools</div>
                          <div className="mega-menu-desc">Revenue analytics, transactions, payouts</div>
                        </div>
                      </a>
                      <a href="/product/referrals-reviews" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#11088;</div>
                        <div>
                          <div className="mega-menu-title">Referrals &amp; Reviews</div>
                          <div className="mega-menu-desc">Review collection, referrals, discounts</div>
                        </div>
                      </a>
                      <a href="/product/automations" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#9889;</div>
                        <div>
                          <div className="mega-menu-title">Automations</div>
                          <div className="mega-menu-desc">Workflows, pricing rules, alerts</div>
                        </div>
                      </a>
                    </div>
                    <div className="mega-menu-highlight">
                      <div className="mega-menu-highlight-tag">Platform</div>
                      <h3>The complete OS for cleaning companies</h3>
                      <p>See how every feature works together to run your entire business.</p>
                      <a href="/product" className="btn-primary">Platform Overview &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <button className="nav-link-btn" aria-expanded="false" aria-haspopup="true">
                Solutions <span className="nav-chevron">&#9662;</span>
              </button>
              <div className="nav-dropdown" role="menu">
                <a href="/residential" role="menuitem">Residential Cleaning</a>
                <a href="/commercial" role="menuitem">Commercial Cleaning</a>
                <a href="/airbnb" role="menuitem">Airbnb Turnovers</a>
                <a href="/move-in-out" role="menuitem">Move-In / Move-Out</a>
                <a href="/deep-cleaning" role="menuitem">Deep Cleaning</a>
                <a href="/post-construction" role="menuitem">Post-Construction</a>
              </div>
            </li>
            <li><a href="/#pricing">Pricing</a></li>
            <li className="nav-item has-dropdown">
              <button className="nav-link-btn" aria-expanded="false" aria-haspopup="true">
                Resources <span className="nav-chevron">&#9662;</span>
              </button>
              <div className="nav-dropdown" role="menu">
                <a href="/#roi" role="menuitem">ROI Calculator</a>
                <a href="/#faq" role="menuitem">FAQ</a>
              </div>
            </li>
          </ul>
          <div className="nav-cta">
            <a href="#" className="btn-ghost">Log In</a>
            <a href="/#cta" className="btn-primary">Start Free Trial</a>
          </div>
          <button className="mobile-toggle" aria-label="Open menu">&#9776;</button>
        </div>
      </nav>

      <div className="mobile-menu">
        <button className="mobile-menu-close" aria-label="Close menu">&times;</button>
        <div className="mobile-accordion">
          <button className="mobile-accordion-toggle">Product <span className="mobile-accordion-chevron">&#9662;</span></button>
          <div className="mobile-accordion-panel">
            <a href="/product">Platform Overview</a>
            <a href="/product/scheduling">Scheduling &amp; Jobs</a>
            <a href="/product/custom-forms">Custom Forms</a>
            <a href="/product/payments">Payments &amp; Invoicing</a>
            <a href="/product/staff-management">Staff Management</a>
            <a href="/product/finance">Finance Tools</a>
            <a href="/product/referrals-reviews">Referrals &amp; Reviews</a>
            <a href="/product/automations">Automations</a>
          </div>
        </div>
        <div className="mobile-accordion">
          <button className="mobile-accordion-toggle">Solutions <span className="mobile-accordion-chevron">&#9662;</span></button>
          <div className="mobile-accordion-panel">
            <a href="/residential">Residential Cleaning</a>
            <a href="/commercial">Commercial Cleaning</a>
            <a href="/airbnb">Airbnb Turnovers</a>
            <a href="/move-in-out">Move-In / Move-Out</a>
            <a href="/deep-cleaning">Deep Cleaning</a>
            <a href="/post-construction">Post-Construction</a>
          </div>
        </div>
        <a href="/#pricing">Pricing</a>
        <div className="mobile-accordion">
          <button className="mobile-accordion-toggle">Resources <span className="mobile-accordion-chevron">&#9662;</span></button>
          <div className="mobile-accordion-panel">
            <a href="/#roi">ROI Calculator</a>
            <a href="/#faq">FAQ</a>
          </div>
        </div>
        <a href="#" className="btn-ghost">Log In</a>
        <a href="/#cta" className="btn-primary">Start Free Trial</a>
      </div>
    </>
  );
}
