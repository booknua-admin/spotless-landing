import LegacyContent from '../components/legacy-content';
import { buildMetadata, getHomePage } from '../lib/legacy-pages';

export function generateMetadata() {
  return buildMetadata(getHomePage(), '/');
}

export default function HomePage() {
  const page = getHomePage();

  return <LegacyContent html={page.bodyHtml} />;
}
