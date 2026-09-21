import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { ArticleMeta } from '@/lib/content';
import type { AffiliateOffer, QualificationEntry } from '@/lib/archive';
import type { SiteConfig } from '@/lib/sites';
import { siteHref } from '@/lib/urls';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

type Props = {
  site: SiteConfig;
  qualification: QualificationEntry;
  articles: ArticleMeta[];
  offers: AffiliateOffer[];
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

export function QualificationLandingPage({ site, qualification, articles, offers }: Props) {
  const firstArticles = articles.slice(0, 12);
  const restArticles = articles.slice(12);
  const udemyCount = countBy(articles, /Udemy|教材|講座|参考書|模試/i);
  const shortTermCount = countBy(articles, /勉強時間|短期|1日|3日|1週間|10時間|20時間|30日|未経験/i);
  const examCount = countBy(articles, /模試|問題|演習|本番|試験|合格|点|スコア/i);

  return (
    <div className="siteTheme" style={{ '--accent': site.accent } as CSSProperties}>
      <SiteHeader site={site} />
      <main className="pageShell categoryLanding">
        <nav className="breadcrumbs" aria-label="パンくず">
          <Link href={siteHref(site)}>ホーム</Link><span>›</span>
          <Link href={siteHref(site, `category/${qualification.categorySlug}/`)}>{qualification.categoryName}</Link><span>›</span>
          <span>{qualification.shortName}</span>
        </nav>

        <article className="categoryGuide qualificationGuide">
          <header className="categoryHero qualificationHero">
            <p className="categoryEyebrow">{qualification.categoryName}</p>
            <span className="qualificationHeroCode">{qualification.code}</span>
            <h1>{qualification.shortName}</h1>
            <p>{qualification.description}</p>
          </header>

          <section className="categoryMainSection categoryConclusion" aria-labelledby="qualification-conclusion">
            <p className="categorySectionKicker">まずここだけ</p>
            <h2 id="qualification-conclusion">結論</h2>
            <p>{qualification.shortName}を学ぶなら、教材を増やしすぎず、まず1つの講座で全体像をつかみ、問題演習・模試へ進む形に固定します。このページを入口に、Udemy・学習DB・関連記事までまとめて確認できます。</p>
          </section>

          <section className="categoryMainSection" aria-labelledby="qualification-udemy">
            <div className="categorySectionHead">
              <div>
                <p className="categorySectionKicker">資格指定</p>
                <h2 id="qualification-udemy">おすすめUdemy</h2>
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
              <p className="categoryQuietText">この資格に一致するUdemy講座はまだ登録されていません。別資格の講座は自動表示しません。</p>
            )}
          </section>

          <section className="categoryMainSection" aria-labelledby="qualification-db">
            <p className="categorySectionKicker">自動集計</p>
            <h2 id="qualification-db">{qualification.shortName} 資格DB</h2>
            <div className="categoryDb" role="table" aria-label={`${qualification.shortName} 資格DB`}>
              <div className="categoryDbRow" role="row"><span role="cell">試験・資格コード</span><strong role="cell">{qualification.code}</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">ジャンル</span><strong role="cell">{qualification.categoryName}</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">公開記事</span><strong role="cell">{articles.length}件</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">Udemy・教材</span><strong role="cell">{udemyCount}件</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">短期・勉強時間</span><strong role="cell">{shortTermCount}件</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">問題・模試・本番</span><strong role="cell">{examCount}件</strong></div>
              <div className="categoryDbRow" role="row"><span role="cell">最終更新</span><strong role="cell">{latestDate(articles)}</strong></div>
            </div>
          </section>

          <section className="categoryMainSection" aria-labelledby="qualification-route">
            <p className="categorySectionKicker">迷ったらこの順番</p>
            <h2 id="qualification-route">学習ルート</h2>
            <ol className="learningRoute">
              <li><span>1</span><strong>{qualification.shortName}の試験範囲を確認</strong></li>
              <li><span>2</span><strong>Udemy講座を1つに絞る</strong></li>
              <li><span>3</span><strong>問題演習・模試で弱点を出す</strong></li>
              <li><span>4</span><strong>必要な記事だけ読んで仕上げる</strong></li>
            </ol>
          </section>

          <section className="categoryMainSection categoryArticlesSection" id="articles" aria-labelledby="qualification-articles">
            <div className="categorySectionHead">
              <div>
                <p className="categorySectionKicker">必要な記事だけ読む</p>
                <h2 id="qualification-articles">{qualification.shortName}の記事</h2>
              </div>
              <span>{articles.length}件</span>
            </div>

            {articles.length > 0 ? (
              <>
                <ul className="simpleArticleLinks">
                  {firstArticles.map((article) => (
                    <li key={`${article.site}-${article.slug}`}><Link href={siteHref(site, `${article.slug}/`)}>{article.title}</Link></li>
                  ))}
                </ul>
                {restArticles.length > 0 && (
                  <details className="remainingArticles">
                    <summary>残り{restArticles.length}記事を表示</summary>
                    <ul className="simpleArticleLinks">
                      {restArticles.map((article) => (
                        <li key={`${article.site}-${article.slug}`}><Link href={siteHref(site, `${article.slug}/`)}>{article.title}</Link></li>
                      ))}
                    </ul>
                  </details>
                )}
              </>
            ) : (
              <p className="categoryQuietText">関連記事を準備中です。このページ自体はnoindexになり、記事または講座が入るまで検索結果には出さない設計です。</p>
            )}
          </section>
        </article>
      </main>
      <SiteFooter site={site} />
    </div>
  );
}
