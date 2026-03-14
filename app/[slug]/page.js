import { notFound } from 'next/navigation';
import LegacyContent from '../../components/legacy-content';
import { buildMetadata, getNichePage, getNicheSlugs } from '../../lib/legacy-pages';

export const dynamicParams = false;

export function generateStaticParams() {
  return getNicheSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  return buildMetadata(getNichePage(params.slug), `/${params.slug}`);
}

export default function NichePage({ params }) {
  const page = getNichePage(params.slug);

  if (!page) {
    notFound();
  }

  return <LegacyContent html={page.bodyHtml} />;
}
