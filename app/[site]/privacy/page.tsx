import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { sites, getSite } from '@/lib/sites';
import { canonicalUrl } from '@/lib/urls';
import { SiteStaticPage } from '@/components/SiteStaticPage';

export function generateStaticParams() { return sites.map((site) => ({ site: site.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ site: string }> }): Promise<Metadata> {
  const { site: slug } = await params; const site = getSite(slug); if (!site) return {};
  return {
    title: { absolute: `プライバシーポリシー｜${site.name}` },
    description: `${site.name}のプライバシーポリシーです。Cookie、アクセス情報、広告、お問い合わせ情報の取り扱いについて説明します。`,
    alternates: { canonical: canonicalUrl(site, 'privacy/') },
  };
}
export default async function Page({ params }: { params: Promise<{ site: string }> }) {
  const { site: slug } = await params; const site = getSite(slug); if (!site) return notFound();
  return (
    <SiteStaticPage site={site} title="プライバシーポリシー">
      <h2>取得する情報</h2>
      <p>当サイトでは、サイトの利用状況を把握するため、Cookie、IPアドレス、ブラウザ情報、閲覧ページ、参照元などのアクセス情報を取得する場合があります。また、お問い合わせ時には、利用者が入力した連絡先やお問い合わせ内容を取得します。</p>
      <h2>利用目的</h2>
      <p>取得した情報は、サイトの改善、利用状況の分析、広告効果の測定、お問い合わせへの対応、不正利用の防止などに利用します。</p>
      <h2>Cookieと広告について</h2>
      <p>当サイトでは、アクセス解析や広告配信、アフィリエイト成果の計測のためCookie等を利用する場合があります。ブラウザの設定によりCookieを無効にできますが、一部の機能や計測が正しく動作しない場合があります。</p>
      <h2>外部サイトへのリンク</h2>
      <p>当サイトから外部サイトへ移動した後の情報の取り扱いについては、各外部サイトのプライバシーポリシーをご確認ください。</p>
      <h2>お問い合わせ</h2>
      <p>個人情報の取り扱いに関するお問い合わせは、お問い合わせページからご連絡ください。</p>
    </SiteStaticPage>
  );
}
