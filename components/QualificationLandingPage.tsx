import Link from '@/components/StaticLink';
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

function articleText(article: ArticleMeta) {
  return `${article.title} ${article.description} ${article.tags.join(' ')} ${article.articleType || ''}`;
}

function rankFeatured(articles: ArticleMeta[], featured: string[] = []) {
  const order = new Map(featured.map((slug, index) => [slug, index]));
  return [...articles].sort((a, b) => {
    const ar = order.has(a.slug) ? order.get(a.slug)! : 999;
    const br = order.has(b.slug) ? order.get(b.slug)! : 999;
    if (ar !== br) return ar - br;
    return new Date(b.updated || b.date).getTime() - new Date(a.updated || a.date).getTime();
  });
}

function articleOffer(article: ArticleMeta): AffiliateOffer | null {
  const url = article.udemyAffiliateUrl || article.primaryCtaUrl;
  if (!url || !/udemy/i.test(url)) return null;
  return {
    url,
    label: article.udemyCourseTitle || article.primaryCtaLabel || 'Udemy講座を見る',
    sourceTitle: article.title,
    source: 'article',
  };
}

function pickOffer(articles: ArticleMeta[], fallback: AffiliateOffer[], usedUrls: Set<string>, preferred?: RegExp) {
  const articleOffers = articles.map(articleOffer).filter((offer): offer is AffiliateOffer => Boolean(offer));
  const combined = [...articleOffers, ...fallback];
  const preferredOffer = preferred
    ? combined.find((offer) => !usedUrls.has(offer.url) && preferred.test(`${offer.label} ${offer.sourceTitle} ${offer.meta || ''}`))
    : undefined;
  const offer = preferredOffer || combined.find((candidate) => !usedUrls.has(candidate.url));
  if (offer) usedUrls.add(offer.url);
  return offer || null;
}

function ArticleLinks({ site, articles, limit = 5 }: { site: SiteConfig; articles: ArticleMeta[]; limit?: number }) {
  const first = articles.slice(0, limit);
  const rest = articles.slice(limit);
  if (articles.length === 0) return null;

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

function OfferCard({ offer, label = 'おすすめUdemy' }: { offer: AffiliateOffer | null; label?: string }) {
  if (!offer) return null;
  return (
    <div className="intentOfferBlock">
      <p className="intentSubLabel">{label}</p>
      <a className="affiliateOffer intentAffiliateOffer" href={offer.url} target="_blank" rel="nofollow sponsored noopener noreferrer">
        <span className="affiliateOfferLabel">{offer.label}</span>
        {offer.meta && <span className="affiliateOfferMeta">{offer.meta}</span>}
        <span className="affiliateOfferSource">{offer.sourceTitle}</span>
        <span className="affiliateOfferArrow">→</span>
      </a>
    </div>
  );
}

export function QualificationLandingPage({ site, qualification, articles, offers }: Props) {
  const ranked = rankFeatured(articles, qualification.featuredArticleSlugs || []);
  const handsOnPattern = /ハンズオン|hands-on|実践|構築|ラボ|環境構築|操作|実装|演習環境/i;
  const fastPattern = /最短|短期|1日|3日|1週間|10日|20時間|30日|勉強時間|勉強法|未経験|初心者|だけで|模試|模擬|本番|難易度|おすすめ.*udemy|udemy.*おすすめ|ping-t/i;

  const handsOnArticles = ranked.filter((article) => handsOnPattern.test(`${article.title} ${article.articleType || ''}`) || article.articleType === 'hands-on');
  const handsOnSet = new Set(handsOnArticles.map((article) => article.slug));
  const fastArticles = ranked.filter((article) => !handsOnSet.has(article.slug) && fastPattern.test(`${article.title} ${article.articleType || ''}`));
  const fastSet = new Set(fastArticles.map((article) => article.slug));
  const otherArticles = ranked.filter((article) => !handsOnSet.has(article.slug) && !fastSet.has(article.slug));

  const usedUrls = new Set<string>();
  const fastOffer = pickOffer(fastArticles.length > 0 ? fastArticles : ranked, offers, usedUrls);
  const handsOnOffer = handsOnArticles.length > 0
    ? pickOffer(handsOnArticles, offers, usedUrls, /ハンズオン|hands-on|実践|構築|ラボ/i)
    : (() => {
        const matched = offers.find((offer) =>
          !usedUrls.has(offer.url) && /ハンズオン|hands-on|実践|構築|ラボ/i.test(`${offer.label} ${offer.sourceTitle} ${offer.meta || ''}`),
        );
        if (matched) usedUrls.add(matched.url);
        return matched || null;
      })();
  const showHandsOn = handsOnArticles.length > 0 || Boolean(handsOnOffer);

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

          {(fastArticles.length > 0 || fastOffer) && (
            <section className="categoryMainSection intentHubSection" aria-labelledby="qualification-fast">
              <p className="categorySectionKicker">最初にここだけ</p>
              <h2 id="qualification-fast">{qualification.shortName}を最短で合格する</h2>
              <p className="intentSectionIntro">短期合格できるか、何時間必要か、教材や模試をどう絞るか。まず合格までの距離を判断する記事だけを先にまとめます。</p>
              <OfferCard offer={fastOffer} />
              {fastArticles.length > 0 && (
                <div className="intentArticleBlock">
                  <p className="intentSubLabel">最短合格の判断に使う記事</p>
                  <ArticleLinks site={site} articles={fastArticles} limit={5} />
                </div>
              )}
            </section>
          )}

          {showHandsOn && (
            <section className="categoryMainSection intentHubSection" aria-labelledby="qualification-hands-on">
              <p className="categorySectionKicker">手を動かして理解する</p>
              <h2 id="qualification-hands-on">{qualification.shortName}をハンズオンで学ぶ</h2>
              <p className="intentSectionIntro">試験対策だけでなく、実際の操作・構築まで確認したい人向けです。ハンズオン教材や実践記事がある場合だけ表示します。</p>
              <OfferCard offer={handsOnOffer} label="ハンズオンUdemy" />
              {handsOnArticles.length > 0 && (
                <div className="intentArticleBlock">
                  <p className="intentSubLabel">ハンズオン・実践記事</p>
                  <ArticleLinks site={site} articles={handsOnArticles} limit={4} />
                </div>
              )}
            </section>
          )}

          {otherArticles.length > 0 && (
            <section className="categoryMainSection intentHubSection categoryArticlesSection" aria-labelledby="qualification-other">
              <p className="categorySectionKicker">必要なときだけ</p>
              <h2 id="qualification-other">その他の{qualification.shortName}記事</h2>
              <p className="intentSectionIntro">取得順、他資格との比較など、最短合格・ハンズオン以外の判断材料です。</p>
              <div className="intentArticleBlock compactIntentArticleBlock">
                <ArticleLinks site={site} articles={otherArticles} limit={8} />
              </div>
            </section>
          )}
        </article>
      </main>
      <SiteFooter site={site} />
    </div>
  );
}
