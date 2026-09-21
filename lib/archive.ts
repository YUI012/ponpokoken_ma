import fs from 'node:fs';
import path from 'node:path';
import type { ArticleMeta } from './content';
import { getArticle, getArticles } from './content';
import { getSite, type SiteCategoryConfig, type SiteQualificationConfig } from './sites';

export const ARTICLES_PER_PAGE = 20;

export type TaxonomyEntry = SiteCategoryConfig & {
  count: number;
};

export type QualificationEntry = SiteQualificationConfig & {
  count: number;
  categorySlug: string;
  categoryName: string;
  topicCluster: string;
};

export type AffiliateOffer = {
  url: string;
  label: string;
  sourceTitle: string;
  meta?: string;
  source: 'catalog' | 'article';
};

type UdemyCatalogCourse = {
  courseId?: string;
  courseTitle?: string;
  affiliateUrl?: string;
  topicCluster?: string;
  topicTags?: string[];
  verifiedFeatures?: string[];
  courseRole?: string;
  language?: string;
  rating?: number;
  reviewCount?: number;
  bestseller?: boolean;
  highestRated?: boolean;
  catalogQualified?: boolean;
  active?: boolean;
};

type UdemyCatalog = {
  siteId?: string;
  courses?: UdemyCatalogCourse[];
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

function normalize(value: string) {
  return value.normalize('NFKC').toLowerCase();
}

function searchableArticleText(article: ArticleMeta) {
  return normalize([article.title, article.description, article.category, ...article.tags].join(' '));
}

function matches(article: ArticleMeta, category: SiteCategoryConfig) {
  const haystack = searchableArticleText(article);
  return category.match.some((keyword) => haystack.includes(normalize(keyword)));
}

function matchesQualification(article: ArticleMeta, qualification: SiteQualificationConfig) {
  const haystack = searchableArticleText(article);
  return qualification.match.some((keyword) => haystack.includes(normalize(keyword)));
}

export function getArticleCategory(siteSlug: string, article: ArticleMeta): TaxonomyEntry {
  const site = getSite(siteSlug);

  const pinned = site?.categories.find((category) => category.featuredArticleSlugs?.includes(article.slug));
  if (pinned) return { ...pinned, count: 0 };

  const primarySignal = normalize(article.category);
  const primaryMatch = site?.categories.find((category) =>
    category.match.some((keyword) => primarySignal.includes(normalize(keyword))),
  );
  if (primaryMatch) return { ...primaryMatch, count: 0 };

  const configured = site?.categories.find((category) => matches(article, category));
  if (configured) return { ...configured, count: 0 };

  return {
    slug: 'other',
    name: 'その他',
    topicCluster: 'その他',
    description: `${site?.name || 'このサイト'}の既存記事のうち、固定カテゴリに未分類の記事です。`,
    match: [],
    count: 0,
  };
}

export function getCategories(siteSlug: string) {
  const site = getSite(siteSlug);
  if (!site) return [];

  const articles = getArticles(siteSlug).filter((article) => !article.noindex);
  const entries: TaxonomyEntry[] = site.categories.map((category) => ({
    ...category,
    count: articles.filter((article) => getArticleCategory(siteSlug, article).slug === category.slug).length,
  }));

  const otherCount = articles.filter((article) => getArticleCategory(siteSlug, article).slug === 'other').length;
  if (otherCount > 0) {
    entries.push({
      slug: 'other',
      name: 'その他',
      topicCluster: 'その他',
      description: `${site.name}の既存記事のうち、固定カテゴリに未分類の記事です。`,
      match: [],
      count: otherCount,
    });
  }

  return entries;
}

export function getCategory(siteSlug: string, slug: string) {
  return getCategories(siteSlug).find((entry) => entry.slug === slug);
}

export function getArticlesByCategory(siteSlug: string, categorySlug: string) {
  return getArticles(siteSlug).filter(
    (article) => !article.noindex && getArticleCategory(siteSlug, article).slug === categorySlug,
  );
}

export function getArticleQualification(siteSlug: string, article: ArticleMeta): QualificationEntry | null {
  const category = getArticleCategory(siteSlug, article);
  const qualifications = category.qualifications || [];
  if (qualifications.length === 0) return null;

  const pinned = qualifications.find((qualification) => qualification.featuredArticleSlugs?.includes(article.slug));
  const matched = pinned || qualifications.find((qualification) => matchesQualification(article, qualification));
  if (!matched) return null;

  return {
    ...matched,
    count: 0,
    categorySlug: category.slug,
    categoryName: category.name,
    topicCluster: category.topicCluster,
  };
}

export function getQualifications(siteSlug: string, categorySlug: string): QualificationEntry[] {
  const category = getCategory(siteSlug, categorySlug);
  if (!category?.qualifications?.length) return [];
  const articles = getArticlesByCategory(siteSlug, categorySlug);

  return category.qualifications.map((qualification) => ({
    ...qualification,
    categorySlug: category.slug,
    categoryName: category.name,
    topicCluster: category.topicCluster,
    count: articles.filter((article) => getArticleQualification(siteSlug, article)?.slug === qualification.slug).length,
  }));
}

export function getQualification(siteSlug: string, categorySlug: string, qualificationSlug: string) {
  return getQualifications(siteSlug, categorySlug).find((qualification) => qualification.slug === qualificationSlug);
}

export function getArticlesByQualification(siteSlug: string, categorySlug: string, qualificationSlug: string) {
  return getArticlesByCategory(siteSlug, categorySlug).filter(
    (article) => getArticleQualification(siteSlug, article)?.slug === qualificationSlug,
  );
}

export function getUnassignedArticlesByCategory(siteSlug: string, categorySlug: string) {
  return getArticlesByCategory(siteSlug, categorySlug).filter((article) => !getArticleQualification(siteSlug, article));
}

function readUdemyCatalog(siteSlug: string): UdemyCatalog | null {
  const site = getSite(siteSlug);
  if (!site) return null;
  const file = path.join(process.cwd(), 'data', 'udemy', `${site.catalogSiteId}-udemy-catalog.json`);
  if (!fs.existsSync(file)) return null;

  try {
    return JSON.parse(fs.readFileSync(file, 'utf8')) as UdemyCatalog;
  } catch {
    return null;
  }
}

function catalogCourseScore(course: UdemyCatalogCourse) {
  const language = course.language === 'ja' ? 1000000 : course.language === 'en' ? 0 : 100000;
  const roleRank: Record<string, number> = {
    main: 90000,
    beginner: 80000,
    'exam-prep': 70000,
    practice: 60000,
    'hands-on': 50000,
    project: 40000,
    specialized: 30000,
    'mock-exam': 20000,
  };
  const badge = (course.bestseller ? 20000 : 0) + (course.highestRated ? 15000 : 0);
  return language + (roleRank[course.courseRole || ''] || 0) + badge + (course.reviewCount || 0);
}

function toAffiliateOffer(course: UdemyCatalogCourse, sourceTitle: string): AffiliateOffer {
  const bits = [
    course.language === 'ja' ? '日本語' : course.language === 'en' ? '英語' : undefined,
    typeof course.rating === 'number' ? `★${course.rating.toFixed(1)}` : undefined,
    typeof course.reviewCount === 'number' ? `${course.reviewCount.toLocaleString('ja-JP')}件` : undefined,
  ].filter(Boolean);
  return {
    url: course.affiliateUrl!,
    label: course.courseTitle!,
    sourceTitle,
    meta: bits.join(' · '),
    source: 'catalog' as const,
  };
}

function catalogOffers(siteSlug: string, category: TaxonomyEntry, limit: number): AffiliateOffer[] {
  const catalog = readUdemyCatalog(siteSlug);
  if (!catalog?.courses?.length || category.topicCluster === 'その他') return [];

  return catalog.courses
    .filter((course) =>
      course.active !== false &&
      course.catalogQualified === true &&
      course.topicCluster === category.topicCluster &&
      Boolean(course.affiliateUrl) &&
      Boolean(course.courseTitle),
    )
    .sort((a, b) => catalogCourseScore(b) - catalogCourseScore(a))
    .slice(0, limit)
    .map((course) => toAffiliateOffer(course, category.topicCluster));
}

function catalogQualificationOffers(siteSlug: string, qualification: QualificationEntry, limit: number): AffiliateOffer[] {
  const catalog = readUdemyCatalog(siteSlug);
  if (!catalog?.courses?.length) return [];

  const matchesCourse = (course: UdemyCatalogCourse) => {
    const haystack = normalize([
      course.courseTitle || '',
      ...(course.topicTags || []),
      ...(course.verifiedFeatures || []),
    ].join(' '));
    return qualification.match.some((keyword) => haystack.includes(normalize(keyword)));
  };

  return catalog.courses
    .filter((course) =>
      course.active !== false &&
      course.catalogQualified === true &&
      course.topicCluster === qualification.topicCluster &&
      Boolean(course.affiliateUrl) &&
      Boolean(course.courseTitle) &&
      matchesCourse(course),
    )
    .sort((a, b) => catalogCourseScore(b) - catalogCourseScore(a))
    .slice(0, limit)
    .map((course) => toAffiliateOffer(course, qualification.code));
}

function fallbackArticleOffers(siteSlug: string, slugs: string[], sourceTitle: string, limit: number): AffiliateOffer[] {
  const seen = new Set<string>();
  const offers: AffiliateOffer[] = [];

  for (const slug of slugs) {
    const article = getArticle(siteSlug, slug);
    if (!article?.primaryCtaUrl || !/udemy/i.test(article.primaryCtaUrl)) continue;
    if (seen.has(article.primaryCtaUrl)) continue;
    seen.add(article.primaryCtaUrl);
    offers.push({
      url: article.primaryCtaUrl,
      label: article.primaryCtaLabel || 'Udemy講座を見る',
      sourceTitle: article.title || sourceTitle,
      source: 'article',
    });
    if (offers.length >= limit) break;
  }

  return offers;
}

export function getCategoryAffiliateOffers(siteSlug: string, categorySlug: string, limit = 3): AffiliateOffer[] {
  const category = getCategory(siteSlug, categorySlug);
  if (!category) return [];

  const fromCatalog = catalogOffers(siteSlug, category, limit);
  if (fromCatalog.length > 0) return fromCatalog;

  return fallbackArticleOffers(siteSlug, category.featuredArticleSlugs || [], category.name, limit);
}

export function getQualificationAffiliateOffers(
  siteSlug: string,
  categorySlug: string,
  qualificationSlug: string,
  limit = 3,
): AffiliateOffer[] {
  const qualification = getQualification(siteSlug, categorySlug, qualificationSlug);
  if (!qualification) return [];

  const fromCatalog = catalogQualificationOffers(siteSlug, qualification, limit);
  if (fromCatalog.length > 0) return fromCatalog;

  return fallbackArticleOffers(
    siteSlug,
    qualification.featuredArticleSlugs || [],
    qualification.name,
    limit,
  );
}
