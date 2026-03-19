import '../css/home.css';
import LegacyContent from '../components/legacy-content';
import JsonLd from '../components/json-ld';
import { buildMetadata, getHomePage } from '../lib/legacy-pages';
import { getPageSeo } from '../lib/seo';
import { softwareApplicationSchema, breadcrumbSchema } from '../lib/schema';
import { SITE_URL } from '../lib/seo';

export function generateMetadata() {
  return buildMetadata(getHomePage(), '/', getPageSeo('/'));
}

export default function HomePage() {
  const page = getHomePage();

  return (
    <>
      <LegacyContent html={page.bodyHtml} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: SITE_URL }])} />
    </>
  );
}
