import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { sites, getSite } from '@/lib/sites';
import { canonicalUrl } from '@/lib/urls';
import { SiteStaticPage } from '@/components/SiteStaticPage';

export function generateStaticParams() { return sites.map((site) => ({ site: site.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ site: string }> }): Promise<Metadata> {
  const { site: slug } = await params; const site = getSite(slug); if (!site) return {};
  return {
    title: { absolute: `広告・アフィリエイトについて｜${site.name}` },
    description: `${site.name}における広告・アフィリエイトリンクの取り扱いと編集方針について説明します。`,
    alternates: { canonical: canonicalUrl(site, 'advertising/') },
  };
}
export default async function Page({ params }: { params: Promise<{ site: string }> }) {
  const { site: slug } = await params; const site = getSite(slug); if (!site) return notFound();
  return (
    <SiteStaticPage site={site} title="広告・アフィリエイトについて">
      <p>当サイトには、商品・サービスへのアフィリエイトリンクや広告が含まれる場合があります。リンクを経由して購入・申込みが行われた場合、当サイトが報酬を受け取ることがあります。</p>
      <h2>記事内容との関係</h2>
      <p>広告掲載の有無だけを理由に、記事内の評価や結論を決めることはありません。比較記事では、用途、料金、機能、使いやすさなど、読者が判断するために必要な情報を整理します。</p>
      <h2>価格・キャンペーン情報</h2>
      <p>価格、割引、キャンペーン、提供条件は変更される場合があります。購入・申込みの前に、必ずリンク先の公式ページで最新情報をご確認ください。</p>
    </SiteStaticPage>
  );
}
