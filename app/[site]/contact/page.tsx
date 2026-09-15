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
    title: { absolute: `お問い合わせ｜${site.name}` },
    description: `${site.name}の記事内容の訂正依頼、掲載内容、広告・掲載に関するお問い合わせ窓口です。`,
    alternates: { canonical: canonicalUrl(site, 'contact/') },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ site: string }> }) {
  const { site: slug } = await params;
  const site = getSite(slug);
  if (!site) return notFound();

  const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://forms.gle/PeSsrEUGeZZMAYmt5';

  return (
    <SiteStaticPage site={site} title="お問い合わせ">
      <p>記事内容の訂正依頼、掲載内容に関するお問い合わせ、広告・掲載に関するご連絡は、下記お問い合わせフォームよりお願いいたします。</p>
      <p>内容を確認のうえ、必要に応じて返信いたします。</p>
      <p>なお、営業・勧誘・当サイトと関係のないお問い合わせについては、返信できない場合があります。</p>

      {formUrl ? (
        <p className="contactFormAction">
          <a className="contactFormButton" href={formUrl} target="_blank" rel="noopener noreferrer">お問い合わせフォームへ</a>
        </p>
      ) : (
        <p className="smallNote">お問い合わせフォームを準備中です。</p>
      )}
    </SiteStaticPage>
  );
}
