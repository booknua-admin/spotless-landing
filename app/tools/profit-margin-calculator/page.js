import dynamic from 'next/dynamic';
import ProductCTA from '../../../components/product-cta';

const ProfitMarginCalculator = dynamic(() => import('./calculator'), {
  loading: () => <div style={{ minHeight: '600px' }} />,
  ssr: false,
});

export const metadata = {
  title: 'Profit Margin Calculator — Spotless',
  description:
    'Free profit margin calculator for service businesses. See your true margins and discover how to improve them.',
};

export default function ProfitMarginPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Profit Margin Calculator</h1>
          <p className="section-sub animate-on-scroll">
            See your true margins and find out exactly where your money goes. Enter your numbers and
            get instant insight into your business health.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="tool-container">
            <ProfitMarginCalculator />
          </div>
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
