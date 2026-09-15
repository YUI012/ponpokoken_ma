import type { ArticleMeta } from './content';
import { getArticles } from './content';

export const ARTICLES_PER_PAGE = 20;

export type TaxonomyEntry = {
  name: string;
  slug: string;
  count: number;
};

export function taxonomySlug(value: string) {
  const slug = value
    .normalize('NFKC')
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[\/\\?#%&=+.:;,()\[\]{}'"<>|!@$^*~`]+/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return slug || 'other';
}

export function paginateArticles(articles: ArticleMeta[], page: number, pageSize = ARTICLES_PER_PAGE) {
  const totalPages = Math.max(1, Math.ceil(articles.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    page: safePage,
    totalPages,
    totalItems: articles.length,
    items: articles.slice(start, start + pageSize),
  };
}

function buildTaxonomy(values: string[]) {
  const map = new Map<string, TaxonomyEntry>();
  for (const raw of values.map((value) => value.trim()).filter(Boolean)) {
    const slug = taxonomySlug(raw);
    const current = map.get(slug);
    if (current) current.count += 1;
    else map.set(slug, { name: raw, slug, count: 1 });
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'ja'));
}

export function getCategories(siteSlug: string) {
  return buildTaxonomy(getArticles(siteSlug).filter((article) => !article.noindex).map((article) => article.category));
}

export function getCategory(siteSlug: string, slug: string) {
  return getCategories(siteSlug).find((entry) => entry.slug === slug);
}

export function getArticlesByCategory(siteSlug: string, categorySlug: string) {
  return getArticles(siteSlug).filter((article) => !article.noindex && taxonomySlug(article.category) === categorySlug);
}

