import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { getSite, sites } from './sites';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export type ArticleMeta = {
  site: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  category: string;
  featured: boolean;
  hero?: string;
  heroAlt?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  primaryCtaNote?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  showTopCta: boolean;
  showEndCta: boolean;
  stickyCta: boolean;
  noindex: boolean;
};

export type Article = ArticleMeta & {
  content: string;
  summary: string[];
  headings: { text: string; level: 2 | 3; id: string }[];
};

function cleanMarkdownText(input: string) {
  return input
    .replace(/:::[\s\S]*?:::/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/[*_`~]/g, '')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function inferTitle(content: string, fallback: string) {
  const match = content.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() || fallback.replace(/-/g, ' ');
}

function inferDescription(content: string) {
  const paragraphs = content
    .split(/\n\s*\n/)
    .map((value) => cleanMarkdownText(value))
    .filter((value) => value.length > 40 && !value.startsWith('※この記事'));

  return (paragraphs[0] || '記事の内容を比較・検証し、選ぶためのポイントを整理します。').slice(0, 155);
}

function inferSummary(content: string) {
  const withoutDisclosure = content.replace(/^※この記事にはアフィリエイト広告が含まれています。?$/gm, '');
  const plain = cleanMarkdownText(withoutDisclosure);
  const sentences = plain
    .split(/(?<=[。！？!?])\s*/)
    .map((value) => value.trim())
    .filter((value) => value.length >= 18 && value.length <= 120);

  return sentences.slice(0, 3);
}

export function slugifyHeading(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s　]+/g, '-')
    .replace(/[!！?？。、，,.「」『』()（）【】\[\]：:]/g, '')
    .replace(/-+/g, '-');
}

function extractHeadings(content: string) {
  const headings: Article['headings'] = [];
  const slugCounts = new Map<string, number>();

  for (const line of content.split('\n')) {
    const match = line.match(/^(##|###)\s+(.+)$/);
    if (!match) continue;
    const level = match[1] === '##' ? 2 : 3;
    const text = cleanMarkdownText(match[2]);
    const baseId = slugifyHeading(text);
    const count = (slugCounts.get(baseId) || 0) + 1;
    slugCounts.set(baseId, count);
    const id = count === 1 ? baseId : `${baseId}-${count}`;
    headings.push({ text, level, id });
  }

  return headings;
}

function normalizeTags(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String).map((tag) => tag.trim()).filter(Boolean);
  if (typeof value === 'string') return value.split(',').map((tag) => tag.trim()).filter(Boolean);
  return [];
}

function boolValue(value: unknown, fallback: boolean) {
  return typeof value === 'boolean' ? value : fallback;
}


export function getArticle(siteSlug: string, slug: string): Article | null {
  const file = path.join(CONTENT_DIR, siteSlug, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, 'utf8');
  const parsed = matter(raw);
  const title = String(parsed.data.title || inferTitle(parsed.content, slug));
  const bodyContent = parsed.content
    .replace(/^\s*#\s+.+?\r?\n+/, '')
    .replace(/^\s*※この記事にはアフィリエイト広告が含まれています。?\s*$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  const description = String(parsed.data.description || inferDescription(bodyContent));
  const summary = Array.isArray(parsed.data.summary)
    ? parsed.data.summary.map(String).slice(0, 3)
    : inferSummary(bodyContent);
  const primaryCtaUrl = parsed.data.primaryCtaUrl ? String(parsed.data.primaryCtaUrl) : undefined;
  const tags = normalizeTags(parsed.data.tags);
  const category = String(parsed.data.category || tags[0] || getSite(siteSlug)?.topic || '記事').trim();

  return {
    site: siteSlug,
    slug,
    title,
    description,
    date: String(parsed.data.date || new Date().toISOString().slice(0, 10)),
    updated: parsed.data.updated ? String(parsed.data.updated) : undefined,
    author: String(parsed.data.author || '編集部'),
    tags,
    category,
    featured: Boolean(parsed.data.featured),
    hero: parsed.data.hero ? String(parsed.data.hero) : undefined,
    heroAlt: parsed.data.heroAlt ? String(parsed.data.heroAlt) : title,
    primaryCtaLabel: parsed.data.primaryCtaLabel ? String(parsed.data.primaryCtaLabel) : undefined,
    primaryCtaUrl,
    primaryCtaNote: parsed.data.primaryCtaNote ? String(parsed.data.primaryCtaNote) : undefined,
    secondaryCtaLabel: parsed.data.secondaryCtaLabel ? String(parsed.data.secondaryCtaLabel) : undefined,
    secondaryCtaUrl: parsed.data.secondaryCtaUrl ? String(parsed.data.secondaryCtaUrl) : undefined,
    showTopCta: boolValue(parsed.data.showTopCta, false),
    showEndCta: boolValue(parsed.data.showEndCta, false),
    stickyCta: boolValue(parsed.data.stickyCta, false),
    noindex: Boolean(parsed.data.noindex),
    content: bodyContent,
    summary,
    headings: extractHeadings(bodyContent),
  };
}

export function getArticles(siteSlug?: string): ArticleMeta[] {
  const targetSites = siteSlug ? [siteSlug] : sites.map((site) => site.slug);
  const rows: ArticleMeta[] = [];

  for (const currentSite of targetSites) {
    const folder = path.join(CONTENT_DIR, currentSite);
    if (!fs.existsSync(folder)) continue;

    for (const file of fs.readdirSync(folder)) {
      if (!file.endsWith('.md')) continue;
      const slug = file.replace(/\.md$/, '');
      const article = getArticle(currentSite, slug);
      if (!article || !getSite(currentSite)) continue;
      const { content: _content, summary: _summary, headings: _headings, ...meta } = article;
      rows.push(meta);
    }
  }

  return rows.sort((a, b) => new Date(b.updated || b.date).getTime() - new Date(a.updated || a.date).getTime());
}

export function getRelatedArticles(article: Article, limit = 4): ArticleMeta[] {
  return getArticles(article.site)
    .filter((item) => item.slug !== article.slug && !item.noindex)
    .map((item) => ({
      item,
      score: item.tags.filter((tag) => article.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score || new Date(b.item.updated || b.item.date).getTime() - new Date(a.item.updated || a.item.date).getTime())
    .slice(0, limit)
    .map((row) => row.item);
}

export function getAllArticleParams() {
  return getArticles().map((article) => ({ site: article.site, slug: article.slug }));
}
