import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ARTICLES_PER_PAGE, getArticlesByCategory, getCategories, getCategory, paginateArticles } from '@/lib/archive';
import { getSite, sites } from '@/lib/sites';
import { canonicalUrl } from '@/lib/urls';
import { ArticleArchivePage } from '@/components/ArticleArchivePage';

export function generateStaticParams() {
  const params = sites.flatMap((site) => getCategories(site.slug).flatMap((category) => {
    const totalPages = Math.ceil(getArticlesByCategory(site.slug, category.slug).length / ARTICLES_PER_PAGE);
    return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({ site: site.slug, category: category.slug, page: String(index + 2) }));
  }));

  if (params.length > 0) return params;

  const fallbackSite = sites[0];
  const fallbackCategory = getCategories(fallbackSite.slug)[0]?.slug || 'other';
  return [{ site: fallbackSite.slug, category: fallbackCategory, page: '2' }];
}

export async function generateMetadata({ params }: { params: Promise<{ site: string; category: string; page: string }> }): Promise<Metadata> {
  const { site: siteSlug, category: categorySlug, page } = await params;
  const site = getSite(siteSlug);
  const category = getCategory(siteSlug, categorySlug);
  const pageNumber = Number(page);
  if (!site || !Number.isInteger(pageNumber) || pageNumber < 2) return {};
  if (!category) {
    return { title: { absolute: `カテゴリ記事一覧｜${site.name}` }, robots: { index: false, follow: true } };
  }
  const all = getArticlesByCategory(site.slug, category.slug);
  const totalPages = Math.max(1, Math.ceil(all.length / ARTICLES_PER_PAGE));
  const title = `${category.name}の記事一覧 ${pageNumber}ページ目｜${site.name}`;
  const description = `${site.name}の「${category.name}」カテゴリの記事一覧 ${pageNumber}ページ目です。`;
  const url = canonicalUrl(site, `category/${category.slug}/page/${pageNumber}/`);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: pageNumber > totalPages ? { index: false, follow: true } : undefined,
  };
}

export default async function Page({ params }: { params: Promise<{ site: string; category: string; page: string }> }) {
  const { site: siteSlug, category: categorySlug, page } = await params;
  const site = getSite(siteSlug);
  const category = getCategory(siteSlug, categorySlug);
  const pageNumber = Number(page);
  if (!site || !Number.isInteger(pageNumber) || pageNumber < 2) return notFound();
  if (!category) {
    return <ArticleArchivePage site={site} title="カテゴリ記事一覧" description="現在このページに表示する記事はありません。" articles={[]} page={pageNumber} totalPages={1} totalItems={0} basePath={`category/${categorySlug}/`} breadcrumb="カテゴリ" />;
  }
  const all = getArticlesByCategory(site.slug, category.slug);
  const totalPages = Math.max(1, Math.ceil(all.length / ARTICLES_PER_PAGE));
  if (pageNumber > totalPages) {
    return <ArticleArchivePage site={site} title={`${category.name}の記事 ${pageNumber}ページ目`} description="現在このページに表示する記事はありません。" articles={[]} page={pageNumber} totalPages={1} totalItems={0} basePath={`category/${category.slug}/`} breadcrumb={category.name} />;
  }
  const result = paginateArticles(all, pageNumber, ARTICLES_PER_PAGE);
  return <ArticleArchivePage site={site} title={`${category.name}の記事 ${pageNumber}ページ目`} description={`「${category.name}」に関する記事をまとめています。`} articles={result.items} page={result.page} totalPages={result.totalPages} totalItems={result.totalItems} basePath={`category/${category.slug}/`} breadcrumb={category.name} />;
}
