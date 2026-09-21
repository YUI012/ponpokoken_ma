import Link from '@/components/StaticLink';

import type { SiteConfig } from '@/lib/sites';
import { canonicalUrl, siteHref } from '@/lib/urls';

export function SiteHeader({ site }: { site?: SiteConfig }) {
  const home = site ? canonicalUrl(site) : '/';
  const categories = site ? `${siteHref(site)}#categories` : '/#media';

  return (
    <header className="siteHeader">
      <div className="headerInner">
        {site ? (
          <a href={home} className="brand" aria-label={`${site.name}トップへ`}>
            <span className="brandTitle">{site.name}</span>
          </a>
        ) : (
          <Link href="/" className="brand" aria-label="トップへ">
            <span className="brandTitle">ぽんぽこメディア</span>
          </Link>
        )}

        <a className="headerCategoryLink" href={categories}>
          {site ? 'カテゴリ' : 'メディア一覧'}
        </a>
      </div>
    </header>
  );
}
