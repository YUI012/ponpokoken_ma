import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getArticlesByCategory,
  getCategories,
  getCategory,
  getCategoryAffiliateOffers,
  getQualifications,
  getUnassignedArticlesByCategory,
} from '@/lib/archive';
import { getSite, sites } from '@/lib/sites';
import { canonicalUrl } from '@/lib/urls';
import { CategoryLandingPage } from '@/components/CategoryLandingPage';

export function generateStaticParams() {
  return sites.flatMap((site) => getCategories(site.slug).map((category) => ({ site: site.slug, category: category.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ site: string; category: string }> }): Promise<Metadata> {
  const { site: siteSlug, category: categorySlug } = await params;
  const site = getSite(siteSlug);
  const category = getCategory(siteSlug, categorySlug);
  if (!site) return {};
  if (!category) return { title: { absolute: `カテゴリ｜${site.name}` }, robots: { index: false, follow: true } };

  const hasQualifications = Boolean(category.qualifications?.length);
  const title = hasQualifications
    ? `${category.name}資格DB｜試験・教材・学習記事を比較｜${site.name}`
    : site.slug === 'ai-tools'
      ? `${category.name}活用DB｜使い方・比較・自動化｜${site.name}`
      : site.slug === 'python-automation'
        ? `${category.name}自動化DB｜実装・比較・講座｜${site.name}`
        : `${category.name}テーマDB｜${site.name}`;
  const description = category.databaseDescription || category.description;
  const url = canonicalUrl(site, `category/${category.slug}/`);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: 'website', url, siteName: site.name },
    ...(category.count === 0 ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function Page({ params }: { params: Promise<{ site: string; category: string }> }) {
  const { site: siteSlug, category: categorySlug } = await params;
  const site = getSite(siteSlug);
  const category = getCategory(siteSlug, categorySlug);
  if (!site || !category) return notFound();

  const articles = getArticlesByCategory(site.slug, category.slug);
  const offers = getCategoryAffiliateOffers(site.slug, category.slug, 3);
  const qualifications = getQualifications(site.slug, category.slug);
  const unassignedArticles = qualifications.length > 0 ? getUnassignedArticlesByCategory(site.slug, category.slug) : [];

  return (
    <CategoryLandingPage
      site={site}
      category={category}
      articles={articles}
      offers={offers}
      qualifications={qualifications}
      unassignedArticles={unassignedArticles}
    />
  );
}
