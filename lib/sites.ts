import siteData from '@/data/sites.json';

export type SiteQualificationConfig = {
  slug: string;
  name: string;
  shortName: string;
  code: string;
  description: string;
  match: string[];
  featuredArticleSlugs?: string[];
};

export type SiteCategoryConfig = {
  slug: string;
  name: string;
  topicCluster: string;
  description: string;
  match: string[];
  featuredArticleSlugs?: string[];
  qualifications?: SiteQualificationConfig[];
};

export type SiteConfig = {
  slug: string;
  catalogSiteId: string;
  subdomain: string;
  name: string;
  shortName: string;
  description: string;
  tagline: string;
  accent: string;
  accent2: string;
  icon: string;
  topic: string;
  categoryHeading: string;
  keywords: string[];
  categories: SiteCategoryConfig[];
};

export const sites = siteData as SiteConfig[];

export function getSite(slug: string) {
  return sites.find((site) => site.slug === slug);
}
