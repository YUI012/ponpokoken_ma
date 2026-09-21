import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { ArticleMeta } from '@/lib/content';
import type { AffiliateOffer, QualificationEntry, TaxonomyEntry } from '@/lib/archive';
import type { SiteConfig } from '@/lib/sites';
import { siteHref } from '@/lib/urls';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

type Props = {
  site: SiteConfig;
  category: TaxonomyEntry;
  articles: ArticleMeta[];
  offers: AffiliateOffer[];
  qualifications?: QualificationEntry[];
  unassignedArticles?: ArticleMeta[];
};

function countBy(articles: ArticleMeta[], pattern: RegExp) {
  return articles.filter((article) => pattern.test(`${article.title} ${article.description} ${article.tags.join(' ')}`)).length;
}

function latestDate(articles: ArticleMeta[]) {
  if (articles.length === 0) return '記事準備中';
  return articles
    .map((article) => article.updated || article.date)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];
}

function learningRoute(site: SiteConfig, category: TaxonomyEntry) {
  if (site.slug === 'it-cert') {
    return [
      `${category.name}の試験・全体像を確認`,
      'Udemy講座を1つに絞る',
      '問題演習・模試で仕上げる',
      '弱点だけ関連記事で補う',
    ];
  }

  return [
    `${category.name}の基礎を確認`,
    'Udemy講座を1つに絞る',
    '手を動かして実践する',
    '必要な部分だけ関連記事で補う',
  ];
}

function ArticleLinks({ site, articles, limit = 12 }: { site: SiteConfig; articles: ArticleMeta[]; limit?: number }) {
  const first = articles.slice(0, limit);
  const rest = articles.slice(limit);
  if (articles.length === 0) return <p className="categoryQuietText">記事を準備中です。</p>;

  return (
    <>
      <ul className="simpleArticleLinks">
        {first.map((article) => (
          <li key={`${article.site}-${article.slug}`}>
            <Link href={siteHref(site, `${article.slug}/`)}>{article.title}</Link>
          </li>
        ))}
      </ul>
      {rest.length > 0 && (
        <details className="remainingArticles">
          <summary>残り{rest.length}記事を表示</summary>
          <ul className="simpleArticleLinks">
            {rest.map((article) => (
              <li key={`${article.site}-${article.slug}`}>
                <Link href={siteHref(site, `${article.slug}/`)}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </details>
      )}
    </>
  );
}

export function CategoryLandingPage({
  site,
  category,
  articles,
  offers,
  qualifications = [],
  unassignedArticles = [],
}: Props) {
  const isQualificationIndex = site.slug === 'it-cert' && qualifications.length > 0;

  if (isQualificationIndex) {
    return (
      <div className="siteTheme" style={{ '--accent': site.accent } as CSSProperties}>
        <SiteHeader site={site} />
        <main className="pageShell categoryLanding">
          <nav className="breadcrumbs" aria-label="パンくず">
            <Link href={siteHref(site)}>ホーム</Link><span>›</span><span>{category.name}</span>
          </nav>

          <article className="categoryGuide">
            <header className="categoryHero">
              <p className="categoryEyebrow">{site.name}</p>
              <h1>{category.name}</h1>
              <p>{category.description}</p>
            </header>

            <section className="categoryMainSection" aria-labelledby="qualification-list-title">
              <div className="categorySectionHead">
                <div>
                  <p className="categorySectionKicker">ここから1つ選ぶ</p>
                  <h2 id="qualification-list-title">{category.name}の資格</h2>
                </div>
                <span>{qualifications.length}資格</span>
              </div>

              <div className="qualificationList">
                {qualifications.map((qualification) => (
                  <Link
                    className="qualificationLink"
                    key={qualification.slug}
                    href={siteHref(site, `category/${category.slug}/${qualification.slug}/`)}
                  >
                    <span className="qualificationCode">{qualification.code}</span>
                    <span className="qualificationText">
                      <strong>{qualification.shortName}</strong>
                      <small>{qualification.name}</small>
                    </span>
                    <span className="qualificationMeta">
                      {qualification.count > 0 ? `${qualification.count}記事` : '準備中'} <b>→</b>
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="categoryMainSection categoryMiniGuide" aria-labelledby="qualification-flow-title">
              <p className="categorySectionKicker">構造はこれだけ</p>
              <h2 id="qualification-flow-title">資格を選んだ後</h2>
              <p>各資格ページで、結論 → おすすめUdemy → 資格DB → 学習ルート → 関連記事の順にまとめます。検索から個別記事へ来た場合も、最後にこの資格ページへ戻れる構造です。</p>
            </section>

            {unassignedArticles.length > 0 && (
              <section className="categoryMainSection categoryArticlesSection" aria-labelledby="category-cross-articles">
                <div className="categorySectionHead">
                  <div>
                    <p className="categorySectionKicker">資格をまたぐ記事</p>
                    <h2 id="category-cross-articles">{category.name}の比較・横断記事</h2>
                  </div>
                  <span>{unassignedArticles.length}件</span>
                </div>
                <ArticleLinks site={site} articles={unassignedArticles} limit={8} />
              </section>
            )}
          </article>
        </main>
        <SiteFooter site={site} />
      </div>
    );
  }

  const route = learningRoute(site, category);
  const beginnerCount = countBy(articles, /初心者|入門|基礎|未経験|はじめて/i);
  const compareCount = countBy(articles, /比較|どっち|選び|違い|必要|不要|おすすめ/i);
  const udemyCount = countBy(articles, /Udemy|教材|講座|参考書|模試/i);
  const practiceCount = countBy(articles, /実践|ハンズオン|問題|演習|試験|合格|構築|自動化/i);
  const conclusion = site.slug === 'it-cert'
    ? `${category.name}は、最初に試験の全体像を確認し、教材を増やしすぎずUdemy講座を1つに絞って、問題演習へ進む形がシンプルです。このページから講座・学習DB・関連記事までまとめて確認できます。`
    : `${category.name}は、最初に全体像を確認し、Udemy講座を1つに絞って手を動かし、必要な疑問だけ関連記事で補う形がシンプルです。このページを${category.name}の入口として使えます。`;

  return (
    <div className="siteTheme" style={{ '--accent': site.accent } as CSSProperties}>
      <SiteHeader site={site} />

      <main className="pageShell categoryLanding">
        <nav className="breadcrumbs" aria-label="パンくず">
          <Link href={siteHref(site)}>ホーム</Link><span>›</span><span>{category.name}</span>
        </nav>

        <article className="categoryGuide">
          <header className="categoryHero">
            <p className="categoryEyebrow">{site.name}</p>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </header>

          <section className="categoryMainSection categoryConclusion" aria-labelledby="category-conclusion">
            <p className="categorySectionKicker">まずここだけ</p>
            <h2 id="category-conclusion">結論</h2>
            <p>{conclusion}</p>
          </section>

          <section className="categoryMainSection" aria-labelledby="category-udemy">
            <div className="categorySectionHead">
              <div>
                <p className="categorySectionKicker">カテゴリ指定</p>
                <h2 id="category-udemy">おすすめUdemy</h2>
              </div>
              <span>{offers.length > 0 ? `${offers.length}件` : '準備中'}</span>
            </div>

            {offers.length > 0 ? (
              <div className="affiliateOfferList">
                {offers.map((offer) => (
                  <a className="affiliateOffer" key={`${offer.url}-${offer.label}`} href={offer.url} target="_blank" rel="nofollow sponsored noopener noreferrer">
                    <span className="affiliateOfferLabel">{offer.label}</span>
                    {offer.meta && <span className="affiliateOfferMeta">{offer.meta}</span>}
                    <span className="affiliateOfferSource">{offer.sourceTitle}</span>
                    <span className="affiliateOfferArrow">→</span>
                  </a>
                ))}
              </div>
            ) : (
              <p className="categoryQuietText">このカテゴリに指定されたUdemy講座はまだありません。別カテゴリの講座を自動表示しません。</p>
            )}
          </section>

          <section className="categoryMainSection" aria-labelledby="category-db">
            <p className="categorySectionKicker">自動集計</p>
            <h2 id="category-db">{category.name} 学習DB</h2>
            <div className="categoryDb" role="table" aria-label={`${category.name} 学習DB`}>
              <div className="categoryDbRow" role="row"><span role="cell">マスター分類</span><strong role="cell">{category.topicCluster}</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">公開記事</span><strong role="cell">{articles.length}件</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">基礎・入門</span><strong role="cell">{beginnerCount}件</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">比較・選び方</span><strong role="cell">{compareCount}件</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">Udemy・教材</span><strong role="cell">{udemyCount}件</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">実践・試験対策</span><strong role="cell">{practiceCount}件</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">最終更新</span><strong role="cell">{latestDate(articles)}</strong></div>
            </div>
          </section>

          <section className="categoryMainSection" aria-labelledby="category-route">
            <p className="categorySectionKicker">迷ったらこの順番</p>
            <h2 id="category-route">学習ルート</h2>
            <ol className="learningRoute">
              {route.map((step, index) => (
                <li key={step}><span>{index + 1}</span><strong>{step}</strong></li>
              ))}
            </ol>
          </section>

          <section className="categoryMainSection categoryArticlesSection" id="articles" aria-labelledby="category-articles">
            <div className="categorySectionHead">
              <div>
                <p className="categorySectionKicker">必要な記事だけ読む</p>
                <h2 id="category-articles">{category.name}の記事</h2>
              </div>
              <span>{articles.length}件</span>
            </div>
            <ArticleLinks site={site} articles={articles} />
          </section>
        </article>
      </main>

      <SiteFooter site={site} />
    </div>
  );
}
