import ContractGenerator from './contract-generator';
import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Free Cleaning Contract Generator — Spotless',
  description:
    'Create professional cleaning service contracts in minutes. Define scope of services, payment terms, and legal clauses — then download a client-ready PDF for free.',
};

export default function ContractGeneratorPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Cleaning Contract Generator</h1>
          <p className="section-sub animate-on-scroll">
            Create professional, legally-sound contracts for your cleaning business. Define services,
            payment terms, and clauses — then download a client-ready PDF in seconds.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <ContractGenerator />
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
