import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticles } from '@/lib/content';
import { ARTICLES_PER_PAGE, paginateArticles } from '@/lib/archive';
import { getSite, sites } from '@/lib/sites';
import { canonicalUrl } from '@/lib/urls';
import { ArticleArchivePage } from '@/components/ArticleArchivePage';

export function generateStaticParams() {
  const params = sites.flatMap((site) => {
    const count = getArticles(site.slug).filter((article) => !article.noindex).length;
    const totalPages = Math.ceil(count / ARTICLES_PER_PAGE);
    return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({ site: site.slug, page: String(index + 2) }));
  });

  // Next.js static export requires at least one generated path for every dynamic route.
  // Keep one noindex fallback path so a fresh/low-article site can still build.
  return params.length > 0 ? params : [{ site: sites[0].slug, page: '2' }];
}

export async function generateMetadata({ params }: { params: Promise<{ site: string; page: string }> }): Promise<Metadata> {
  const { site: siteSlug, page } = await params;
  const site = getSite(siteSlug);
  const pageNumber = Number(page);
  if (!site || !Number.isInteger(pageNumber) || pageNumber < 2) return {};
  const articles = getArticles(site.slug).filter((article) => !article.noindex);
  const totalPages = Math.max(1, Math.ceil(articles.length / ARTICLES_PER_PAGE));
  const isFallbackPage = pageNumber > totalPages;
  const title = `記事一覧 ${pageNumber}ページ目｜${site.name}`;
  const description = `${site.name}の記事一覧 ${pageNumber}ページ目です。`;
  const url = canonicalUrl(site, `articles/page/${pageNumber}/`);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: isFallbackPage ? { index: false, follow: true } : undefined,
    openGraph: { title, description, type: 'website', url, siteName: site.name },
  };
}

export default async function Page({ params }: { params: Promise<{ site: string; page: string }> }) {
  const { site: siteSlug, page } = await params;
  const site = getSite(siteSlug);
  const pageNumber = Number(page);
  if (!site || !Number.isInteger(pageNumber) || pageNumber < 2) return notFound();
  const articles = getArticles(site.slug).filter((article) => !article.noindex);
  const totalPages = Math.max(1, Math.ceil(articles.length / ARTICLES_PER_PAGE));
  if (pageNumber > totalPages) {
    return <ArticleArchivePage site={site} title={`記事一覧 ${pageNumber}ページ目`} description="現在このページに表示する記事はありません。" articles={[]} page={pageNumber} totalPages={1} totalItems={0} basePath="articles/" breadcrumb="記事一覧" />;
  }
  const result = paginateArticles(articles, pageNumber, ARTICLES_PER_PAGE);
  return <ArticleArchivePage site={site} title={`記事一覧 ${pageNumber}ページ目`} description={`${site.name}の記事を新しい順に掲載しています。`} articles={result.items} page={result.page} totalPages={result.totalPages} totalItems={result.totalItems} basePath="articles/" breadcrumb="記事一覧" />;
}
