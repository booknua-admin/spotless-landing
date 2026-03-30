import '../../css/home.css';
import '../../css/product.css';
import '../../css/mockups.css';
import ProductCTA from '../../components/product-cta';
import JsonLd from '../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../lib/seo';
import { faqPageSchema, breadcrumbSchema, softwareApplicationSchema } from '../../lib/schema';

const seo = getPageSeo('/pricing');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
};

const FAQ_ITEMS = [
  {
    question: 'Can I switch plans later?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time from your account settings. When you upgrade, you\'ll get immediate access to the new features and we\'ll pro-rate the difference. When you downgrade, the change takes effect at the start of your next billing cycle.',
  },
  {
    question: 'What happens after my free trial?',
    answer: 'If you love Spotless (and we think you will), you\'ll be asked to pick a paid plan and enter your payment details. If you decide it\'s not for you, you can stay on the Free plan or your account simply expires — no charge, no questions asked.',
  },
  {
    question: 'Is there a free plan?',
    answer: 'Yes! Our Free plan includes up to 3 staff members, 1 booking form, email notifications, a customer portal, and basic reporting. It\'s a great way to get started with no commitment.',
  },
  {
    question: 'How does annual billing work?',
    answer: 'When you choose annual billing, you pay for 10 months upfront and get 2 months free. For example, the Pro plan is €29/mo monthly or €290/year (€24.17/mo). You can switch between monthly and annual billing at any time.',
  },
  {
    question: 'Do you charge per transaction?',
    answer: 'Spotless charges a flat monthly fee plus a transaction fee of 2.9% + €1.50 per payment processed. Business plan customers get lower transaction fees. There are no hidden charges or revenue cuts beyond this.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, Mastercard, American Express). For annual Business plans, we can also arrange bank transfer / direct debit if preferred.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. There are no contracts and no cancellation fees. You can cancel your subscription at any time from your account settings. Your access continues until the end of your current billing period, and you can export all your data before you go.',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="product-hero" style={{ minHeight: 'auto', paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag animate-on-scroll">Pricing</div>
          <h1 className="animate-on-scroll">
            Simple, transparent pricing
          </h1>
          <p className="section-sub animate-on-scroll" style={{ margin: '0 auto' }}>
            No hidden fees. No contracts. Start free and upgrade when you&rsquo;re ready.
            Annual billing gives you 2 months free.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="pricing-toggle animate-on-scroll">
            <span className="active" id="monthlyLabel">Monthly</span>
            <div className="toggle-switch" id="pricingToggle"></div>
            <span id="annualLabel">Annual</span>
            <span className="pricing-save">2 months free</span>
          </div>
          <div className="pricing-grid">
            {/* Free */}
            <div className="pricing-card animate-on-scroll stagger-1">
              <div className="pricing-plan">Free</div>
              <div className="pricing-desc">For solo cleaners just getting started</div>
              <div className="pricing-amount">
                <span className="pricing-value" data-monthly="Free" data-annual="Free">Free</span>
              </div>
              <ul className="pricing-features">
                <li><span className="pricing-check">&#10003;</span> 1 booking form</li>
                <li><span className="pricing-check">&#10003;</span> Up to 3 staff members</li>
                <li><span className="pricing-check">&#10003;</span> Email notifications</li>
                <li><span className="pricing-check">&#10003;</span> Customer portal</li>
                <li><span className="pricing-check">&#10003;</span> Basic reporting</li>
                <li><span className="pricing-check">&#10003;</span> Weekly payouts</li>
              </ul>
              <a href="https://app.spotlessapp.io/register" className="btn-primary dark">Get Started</a>
            </div>

            {/* Pro */}
            <div className="pricing-card animate-on-scroll stagger-2">
              <div className="pricing-plan">Pro</div>
              <div className="pricing-desc">For growing teams ready to scale</div>
              <div className="pricing-amount">
                <span className="pricing-currency">&euro;</span>
                <span className="pricing-value" data-monthly="29" data-annual="24.17">29</span>
                <span className="pricing-period">/mo</span>
              </div>
              <ul className="pricing-features">
                <li><span className="pricing-check">&#10003;</span> Up to 5 booking forms</li>
                <li><span className="pricing-check">&#10003;</span> Up to 10 staff members</li>
                <li><span className="pricing-check">&#10003;</span> 3 automations</li>
                <li><span className="pricing-check">&#10003;</span> Email + SMS notifications</li>
                <li><span className="pricing-check">&#10003;</span> Staff portal</li>
                <li><span className="pricing-check">&#10003;</span> Next-day payouts</li>
                <li><span className="pricing-check">&#10003;</span> Advanced reporting</li>
              </ul>
              <a href="https://app.spotlessapp.io/register" className="btn-primary dark">Start Free Trial</a>
            </div>

            {/* Growth */}
            <div className="pricing-card featured animate-on-scroll stagger-3">
              <div className="pricing-popular">Most Popular</div>
              <div className="pricing-plan">Growth</div>
              <div className="pricing-desc">For companies scaling fast with automation</div>
              <div className="pricing-amount">
                <span className="pricing-currency">&euro;</span>
                <span className="pricing-value" data-monthly="69" data-annual="57.50">69</span>
                <span className="pricing-period">/mo</span>
              </div>
              <ul className="pricing-features">
                <li><span className="pricing-check">&#10003;</span> Unlimited booking forms</li>
                <li><span className="pricing-check">&#10003;</span> Up to 25 staff members</li>
                <li><span className="pricing-check">&#10003;</span> Unlimited automations</li>
                <li><span className="pricing-check">&#10003;</span> Email + SMS + WhatsApp</li>
                <li><span className="pricing-check">&#10003;</span> Google Reviews integration</li>
                <li><span className="pricing-check">&#10003;</span> Next-day payouts</li>
                <li><span className="pricing-check">&#10003;</span> Referral program</li>
              </ul>
              <a href="https://app.spotlessapp.io/register" className="btn-primary btn-primary-lg">Start Free Trial</a>
            </div>

            {/* Business */}
            <div className="pricing-card animate-on-scroll stagger-4">
              <div className="pricing-plan">Business</div>
              <div className="pricing-desc">For established companies with large teams</div>
              <div className="pricing-amount">
                <span className="pricing-currency">&euro;</span>
                <span className="pricing-value" data-monthly="129" data-annual="107.50">129</span>
                <span className="pricing-period">/mo</span>
              </div>
              <ul className="pricing-features">
                <li><span className="pricing-check">&#10003;</span> Everything in Growth</li>
                <li><span className="pricing-check">&#10003;</span> Unlimited staff</li>
                <li><span className="pricing-check">&#10003;</span> Custom domain</li>
                <li><span className="pricing-check">&#10003;</span> White-label branding</li>
                <li><span className="pricing-check">&#10003;</span> API access</li>
                <li><span className="pricing-check">&#10003;</span> Same-day payouts</li>
                <li><span className="pricing-check">&#10003;</span> Lower transaction fees</li>
                <li><span className="pricing-check">&#10003;</span> Priority support</li>
              </ul>
              <a href="https://app.spotlessapp.io/register" className="btn-primary dark">Start Free Trial</a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="product-feature-section" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center', color: 'var(--white)', marginBottom: '48px' }}>
            Compare plans in detail
          </h2>
          <div className="animate-on-scroll" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="mockup-window">
              <div className="mockup-topbar">
                <div className="mockup-topbar-dot r"></div>
                <div className="mockup-topbar-dot y"></div>
                <div className="mockup-topbar-dot g"></div>
                <div className="mockup-topbar-url">Feature Comparison</div>
              </div>
              <div className="mockup-body" style={{ padding: '0' }}>
                <table className="mockup-table" style={{ fontSize: '13px' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>Feature</th>
                      <th style={{ textAlign: 'center' }}>Free</th>
                      <th style={{ textAlign: 'center' }}>Pro</th>
                      <th style={{ textAlign: 'center' }}>Growth</th>
                      <th style={{ textAlign: 'center' }}>Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Limits */}
                    <tr>
                      <td colSpan="5" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Limits
                      </td>
                    </tr>
                    <tr>
                      <td>Staff members</td>
                      <td style={{ textAlign: 'center' }}>3</td>
                      <td style={{ textAlign: 'center' }}>10</td>
                      <td style={{ textAlign: 'center' }}>25</td>
                      <td style={{ textAlign: 'center' }}>Unlimited</td>
                    </tr>
                    <tr>
                      <td>Booking forms</td>
                      <td style={{ textAlign: 'center' }}>1</td>
                      <td style={{ textAlign: 'center' }}>5</td>
                      <td style={{ textAlign: 'center' }}>Unlimited</td>
                      <td style={{ textAlign: 'center' }}>Unlimited</td>
                    </tr>
                    <tr>
                      <td>Automations</td>
                      <td style={{ textAlign: 'center' }}>0</td>
                      <td style={{ textAlign: 'center' }}>3</td>
                      <td style={{ textAlign: 'center' }}>Unlimited</td>
                      <td style={{ textAlign: 'center' }}>Unlimited</td>
                    </tr>

                    {/* Notifications */}
                    <tr>
                      <td colSpan="5" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Notifications
                      </td>
                    </tr>
                    <tr>
                      <td>Email notifications</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>SMS notifications</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>WhatsApp notifications</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>

                    {/* Payments */}
                    <tr>
                      <td colSpan="5" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Payments
                      </td>
                    </tr>
                    <tr>
                      <td>Online card payments</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Payout speed</td>
                      <td style={{ textAlign: 'center' }}>Weekly</td>
                      <td style={{ textAlign: 'center' }}>Next-day</td>
                      <td style={{ textAlign: 'center' }}>Next-day</td>
                      <td style={{ textAlign: 'center' }}>Same-day</td>
                    </tr>
                    <tr>
                      <td>Lower transaction fees</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>

                    {/* Portals */}
                    <tr>
                      <td colSpan="5" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Portals &amp; Reporting
                      </td>
                    </tr>
                    <tr>
                      <td>Customer portal</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Staff portal</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Basic reporting</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Advanced reporting</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>

                    {/* Growth Features */}
                    <tr>
                      <td colSpan="5" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Growth Features
                      </td>
                    </tr>
                    <tr>
                      <td>Google Reviews integration</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Referral program</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>

                    {/* Business Features */}
                    <tr>
                      <td colSpan="5" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Business Features
                      </td>
                    </tr>
                    <tr>
                      <td>Custom domain</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>White-label branding</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>API access</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Priority support</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="faq-header animate-on-scroll">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title">Pricing questions, answered</h2>
            <p className="section-sub">
              Everything you need to know before getting started.
            </p>
          </div>
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} className="faq-item animate-on-scroll">
                <button className="faq-question">
                  {item.question}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ProductCTA />

      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Pricing', url: `${SITE_URL}/pricing` },
      ])} />
    </>
  );
}
