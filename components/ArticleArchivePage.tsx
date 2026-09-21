import Link from '@/components/StaticLink';
import type { CSSProperties } from 'react';
import type { ArticleMeta } from '@/lib/content';
import type { SiteConfig } from '@/lib/sites';
import { siteHref } from '@/lib/urls';
import { ArticleCard } from './ArticleCard';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

type Props = {
  site: SiteConfig;
  title: string;
  description: string;
  articles: ArticleMeta[];
  page: number;
  totalPages: number;
  totalItems: number;
  basePath: string;
  breadcrumb?: string;
};

function pageHref(site: SiteConfig, basePath: string, page: number) {
  return siteHref(site, page <= 1 ? basePath : `${basePath}page/${page}/`);
}

export function ArticleArchivePage({ site, title, description, articles, page, totalPages, totalItems, basePath, breadcrumb }: Props) {
  const start = totalItems === 0 ? 0 : (page - 1) * 20 + 1;
  const end = Math.min(page * 20, totalItems);

  return (
    <div className="siteTheme" style={{ '--accent': site.accent } as CSSProperties}>
      <SiteHeader site={site} />
      <main className="pageShell">
        <nav className="breadcrumbs" aria-label="パンくず">
          <Link href={siteHref(site)}>ホーム</Link><span>›</span><span>{breadcrumb || title}</span>
        </nav>

        <header className="pageHeroCard uiCard archiveHeroCard">
          <h1>{title}</h1>
          <p className="pageLead">{description}</p>
          <p className="archiveCount">{totalItems}件中 {start}〜{end}件を表示</p>
        </header>

        <section className="articleIndexSection uiCard">
          {articles.length > 0 ? (
            <div className="articleList">{articles.map((article) => <ArticleCard key={`${article.site}-${article.slug}`} article={article} />)}</div>
          ) : <p className="emptyState">該当する記事はありません。</p>}

          {totalPages > 1 && (
            <nav className="pagination" aria-label="記事一覧ページ">
              {page > 1 && <Link className="paginationEdge" href={pageHref(site, basePath, page - 1)}>前へ</Link>}
              <div className="paginationNumbers">
                {Array.from({ length: totalPages }, (_, index) => index + 1)
                  .filter((number) => number === 1 || number === totalPages || Math.abs(number - page) <= 2)
                  .map((number, index, visible) => {
                    const previous = visible[index - 1];
                    return (
                      <span className="paginationSlot" key={number}>
                        {previous && number - previous > 1 && <span className="paginationEllipsis">…</span>}
                        {number === page ? <span className="paginationCurrent" aria-current="page">{number}</span> : <Link href={pageHref(site, basePath, number)}>{number}</Link>}
                      </span>
                    );
                  })}
              </div>
              {page < totalPages && <Link className="paginationEdge" href={pageHref(site, basePath, page + 1)}>次へ</Link>}
            </nav>
          )}
        </section>
      </main>
      <SiteFooter site={site} />
    </div>
  );
}
