import { getAllSlugs, getAllCategories, categorySlug } from '../lib/blog';
import { getAllCompetitorSlugs } from '../lib/comparisons';

const BASE_URL = 'https://spotlessapp.io';

export default function sitemap() {
  const blogSlugs = getAllSlugs();
  const categories = getAllCategories();
  const competitorSlugs = getAllCompetitorSlugs();

  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/product`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/compare`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/careers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const productPages = [
    'scheduling', 'custom-forms', 'payments', 'staff-management',
    'finance', 'referrals-reviews', 'automations',
  ].map((slug) => ({
    url: `${BASE_URL}/product/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const solutionPages = [
    'residential', 'commercial', 'pressure-washing', 'auto-detailing',
    'window-cleaning', 'pool-cleaning', 'airbnb', 'pest-control',
    'carpet-cleaning', 'junk-removal', 'soft-washing', 'move-in-out',
    'maid-service-software',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const toolPages = [
    'pricing-calculator', 'profit-margin-calculator',
    'cleaning-time-estimator', 'startup-cost-calculator',
  ].map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const comparePages = competitorSlugs.map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${BASE_URL}/blog/category/${categorySlug(cat)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...solutionPages,
    ...toolPages,
    ...comparePages,
    ...blogPages,
    ...categoryPages,
  ];
}
