import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getArticlesByQualification,
  getCategories,
  getQualification,
  getQualificationAffiliateOffers,
  getQualifications,
} from '@/lib/archive';
import { getSite, sites } from '@/lib/sites';
import { canonicalUrl } from '@/lib/urls';
import { QualificationLandingPage } from '@/components/QualificationLandingPage';

export function generateStaticParams() {
  return sites.flatMap((site) =>
    getCategories(site.slug).flatMap((category) =>
      getQualifications(site.slug, category.slug).map((qualification) => ({
        site: site.slug,
        category: category.slug,
        qualification: qualification.slug,
      })),
    ),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ site: string; category: string; qualification: string }>;
}): Promise<Metadata> {
  const { site: siteSlug, category: categorySlug, qualification: qualificationSlug } = await params;
  const site = getSite(siteSlug);
  const qualification = getQualification(siteSlug, categorySlug, qualificationSlug);
  if (!site || !qualification) return {};

  const articles = getArticlesByQualification(siteSlug, categorySlug, qualificationSlug);
  const offers = getQualificationAffiliateOffers(siteSlug, categorySlug, qualificationSlug, 3);
  const title = `${qualification.shortName}｜最短合格・Udemy・勉強法｜${site.name}`;
  const description = `${qualification.shortName}を最短で取るための勉強時間・短期合格例・Udemy教材・関連記事を整理。ハンズオン記事がある場合は実践学習もまとめます。`;
  const url = canonicalUrl(site, `category/${categorySlug}/${qualification.slug}/`);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: 'website', url, siteName: site.name },
    ...(articles.length === 0 && offers.length === 0 ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ site: string; category: string; qualification: string }>;
}) {
  const { site: siteSlug, category: categorySlug, qualification: qualificationSlug } = await params;
  const site = getSite(siteSlug);
  const qualification = getQualification(siteSlug, categorySlug, qualificationSlug);
  if (!site || !qualification) return notFound();

  const articles = getArticlesByQualification(site.slug, categorySlug, qualification.slug);
  const offers = getQualificationAffiliateOffers(site.slug, categorySlug, qualification.slug, 3);

  return <QualificationLandingPage site={site} qualification={qualification} articles={articles} offers={offers} />;
}
