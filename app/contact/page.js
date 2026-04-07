import '../../css/product.css';

export const metadata = {
  title: 'Contact — Spotless',
  description:
    'Get in touch with the Spotless team. Book a demo, get support, or just say hello. We\u2019d love to hear from you.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Contact</div>
          <h1 className="animate-on-scroll">Get in touch</h1>
          <p className="section-sub animate-on-scroll" style={{ margin: '0 auto' }}>
            Whether you&rsquo;re a customer, a prospect, or just curious &mdash; we&rsquo;d
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="product-more-section">
        <div className="container">
          <div className="animate-on-scroll" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            maxWidth: '960px',
            margin: '0 auto',
          }}>
            {/* Sales */}
            <div style={{
              background: 'var(--dark-light)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius)',
              padding: '32px 28px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '10px' }}>
                Sales
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '16px' }}>
                Want to see Spotless in action? Book a demo with our team.
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>
                <a href="mailto:sales@spotlessapp.io" style={{ color: 'var(--mint)', textDecoration: 'none' }}>
                  sales@spotlessapp.io
                </a>
              </p>
              <a href="mailto:sales@spotlessapp.io" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Book a Demo
              </a>
            </div>

            {/* Support */}
            <div style={{
              background: 'var(--dark-light)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius)',
              padding: '32px 28px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '10px' }}>
                Support
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '16px' }}>
                Already a customer? Our support team is here to help.
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>
                <a href="mailto:support@spotlessapp.io" style={{ color: 'var(--mint)', textDecoration: 'none' }}>
                  support@spotlessapp.io
                </a>
              </p>
              <a href="mailto:support@spotlessapp.io" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                Get Help
              </a>
            </div>

            {/* General */}
            <div style={{
              background: 'var(--dark-light)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius)',
              padding: '32px 28px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>&#128075;</div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '10px' }}>
                General
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '16px' }}>
                Press, partnerships, or just want to say hi.
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                <a href="mailto:hello@spotlessapp.io" style={{ color: 'var(--mint)', textDecoration: 'none' }}>
                  hello@spotlessapp.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="product-feature-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center', color: 'var(--white)' }}>
            Send us a message
          </h2>
          <p className="section-sub animate-on-scroll" style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: '500px', margin: '0 auto 48px' }}>
            Fill out the form below and we&rsquo;ll get back to you within one business day.
          </p>

          <div className="animate-on-scroll" style={{ maxWidth: '680px', margin: '0 auto' }}>
            <form action="#" method="POST" style={{
              background: 'var(--dark-light)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius)',
              padding: '40px',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    style={{
                      padding: '12px 16px',
                      background: 'var(--dark-mid)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '14px',
                      color: 'var(--white)',
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    style={{
                      padding: '12px 16px',
                      background: 'var(--dark-mid)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '14px',
                      color: 'var(--white)',
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company"
                    style={{
                      padding: '12px 16px',
                      background: 'var(--dark-mid)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '14px',
                      color: 'var(--white)',
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Subject</label>
                  <select
                    name="subject"
                    defaultValue=""
                    style={{
                      padding: '12px 16px',
                      background: 'var(--dark-mid)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '14px',
                      color: 'var(--white)',
                      outline: 'none',
                      fontFamily: 'inherit',
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="demo">Book a Demo</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '28px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  style={{
                    padding: '12px 16px',
                    background: 'var(--dark-mid)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '14px',
                    color: 'var(--white)',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" className="btn-primary btn-primary-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <span>&rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="product-more-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="animate-on-scroll">
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>&#127470;&#127466;</div>
            <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '16px' }}>
              Based in Dublin, Ireland
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
              maxWidth: '500px',
              margin: '0 auto',
            }}>
              We&rsquo;re a remote-first team, but our HQ is in Dublin. Drop us a line
              if you&rsquo;re ever in town &mdash; coffee&rsquo;s on us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
