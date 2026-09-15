import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ponpokoken.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: { absolute: '運営者情報・編集方針｜ぽんぽこメディア' },
  description: 'ぽんぽこメディアの運営者情報、編集方針、広告・アフィリエイトに関する方針を掲載しています。',
  alternates: { canonical: `${base}/about/` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="publicIndexPage staticPublicPage">
        <section className="publicHeroCard staticHeroCard"><h1>運営者情報・編集方針</h1></section>
        <section className="publicSectionCard staticContentCard">
          <h2>ぽんぽこメディアについて</h2>
          <p>ぽんぽこメディアは、IT・AI・学習・仕事術を中心に、読者が自分に合った選択肢を見つけやすくするための情報を比較・整理する専門メディア群です。</p>

          <h2>編集方針</h2>
          <p>公式サイトや一次情報を優先して確認し、必要に応じて複数の体験談や公開情報を照らし合わせます。料金・仕様など変更されやすい情報は、できる限り確認しやすい参照先を掲載します。</p>
          <p>特定の商品やサービスを一方的に推奨するのではなく、料金、内容、対象者、使いやすさなど複数の観点から比較することを基本方針としています。</p>

          <h2>広告・アフィリエイトについて</h2>
          <p>当メディアにはアフィリエイト広告を含む記事があります。広告リンクを経由して商品・サービスの購入や申込みが行われた場合、当メディアが報酬を受け取ることがあります。</p>
          <p>ただし、広告報酬の有無によって記事の評価や結論を変更することはありません。</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
