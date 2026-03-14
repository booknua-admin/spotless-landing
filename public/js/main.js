/* ============================================================
   SPOTLESS — Main JavaScript
   Scroll animations, navbar, FAQ, pricing toggle, ROI calc
   ============================================================ */

function initPage() {
  initNavbar();
  initScrollAnimations();
  initFAQ();
  initPricingToggle();
  initROICalculator();
  initMobileMenu();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}

/* ============ NAVBAR ============ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 50);
    lastScroll = scrollY;
  }, { passive: true });
}

/* ============ SCROLL ANIMATIONS ============ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  // Counter animation for stat numbers
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    counterObserver.observe(el);
  });
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* ============ FAQ ============ */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Toggle current
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ============ PRICING TOGGLE ============ */
function initPricingToggle() {
  const toggle = document.getElementById('pricingToggle');
  if (!toggle) return;

  let isAnnual = false;

  toggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    toggle.classList.toggle('annual', isAnnual);

    const monthlyLabel = document.getElementById('monthlyLabel');
    const annualLabel = document.getElementById('annualLabel');
    if (monthlyLabel) monthlyLabel.classList.toggle('active', !isAnnual);
    if (annualLabel) annualLabel.classList.toggle('active', isAnnual);

    document.querySelectorAll('.pricing-value').forEach(el => {
      el.textContent = isAnnual ? el.dataset.annual : el.dataset.monthly;
    });
  });
}

/* ============ ROI CALCULATOR ============ */
function initROICalculator() {
  const clientsSlider = document.getElementById('roiClients');
  const jobValueSlider = document.getElementById('roiJobValue');
  const hoursSlider = document.getElementById('roiHours');

  if (!clientsSlider || !jobValueSlider || !hoursSlider) return;

  function calcROI() {
    const clients = parseInt(clientsSlider.value);
    const jobValue = parseInt(jobValueSlider.value);
    const hours = parseInt(hoursSlider.value);

    document.getElementById('roiClientsVal').textContent = clients;
    document.getElementById('roiJobValueVal').textContent = '\u20AC' + jobValue;
    document.getElementById('roiHoursVal').textContent = hours;

    const timeSaved = (hours * 0.75).toFixed(1);
    const revenueUplift = Math.round(clients * jobValue * 0.23 * 12);
    const paymentRecovery = Math.round(clients * jobValue * 0.05 * 12);
    const adminSaved = Math.round(timeSaved * 52 * 15);
    const total = revenueUplift + paymentRecovery + adminSaved;

    document.getElementById('roiTimeSaved').textContent = timeSaved + ' hrs';
    document.getElementById('roiRevenue').textContent = '+\u20AC' + revenueUplift.toLocaleString();
    document.getElementById('roiPayments').textContent = '+\u20AC' + paymentRecovery.toLocaleString();
    document.getElementById('roiAdmin').textContent = '+\u20AC' + adminSaved.toLocaleString();
    document.getElementById('roiTotal').textContent = '\u20AC' + total.toLocaleString();
  }

  clientsSlider.addEventListener('input', calcROI);
  jobValueSlider.addEventListener('input', calcROI);
  hoursSlider.addEventListener('input', calcROI);

  // Initial calculation
  calcROI();
}

/* ============ MOBILE MENU ============ */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-menu-close');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  if (close) {
    close.addEventListener('click', () => {
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ============ SMOOTH SCROLL ============ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const pos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  });
}
