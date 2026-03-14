import TimeEstimator from './calculator';
import ProductCTA from '../../../components/product-cta';

export const metadata = {
  title: 'Cleaning Time Estimator — Spotless',
  description:
    'Free cleaning time estimator for service businesses. Estimate how long any cleaning job will take based on property type, size, condition, and team size.',
};

export default function CleaningTimeEstimatorPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Cleaning Time Estimator</h1>
          <p className="section-sub animate-on-scroll">
            Estimate how long any cleaning job will take. Enter the property details and get a
            data-backed time estimate in seconds.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="tool-container">
            <TimeEstimator />
          </div>
        </div>
      </section>

      <ProductCTA />
    </>
  );
}
