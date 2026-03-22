'use client';

import { useEffect, useRef } from 'react';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Mega menu hover logic
    const navItems = nav.querySelectorAll('.nav-item.has-mega-menu');
    let hoverTimeout;

    const handlers = [];

    navItems.forEach(item => {
      const btn = item.querySelector('.nav-link-btn');

      const onEnter = () => {
        clearTimeout(hoverTimeout);
        navItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
        item.classList.add('active');
        if (btn) btn.setAttribute('aria-expanded', 'true');
      };

      const onLeave = () => {
        hoverTimeout = setTimeout(() => {
          item.classList.remove('active');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }, 150);
      };

      const onClick = (e) => {
        e.preventDefault();
        const isOpen = item.classList.contains('active');
        navItems.forEach(other => other.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
          if (btn) btn.setAttribute('aria-expanded', 'true');
        } else {
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      };

      item.addEventListener('mouseenter', onEnter);
      item.addEventListener('mouseleave', onLeave);
      if (btn) btn.addEventListener('click', onClick);

      handlers.push({ item, btn, onEnter, onLeave, onClick });
    });

    // Navbar scroll class
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Close on click outside
    const onDocClick = (e) => {
      if (!e.target.closest('.nav-item')) {
        navItems.forEach(item => {
          item.classList.remove('active');
          const btn = item.querySelector('.nav-link-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      }
    };
    document.addEventListener('click', onDocClick);

    // Close on Escape
    const onEscape = (e) => {
      if (e.key === 'Escape') {
        navItems.forEach(item => {
          item.classList.remove('active');
          const btn = item.querySelector('.nav-link-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      }
    };
    document.addEventListener('keydown', onEscape);

    // Mobile menu
    const mobileToggle = nav.querySelector('.mobile-toggle');
    const mobileMenu = nav.parentElement?.querySelector('.mobile-menu');
    const mobileClose = mobileMenu?.querySelector('.mobile-menu-close');

    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
      if (mobileClose) {
        mobileClose.addEventListener('click', () => {
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        });
      }
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }

    // Mobile accordion
    const accordionToggles = mobileMenu?.querySelectorAll('.mobile-accordion-toggle') || [];
    accordionToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const parent = toggle.parentElement;
        const isOpen = parent.classList.contains('open');
        mobileMenu.querySelectorAll('.mobile-accordion').forEach(a => a.classList.remove('open'));
        if (!isOpen) parent.classList.add('open');
      });
    });

    return () => {
      handlers.forEach(({ item, btn, onEnter, onLeave, onClick }) => {
        item.removeEventListener('mouseenter', onEnter);
        item.removeEventListener('mouseleave', onLeave);
        if (btn) btn.removeEventListener('click', onClick);
      });
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onEscape);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar" id="navbar" ref={navRef}>
        <div className="container">
          <a href="/" className="nav-logo">
            <span className="nav-logo-text">Spotless.</span>
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
            <li className="nav-item has-mega-menu">
              <button className="nav-link-btn" aria-expanded="false" aria-haspopup="true">
                Solutions <span className="nav-chevron">&#9662;</span>
              </button>
              <div className="mega-menu" role="menu">
                <div className="container">
                  <div className="mega-menu-inner">
                    <div className="mega-menu-grid solutions-grid">
                      <a href="/residential" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#127968;</div>
                        <div>
                          <div className="mega-menu-title">Residential Cleaning</div>
                          <div className="mega-menu-desc">House &amp; apartment cleaning</div>
                        </div>
                      </a>
                      <a href="/commercial" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#127970;</div>
                        <div>
                          <div className="mega-menu-title">Commercial Cleaning</div>
                          <div className="mega-menu-desc">Office &amp; facility cleaning</div>
                        </div>
                      </a>
                      <a href="/pressure-washing" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128166;</div>
                        <div>
                          <div className="mega-menu-title">Pressure Washing</div>
                          <div className="mega-menu-desc">Power washing services</div>
                        </div>
                      </a>
                      <a href="/auto-detailing" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128663;</div>
                        <div>
                          <div className="mega-menu-title">Auto Detailing</div>
                          <div className="mega-menu-desc">Car detailing &amp; wash</div>
                        </div>
                      </a>
                      <a href="/window-cleaning" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128999;</div>
                        <div>
                          <div className="mega-menu-title">Window Cleaning</div>
                          <div className="mega-menu-desc">Glass &amp; window services</div>
                        </div>
                      </a>
                      <a href="/pool-cleaning" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#127946;</div>
                        <div>
                          <div className="mega-menu-title">Pool Cleaning</div>
                          <div className="mega-menu-desc">Pool maintenance</div>
                        </div>
                      </a>
                      <a href="/airbnb" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#9992;</div>
                        <div>
                          <div className="mega-menu-title">Airbnb Turnovers</div>
                          <div className="mega-menu-desc">Short-term rental turnovers</div>
                        </div>
                      </a>
                      <a href="/pest-control" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128027;</div>
                        <div>
                          <div className="mega-menu-title">Pest Control</div>
                          <div className="mega-menu-desc">Bug &amp; pest removal</div>
                        </div>
                      </a>
                      <a href="/carpet-cleaning" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#129529;</div>
                        <div>
                          <div className="mega-menu-title">Carpet Cleaning</div>
                          <div className="mega-menu-desc">Floor &amp; carpet care</div>
                        </div>
                      </a>
                      <a href="/junk-removal" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128465;</div>
                        <div>
                          <div className="mega-menu-title">Junk Removal</div>
                          <div className="mega-menu-desc">Haul-away services</div>
                        </div>
                      </a>
                      <a href="/soft-washing" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#129529;</div>
                        <div>
                          <div className="mega-menu-title">Soft Washing</div>
                          <div className="mega-menu-desc">Gentle exterior cleaning</div>
                        </div>
                      </a>
                      <a href="/move-in-out" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128230;</div>
                        <div>
                          <div className="mega-menu-title">Move-In / Move-Out</div>
                          <div className="mega-menu-desc">End-of-tenancy cleaning</div>
                        </div>
                      </a>
                    </div>
                    <div className="mega-menu-highlight">
                      <div className="mega-menu-highlight-tag">Solutions</div>
                      <h3>Built for your industry</h3>
                      <p>Every feature tailored to how your specific business actually works.</p>
                      <a href="/pricing" className="btn-primary">See Pricing &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
            <li className="nav-item has-mega-menu">
              <button className="nav-link-btn" aria-expanded="false" aria-haspopup="true">
                Free Tools <span className="nav-chevron">&#9662;</span>
              </button>
              <div className="mega-menu" role="menu">
                <div className="container">
                  <div className="mega-menu-inner">
                    <div className="mega-menu-grid tools-grid">
                      <div className="mega-menu-category-label">Document Generators</div>
                      <a href="/tools/invoice-generator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128196;</div>
                        <div>
                          <div className="mega-menu-title">Invoice Generator</div>
                          <div className="mega-menu-desc">Professional invoices with line items &amp; tax</div>
                        </div>
                      </a>
                      <a href="/tools/proposal-generator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128203;</div>
                        <div>
                          <div className="mega-menu-title">Proposal Generator</div>
                          <div className="mega-menu-desc">Cleaning proposals with scope &amp; pricing</div>
                        </div>
                      </a>
                      <a href="/tools/contract-generator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128220;</div>
                        <div>
                          <div className="mega-menu-title">Contract Generator</div>
                          <div className="mega-menu-desc">Service contracts with legal clauses</div>
                        </div>
                      </a>
                      <a href="/tools/timesheet-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#9202;</div>
                        <div>
                          <div className="mega-menu-title">Timesheet Calculator</div>
                          <div className="mega-menu-desc">Employee hours, overtime &amp; pay</div>
                        </div>
                      </a>
                      <a href="/tools/checklist-generator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#9989;</div>
                        <div>
                          <div className="mega-menu-title">Checklist Generator</div>
                          <div className="mega-menu-desc">Custom cleaning checklists to print</div>
                        </div>
                      </a>
                      <div className="mega-menu-category-label">Business Calculators</div>
                      <a href="/tools/pricing-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128176;</div>
                        <div>
                          <div className="mega-menu-title">Pricing Calculator</div>
                          <div className="mega-menu-desc">Job pricing by size, rooms &amp; service type</div>
                        </div>
                      </a>
                      <a href="/tools/profit-margin-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128200;</div>
                        <div>
                          <div className="mega-menu-title">Profit Margin Calculator</div>
                          <div className="mega-menu-desc">Margins, costs &amp; what-if scenarios</div>
                        </div>
                      </a>
                      <a href="/tools/cleaning-time-estimator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#9201;</div>
                        <div>
                          <div className="mega-menu-title">Cleaning Time Estimator</div>
                          <div className="mega-menu-desc">Job duration with room breakdowns</div>
                        </div>
                      </a>
                      <a href="/tools/startup-cost-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#127793;</div>
                        <div>
                          <div className="mega-menu-title">Startup Cost Calculator</div>
                          <div className="mega-menu-desc">Equipment, licensing &amp; 6-month projection</div>
                        </div>
                      </a>
                      <a href="/tools/roi-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128200;</div>
                        <div>
                          <div className="mega-menu-title">Software ROI Calculator</div>
                          <div className="mega-menu-desc">Calculate your cleaning software savings</div>
                        </div>
                      </a>
                      <a href="/tools/employee-cost-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#129489;</div>
                        <div>
                          <div className="mega-menu-title">Employee Cost Calculator</div>
                          <div className="mega-menu-desc">True cost per cleaner with margins</div>
                        </div>
                      </a>
                      <a href="/tools/quote-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-icon">&#128221;</div>
                        <div>
                          <div className="mega-menu-title">Quote Calculator</div>
                          <div className="mega-menu-desc">Instant cleaning quotes by property</div>
                        </div>
                      </a>
                    </div>
                    <div className="mega-menu-highlight">
                      <div className="mega-menu-highlight-tag">Free Tools</div>
                      <h3>No signup required</h3>
                      <p>Professional calculators and document generators — your data never leaves your browser.</p>
                      <a href="/tools" className="btn-primary">View All Tools &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="nav-cta">
            <a href="https://app.spotlessapp.io/login" className="btn-ghost">Log In</a>
            <a href="https://app.spotlessapp.io/register" className="btn-primary">Start Free Trial</a>
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
            <a href="/pressure-washing">Pressure Washing</a>
            <a href="/auto-detailing">Auto Detailing</a>
            <a href="/window-cleaning">Window Cleaning</a>
            <a href="/pool-cleaning">Pool Cleaning</a>
            <a href="/airbnb">Airbnb Turnovers</a>
            <a href="/pest-control">Pest Control</a>
            <a href="/carpet-cleaning">Carpet Cleaning</a>
            <a href="/junk-removal">Junk Removal</a>
            <a href="/soft-washing">Soft Washing</a>
            <a href="/move-in-out">Move-In / Move-Out</a>
          </div>
        </div>
        <a href="/pricing">Pricing</a>
        <a href="/blog">Blog</a>
        <a href="/locations">Locations</a>
        <div className="mobile-accordion">
          <button className="mobile-accordion-toggle">Free Tools <span className="mobile-accordion-chevron">&#9662;</span></button>
          <div className="mobile-accordion-panel">
            <a href="/tools">All Free Tools</a>
            <a href="/tools/invoice-generator">Invoice Generator</a>
            <a href="/tools/proposal-generator">Proposal Generator</a>
            <a href="/tools/contract-generator">Contract Generator</a>
            <a href="/tools/timesheet-calculator">Timesheet Calculator</a>
            <a href="/tools/pricing-calculator">Pricing Calculator</a>
            <a href="/tools/profit-margin-calculator">Profit Margin Calculator</a>
            <a href="/tools/cleaning-time-estimator">Cleaning Time Estimator</a>
            <a href="/tools/startup-cost-calculator">Startup Cost Calculator</a>
            <a href="/tools/roi-calculator">Software ROI Calculator</a>
            <a href="/tools/employee-cost-calculator">Employee Cost Calculator</a>
            <a href="/tools/quote-calculator">Quote Calculator</a>
            <a href="/tools/checklist-generator">Checklist Generator</a>
          </div>
        </div>
        <a href="https://app.spotlessapp.io/login" className="btn-ghost">Log In</a>
        <a href="https://app.spotlessapp.io/register" className="btn-primary">Start Free Trial</a>
      </div>
    </>
  );
}
