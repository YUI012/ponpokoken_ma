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
    default: 'ぽんぽこメディア｜IT・AI・開発を10の専門メディアで探す',
    template: '%s｜ぽんぽこメディア',
  },
  description: 'AIツール、IT資格、Python自動化、セキュリティ、Microsoft 365、マーケティング、データ分析、機械学習、DevOps、Web開発を10の専門メディアで整理します。',
  keywords: ['IT資格', 'AIツール', 'Python自動化', 'セキュリティ', 'Microsoft 365', 'デジタルマーケティング', 'データ分析', '機械学習', 'DevOps', 'Web開発'],
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
