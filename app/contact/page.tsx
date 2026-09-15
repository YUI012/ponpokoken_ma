import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ponpokoken.com').replace(/\/$/, '');

export const metadata: Metadata = {
  title: { absolute: 'お問い合わせ｜ぽんぽこメディア' },
  description: '記事内容の訂正依頼、掲載内容、広告・掲載に関するお問い合わせ窓口です。',
  alternates: { canonical: `${base}/contact/` },
  robots: { index: true, follow: true },
};

export default function Page() {
  const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://forms.gle/PeSsrEUGeZZMAYmt5';

  return (
    <>
      <SiteHeader />
      <main className="publicIndexPage staticPublicPage">
        <section className="publicHeroCard staticHeroCard"><h1>お問い合わせ</h1></section>
        <section className="publicSectionCard staticContentCard">
          <p>記事内容の訂正依頼、掲載内容に関するお問い合わせ、広告・掲載に関するご連絡は、下記お問い合わせフォームよりお願いいたします。</p>
          <p>内容を確認のうえ、必要に応じて返信いたします。</p>
          <p>なお、営業・勧誘・当サイトと関係のないお問い合わせについては、返信できない場合があります。</p>
          {formUrl ? (
            <p className="contactFormAction"><a className="contactFormButton" href={formUrl} target="_blank" rel="noopener noreferrer">お問い合わせフォームへ</a></p>
          ) : (
            <p className="smallNote">お問い合わせフォームを準備中です。</p>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
