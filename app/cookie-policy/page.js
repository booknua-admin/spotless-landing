import '../../css/product.css';

export const metadata = {
  title: 'Cookie Policy — Spotless',
  description:
    'Learn how Spotless uses cookies to improve your experience, analyse traffic, and personalise content.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="product-hero" style={{ minHeight: 'auto', paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag animate-on-scroll">Legal</div>
          <h1 className="animate-on-scroll">Cookie Policy</h1>
          <p className="section-sub animate-on-scroll" style={{ margin: '0 auto' }}>
            Last updated: 20 March 2026
          </p>
        </div>
      </section>

      <section className="product-feature-section" style={{ padding: '80px 0' }}>
        <div className="container-sm">
          <div className="blog-prose" style={{ color: 'rgba(255,255,255,0.85)' }}>

            <h2>1. What are cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile)
              when you visit a website. They are widely used to make websites work more efficiently and
              to provide information to the owners of the site.
            </p>

            <h2>2. How we use cookies</h2>
            <p>
              Spotless (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses cookies and similar
              tracking technologies on <strong>spotlessapp.io</strong> for the following purposes:
            </p>
            <ul>
              <li><strong>Essential cookies</strong> &mdash; Required for the website to function properly. These cannot be disabled.</li>
              <li><strong>Analytics cookies</strong> &mdash; Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Preference cookies</strong> &mdash; Allow the website to remember choices you make (such as currency or dismissed banners) to provide a more personalised experience.</li>
            </ul>

            <h2>3. Cookies we use</h2>
            <p>The table below describes the cookies used on this website:</p>

            <div className="blog-table-wrap" style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '14px 18px', fontWeight: 700, color: 'var(--white)', background: 'rgba(255,255,255,0.04)', borderBottom: '2px solid rgba(255,255,255,0.1)', fontSize: '13px' }}>Cookie</th>
                    <th style={{ textAlign: 'left', padding: '14px 18px', fontWeight: 700, color: 'var(--white)', background: 'rgba(255,255,255,0.04)', borderBottom: '2px solid rgba(255,255,255,0.1)', fontSize: '13px' }}>Provider</th>
                    <th style={{ textAlign: 'left', padding: '14px 18px', fontWeight: 700, color: 'var(--white)', background: 'rgba(255,255,255,0.04)', borderBottom: '2px solid rgba(255,255,255,0.1)', fontSize: '13px' }}>Purpose</th>
                    <th style={{ textAlign: 'left', padding: '14px 18px', fontWeight: 700, color: 'var(--white)', background: 'rgba(255,255,255,0.04)', borderBottom: '2px solid rgba(255,255,255,0.1)', fontSize: '13px' }}>Duration</th>
                    <th style={{ textAlign: 'left', padding: '14px 18px', fontWeight: 700, color: 'var(--white)', background: 'rgba(255,255,255,0.04)', borderBottom: '2px solid rgba(255,255,255,0.1)', fontSize: '13px' }}>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--mint)', fontWeight: 600, fontSize: '13px' }}>_ga</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>Google Analytics</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>Distinguishes unique visitors by assigning a randomly generated number</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>2 years</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>Analytics</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--mint)', fontWeight: 600, fontSize: '13px' }}>_ga_*</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>Google Analytics</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>Used to persist session state across page requests</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>2 years</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>Analytics</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--mint)', fontWeight: 600, fontSize: '13px' }}>spotless_cookie_consent</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>Spotless</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>Stores your cookie consent preference</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>Persistent</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>Essential</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 18px', color: 'var(--mint)', fontWeight: 600, fontSize: '13px' }}>spotless_currency</td>
                    <td style={{ padding: '12px 18px', color: 'rgba(255,255,255,0.7)' }}>Spotless</td>
                    <td style={{ padding: '12px 18px', color: 'rgba(255,255,255,0.7)' }}>Remembers your selected currency preference</td>
                    <td style={{ padding: '12px 18px', color: 'rgba(255,255,255,0.7)' }}>Persistent</td>
                    <td style={{ padding: '12px 18px', color: 'rgba(255,255,255,0.7)' }}>Preference</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>4. Managing your cookie preferences</h2>
            <p>
              When you first visit our website, a cookie consent banner will appear asking for your
              permission to set non-essential cookies. You can accept or decline at that time.
            </p>
            <p>
              You can also manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul>
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p>
              Please note that if you block or delete cookies, some features of our website may not
              function properly.
            </p>

            <h2>5. Google Analytics</h2>
            <p>
              We use Google Analytics 4 (GA4) to collect anonymous information about how visitors use
              our website. This helps us understand which pages are most popular, how visitors navigate
              the site, and where we can make improvements.
            </p>
            <p>
              Google Analytics uses cookies to collect this information. The data collected is
              aggregated and anonymous &mdash; it does not identify individual visitors. Google may
              transfer this information to third parties where required by law, or where third parties
              process the information on Google&rsquo;s behalf.
            </p>
            <p>
              You can opt out of Google Analytics tracking by declining cookies via our consent banner
              or by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--mint)' }}>
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>

            <h2>6. Third-party cookies</h2>
            <p>
              In some cases, we use third-party services that may set their own cookies. We do not
              control the use of these cookies and recommend reviewing the respective third party&rsquo;s
              privacy and cookie policies:
            </p>
            <ul>
              <li><strong>Google Analytics</strong> &mdash; <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--mint)' }}>Google Privacy Policy</a></li>
              <li><strong>Google Fonts</strong> &mdash; used to serve web fonts; no tracking cookies are set</li>
            </ul>

            <h2>7. Changes to this policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology,
              legislation, or our business practices. Any changes will be posted on this page with an
              updated revision date. We encourage you to review this page periodically.
            </p>

            <h2>8. Contact us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact
              us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:privacy@spotlessapp.io" style={{ color: 'var(--mint)' }}>privacy@spotlessapp.io</a></li>
              <li>Website: <a href="/contact" style={{ color: 'var(--mint)' }}>spotlessapp.io/contact</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
