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
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Scheduling &amp; Jobs</div>
                          <div className="mega-menu-item-desc">Drag-and-drop calendar</div>
                        </div>
                      </a>
                      <a href="/product/custom-forms" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Custom Forms</div>
                          <div className="mega-menu-item-desc">Online booking &amp; enquiries</div>
                        </div>
                      </a>
                      <a href="/product/payments" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Payments &amp; Invoicing</div>
                          <div className="mega-menu-item-desc">Invoicing &amp; card payments</div>
                        </div>
                      </a>
                      <a href="/product/staff-management" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Staff Management</div>
                          <div className="mega-menu-item-desc">Teams, shifts &amp; availability</div>
                        </div>
                      </a>
                      <a href="/product/finance" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Finance Tools</div>
                          <div className="mega-menu-item-desc">Revenue tracking &amp; reports</div>
                        </div>
                      </a>
                      <a href="/product/referrals-reviews" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Referrals &amp; Reviews</div>
                          <div className="mega-menu-item-desc">Automated review requests</div>
                        </div>
                      </a>
                      <a href="/product/automations" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Automations</div>
                          <div className="mega-menu-item-desc">Workflows on autopilot</div>
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
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Residential Cleaning</div>
                          <div className="mega-menu-item-desc">House &amp; apartment cleaning</div>
                        </div>
                      </a>
                      <a href="/commercial" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Commercial Cleaning</div>
                          <div className="mega-menu-item-desc">Office &amp; facility cleaning</div>
                        </div>
                      </a>
                      <a href="/pressure-washing" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Pressure Washing</div>
                          <div className="mega-menu-item-desc">Power washing services</div>
                        </div>
                      </a>
                      <a href="/auto-detailing" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Auto Detailing</div>
                          <div className="mega-menu-item-desc">Car detailing &amp; wash</div>
                        </div>
                      </a>
                      <a href="/window-cleaning" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="2" y1="12" x2="22" y2="12"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Window Cleaning</div>
                          <div className="mega-menu-item-desc">Glass &amp; window services</div>
                        </div>
                      </a>
                      <a href="/pool-cleaning" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20c.9.9 2 1.4 3.2 1.4s2.3-.5 3.2-1.4c.9-.9 2-1.4 3.2-1.4s2.3.5 3.2 1.4c.9.9 2 1.4 3.2 1.4s2.3-.5 3.2-1.4"/><path d="M2 16c.9.9 2 1.4 3.2 1.4s2.3-.5 3.2-1.4c.9-.9 2-1.4 3.2-1.4s2.3.5 3.2 1.4c.9.9 2 1.4 3.2 1.4s2.3-.5 3.2-1.4"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Pool Cleaning</div>
                          <div className="mega-menu-item-desc">Pool maintenance</div>
                        </div>
                      </a>
                      <a href="/airbnb" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Airbnb Turnovers</div>
                          <div className="mega-menu-item-desc">Short-term rental turnovers</div>
                        </div>
                      </a>
                      <a href="/pest-control" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Pest Control</div>
                          <div className="mega-menu-item-desc">Bug &amp; pest removal</div>
                        </div>
                      </a>
                      <a href="/carpet-cleaning" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Carpet Cleaning</div>
                          <div className="mega-menu-item-desc">Floor &amp; carpet care</div>
                        </div>
                      </a>
                      <a href="/junk-removal" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Junk Removal</div>
                          <div className="mega-menu-item-desc">Haul-away services</div>
                        </div>
                      </a>
                      <a href="/soft-washing" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Soft Washing</div>
                          <div className="mega-menu-item-desc">Gentle exterior cleaning</div>
                        </div>
                      </a>
                      <a href="/move-in-out" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Move-In / Move-Out</div>
                          <div className="mega-menu-item-desc">End-of-tenancy cleaning</div>
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
            <li><a href="/contact">Contact</a></li>
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
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Invoice Generator</div>
                          <div className="mega-menu-item-desc">Professional invoices with line items &amp; tax</div>
                        </div>
                      </a>
                      <a href="/tools/proposal-generator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12h4"/><path d="M10 16h4"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Proposal Generator</div>
                          <div className="mega-menu-item-desc">Cleaning proposals with scope &amp; pricing</div>
                        </div>
                      </a>
                      <a href="/tools/contract-generator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Contract Generator</div>
                          <div className="mega-menu-item-desc">Service contracts with legal clauses</div>
                        </div>
                      </a>
                      <a href="/tools/timesheet-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Timesheet Calculator</div>
                          <div className="mega-menu-item-desc">Employee hours, overtime &amp; pay</div>
                        </div>
                      </a>
                      <a href="/tools/checklist-generator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Checklist Generator</div>
                          <div className="mega-menu-item-desc">Custom cleaning checklists to print</div>
                        </div>
                      </a>
                      <div className="mega-menu-category-label">Business Calculators</div>
                      <a href="/tools/pricing-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Pricing Calculator</div>
                          <div className="mega-menu-item-desc">Job pricing by size, rooms &amp; service type</div>
                        </div>
                      </a>
                      <a href="/tools/profit-margin-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Profit Margin Calculator</div>
                          <div className="mega-menu-item-desc">Margins, costs &amp; what-if scenarios</div>
                        </div>
                      </a>
                      <a href="/tools/cleaning-time-estimator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Cleaning Time Estimator</div>
                          <div className="mega-menu-item-desc">Job duration with room breakdowns</div>
                        </div>
                      </a>
                      <a href="/tools/startup-cost-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Startup Cost Calculator</div>
                          <div className="mega-menu-item-desc">Equipment, licensing &amp; 6-month projection</div>
                        </div>
                      </a>
                      <a href="/tools/roi-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Software ROI Calculator</div>
                          <div className="mega-menu-item-desc">Calculate your cleaning software savings</div>
                        </div>
                      </a>
                      <a href="/tools/employee-cost-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Employee Cost Calculator</div>
                          <div className="mega-menu-item-desc">True cost per cleaner with margins</div>
                        </div>
                      </a>
                      <a href="/tools/quote-calculator" className="mega-menu-item" role="menuitem">
                        <div className="mega-menu-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
                        <div>
                          <div className="mega-menu-item-title">Quote Calculator</div>
                          <div className="mega-menu-item-desc">Instant cleaning quotes by property</div>
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
          <button className="mobile-toggle" aria-label="Open menu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
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
        <a href="/contact">Contact</a>
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
