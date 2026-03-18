import InvoiceGenerator from './invoice-generator';
import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Free Cleaning Invoice Generator — Spotless',
  description:
    'Create professional cleaning invoices in minutes. Add line items, calculate taxes, upload your logo, and download a client-ready PDF — free, no signup required.',
};

export default function InvoiceGeneratorPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Cleaning Invoice Generator</h1>
          <p className="section-sub animate-on-scroll">
            Create professional, branded invoices for your cleaning business. Add line items,
            calculate taxes automatically, and download a client-ready PDF in seconds.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <InvoiceGenerator />
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
