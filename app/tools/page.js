import ProductCTA from '../../components/product-cta';
import JsonLd from '../../components/json-ld';
import { getPageSeo, SITE_URL } from '../../lib/seo';
import { breadcrumbSchema } from '../../lib/schema';

const seo = getPageSeo('/tools');

export const metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: { title: seo.title, description: seo.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
};

const tools = [
  {
    icon: '\u{1F4B0}',
    title: 'Cleaning Pricing Calculator',
    description: 'Find the right price for every job.',
    href: '/tools/pricing-calculator',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Profit Margin Calculator',
    description: 'See your true margins and how to improve them.',
    href: '/tools/profit-margin-calculator',
  },
  {
    icon: '\u{23F1}',
    title: 'Cleaning Time Estimator',
    description: 'Estimate how long any job should take.',
    href: '/tools/cleaning-time-estimator',
  },
  {
    icon: '\u{1F680}',
    title: 'Startup Cost Calculator',
    description: 'Find out what it costs to start your business.',
    href: '/tools/startup-cost-calculator',
  },
];

export default function ToolsPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tools</div>
          <h1 className="animate-on-scroll">
            Free Tools for Service<br />Business Owners
          </h1>
          <p className="section-sub animate-on-scroll">
            Pricing calculators, profit estimators, and planning tools &mdash; built for cleaners,
            by people who understand the industry.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="tool-grid animate-on-scroll">
            {tools.map((tool) => (
              <a key={tool.href} href={tool.href} className="tool-card">
                <div className="tool-card-icon">{tool.icon}</div>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <div className="tool-card-link">Use tool &rarr;</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ProductCTA />

      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Free Tools', url: `${SITE_URL}/tools` },
      ])} />
    </div>
  );
}
