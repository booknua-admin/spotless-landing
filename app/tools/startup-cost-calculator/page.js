import StartupCostCalculator from './calculator';
import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Startup Cost Calculator — Spotless',
  description:
    'Free startup cost calculator for cleaning businesses. Estimate equipment, insurance, marketing, and operating costs to launch your cleaning company.',
};

export default function StartupCostCalculatorPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Startup Cost Calculator</h1>
          <p className="section-sub animate-on-scroll">
            Estimate your cleaning business startup costs. Enter your business plan details and get a
            comprehensive cost breakdown in seconds.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="tool-container">
            <StartupCostCalculator />
          </div>
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
