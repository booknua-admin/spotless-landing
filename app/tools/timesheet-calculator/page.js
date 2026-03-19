import dynamic from 'next/dynamic';
import ProductCTA from '../../../components/product-cta';

const TimesheetCalculator = dynamic(() => import('./timesheet-calculator'), {
  loading: () => <div style={{ minHeight: '600px' }} />,
  ssr: false,
});

export const metadata = {
  title: 'Free Timesheet Calculator — Spotless',
  description:
    'Calculate employee hours, overtime, and pay instantly. Enter daily start and end times, track regular and overtime hours, and get accurate pay totals — free, no signup required.',
};

export default function TimesheetCalculatorPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Timesheet Calculator</h1>
          <p className="section-sub animate-on-scroll">
            Calculate employee hours, overtime, and pay in seconds. Enter daily work times,
            set pay rates, and get an accurate breakdown of regular and overtime compensation.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="tool-container-wide">
            <TimesheetCalculator />
          </div>
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
