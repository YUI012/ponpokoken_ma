import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
const base=(process.env.NEXT_PUBLIC_SITE_URL||'https://ponpokoken.com').replace(/\/$/,'');
export const metadata: Metadata = { title: { absolute: 'プライバシーポリシー｜ぽんぽこメディア' }, description: 'ぽんぽこメディアのCookie、アクセス情報、広告、お問い合わせ情報の取り扱いについて説明します。', alternates:{canonical:`${base}/privacy/`}, robots:{index:true,follow:true} };
export default function Page(){return <><SiteHeader/><main className="publicIndexPage staticPublicPage"><section className="publicHeroCard staticHeroCard"><h1>プライバシーポリシー</h1></section><section className="publicSectionCard staticContentCard"><h2>取得する情報</h2><p>当サイトでは、サイト改善やアクセス状況の把握のため、Cookie、IPアドレス、ブラウザ情報、閲覧ページ、参照元などの情報を取得する場合があります。お問い合わせ時には、利用者が入力した連絡先やお問い合わせ内容を取得します。</p><h2>利用目的</h2><p>取得した情報は、サイト改善、利用状況の分析、広告効果の測定、お問い合わせ対応、不正利用の防止などに利用します。</p><h2>Cookieと外部サービス</h2><p>アクセス解析、広告配信、アフィリエイト成果の計測のためCookie等を利用する場合があります。外部サイトへ移動した後の情報の取り扱いについては、各サイトのプライバシーポリシーをご確認ください。</p></section></main><SiteFooter/></>}
