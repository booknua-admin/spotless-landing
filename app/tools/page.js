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

const calculators = [
  {
    icon: '\u{1F4B0}',
    title: 'Cleaning Pricing Calculator',
    description: 'Find the right price for every job based on size, service type, and market conditions.',
    href: '/tools/pricing-calculator',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Profit Margin Calculator',
    description: 'See your true margins, cost breakdown, and what-if scenarios to improve profitability.',
    href: '/tools/profit-margin-calculator',
  },
  {
    icon: '\u{23F1}\u{FE0F}',
    title: 'Cleaning Time Estimator',
    description: 'Estimate how long any job should take with per-room breakdowns and team comparisons.',
    href: '/tools/cleaning-time-estimator',
  },
  {
    icon: '\u{1F680}',
    title: 'Startup Cost Calculator',
    description: 'Find out what it costs to start your cleaning business with a 6-month projection.',
    href: '/tools/startup-cost-calculator',
  },
];

const creativeTools = [
  {
    icon: '\u{1F4A1}',
    title: 'Business Name Generator',
    description: 'Generate unique, brandable cleaning business names filtered by niche and style.',
    href: '/tools/name-generator',
  },
];

const generators = [
  {
    icon: '\u{1F9FE}',
    title: 'Invoice Generator',
    description: 'Create professional, branded invoices with line items, tax calculations, and instant PDF download.',
    href: '/tools/invoice-generator',
  },
  {
    icon: '\u{1F4DD}',
    title: 'Proposal Generator',
    description: 'Build polished cleaning proposals with service scope, pricing, terms, and your branding.',
    href: '/tools/proposal-generator',
  },
  {
    icon: '\u{1F4DC}',
    title: 'Contract Generator',
    description: 'Generate professional service contracts with customizable clauses and signature lines.',
    href: '/tools/contract-generator',
  },
  {
    icon: '\u{1F552}',
    title: 'Timesheet Calculator',
    description: 'Calculate employee hours, overtime, and pay with a simple weekly timesheet grid.',
    href: '/tools/timesheet-calculator',
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
            Calculators, generators, and planning tools &mdash; built for cleaning businesses.
            No signup, no credit card &mdash; your data stays in your browser.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <p className="tool-privacy-note animate-on-scroll">
            All tools are 100% free. Your data never leaves your browser.
          </p>

          <div className="tool-category animate-on-scroll">
            <div className="tool-category-header">
              <h2 className="tool-category-title">Document Generators</h2>
              <p className="tool-category-desc">Create professional documents for your business &mdash; invoices, proposals, and contracts with PDF download.</p>
            </div>
            <div className="tool-grid grid-3">
              {generators.map((tool) => (
                <a key={tool.href} href={tool.href} className="tool-card">
                  <div className="tool-card-icon">{tool.icon}</div>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <div className="tool-card-link">Use tool &rarr;</div>
                </a>
              ))}
            </div>
          </div>

          <div className="tool-category animate-on-scroll">
            <div className="tool-category-header">
              <h2 className="tool-category-title">Creative Tools</h2>
              <p className="tool-category-desc">Planning and branding tools to help you launch and grow your cleaning business.</p>
            </div>
            <div className="tool-grid grid-3">
              {creativeTools.map((tool) => (
                <a key={tool.href} href={tool.href} className="tool-card">
                  <div className="tool-card-icon">{tool.icon}</div>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <div className="tool-card-link">Use tool &rarr;</div>
                </a>
              ))}
            </div>
          </div>

          <div className="tool-category animate-on-scroll">
            <div className="tool-category-header">
              <h2 className="tool-category-title">Business Calculators</h2>
              <p className="tool-category-desc">Data-driven calculators to help you price jobs, understand margins, estimate times, and plan costs.</p>
            </div>
            <div className="tool-grid grid-3">
              {calculators.map((tool) => (
                <a key={tool.href} href={tool.href} className="tool-card">
                  <div className="tool-card-icon">{tool.icon}</div>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <div className="tool-card-link">Use tool &rarr;</div>
                </a>
              ))}
            </div>
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
