import React from 'react';
import Link from '@/components/StaticLink';
import type { CSSProperties } from 'react';
import type { Article, ArticleMeta } from '@/lib/content';
import type { SiteConfig } from '@/lib/sites';
import { getArticleCategory, getArticleQualification } from '@/lib/archive';
import { MarkdownArticle } from './MarkdownArticle';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { canonicalUrl, siteHref, siteOrigin } from '@/lib/urls';

function absoluteUrl(pathOrUrl: string | undefined, base: string) {
  if (!pathOrUrl) return undefined;
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return `${base}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

export function ArticlePage({ article, site, related }: { article: Article; site: SiteConfig; related: ArticleMeta[] }) {
  const topHeadings = article.headings.filter((heading) => heading.level === 2).slice(0, 12);
  const origin = siteOrigin(site);
  const pageUrl = canonicalUrl(site, `${article.slug}/`);
  const imageUrl = absoluteUrl(article.hero, origin);
  const hasAffiliate = Boolean(article.primaryCtaUrl) || /trk\.udemy\.com|px\.a8\.net|a8\.net|impact\.com|affiliate/i.test(article.content);
  const category = getArticleCategory(site.slug, article);
  const categoryHref = siteHref(site, `category/${category.slug}/`);
  const qualification = getArticleQualification(site.slug, article);
  const qualificationHref = qualification
    ? siteHref(site, `category/${category.slug}/${qualification.slug}/`)
    : undefined;
  const nextArticle = related[0];

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    author: { '@type': 'Person', name: article.author },
    publisher: { '@type': 'Organization', name: site.name, url: canonicalUrl(site) },
    keywords: article.tags.join(', '),
    ...(imageUrl ? { image: [imageUrl] } : {}),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: qualification
      ? [
          { '@type': 'ListItem', position: 1, name: site.name, item: canonicalUrl(site) },
          { '@type': 'ListItem', position: 2, name: category.name, item: canonicalUrl(site, `category/${category.slug}/`) },
          { '@type': 'ListItem', position: 3, name: qualification.shortName, item: canonicalUrl(site, `category/${category.slug}/${qualification.slug}/`) },
          { '@type': 'ListItem', position: 4, name: article.title, item: pageUrl },
        ]
      : [
          { '@type': 'ListItem', position: 1, name: site.name, item: canonicalUrl(site) },
          { '@type': 'ListItem', position: 2, name: category.name, item: canonicalUrl(site, `category/${category.slug}/`) },
          { '@type': 'ListItem', position: 3, name: article.title, item: pageUrl },
        ],
  };

  return (
    <div className="siteTheme" style={{ '--accent': site.accent } as CSSProperties}>
      <SiteHeader site={site} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="articleShell">
        <article className="articleMain">
          <nav className="breadcrumbs" aria-label="パンくず">
            <Link href={siteHref(site)}>ホーム</Link><span>›</span>
            <Link href={categoryHref}>{category.name}</Link><span>›</span>
            {qualification && qualificationHref ? (
              <><Link href={qualificationHref}>{qualification.shortName}</Link><span>›</span></>
            ) : null}
            <span>記事</span>
          </nav>

          <header className="articleHeader uiCard">
            <div className={`articleHeaderGrid${article.hero ? ' hasVisual' : ''}`}>
              <div className="articleHeaderBody">
                {article.tags.length > 0 && (
                  <div className="articleTags">{article.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
                )}
                <h1>{article.title}</h1>
                {article.description && <p className="lead">{article.description}</p>}
                <div className="byline">
                  <time dateTime={article.updated || article.date}>{article.updated || article.date}</time>
                  <span className="bylineDivider">|</span>
                  <Link href={siteHref(site, 'about/')}>{article.author}</Link>
                </div>
                {hasAffiliate && <p className="adDisclosure">この記事にはアフィリエイト広告が含まれています。掲載内容は編集方針に基づき独立して作成しています。</p>}
              </div>

              {article.hero && (
                <figure className="articleHeroImage articleHeroThumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.hero} alt={article.heroAlt || article.title} />
                </figure>
              )}
            </div>
          </header>

          {topHeadings.length >= 5 && (
            <details className="toc uiCard">
              <summary>この記事の目次</summary>
              <ol>{topHeadings.map((heading, index) => <li key={`${heading.id}-${index}`}><a href={`#${heading.id}`}>{heading.text}</a></li>)}</ol>
            </details>
          )}

          <MarkdownArticle markdown={article.content} />

          <section className="articleExit uiCard" aria-labelledby="next-action-title">
            <div className="sectionHead compactHead">
              <div>
                <h2 id="next-action-title">次に見るなら</h2>
              </div>
            </div>

            <div className="articleExitList">
              {article.primaryCtaUrl && (
                <a className="articleExitLink isPrimary" href={article.primaryCtaUrl} target="_blank" rel="nofollow sponsored noopener noreferrer">
                  <span><strong>{article.primaryCtaLabel || 'おすすめUdemy講座を見る'}</strong><small>講座・教材を確認する</small></span><b>→</b>
                </a>
              )}

              <Link className="articleExitLink" href={qualificationHref || categoryHref}>
                <span>
                  <strong>{qualification ? `${qualification.shortName}をまとめて見る` : `${category.name}をまとめて見る`}</strong>
                  <small>{qualification ? '結論・Udemy・資格DB・学習ルートへ' : '結論・Udemy・学習DB・学習ルートへ'}</small>
                </span><b>→</b>
              </Link>

              {nextArticle && (
                <a className="articleExitLink" href={siteHref(site, `${nextArticle.slug}/`)}>
                  <span><strong>関連する記事を1本読む</strong><small>{nextArticle.title}</small></span><b>→</b>
                </a>
              )}
            </div>
          </section>
        </article>
      </main>

      <SiteFooter site={site} />

      {article.primaryCtaUrl && article.stickyCta && (
        <div className="stickyCta">
          <a href={article.primaryCtaUrl} target="_blank" rel="nofollow sponsored noopener noreferrer">
            {article.primaryCtaLabel || '詳しく見る'} <span>→</span>
          </a>
        </div>
      )}
    </div>
  );
}
