import { notFound } from 'next/navigation';
import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { sites, getSite } from '@/lib/sites';
import { getArticles } from '@/lib/content';
import { getCategories } from '@/lib/archive';
import { canonicalUrl, siteHref } from '@/lib/urls';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ArticleCard } from '@/components/ArticleCard';

export function generateStaticParams() {
  return sites.map((site) => ({ site: site.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ site: string }> }): Promise<Metadata> {
  const { site: siteSlug } = await params;
  const site = getSite(siteSlug);
  if (!site) return {};
  const url = canonicalUrl(site);
  return {
    title: { absolute: `${site.name}｜${site.tagline}` },
    description: site.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title: site.name, description: site.description, type: 'website', url, siteName: site.name, locale: 'ja_JP' },
    twitter: { card: 'summary', title: site.name, description: site.description },
  };
}

export default async function SitePage({ params }: { params: Promise<{ site: string }> }) {
  const { site: siteSlug } = await params;
  const site = getSite(siteSlug);
  if (!site) return notFound();

  const allArticles = getArticles(site.slug).filter((article) => !article.noindex);
  const latestArticles = allArticles.slice(0, 12);
  const categories = getCategories(site.slug);
  const pageUrl = canonicalUrl(site);

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: site.name,
    description: site.description,
    url: pageUrl,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: latestArticles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: article.title,
        url: canonicalUrl(site, `${article.slug}/`),
      })),
    },
  };

  return (
    <div className="siteTheme" style={{ '--accent': site.accent } as CSSProperties}>
      <SiteHeader site={site} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <main className="pageShell">
        <section className="pageHeroCard uiCard">
          <div className="articleTags"><span>{site.topic}</span></div>
          <h1>{site.name}</h1>
          <p className="pageLead">{site.description}</p>
        </section>

        {categories.length > 0 && (
          <section className="directorySection uiCard">
            <div className="sectionHead"><div><h2>テーマから探す</h2><p>資格・分野ごとに記事をまとめています。</p></div></div>
            <div className="taxonomyLinkList">
              {categories.map((category) => <Link key={category.slug} href={siteHref(site, `category/${category.slug}/`)}>{category.name}<span>{category.count}</span></Link>)}
            </div>
          </section>
        )}


        <section className="articleIndexSection uiCard" id="articles">
          <div className="sectionHead">
            <div><h2>最新記事</h2><p>新しく公開・更新した記事を12件まで表示しています。</p></div>
            {allArticles.length > 12 && <Link href={siteHref(site, 'articles/')}>すべての記事を見る</Link>}
          </div>
          {latestArticles.length > 0 ? (
            <div className="articleList">{latestArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
          ) : <p className="emptyState">記事を準備中です。</p>}
        </section>
      </main>
      <SiteFooter site={site} />
    </div>
  );
}
