import type { SiteConfig } from './sites';

function cleanBase(value: string) {
  return value.replace(/\/$/, '');
}

function isLocalUrl(value: string) {
  return /localhost|127\.0\.0\.1|0\.0\.0\.0/i.test(value);
}

export function isSubdomainMode() {
  // next dev では必ず /<site>/... のローカルルートを使う。
  // これで .env.local に本番用のサブドメイン設定が残っていても、記事リンクが404にならない。
  if (process.env.NODE_ENV !== 'production') return false;

  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  if (isLocalUrl(configuredUrl)) return false;
  return process.env.NEXT_PUBLIC_SUBDOMAIN_MODE === 'true';
}

export function getRootDomain() {
  return process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'ponpokoken.com';
}

export function siteOrigin(site: SiteConfig) {
  if (isSubdomainMode()) {
    return `https://${site.subdomain}.${getRootDomain()}`;
  }
  return cleanBase(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000');
}

export function siteHref(site: SiteConfig, path = '') {
  const cleanPath = path.replace(/^\//, '');
  if (isSubdomainMode()) {
    return cleanPath ? `/${cleanPath}` : '/';
  }
  return cleanPath ? `/${site.slug}/${cleanPath}` : `/${site.slug}/`;
}

export function canonicalUrl(site: SiteConfig, path = '') {
  const cleanPath = path.replace(/^\//, '');
  const origin = siteOrigin(site);
  if (isSubdomainMode()) {
    return cleanPath ? `${origin}/${cleanPath}` : `${origin}/`;
  }
  return cleanPath ? `${origin}/${site.slug}/${cleanPath}` : `${origin}/${site.slug}/`;
}
