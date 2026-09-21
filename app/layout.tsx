import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ponpokoken.com';


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'ぽんぽこメディア｜IT・AI・学習を比較して選ぶ',
    template: '%s｜ぽんぽこメディア',
  },
  description: 'AIツール、IT資格、Python自動化、セキュリティ、データ分析、DevOps、Web開発などをカテゴリ別に整理する専門メディアです。',
  keywords: ['IT資格', 'AIツール', 'Python', 'セキュリティ', 'データ分析', 'DevOps', 'Web開発'],
  openGraph: { type: 'website', siteName: 'ぽんぽこメディア', locale: 'ja_JP' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
