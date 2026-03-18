import ProposalGenerator from './proposal-generator';
import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Free Cleaning Proposal Generator — Spotless',
  description:
    'Create professional cleaning service proposals in minutes. Define your scope of work, set pricing, add terms and conditions, and download a client-ready PDF — free, no signup required.',
};

export default function ProposalGeneratorPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Cleaning Proposal Generator</h1>
          <p className="section-sub animate-on-scroll">
            Create professional, branded proposals for your cleaning business. Define your scope
            of work, set pricing with automatic totals, and download a client-ready PDF in seconds.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <ProposalGenerator />
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
