import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ARTICLES_PER_PAGE, getArticlesByCategory, getCategories, getCategory, paginateArticles } from '@/lib/archive';
import { getSite, sites } from '@/lib/sites';
import { canonicalUrl } from '@/lib/urls';
import { ArticleArchivePage } from '@/components/ArticleArchivePage';

export function generateStaticParams() {
  const params = sites.flatMap((site) => getCategories(site.slug).map((category) => ({ site: site.slug, category: category.slug })));
  return params.length > 0 ? params : [{ site: sites[0].slug, category: 'other' }];
}

export async function generateMetadata({ params }: { params: Promise<{ site: string; category: string }> }): Promise<Metadata> {
  const { site: siteSlug, category: categorySlug } = await params;
  const site = getSite(siteSlug);
  const category = getCategory(siteSlug, categorySlug);
  if (!site) return {};
  if (!category) return { title: { absolute: `カテゴリ記事一覧｜${site.name}` }, robots: { index: false, follow: true } };
  const title = `${category.name}の記事一覧｜${site.name}`;
  const description = `${site.name}の「${category.name}」カテゴリの記事一覧です。`;
  const url = canonicalUrl(site, `category/${category.slug}/`);
  return { title: { absolute: title }, description, alternates: { canonical: url }, openGraph: { title, description, type: 'website', url, siteName: site.name } };
}

export default async function Page({ params }: { params: Promise<{ site: string; category: string }> }) {
  const { site: siteSlug, category: categorySlug } = await params;
  const site = getSite(siteSlug);
  const category = getCategory(siteSlug, categorySlug);
  if (!site) return notFound();
  if (!category) {
    return <ArticleArchivePage site={site} title="カテゴリ記事一覧" description="現在このカテゴリに表示する記事はありません。" articles={[]} page={1} totalPages={1} totalItems={0} basePath={`category/${categorySlug}/`} breadcrumb="カテゴリ" />;
  }
  const result = paginateArticles(getArticlesByCategory(site.slug, category.slug), 1, ARTICLES_PER_PAGE);
  return <ArticleArchivePage site={site} title={`${category.name}の記事`} description={`「${category.name}」に関する記事をまとめています。`} articles={result.items} page={result.page} totalPages={result.totalPages} totalItems={result.totalItems} basePath={`category/${category.slug}/`} breadcrumb={category.name} />;
}
