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
  description: 'IT資格、AIツール、Python自動化、動画・デザイン、英語学習などを比較して、選びやすく整理する専門メディアです。',
  keywords: ['IT資格', 'AIツール', 'Python', 'AI動画', '英語学習', '比較', 'おすすめ'],
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
