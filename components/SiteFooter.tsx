import Link from 'next/link';
import type { SiteConfig } from '@/lib/sites';
import { siteHref } from '@/lib/urls';

export function SiteFooter({ site }: { site?: SiteConfig }) {
  const about = site ? siteHref(site, 'about/') : '/about/';
  const advertising = site ? siteHref(site, 'advertising/') : '/advertising/';
  const privacy = site ? siteHref(site, 'privacy/') : '/privacy/';
  const contact = site ? siteHref(site, 'contact/') : '/contact/';

  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div>
          <strong>{site?.name || 'ぽんぽこメディア'}</strong>
          <p>{site?.description || 'IT・AI・学習・仕事術を中心に、選ぶために必要な情報をわかりやすく整理します。'}</p>
        </div>
        <nav aria-label="フッターナビゲーション">
          <Link href={about}>運営者情報</Link>
          <Link href={advertising}>広告について</Link>
          <Link href={privacy}>プライバシー</Link>
          <Link href={contact}>お問い合わせ</Link>
        </nav>
      </div>
    </footer>
  );
}
