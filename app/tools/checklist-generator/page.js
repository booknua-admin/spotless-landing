import dynamic from 'next/dynamic';
import ProductCTA from '../../../components/product-cta';

const ChecklistGenerator = dynamic(() => import('./calculator'), {
  loading: () => <div style={{ minHeight: '600px' }} />,
  ssr: false,
});

export const metadata = {
  title: 'Free Cleaning Checklist Generator | Custom PDF Checklists | Spotless',
  description:
    'Create custom cleaning checklists for any property type. Choose a template, customize rooms and tasks, add your branding, and print a professional checklist for your team.',
};

export default function ChecklistGeneratorPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Cleaning Checklist Generator</h1>
          <p className="section-sub animate-on-scroll">
            Create custom cleaning checklists for any property type. Pick a template, customize
            rooms and tasks, add your branding, then print a professional checklist for your team.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="tool-container">
            <ChecklistGenerator />
          </div>
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
