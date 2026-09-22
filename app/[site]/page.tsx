import { notFound } from 'next/navigation';
import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from '@/components/StaticLink';
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
  const latestArticles = allArticles.slice(0, 6);
  const categories = getCategories(site.slug);
  const visibleCategories = categories;
  const pageUrl = canonicalUrl(site);

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    alternateName: site.shortName,
    url: pageUrl,
    description: site.description,
    publisher: {
      '@type': 'Organization',
      name: 'ぽんぽこメディア',
      url: 'https://ponpokoken.com/',
    },
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: site.name,
    description: site.description,
    url: pageUrl,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: visibleCategories.map((category, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: category.name,
        url: canonicalUrl(site, `category/${category.slug}/`),
      })),
    },
  };

  return (
    <div className="siteTheme" style={{ '--accent': site.accent } as CSSProperties}>
      <SiteHeader site={site} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <main className="pageShell simpleSiteHome">
        <section className="simpleHomeHero">
          <p className="simpleHomeEyebrow">{site.topic}</p>
          <h1>{site.name}</h1>
          <p>{site.description}</p>
        </section>

        <section className="siteDbSummary uiCard" aria-labelledby="site-db-title">
          <div>
            <p className="simpleHomeEyebrow">専門DB</p>
            <h2 id="site-db-title">{site.databaseTitle || `${site.shortName}DB`}</h2>
            <p>{site.databaseDescription || site.description}</p>
          </div>
          <dl className="siteDbStats">
            <div><dt>大カテゴリ</dt><dd>{visibleCategories.length}</dd></div>
            <div><dt>公開記事</dt><dd>{allArticles.length}</dd></div>
            <div><dt>更新対象</dt><dd>{visibleCategories.filter((category) => category.count > 0).length}</dd></div>
          </dl>
        </section>

        <section className="simpleCategorySection" id="categories">
          <div className="sectionHead compactHead">
            <div>
              <h2>{site.categoryHeading}</h2>
              <p>大カテゴリを選ぶと、比較DB・使い方/学習ルート・Udemy・検索意図別の記事をまとめて確認できます。</p>
            </div>
          </div>

          <div className="simpleCategoryList">
            {visibleCategories.map((category) => (
              <Link className="simpleCategoryLink" key={category.slug} href={siteHref(site, `category/${category.slug}/`)}>
                <span className="simpleCategoryText">
                  <strong>{category.name}</strong>
                  <small>{category.description}</small>
                </span>
                <span className="simpleCategoryMeta">{category.count > 0 ? `${category.count}記事` : '準備中'} <b>→</b></span>
              </Link>
            ))}
          </div>
        </section>

        {latestArticles.length > 0 && (
          <section className="simpleLatestSection">
            <div className="sectionHead compactHead">
              <div><h2>新着記事</h2><p>最新6件だけ表示します。</p></div>
              {allArticles.length > 6 && <Link href={siteHref(site, 'articles/')}>すべて見る</Link>}
            </div>
            <div className="categoryArticleList">
              {latestArticles.map((article) => <ArticleCard key={article.slug} article={article} compact />)}
            </div>
          </section>
        )}
      </main>
      <SiteFooter site={site} />
    </div>
  );
}
