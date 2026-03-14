import ProductCTA from '../../components/product-cta';

export const metadata = {
  title: 'Pricing — Spotless',
  description:
    'Simple, transparent pricing for cleaning companies and service businesses. No hidden fees, no contracts. Plans from \u20AC29/month with a free 14-day trial.',
};

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
            No hidden fees. No per-transaction charges. No contracts. Just one flat price
            that covers everything your business needs &mdash; and a 14-day free trial to
            make sure it&rsquo;s right for you.
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
            <span className="pricing-save">Save 20%</span>
          </div>
          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card animate-on-scroll stagger-1">
              <div className="pricing-plan">Starter</div>
              <div className="pricing-desc">Perfect for solo cleaners and small teams just getting started</div>
              <div className="pricing-amount">
                <span className="pricing-currency">&euro;</span>
                <span className="pricing-value" data-monthly="29" data-annual="23">29</span>
                <span className="pricing-period">/month</span>
              </div>
              <ul className="pricing-features">
                <li><span className="pricing-check">&#10003;</span> Up to 3 staff members</li>
                <li><span className="pricing-check">&#10003;</span> Custom booking forms</li>
                <li><span className="pricing-check">&#10003;</span> Online payments (Stripe)</li>
                <li><span className="pricing-check">&#10003;</span> Basic scheduling</li>
                <li><span className="pricing-check">&#10003;</span> Invoice generation</li>
                <li><span className="pricing-check">&#10003;</span> Client notifications</li>
                <li><span className="pricing-check">&#10003;</span> Mobile app access</li>
                <li><span className="pricing-check">&#10003;</span> Email support</li>
              </ul>
              <a href="#" className="btn-primary dark">Start Free Trial</a>
            </div>

            {/* Growth */}
            <div className="pricing-card featured animate-on-scroll stagger-2">
              <div className="pricing-popular">Most Popular</div>
              <div className="pricing-plan">Growth</div>
              <div className="pricing-desc">For growing companies ready to scale and automate</div>
              <div className="pricing-amount">
                <span className="pricing-currency">&euro;</span>
                <span className="pricing-value" data-monthly="59" data-annual="47">59</span>
                <span className="pricing-period">/month</span>
              </div>
              <ul className="pricing-features">
                <li><span className="pricing-check">&#10003;</span> Up to 15 staff members</li>
                <li><span className="pricing-check">&#10003;</span> Everything in Starter</li>
                <li><span className="pricing-check">&#10003;</span> Recurring subscriptions</li>
                <li><span className="pricing-check">&#10003;</span> Auto review requests</li>
                <li><span className="pricing-check">&#10003;</span> Staff mobile app</li>
                <li><span className="pricing-check">&#10003;</span> Revenue analytics</li>
                <li><span className="pricing-check">&#10003;</span> Automations &amp; workflows</li>
                <li><span className="pricing-check">&#10003;</span> Custom forms &amp; fields</li>
                <li><span className="pricing-check">&#10003;</span> Referral tracking</li>
                <li><span className="pricing-check">&#10003;</span> Priority support</li>
              </ul>
              <a href="#" className="btn-primary btn-primary-lg">Start Free Trial</a>
            </div>

            {/* Enterprise */}
            <div className="pricing-card animate-on-scroll stagger-3">
              <div className="pricing-plan">Enterprise</div>
              <div className="pricing-desc">For established companies with large teams and complex needs</div>
              <div className="pricing-amount">
                <span className="pricing-currency">&euro;</span>
                <span className="pricing-value" data-monthly="99" data-annual="79">99</span>
                <span className="pricing-period">/month</span>
              </div>
              <ul className="pricing-features">
                <li><span className="pricing-check">&#10003;</span> Unlimited staff members</li>
                <li><span className="pricing-check">&#10003;</span> Everything in Growth</li>
                <li><span className="pricing-check">&#10003;</span> Client portal</li>
                <li><span className="pricing-check">&#10003;</span> Custom branding</li>
                <li><span className="pricing-check">&#10003;</span> API access</li>
                <li><span className="pricing-check">&#10003;</span> Dedicated account manager</li>
                <li><span className="pricing-check">&#10003;</span> Onboarding assistance</li>
                <li><span className="pricing-check">&#10003;</span> SLA guarantee</li>
                <li><span className="pricing-check">&#10003;</span> Advanced reporting</li>
              </ul>
              <a href="#" className="btn-primary dark">Start Free Trial</a>
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
          <div className="animate-on-scroll" style={{ maxWidth: '900px', margin: '0 auto' }}>
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
                      <th style={{ width: '40%' }}>Feature</th>
                      <th style={{ textAlign: 'center' }}>Starter</th>
                      <th style={{ textAlign: 'center' }}>Growth</th>
                      <th style={{ textAlign: 'center' }}>Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Scheduling */}
                    <tr>
                      <td colSpan="4" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Scheduling
                      </td>
                    </tr>
                    <tr>
                      <td>Drag-and-drop calendar</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Recurring jobs</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Job pipeline / lead tracking</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Auto-assignment &amp; route optimisation</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>

                    {/* Payments */}
                    <tr>
                      <td colSpan="4" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Payments
                      </td>
                    </tr>
                    <tr>
                      <td>Online card payments</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Auto-invoicing</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Recurring billing &amp; subscriptions</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Payment reminders</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>

                    {/* Staff */}
                    <tr>
                      <td colSpan="4" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Staff
                      </td>
                    </tr>
                    <tr>
                      <td>Staff accounts</td>
                      <td style={{ textAlign: 'center' }}>Up to 3</td>
                      <td style={{ textAlign: 'center' }}>Up to 15</td>
                      <td style={{ textAlign: 'center' }}>Unlimited</td>
                    </tr>
                    <tr>
                      <td>Staff mobile app</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Clock-in / geofencing</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Payroll &amp; hour tracking</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>

                    {/* Automation */}
                    <tr>
                      <td colSpan="4" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Automation
                      </td>
                    </tr>
                    <tr>
                      <td>Client notifications</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Custom workflows</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Auto review requests</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Referral programme</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>

                    {/* Analytics */}
                    <tr>
                      <td colSpan="4" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Analytics
                      </td>
                    </tr>
                    <tr>
                      <td>Basic dashboard</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Revenue analytics</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Advanced reporting &amp; exports</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>

                    {/* Support */}
                    <tr>
                      <td colSpan="4" style={{ fontWeight: 700, background: '#f0fdf4', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--dark)' }}>
                        Support &amp; Extras
                      </td>
                    </tr>
                    <tr>
                      <td>Email support</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Priority support</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Dedicated account manager</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Client portal</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>Custom branding</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>API access</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--text-lighter)' }}>&mdash;</td>
                      <td style={{ textAlign: 'center', color: 'var(--green-accent)' }}>&#10003;</td>
                    </tr>
                    <tr>
                      <td>SLA guarantee</td>
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
            <div className="faq-item animate-on-scroll">
              <button className="faq-question">
                Can I switch plans later?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Absolutely. You can upgrade or downgrade your plan at any time from your account settings. When you upgrade, you&rsquo;ll get immediate access to the new features and we&rsquo;ll pro-rate the difference. When you downgrade, the change takes effect at the start of your next billing cycle.
                </div>
              </div>
            </div>
            <div className="faq-item animate-on-scroll">
              <button className="faq-question">
                What happens after my 14-day free trial?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  If you love Spotless (and we think you will), you&rsquo;ll be asked to pick a plan and enter your payment details. If you decide it&rsquo;s not for you, your account simply expires &mdash; no charge, no questions asked. We&rsquo;ll never charge you without your explicit consent.
                </div>
              </div>
            </div>
            <div className="faq-item animate-on-scroll">
              <button className="faq-question">
                Is there a setup fee?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  No. There are zero setup fees on any plan. You sign up, connect your Stripe account, and you&rsquo;re running. Enterprise customers also get free onboarding assistance to help migrate existing data.
                </div>
              </div>
            </div>
            <div className="faq-item animate-on-scroll">
              <button className="faq-question">
                Do you charge per transaction?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  No. Spotless never takes a cut of your revenue. You pay one flat monthly fee and that&rsquo;s it. The only transaction fees you&rsquo;ll see are the standard Stripe processing fees, which go directly to Stripe &mdash; not to us.
                </div>
              </div>
            </div>
            <div className="faq-item animate-on-scroll">
              <button className="faq-question">
                What payment methods do you accept?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  We accept all major credit and debit cards (Visa, Mastercard, American Express) through Stripe. For annual Enterprise plans, we can also arrange bank transfer / direct debit if preferred.
                </div>
              </div>
            </div>
            <div className="faq-item animate-on-scroll">
              <button className="faq-question">
                Can I cancel anytime?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Yes. There are no contracts and no cancellation fees. You can cancel your subscription at any time from your account settings. Your access continues until the end of your current billing period, and you can export all your data before you go.
                </div>
              </div>
            </div>
            <div className="faq-item animate-on-scroll">
              <button className="faq-question">
                Do you offer discounts for annual billing?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Yes. Paying annually saves you 20% compared to monthly billing. That means the Growth plan drops from &euro;59/month to just &euro;47/month when billed annually. You can switch between monthly and annual billing at any time.
                </div>
              </div>
            </div>
            <div className="faq-item animate-on-scroll">
              <button className="faq-question">
                Is there a free plan?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  We don&rsquo;t offer a permanent free tier, but every plan comes with a full-featured 14-day free trial &mdash; no credit card required. This gives you time to set up your account, import your customers, and see real results before you commit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ProductCTA />
    </>
  );
}
