import '../../css/home.css';
import '../../css/niche.css';
import { notFound } from 'next/navigation';
import LegacyContent from '../../components/legacy-content';
import JsonLd from '../../components/json-ld';
import { buildMetadata, getNichePage, getNicheSlugs } from '../../lib/legacy-pages';
import { getPageSeo, SITE_URL } from '../../lib/seo';
import { breadcrumbSchema } from '../../lib/schema';

export const dynamicParams = false;

export function generateStaticParams() {
  return getNicheSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const seo = getPageSeo(`/${params.slug}`);
  return buildMetadata(getNichePage(params.slug), `/${params.slug}`, seo);
}

export default function NichePage({ params }) {
  const page = getNichePage(params.slug);

  if (!page) {
    notFound();
  }

  const seo = getPageSeo(`/${params.slug}`);
  const breadcrumbName = seo?.breadcrumbName || params.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <LegacyContent html={page.bodyHtml} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: breadcrumbName, url: `${SITE_URL}/${params.slug}` },
      ])} />
    </>
  );
}
