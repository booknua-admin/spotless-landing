import PricingCalculator from './calculator';
import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Cleaning Pricing Calculator — Spotless',
  description:
    'Free pricing calculator for cleaning and service businesses. Find the right price for every job based on size, service type, and market.',
};

export default function PricingCalculatorPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Cleaning Pricing Calculator</h1>
          <p className="section-sub animate-on-scroll">
            Find the right price for every job. Enter your service details and get a data-backed
            price recommendation in seconds.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="tool-container">
            <PricingCalculator />
          </div>
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
