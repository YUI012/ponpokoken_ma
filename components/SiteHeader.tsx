import Link from 'next/link';
import type { SiteConfig } from '@/lib/sites';
import { siteHref } from '@/lib/urls';

export function SiteHeader({ site }: { site?: SiteConfig }) {
  const home = site ? siteHref(site) : '/';
  const about = site ? siteHref(site, 'about/') : '/about/';
  const contact = site ? siteHref(site, 'contact/') : '/contact/';
  const articles = site ? siteHref(site, 'articles/') : '/#media';

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link href={home} className="brand" aria-label="トップへ">
          <span className="brandTitle">{site?.name || 'ぽんぽこメディア'}</span>
          <span className="brandTagline">{site?.tagline || '選ぶ前に、比べる。'}</span>
        </Link>
        <nav className="headerNav" aria-label="メインナビゲーション">
          <Link href={articles}>{site ? '記事一覧' : 'テーマ一覧'}</Link>
          <Link href={about}>運営者情報</Link>
          <Link href={contact}>お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
}
