import Link from '@/components/StaticLink';
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

type HubSection = {
  key: string;
  kicker: string;
  title: string;
  description: string;
  articleLabel: string;
  articles: ArticleMeta[];
};

function articleText(article: ArticleMeta) {
  return `${article.title} ${article.description} ${article.tags.join(' ')}`;
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

function pickOffer(articles: ArticleMeta[], fallback: AffiliateOffer[], usedUrls: Set<string>) {
  for (const article of articles) {
    const offer = articleOffer(article);
    if (offer && !usedUrls.has(offer.url)) {
      usedUrls.add(offer.url);
      return offer;
    }
  }
  for (const offer of fallback) {
    if (!usedUrls.has(offer.url)) {
      usedUrls.add(offer.url);
      return offer;
    }
  }
  return null;
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

function splitFocusedArticles(site: SiteConfig, category: TaxonomyEntry, articles: ArticleMeta[]): HubSection[] {
  const ranked = rankFeatured(articles, category.featuredArticleSlugs || []);

  if (site.slug === 'ai-tools') {
    const decisionPattern = /料金|課金|無料|\bplus\b|\bpro\b|\bvs\b|初心者|未経験|コードを書けなくても|使える[？?]|必要|不要|どっち|違い|使い分け|使い方|提供状況|何ができる[？?]|難しい[？?]|時短.*できる[？?]|選ぶ|プロンプト|コピペ/i;
    const buildPattern = /api|実装|開発|自動化|作る|構築|rag|mcp|エージェント|bot|コード|function calling|ワークフロー|ファインチューニング|画像|文字起こし|ハンズオン|agentcore|bedrock|業務効率化|メール|提案書|時間管理|スプレッドシート|line|アプリ/i;
    const decision = ranked.filter((article) => decisionPattern.test(article.title));
    const decisionSet = new Set(decision.map((article) => article.slug));
    const build = ranked.filter((article) => !decisionSet.has(article.slug) && buildPattern.test(article.title));
    const used = new Set([...decision, ...build].map((article) => article.slug));
    const other = ranked.filter((article) => !used.has(article.slug));
    return [
      {
        key: 'decision',
        kicker: '導入・学習前に',
        title: `${category.name}を始める前に判断`,
        description: '料金・無料版・難易度・比較など、導入や学習を始める前に迷いやすいポイントから確認します。',
        articleLabel: '購入判断に使う記事',
        articles: decision,
      },
      {
        key: 'practice',
        kicker: '手を動かす',
        title: `${category.name}で実際に作る・自動化する`,
        description: '使い方だけで終わらず、API・自動化・開発など実際に成果物へつなげる記事をまとめます。',
        articleLabel: '実践記事',
        articles: build,
      },
      {
        key: 'other',
        kicker: 'まだ迷うなら',
        title: `その他の${category.name}記事`,
        description: '上の2つに当てはまらない比較・検証記事です。',
        articleLabel: 'その他の記事',
        articles: other,
      },
    ];
  }

  if (site.slug === 'it-cert') {
    const fastPattern = /最短|短期|1日|3日|1週間|10日|20時間|30日|勉強時間|勉強法|未経験|初心者|だけで|模試|模擬|本番|難易度|合格|udemy|ping-t/i;
    const practicePattern = /ハンズオン|hands-on|実践|構築|ラボ|操作|実装|演習環境/i;
    const practice = ranked.filter((article) => practicePattern.test(articleText(article)) || article.articleType === 'hands-on');
    const practiceSet = new Set(practice.map((article) => article.slug));
    const fast = ranked.filter((article) => !practiceSet.has(article.slug) && fastPattern.test(articleText(article)));
    const used = new Set([...fast, ...practice].map((article) => article.slug));
    const other = ranked.filter((article) => !used.has(article.slug));
    const subject = category.slug === 'other' ? '資格' : category.name;
    return [
      {
        key: 'fast',
        kicker: '最初にここだけ',
        title: `${subject}を最短で取る`,
        description: '勉強時間・短期合格・教材・模試など、合格までの距離を判断する記事から確認します。',
        articleLabel: '最短合格の関連記事',
        articles: fast,
      },
      {
        key: 'practice',
        kicker: '手を動かして理解する',
        title: `${subject}をハンズオンで学ぶ`,
        description: '試験対策だけでなく、実際の操作や構築まで学べる記事をまとめます。',
        articleLabel: 'ハンズオン・実践記事',
        articles: practice,
      },
      {
        key: 'other',
        kicker: '必要なときだけ',
        title: `その他の${subject}記事`,
        description: '取得順や周辺テーマなど、最短合格・ハンズオン以外の判断材料です。',
        articleLabel: 'その他の記事',
        articles: other,
      },
    ];
  }

  if (site.slug === 'python-automation') {
    const learn = ranked.filter((article) => ['beginner', 'comparison'].includes(article.articleType || ''));
    const learnSet = new Set(learn.map((article) => article.slug));
    const practice = ranked.filter((article) => !learnSet.has(article.slug) && ['hands-on', 'outcome'].includes(article.articleType || ''));
    const used = new Set([...learn, ...practice].map((article) => article.slug));
    const other = ranked.filter((article) => !used.has(article.slug));
    return [
      {
        key: 'learn',
        kicker: '最初にここだけ',
        title: `${category.name}を最短で使えるようにする`,
        description: '初心者向けの入口と、似たライブラリ・方法の違いを先に整理します。細かい知識を全部覚えてから始める必要はありません。',
        articleLabel: '最初に読む記事',
        articles: learn,
      },
      {
        key: 'practice',
        kicker: '実際に自動化する',
        title: `${category.name}を仕事・処理で使う`,
        description: 'コードを書いて実際の作業を自動化するハンズオン記事をまとめます。',
        articleLabel: '実装・ハンズオン記事',
        articles: practice,
      },
      {
        key: 'other',
        kicker: '必要なときだけ',
        title: `その他の${category.name}記事`,
        description: '上の2つに入らない補足記事です。',
        articleLabel: 'その他の記事',
        articles: other,
      },
    ];
  }

  const learn = ranked.filter((article) => ['beginner', 'comparison', 'time'].includes(article.articleType || ''));
  const learnSet = new Set(learn.map((article) => article.slug));
  const practice = ranked.filter((article) => !learnSet.has(article.slug) && ['hands-on', 'outcome'].includes(article.articleType || ''));
  const used = new Set([...learn, ...practice].map((article) => article.slug));
  const other = ranked.filter((article) => !used.has(article.slug));
  return [
    {
      key: 'learn',
      kicker: 'まず理解する',
      title: `${category.name}を最短で理解する`,
      description: '用語・違い・学ぶ順番を先に整理して、何を覚えるべきかを絞ります。',
      articleLabel: '基礎・比較記事',
      articles: learn,
    },
    {
      key: 'practice',
      kicker: '手を動かす',
      title: `${category.name}を実践する`,
      description: 'ツール操作、調査、分析、対応など、実際に手を動かす記事をまとめます。',
      articleLabel: '実践・ハンズオン記事',
      articles: practice,
    },
    {
      key: 'other',
      kicker: '必要なときだけ',
      title: `その他の${category.name}記事`,
      description: '運用・周辺知識など、基礎と実践のあとに必要になる記事です。',
      articleLabel: 'その他の記事',
      articles: other,
    },
  ];
}

function ArticleLinks({ site, articles, limit = 12 }: { site: SiteConfig; articles: ArticleMeta[]; limit?: number }) {
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

function OfferCard({ offer }: { offer: AffiliateOffer | null }) {
  if (!offer) return null;
  return (
    <div className="intentOfferBlock">
      <p className="intentSubLabel">おすすめUdemy</p>
      <a className="affiliateOffer intentAffiliateOffer" href={offer.url} target="_blank" rel="nofollow sponsored noopener noreferrer">
        <span className="affiliateOfferLabel">{offer.label}</span>
        {offer.meta && <span className="affiliateOfferMeta">{offer.meta}</span>}
        <span className="affiliateOfferSource">{offer.sourceTitle}</span>
        <span className="affiliateOfferArrow">→</span>
      </a>
    </div>
  );
}

function FocusedCategoryHub({ site, category, articles, offers }: Pick<Props, 'site' | 'category' | 'articles' | 'offers'>) {
  const sections = splitFocusedArticles(site, category, articles);
  const usedUrls = new Set<string>();

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

          {sections.map((section) => {
            if (section.articles.length === 0) return null;
            const offer = section.key === 'other' ? null : pickOffer(section.articles, offers, usedUrls);
            return (
              <section className="categoryMainSection intentHubSection" key={section.key} aria-labelledby={`${category.slug}-${section.key}`}>
                <p className="categorySectionKicker">{section.kicker}</p>
                <h2 id={`${category.slug}-${section.key}`}>{section.title}</h2>
                <p className="intentSectionIntro">{section.description}</p>
                <OfferCard offer={offer} />
                <div className="intentArticleBlock">
                  <p className="intentSubLabel">{section.articleLabel}</p>
                  <ArticleLinks site={site} articles={section.articles} limit={section.key === 'other' ? 8 : 4} />
                </div>
              </section>
            );
          })}
        </article>
      </main>
      <SiteFooter site={site} />
    </div>
  );
}

function countBy(articles: ArticleMeta[], pattern: RegExp) {
  return articles.filter((article) => pattern.test(articleText(article))).length;
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
                  <p className="categorySectionKicker">受ける資格を選ぶ</p>
                  <h2 id="qualification-list-title">{category.name}の資格</h2>
                </div>
                <span>{qualifications.length}資格</span>
              </div>

              <div className="qualificationList">
                {qualifications.map((qualification) => (
                  <Link className="qualificationLink" key={qualification.slug} href={siteHref(site, `category/${category.slug}/${qualification.slug}/`)}>
                    <span className="qualificationCode">{qualification.code}</span>
                    <span className="qualificationText">
                      <strong>{qualification.shortName}</strong>
                      <small>{qualification.name}</small>
                    </span>
                    <span className="qualificationMeta">{qualification.count > 0 ? `${qualification.count}記事` : '準備中'} <b>→</b></span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="categoryMainSection categoryMiniGuide" aria-labelledby="qualification-flow-title">
              <p className="categorySectionKicker">資格を選んだら</p>
              <h2 id="qualification-flow-title">最短合格から見る</h2>
              <p>各資格ページでは、最短合格の判断 → おすすめUdemy → 関連記事を先に表示します。ハンズオン教材や実践記事がある資格は、その次にまとめます。</p>
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
                <ArticleLinks site={site} articles={unassignedArticles} limit={6} />
              </section>
            )}
          </article>
        </main>
        <SiteFooter site={site} />
      </div>
    );
  }

  if (['ai-tools', 'it-cert', 'python-automation', 'cybersecurity'].includes(site.slug)) {
    return <FocusedCategoryHub site={site} category={category} articles={articles} offers={offers} />;
  }

  const route = learningRoute(site, category);
  const beginnerCount = countBy(articles, /初心者|入門|基礎|未経験|はじめて/i);
  const compareCount = countBy(articles, /比較|どっち|選び|違い|必要|不要|おすすめ/i);
  const udemyCount = countBy(articles, /Udemy|教材|講座|参考書|模試/i);
  const practiceCount = countBy(articles, /実践|ハンズオン|問題|演習|試験|合格|構築|自動化/i);
  const conclusion = site.slug === 'it-cert'
    ? `${category.name}は、最初に試験の全体像を確認し、教材を増やしすぎずUdemy講座を1つに絞って、問題演習へ進む形がシンプルです。`
    : `${category.name}は、最初に全体像を確認し、Udemy講座を1つに絞って手を動かし、必要な疑問だけ関連記事で補う形がシンプルです。`;

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
          <section className="categoryMainSection categoryConclusion">
            <p className="categorySectionKicker">まずここだけ</p><h2>結論</h2><p>{conclusion}</p>
          </section>
          <section className="categoryMainSection">
            <div className="categorySectionHead"><div><p className="categorySectionKicker">カテゴリ指定</p><h2>おすすめUdemy</h2></div><span>{offers.length > 0 ? `${offers.length}件` : '準備中'}</span></div>
            {offers.length > 0 ? <div className="affiliateOfferList">{offers.map((offer) => <a className="affiliateOffer" key={`${offer.url}-${offer.label}`} href={offer.url} target="_blank" rel="nofollow sponsored noopener noreferrer"><span className="affiliateOfferLabel">{offer.label}</span>{offer.meta && <span className="affiliateOfferMeta">{offer.meta}</span>}<span className="affiliateOfferSource">{offer.sourceTitle}</span><span className="affiliateOfferArrow">→</span></a>)}</div> : <p className="categoryQuietText">このカテゴリに指定されたUdemy講座はまだありません。</p>}
          </section>
          <section className="categoryMainSection">
            <p className="categorySectionKicker">自動集計</p><h2>{category.name} 学習DB</h2>
            <div className="categoryDb" role="table"><div className="categoryDbRow" role="row"><span role="cell">マスター分類</span><strong role="cell">{category.topicCluster}</strong></div><div className="categoryDbRow" role="row"><span role="cell">公開記事</span><strong role="cell">{articles.length}件</strong></div><div className="categoryDbRow" role="row"><span role="cell">基礎・入門</span><strong role="cell">{beginnerCount}件</strong></div><div className="categoryDbRow" role="row"><span role="cell">比較・選び方</span><strong role="cell">{compareCount}件</strong></div><div className="categoryDbRow" role="row"><span role="cell">Udemy・教材</span><strong role="cell">{udemyCount}件</strong></div><div className="categoryDbRow" role="row"><span role="cell">実践・試験対策</span><strong role="cell">{practiceCount}件</strong></div><div className="categoryDbRow" role="row"><span role="cell">最終更新</span><strong role="cell">{latestDate(articles)}</strong></div></div>
          </section>
          <section className="categoryMainSection"><p className="categorySectionKicker">迷ったらこの順番</p><h2>学習ルート</h2><ol className="learningRoute">{route.map((step, index) => <li key={step}><span>{index + 1}</span><strong>{step}</strong></li>)}</ol></section>
          <section className="categoryMainSection categoryArticlesSection"><div className="categorySectionHead"><div><p className="categorySectionKicker">必要な記事だけ読む</p><h2>{category.name}の記事</h2></div><span>{articles.length}件</span></div><ArticleLinks site={site} articles={articles} /></section>
        </article>
      </main>
      <SiteFooter site={site} />
    </div>
  );
}
