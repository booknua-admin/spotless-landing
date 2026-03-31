import { Suspense } from 'react';
import Script from 'next/script';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PageInit from '../components/page-init';
import JsonLd from '../components/json-ld';
import CookieConsent from '../components/cookie-consent';
import MixpanelAnalytics from '../components/mixpanel-analytics';
import { organizationSchema, websiteSchema } from '../lib/schema';
import '../css/base.css';
import '../css/navbar.css';
import '../css/mega-menu.css';
import '../css/footer.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  robots: {
    index: true,
    follow: true,
    'max-snippet': 150,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  verification: {
    google: 'hgUKqmwwDC1QvSuG__X5t0IQ6io6zHNeyMJnDsuPjQM',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Bricolage+Grotesque:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Suspense fallback={null}>
          <MixpanelAnalytics />
        </Suspense>
        <Script src="/js/main.js" strategy="afterInteractive" />
        <PageInit />
        <CookieConsent />
      </body>
    </html>
  );
}
