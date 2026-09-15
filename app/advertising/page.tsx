import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
const base=(process.env.NEXT_PUBLIC_SITE_URL||'https://ponpokoken.com').replace(/\/$/,'');
export const metadata: Metadata = { title: { absolute: '広告・アフィリエイトについて｜ぽんぽこメディア' }, description: 'ぽんぽこメディアの広告・アフィリエイトリンクの取り扱いについて説明します。', alternates:{canonical:`${base}/advertising/`}, robots:{index:true,follow:true} };
export default function Page(){return <><SiteHeader/><main className="publicIndexPage staticPublicPage"><section className="publicHeroCard staticHeroCard"><h1>広告・アフィリエイトについて</h1></section><section className="publicSectionCard staticContentCard"><p>当サイトには、商品・サービスへのアフィリエイトリンクや広告が含まれる場合があります。リンクを経由して購入・申込みが行われた場合、当サイトが報酬を受け取ることがあります。</p><h2>編集方針</h2><p>広告掲載の有無だけを理由に、記事内の評価や結論を決めることはありません。価格・キャンペーンなどは変更される場合があるため、購入・申込み前に公式ページで最新情報をご確認ください。</p></section></main><SiteFooter/></>}
