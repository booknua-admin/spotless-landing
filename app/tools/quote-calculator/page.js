import dynamic from 'next/dynamic';
import ProductCTA from '../../../components/product-cta';

const QuoteCalculator = dynamic(() => import('./calculator'), {
  loading: () => <div style={{ minHeight: '600px' }} />,
  ssr: false,
});

export const metadata = {
  title: 'Free Cleaning Quote Calculator | Generate Instant Quotes | Spotless',
  description:
    'Generate professional cleaning service quotes instantly. Enter property details, select services and add-ons, and get an itemized quote you can copy and send to clients.',
};

export default function QuoteCalculatorPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Cleaning Quote Calculator</h1>
          <p className="section-sub animate-on-scroll">
            Generate professional cleaning quotes in seconds. Select your service type, property
            details, and add-ons to get an itemized quote you can copy and send to clients.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="tool-container">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
