import dynamic from 'next/dynamic';
import ProductCTA from '../../../components/product-cta';

const NameGenerator = dynamic(() => import('./name-generator'), {
  loading: () => <div style={{ minHeight: '600px' }} />,
  ssr: false,
});

export const metadata = {
  title: 'Free Cleaning Business Name Generator | Spotless',
  description:
    'Generate unique, brandable cleaning business names instantly. Filter by style and niche. Free — no signup required.',
};

export default function NameGeneratorPage() {
  return (
    <div className="dark-page">
      <section className="product-hero">
        <div className="container">
          <div className="section-tag animate-on-scroll">Free Tool</div>
          <h1 className="animate-on-scroll">Cleaning Business Name Generator</h1>
          <p className="section-sub animate-on-scroll">
            Generate unique, memorable names for your cleaning business. Filter by style and
            niche &mdash; then pick the one that fits your brand.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="tool-container">
            <NameGenerator />
          </div>
        </div>
      </section>

      <ProductCTA />
    </div>
  );
}
