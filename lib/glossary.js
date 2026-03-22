import glossaryTerms from '../data/glossary-terms.json';

export function getAllTerms() {
  return glossaryTerms.sort((a, b) => a.term.localeCompare(b.term));
}

export function getTermBySlug(slug) {
  return glossaryTerms.find((t) => t.slug === slug) || null;
}

export function getAllTermSlugs() {
  return glossaryTerms.map((t) => t.slug);
}

export function getTermsByCategory(category) {
  return glossaryTerms.filter((t) => t.category === category).sort((a, b) => a.term.localeCompare(b.term));
}

export function getAllCategories() {
  return [...new Set(glossaryTerms.map((t) => t.category))].sort();
}

export function getRelatedTerms(slug) {
  const term = getTermBySlug(slug);
  if (!term) return [];
  return term.relatedTerms.map((s) => getTermBySlug(s)).filter(Boolean);
}
