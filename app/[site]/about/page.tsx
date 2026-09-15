import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { sites, getSite } from '@/lib/sites';
import { canonicalUrl } from '@/lib/urls';
import { SiteStaticPage } from '@/components/SiteStaticPage';

export function generateStaticParams() {
  return sites.map((site) => ({ site: site.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ site: string }> }): Promise<Metadata> {
  const { site: slug } = await params;
  const site = getSite(slug);
  if (!site) return {};

  return {
    title: { absolute: `運営者情報・編集方針｜${site.name}` },
    description: `${site.name}の運営者情報、編集方針、広告・アフィリエイトに関する方針を掲載しています。`,
    alternates: { canonical: canonicalUrl(site, 'about/') },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ site: string }> }) {
  const { site: slug } = await params;
  const site = getSite(slug);
  if (!site) return notFound();

  if (site.slug === 'it-cert') {
    return (
      <SiteStaticPage site={site} title="運営者情報・編集方針">
        <h2>IT資格ナビについて</h2>
        <p>IT資格ナビは、IT資格の勉強時間・教材・講座・合格体験などを調査し、資格取得を目指す方が自分に合った学習方法を選びやすくするための情報サイトです。</p>
        <p>運営者自身もITインフラエンジニアとして実務に携わり、基本情報技術者、応用情報技術者、LPIC-1、ITIL Foundationなどの資格を取得してきました。</p>
        <p>自身の受験経験に加え、公式情報や複数の合格体験記・公開情報を調査し、できる限り根拠の確認できる情報を掲載しています。</p>

        <h2>編集方針</h2>
        <p>記事作成時は、資格運営団体やサービス提供元などの公式情報を優先して確認します。</p>
        <p>勉強時間や教材の評価など、公式情報だけでは判断できない内容については、複数の受験者の合格体験や公開情報を確認し、共通点や傾向を整理しています。</p>
        <p>料金、試験内容、キャンペーンなど変更される可能性がある情報については、可能な限り公式ページへの参照先を掲載します。</p>
        <p>特定の商品やサービスを一方的に推奨するのではなく、料金、学習内容、対象者、使いやすさなど複数の観点から比較することを基本方針としています。</p>

        <h2>広告・アフィリエイトについて</h2>
        <p>当サイトには、アフィリエイト広告を含む記事があります。</p>
        <p>当サイト内の広告リンクを経由して商品・サービスの購入または申込みが行われた場合、当サイトが報酬を受け取ることがあります。</p>
        <p>ただし、広告報酬の有無によって記事の評価や結論を変更することはありません。</p>
      </SiteStaticPage>
    );
  }

  return (
    <SiteStaticPage site={site} title="運営者情報・編集方針">
      <h2>{site.name}について</h2>
      <p>{site.name}は、{site.topic}に関する情報を比較・整理し、読者が自分に合う選択肢を見つけやすくすることを目的とした専門メディアです。</p>

      <h2>編集方針</h2>
      <p>記事では、公式サイトや一次情報を優先して確認し、必要に応じて複数の体験談・公開情報を照らし合わせます。料金や仕様など変更されやすい情報は、できる限り確認日や参照先がわかる形で掲載します。</p>
      <p>比較・おすすめ記事では、読者にとってのわかりやすさ、用途との相性、料金、使いやすさなどを整理し、特定の商品やサービスを一方的に推奨しないよう努めます。</p>

      <h2>広告・アフィリエイトについて</h2>
      <p>当サイトにはアフィリエイト広告を含む記事があります。広告リンクを経由して商品・サービスの購入や申込みが行われた場合、当サイトが報酬を受け取ることがあります。広告の有無にかかわらず、記事内容は編集方針に基づいて作成します。</p>
    </SiteStaticPage>
  );
}
