import dynamic from 'next/dynamic';
import ProductCTA from '../../../components/product-cta';

const EmployeeCostCalculator = dynamic(() => import('./calculator'), {
  loading: () => <div style={{ minHeight: '600px' }} />,
  ssr: false,
});

export const metadata = {
  title: 'Free Employee Cost Calculator for Cleaning Companies | Spotless',
  description:
    'Calculate the true cost of each employee in your cleaning business. See gross wages, taxes, insurance, equipment, and the hourly rate you need to charge.',
};

export default function EmployeeCostCalculatorPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Employee Cost Calculator</h1>
          <p className="section-sub animate-on-scroll">
            Calculate the true cost of each employee in your cleaning company. See the full picture
            including taxes, insurance, equipment, and what you need to charge to stay profitable.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="tool-container">
            <EmployeeCostCalculator />
          </div>
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
