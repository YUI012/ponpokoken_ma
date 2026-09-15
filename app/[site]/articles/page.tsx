import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticles } from '@/lib/content';
import { ARTICLES_PER_PAGE, paginateArticles } from '@/lib/archive';
import { getSite, sites } from '@/lib/sites';
import { canonicalUrl } from '@/lib/urls';
import { ArticleArchivePage } from '@/components/ArticleArchivePage';

export function generateStaticParams() { return sites.map((site) => ({ site: site.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ site: string }> }): Promise<Metadata> {
  const { site: siteSlug } = await params;
  const site = getSite(siteSlug);
  if (!site) return {};
  const title = `記事一覧｜${site.name}`;
  const description = `${site.name}の記事一覧です。最新記事から過去の記事まで20件ずつ確認できます。`;
  return { title: { absolute: title }, description, alternates: { canonical: canonicalUrl(site, 'articles/') }, openGraph: { title, description, type: 'website', url: canonicalUrl(site, 'articles/'), siteName: site.name } };
}

export default async function Page({ params }: { params: Promise<{ site: string }> }) {
  const { site: siteSlug } = await params;
  const site = getSite(siteSlug);
  if (!site) return notFound();
  const articles = getArticles(site.slug).filter((article) => !article.noindex);
  const result = paginateArticles(articles, 1, ARTICLES_PER_PAGE);
  return <ArticleArchivePage site={site} title="記事一覧" description={`${site.name}の記事を新しい順に掲載しています。`} articles={result.items} page={result.page} totalPages={result.totalPages} totalItems={result.totalItems} basePath="articles/" />;
}
