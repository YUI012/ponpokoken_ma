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
  const focusedTitles: Record<string, string> = {
    'ai-tools': `${category.name}｜課金・選び方・実践を整理｜${site.name}`,
    'python-automation': `${category.name}｜最短で学ぶ・実務で自動化｜${site.name}`,
    cybersecurity: `${category.name}｜基礎から実践まで｜${site.name}`,
  };
  const title = hasQualifications
    ? `${category.name}資格一覧｜${site.name}`
    : focusedTitles[site.slug] || `${category.name}完全ガイド｜${site.name}`;
  const focusedDescriptions: Record<string, string> = {
    'ai-tools': `${category.name}の導入判断・使い方・実践記事とUdemy講座を、迷わず選べる順に整理します。`,
    'python-automation': `${category.name}を最短で使い始め、実務の自動化へつなげる入門・比較・ハンズオン記事とUdemy講座を整理します。`,
    cybersecurity: `${category.name}の基礎・比較から実践・ハンズオンまで、学ぶ順番とUdemy講座を整理します。`,
    'it-cert': `${category.name}の最短合格・勉強時間・教材・Udemy講座と関連する資格記事を整理します。`,
  };
  const description = hasQualifications ? category.description : focusedDescriptions[site.slug] || category.description;
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
