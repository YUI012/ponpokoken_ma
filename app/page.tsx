import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/StaticLink';
import { getArticles } from '@/lib/content';
import { sites } from '@/lib/sites';
import { canonicalUrl } from '@/lib/urls';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ponpokoken.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: { absolute: 'ぽんぽこメディア｜IT・AI・学習を比較して選ぶ' },
  description: 'AIツール、IT資格、Python自動化、セキュリティ、Microsoft 365、データ分析、DevOps、Web開発などを分野別に整理する専門メディアです。',
  alternates: { canonical: `${baseUrl}/` },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'ぽんぽこメディア｜IT・AI・学習を比較して選ぶ',
    description: 'IT・AI・開発・データ分野を、大カテゴリから迷わず探せる形に整理します。',
    type: 'website',
    url: `${baseUrl}/`,
    siteName: 'ぽんぽこメディア',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary',
    title: 'ぽんぽこメディア｜IT・AI・学習を比較して選ぶ',
    description: 'IT・AI・開発・データ分野を、大カテゴリから迷わず探せる形に整理します。',
  },
};

export default function Home() {
  const siteRows = sites.map((site) => ({
    ...site,
    articleCount: getArticles(site.slug).filter((article) => !article.noindex).length,
  }));

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ぽんぽこメディア',
    url: `${baseUrl}/`,
    description: 'IT・AI・学習・仕事術を比較して選びやすく整理する専門メディア。',
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ぽんぽこメディア',
    url: `${baseUrl}/`,
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: siteRows.map((site, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: site.name,
      url: canonicalUrl(site),
    })),
  };

  return (
    <div className="siteTheme" style={{ '--accent': '#2563eb' } as CSSProperties}>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <main className="pageShell">
        <section className="pageHeroCard uiCard">
          <div className="articleTags">
            <span>ぽんぽこメディア</span>
          </div>
          <h1>学びたい・使いたいを、比較して選べる。</h1>
          <p className="pageLead">
            AIツール、IT資格、Python自動化、セキュリティ、データ分析、DevOps、Web開発まで。分野を選び、その中の記事とおすすめ教材をまとめて確認できます。
          </p>
        </section>

        <section className="directorySection uiCard" id="media">
          <div className="sectionHead">
            <div>
              <h2>テーマから探す</h2>
              <p>気になる分野を選んで記事を探せます。</p>
            </div>
          </div>

          <div className="directoryList">
            {siteRows.map((site) => (
              <article
                className="directoryItem"
                key={site.slug}
                style={{ '--accent': site.accent } as CSSProperties}
              >
                <div className="directoryMeta">
                  <span>{site.topic}</span>
                  <span>{site.articleCount}記事</span>
                </div>
                <h3>{site.name}</h3>
                <p>{site.description}</p>

                {/* Root portal -> each media subdomain.
                    Use a normal anchor so the browser navigates to the
                    absolute canonical URL such as:
                    https://ai-tools.ponpokoken.com/ */}
                <a className="primaryButton" href={canonicalUrl(site)}>
                  記事を見る
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="editorialCard uiCard">
          <h2>編集方針</h2>
          <p>
            公式情報を優先して確認し、料金・機能・学習方法・体験談など、比較するときに必要な情報を整理します。広告を含む記事では記事内に明記します。
          </p>
          <Link className="textLink" href="/about/">
            運営・編集方針を見る
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
