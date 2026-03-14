import fs from 'node:fs';
import path from 'node:path';
import { cache } from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const nichesDir = path.join(process.cwd(), 'niches');

const namedEntities = {
  amp: '&',
  apos: "'",
  euro: '€',
  gt: '>',
  hellip: '…',
  ldquo: '“',
  lsquo: '‘',
  lt: '<',
  mdash: '—',
  nbsp: ' ',
  ndash: '–',
  quot: '"',
  rdquo: '”',
  rsquo: '’',
};

function decodeHtmlEntities(value = '') {
  return value.replace(/&(#x?[\da-f]+|[a-z]+);/gi, (match, entity) => {
    if (entity.startsWith('#')) {
      const isHex = entity[1]?.toLowerCase() === 'x';
      const rawValue = isHex ? entity.slice(2) : entity.slice(1);
      const codePoint = Number.parseInt(rawValue, isHex ? 16 : 10);

      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint);
    }

    return namedEntities[entity.toLowerCase()] ?? match;
  });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractTagContent(html, tagName) {
  const match = html.match(new RegExp(`<${tagName}[^>]*>([\s\S]*?)</${tagName}>`, 'i'));

  return decodeHtmlEntities(match?.[1].trim() ?? '');
}

function extractMetaContent(html, attribute, value) {
  const match = html.match(
    new RegExp(
      `<meta[^>]+${attribute}=["']${escapeRegExp(value)}["'][^>]+content=["']([\s\S]*?)["'][^>]*>`,
      'i',
    ),
  );

  return decodeHtmlEntities(match?.[1].trim() ?? '');
}

function extractBodyContent(html) {
  return html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1].trim() ?? '';
}

function stripScripts(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, '').trim();
}

function rewriteInternalLinks(html) {
  return html
    .replace(/href="\.\.\/index\.html(#[^"]*)?"/g, (_match, hash = '') => `href="/${hash}"`)
    .replace(/href="index\.html(#[^"]*)?"/g, (_match, hash = '') => `href="/${hash}"`)
    .replace(
      /href="\.\.\/niches\/([a-z-]+)\.html(#[^"]*)?"/g,
      (_match, slug, hash = '') => `href="/${slug}${hash}"`,
    )
    .replace(
      /href="niches\/([a-z-]+)\.html(#[^"]*)?"/g,
      (_match, slug, hash = '') => `href="/${slug}${hash}"`,
    );
}

const loadLegacyPage = cache((relativePath) => {
  const filePath = path.join(process.cwd(), relativePath);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  return {
    title: extractTagContent(html, 'title'),
    description: extractMetaContent(html, 'name', 'description'),
    ogTitle: extractMetaContent(html, 'property', 'og:title'),
    ogDescription: extractMetaContent(html, 'property', 'og:description'),
    bodyHtml: rewriteInternalLinks(stripScripts(extractBodyContent(html))),
  };
});

export function getHomePage() {
  return loadLegacyPage('index.html');
}

export function getNichePage(slug) {
  return loadLegacyPage(path.join('niches', `${slug}.html`));
}

export function getNicheSlugs() {
  if (!fs.existsSync(nichesDir)) {
    return [];
  }

  return fs
    .readdirSync(nichesDir)
    .filter((file) => file.endsWith('.html'))
    .map((file) => file.replace(/\.html$/, ''))
    .sort();
}

export function buildMetadata(page, routePath) {
  if (!page) {
    return {};
  }

  const metadata = {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
    },
  };

  if (siteUrl) {
    metadata.alternates = {
      canonical: routePath,
    };
    metadata.openGraph.url = routePath;
  }

  return metadata;
}
