import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import type { SiteConfig } from '@/lib/sites';
import { siteHref } from '@/lib/urls';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

export function SiteStaticPage({ site, title, children }: { site: SiteConfig; title: string; children: ReactNode }) {
  return (
    <div className="siteTheme" style={{ '--accent': site.accent } as CSSProperties}>
      <SiteHeader site={site} />
      <main className="pageShell staticPageShell">
        <nav className="breadcrumbs" aria-label="パンくず">
          <Link href={siteHref(site)}>ホーム</Link><span>›</span><span>{title}</span>
        </nav>
        <header className="pageHeroCard uiCard">
          <h1>{title}</h1>
        </header>
        <section className="staticContentCard uiCard">{children}</section>
      </main>
      <SiteFooter site={site} />
    </div>
  );
}
