import { getAllPosts, getAllCategories, categorySlug } from '../lib/blog';
import { getAllCompetitorSlugs } from '../lib/comparisons';

const BASE_URL = 'https://www.spotlessapp.io';

// Use a stable build date instead of new Date() to avoid signalling
// false freshness to crawlers on every request.
const BUILD_DATE = new Date('2026-03-22');

export default function sitemap() {
  const blogPosts = getAllPosts();
  const categories = getAllCategories();
  const competitorSlugs = getAllCompetitorSlugs();

  // Try to load locations and alternatives (may not exist yet during build)
  let locationEntries = [];
  let alternativeSlugs = [];
  try {
    const { getAllLocations } = require('../lib/locations');
    locationEntries = getAllLocations();
  } catch {
    // locations not yet created
  }
  try {
    const { getAllAlternativeSlugs } = require('../lib/comparisons');
    alternativeSlugs = getAllAlternativeSlugs();
  } catch {
    // alternatives not yet created
  }

  const staticPages = [
    { url: BASE_URL, lastModified: BUILD_DATE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/product`, lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/pricing`, lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/compare`, lastModified: BUILD_DATE, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/careers`, lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified: BUILD_DATE, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/locations`, lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const productPages = [
    'scheduling', 'custom-forms', 'payments', 'staff-management',
    'finance', 'referrals-reviews', 'automations',
  ].map((slug) => ({
    url: `${BASE_URL}/product/${slug}`,
    lastModified: BUILD_DATE,
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
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const toolPages = [
    'pricing-calculator', 'profit-margin-calculator',
    'cleaning-time-estimator', 'startup-cost-calculator',
    'name-generator', 'invoice-generator', 'proposal-generator',
    'contract-generator', 'timesheet-calculator',
  ].map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const comparePages = competitorSlugs.map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const alternativePages = alternativeSlugs.map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Use actual blog post dates for lastModified
  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${BASE_URL}/blog/category/${categorySlug(cat)}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  const locationPages = locationEntries.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.country}/${loc.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...solutionPages,
    ...toolPages,
    ...comparePages,
    ...alternativePages,
    ...blogPages,
    ...categoryPages,
    ...locationPages,
  ];
}
