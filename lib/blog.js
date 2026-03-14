import fs from 'node:fs';
import path from 'node:path';
import { cache } from 'react';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDir = path.join(process.cwd(), 'content', 'blog');

export const getAllPosts = cache(() => {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
      const { data, content } = matter(raw);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title ?? '',
        description: data.description ?? '',
        date: data.date ?? '',
        category: data.category ?? '',
        tags: data.tags ?? [],
        author: data.author ?? 'Spotless Team',
        featured: data.featured ?? false,
        readTime: stats.text,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
});

export const getPostBySlug = cache((slug) => {
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    category: data.category ?? '',
    tags: data.tags ?? [],
    author: data.author ?? 'Spotless Team',
    featured: data.featured ?? false,
    readTime: stats.text,
    content,
  };
});

export function getPostsByCategory(category) {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase(),
  );
}

export function getAllCategories() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return categories.sort();
}

export function categorySlug(cat) {
  return cat.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getAllSlugs() {
  return getAllPosts().map((post) => post.slug);
}

export function getRelatedPosts(slug, limit = 3) {
  const post = getPostBySlug(slug);

  if (!post) {
    return [];
  }

  return getAllPosts()
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, limit);
}
