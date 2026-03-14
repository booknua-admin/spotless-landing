import Script from 'next/script';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import JsonLd from '../components/json-ld';
import { organizationSchema } from '../lib/schema';
import '../css/styles.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = siteUrl
  ? {
      metadataBase: new URL(siteUrl),
    }
  : {};

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
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
