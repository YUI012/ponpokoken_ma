import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllArticleParams, getArticle, getRelatedArticles } from '@/lib/content';
import { getSite } from '@/lib/sites';
import { canonicalUrl, siteOrigin } from '@/lib/urls';
import { ArticlePage } from '@/components/ArticlePage';

export function generateStaticParams() {
  return getAllArticleParams();
}

export async function generateMetadata({ params }: { params: Promise<{ site: string; slug: string }> }): Promise<Metadata> {
  const { site, slug } = await params;
  const article = getArticle(site, slug);
  const siteConfig = getSite(site);
  if (!article || !siteConfig) return {};
  const origin = siteOrigin(siteConfig);
  const pageUrl = canonicalUrl(siteConfig, `${slug}/`);
  const image = article.hero ? (article.hero.startsWith('http') ? article.hero : `${origin}${article.hero.startsWith('/') ? '' : '/'}${article.hero}`) : undefined;
  return {
    title: { absolute: `${article.title}｜${siteConfig.name}` },
    description: article.description,
    alternates: { canonical: pageUrl },
    keywords: [...siteConfig.keywords, ...article.tags, `${siteConfig.shortName} おすすめ`, `${siteConfig.shortName} 比較`],
    robots: article.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: pageUrl,
      siteName: siteConfig.name,
      publishedTime: article.date,
      modifiedTime: article.updated || article.date,
      ...(image ? { images: [{ url: image, alt: article.heroAlt || article.title }] } : {}),
    },
    twitter: { card: image ? 'summary_large_image' : 'summary', title: article.title, description: article.description, ...(image ? { images: [image] } : {}) },
  };
}

export default async function ArticleRoute({ params }: { params: Promise<{ site: string; slug: string }> }) {
  const { site, slug } = await params;
  const article = getArticle(site, slug);
  const siteConfig = getSite(site);
  if (!article || !siteConfig) return notFound();
  const related = getRelatedArticles(article, 1);
  return <ArticlePage article={article} site={siteConfig} related={related} />;
}
