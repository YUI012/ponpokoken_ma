import type { ArticleMeta } from '@/lib/content';
import { getSite } from '@/lib/sites';
import { siteHref } from '@/lib/urls';

export function ArticleCard({
  article,
  compact = false,
}: {
  article: ArticleMeta;
  compact?: boolean;
}) {
  const site = getSite(article.site);
  if (!site) return null;

  return (
    <article className={`articleCard${compact ? ' compact' : ''}`}>
      <a href={siteHref(site, `${article.slug}/`)}>
        <div className="articleCardMeta">
          <span>{article.tags[0] || site.topic}</span>
          <time dateTime={article.updated || article.date}>
            {article.updated || article.date}
          </time>
        </div>

        <h3>{article.title}</h3>

        {!compact && article.description && (
          <p>{article.description}</p>
        )}

        <span className="articleCardLink">記事を読む</span>
      </a>
    </article>
  );
}