export type SiteConfig = {
  slug: string;
  subdomain: string;
  name: string;
  shortName: string;
  description: string;
  tagline: string;
  accent: string;
  accent2: string;
  icon: string;
  topic: string;
  keywords: string[];
};

export const sites: SiteConfig[] = [
  { slug: 'ai-tools', subdomain: 'ai-tools', name: 'AIツール研究所', shortName: 'AIツール', description: '生成AI・AIエージェント・業務効率化ツールを、料金・機能・使い方から比較します。', tagline: '生成AIを、使う前に比べる。', accent: '#2563eb', accent2: '#06b6d4', icon: '✦', topic: 'AIツール比較', keywords: ['AIツール', '生成AI', 'AIエージェント', '業務効率化', '比較'] },
  { slug: 'it-cert', subdomain: 'it-cert', name: 'IT資格ナビ', shortName: 'IT資格', description: 'IT資格ナビは「できるだけ遠回りせず、資格に合格する」をテーマに、勉強時間・教材・講座・合格体験を比較するIT資格メディアです。', tagline: 'IT資格を、最短ルートで選ぶ。', accent: '#2563eb', accent2: '#22c55e', icon: '✓', topic: 'IT資格', keywords: ['IT資格', 'AWS', 'CCNA', 'LPIC', 'SAA', 'Udemy'] },
  { slug: 'ai-video', subdomain: 'ai-video', name: 'AI動画ラボ', shortName: 'AI動画', description: 'AI動画生成・編集ツールを、料金・品質・用途から比較します。', tagline: 'AI動画ツールを、実用目線で比べる。', accent: '#7c3aed', accent2: '#ec4899', icon: '▶', topic: 'AI動画', keywords: ['AI動画', '動画生成AI', '動画編集', '比較', '料金'] },
  { slug: 'python-automation', subdomain: 'python', name: 'Python自動化ラボ', shortName: 'Python', description: 'Python自動化・API・スクレイピング・業務効率化を、実例ベースでわかりやすく整理します。', tagline: 'Pythonで、面倒な作業を減らす。', accent: '#0f766e', accent2: '#eab308', icon: '⌘', topic: 'Python自動化', keywords: ['Python', '自動化', 'API', 'スクレイピング', '業務効率化'] },
  { slug: 'cybersecurity', subdomain: 'security', name: 'サイバーセキュリティ研究所', shortName: 'Security', description: 'VPN・セキュリティ製品・学習教材を、用途や違いがわかるように比較します。', tagline: 'セキュリティを、わかりやすく選ぶ。', accent: '#0f172a', accent2: '#2563eb', icon: '◆', topic: 'セキュリティ', keywords: ['セキュリティ', 'VPN', 'ゼロトラスト', '比較', '学習'] },
  { slug: 'canva-ai', subdomain: 'design', name: 'Canva・AIデザインラボ', shortName: 'Design', description: 'Canva・画像生成AI・デザイン効率化ツールを、初心者にもわかりやすく比較します。', tagline: 'デザインを、もっと速く簡単に。', accent: '#7c3aed', accent2: '#14b8a6', icon: '◇', topic: 'AIデザイン', keywords: ['Canva', '画像生成AI', 'デザイン', 'AIデザイン', '比較'] },
  { slug: 'microsoft365', subdomain: 'm365', name: 'Microsoft 365仕事術', shortName: 'M365', description: 'Excel・Teams・Copilot・Power Automateを、仕事で使いやすい形に整理します。', tagline: 'Microsoft 365を、仕事で使い切る。', accent: '#2563eb', accent2: '#0ea5e9', icon: '▦', topic: 'Microsoft 365', keywords: ['Microsoft 365', 'Excel', 'Teams', 'Copilot', 'Power Automate'] },
  { slug: 'digital-marketing', subdomain: 'marketing', name: 'SNS・デジタルマーケ研究所', shortName: 'Marketing', description: 'SEO・SNS・広告・分析ツールを、実践しやすい形で比較・整理します。', tagline: '集客を、数字でわかりやすく。', accent: '#ea580c', accent2: '#ef4444', icon: '↗', topic: 'デジタルマーケ', keywords: ['SEO', 'SNS', '広告', 'アクセス解析', 'デジタルマーケ'] },
  { slug: 'ai-english', subdomain: 'ai-english', name: 'AI英語学習ラボ', shortName: 'AI英語', description: 'AI英会話・TOEIC・英語学習サービスを、目的や使い方から比較します。', tagline: 'AIで、英語学習を続けやすく。', accent: '#0891b2', accent2: '#2563eb', icon: 'A', topic: '英語学習', keywords: ['AI英会話', 'TOEIC', '英語学習', '比較', '学習サービス'] },
  { slug: 'blender', subdomain: 'blender', name: '3DCG・Blenderラボ', shortName: '3DCG', description: 'Blender・3DCG講座・制作ツールを、初心者目線で比較します。', tagline: 'Blenderを、迷わず始める。', accent: '#f97316', accent2: '#2563eb', icon: '◈', topic: 'Blender', keywords: ['Blender', '3DCG', 'モデリング', '講座', '比較'] },
];

export function getSite(slug: string) {
  return sites.find((site) => site.slug === slug);
}
