import React from 'react';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Article, ArticleMeta } from '@/lib/content';
import type { SiteConfig } from '@/lib/sites';
import { MarkdownArticle } from './MarkdownArticle';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ArticleCard } from './ArticleCard';
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
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: site.name, item: canonicalUrl(site) },
      { '@type': 'ListItem', position: 2, name: article.title, item: pageUrl },
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
            <Link href={siteHref(site)}>ホーム</Link>
            {(article.tags.slice(0, 2).length ? article.tags.slice(0, 2) : ['記事']).map((tag, index) => (
              <React.Fragment key={`${tag}-${index}`}><span>›</span><span>{tag}</span></React.Fragment>
            ))}
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
              <ol>{topHeadings.map((heading) => <li key={heading.id}><a href={`#${heading.id}`}>{heading.text}</a></li>)}</ol>
            </details>
          )}

          <MarkdownArticle markdown={article.content} />

          {related.length > 0 && (
            <section className="relatedSection uiCard">
              <div className="sectionHead">
                <div><h2>関連記事</h2><p>あわせて読みたい記事をまとめました。</p></div>
                <Link href={siteHref(site)}>記事一覧へ</Link>
              </div>
              <div className="relatedList">{related.map((item) => <ArticleCard key={`${item.site}-${item.slug}`} article={item} compact />)}</div>
            </section>
          )}
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
