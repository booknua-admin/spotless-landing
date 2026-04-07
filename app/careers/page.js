import '../../css/product.css';

export const metadata = {
  title: 'Careers — Spotless',
  description:
    'Join the team building the operating system for service businesses. We\u2019re remote-first, fast-moving, and always looking for great people.',
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Careers</div>
          <h1 className="animate-on-scroll">
            Help us build the OS<br />for service businesses
          </h1>
          <p className="section-sub animate-on-scroll" style={{ margin: '0 auto' }}>
            Spotless is a small, fast-moving team on a mission to give every cleaning company,
            pressure washing crew, and auto detailer the software they deserve. We&rsquo;re
            looking for people who want to do the best work of their careers &mdash; and ship
            it to real customers every week.
          </p>
        </div>
      </section>

      {/* Why Spotless */}
      <section className="product-more-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>
            Why Spotless?
          </h2>
          <div className="product-mini-grid animate-on-scroll">
            <div className="product-mini-card">
              <div className="product-mini-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></div>
              <h4>Small team, big impact</h4>
              <p>
                Every person here shapes the product. No layers of management, no waiting
                for approval.
              </p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#127758;</div>
              <h4>Remote-first</h4>
              <p>
                Work from anywhere. We care about what you ship, not where you sit.
              </p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon">&#129309;</div>
              <h4>Real customers, real problems</h4>
              <p>
                You&rsquo;ll talk to actual cleaning company owners and build features they
                need tomorrow.
              </p>
            </div>
            <div className="product-mini-card">
              <div className="product-mini-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
              <h4>Move fast</h4>
              <p>
                We ship weekly. If you thrive on momentum and hate bureaucracy,
                you&rsquo;ll love it here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="product-feature-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center', color: 'var(--white)' }}>
            Benefits &amp; Perks
          </h2>
          <div className="animate-on-scroll" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {[
              { icon: '&#128176;', label: 'Competitive Salary' },
              { icon: '&#128200;', label: 'Equity Options' },
              { icon: '&#127758;', label: 'Remote-First' },
              { icon: '&#128336;', label: 'Flexible Hours' },
              { icon: '&#128187;', label: 'Equipment Budget' },
              { icon: '&#128218;', label: 'Learning Budget' },
              { icon: '&#127796;', label: '25 Days PTO' },
              { icon: '&#9992;', label: 'Team Retreats' },
            ].map((benefit) => (
              <div key={benefit.label} style={{
                background: 'var(--dark-light)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 'var(--radius-sm)',
                padding: '24px 16px',
                textAlign: 'center',
              }}>
                <div
                  style={{ fontSize: '28px', marginBottom: '10px' }}
                  dangerouslySetInnerHTML={{ __html: benefit.icon }}
                />
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--white)',
                }}>
                  {benefit.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="product-more-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>
            Open Positions
          </h2>
          <div className="animate-on-scroll" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            <div style={{
              background: 'var(--dark-light)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius)',
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '6px' }}>
                  Senior Full-Stack Engineer
                </h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  Build the core platform powering thousands of service businesses.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '4px 12px',
                  background: 'rgba(62,207,142,0.1)',
                  border: '1px solid rgba(62,207,142,0.2)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--mint)',
                }}>Engineering</span>
                <span style={{
                  padding: '4px 12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.6)',
                }}>Remote</span>
              </div>
            </div>

            <div style={{
              background: 'var(--dark-light)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius)',
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '6px' }}>
                  Product Designer
                </h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  Design interfaces that cleaning company owners actually enjoy using.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '4px 12px',
                  background: 'rgba(167,139,250,0.1)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--purple-accent)',
                }}>Design</span>
                <span style={{
                  padding: '4px 12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.6)',
                }}>Remote</span>
              </div>
            </div>

            <div style={{
              background: 'var(--dark-light)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius)',
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '6px' }}>
                  Customer Success Manager
                </h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  Help new customers get set up and see value fast.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '4px 12px',
                  background: 'rgba(91,141,239,0.1)',
                  border: '1px solid rgba(91,141,239,0.2)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--blue-accent)',
                }}>Customer</span>
                <span style={{
                  padding: '4px 12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.6)',
                }}>Remote</span>
              </div>
            </div>

            <div style={{
              background: 'var(--dark-light)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius)',
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '6px' }}>
                  Content Marketing Manager
                </h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  Tell the stories of service businesses transforming with Spotless.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '4px 12px',
                  background: 'rgba(249,115,22,0.1)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--orange-accent)',
                }}>Marketing</span>
                <span style={{
                  padding: '4px 12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.6)',
                }}>Remote</span>
              </div>
            </div>

            <div style={{
              background: 'var(--dark-light)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius)',
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '6px' }}>
                  Sales Development Rep
                </h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  Connect with service business owners and show them a better way.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '4px 12px',
                  background: 'rgba(52,211,153,0.1)',
                  border: '1px solid rgba(52,211,153,0.2)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--green-accent)',
                }}>Sales</span>
                <span style={{
                  padding: '4px 12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.6)',
                }}>Remote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No role that fits? */}
      <section className="product-feature-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title animate-on-scroll" style={{ color: 'var(--white)', maxWidth: '600px', margin: '0 auto 20px' }}>
            No role that fits?
          </h2>
          <p className="section-sub animate-on-scroll" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 32px' }}>
            We&rsquo;re always looking for great people. Send us an email at{' '}
            <a href="mailto:careers@spotlessapp.io" style={{ color: 'var(--mint)', textDecoration: 'none', fontWeight: 600 }}>
              careers@spotlessapp.io
            </a>{' '}
            and tell us what you&rsquo;d bring.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title animate-on-scroll">
            Ready to join us?
          </h2>
          <p className="section-sub animate-on-scroll" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 40px' }}>
            We&rsquo;d love to hear from you. Drop us a line and let&rsquo;s talk.
          </p>
          <div className="final-cta-actions animate-on-scroll">
            <a href="mailto:careers@spotlessapp.io" className="btn-primary btn-primary-lg">
              Email Us <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
