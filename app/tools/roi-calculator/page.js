import dynamic from 'next/dynamic';
import ProductCTA from '../../../components/product-cta';

const ROICalculator = dynamic(() => import('./calculator'), {
  loading: () => <div style={{ minHeight: '600px' }} />,
  ssr: false,
});

export const metadata = {
  title: 'Free Cleaning Software ROI Calculator | Spotless',
  description:
    'Calculate how much time and money cleaning software saves your business. See your ROI, payback period, and annual savings instantly.',
};

export default function ROICalculatorPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">ROI Calculator</h1>
          <p className="section-sub animate-on-scroll">
            Find out how much time and money cleaning software could save your business. Enter your
            numbers and see your return on investment instantly.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="tool-container">
            <ROICalculator />
          </div>
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
