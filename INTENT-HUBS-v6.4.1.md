# v6.4.1 Intent-first hub update

対象：
- AIツール研究所
- IT資格ナビ
- Python自動化ラボ
- サイバーセキュリティ研究所

## 変更

### IT資格
詳細資格ページから「資格DB」「学習ルート」を外し、次の順に変更。

```text
資格名
↓
最短合格
↓
おすすめUdemy 1件
↓
最短合格の関連記事
↓
ハンズオン（該当コンテンツがある場合のみ）
↓
おすすめUdemy 1件
↓
実践記事
↓
その他の記事
```

既存記事のタイトル・articleType・qualification・CTAを使って自動分類する。

### AIツール
```text
ツール / テーマ
↓
始める前に判断
↓
おすすめUdemy 1件
↓
購入・導入判断の記事
↓
実際に作る・自動化する
↓
おすすめUdemy 1件
↓
実践記事
↓
その他
```

既存の料金、課金、無料、初心者、比較、API、RAG、MCP、自動化、開発記事をタイトルから分類する。

### Python
```text
テーマ
↓
最短で使えるようにする
↓
おすすめUdemy 1件
↓
beginner / comparison記事
↓
仕事・処理で使う
↓
おすすめUdemy 1件
↓
hands-on / outcome記事
```

既存100記事のarticleTypeを利用。

### サイバーセキュリティ
```text
分野
↓
最短で理解する
↓
おすすめUdemy 1件
↓
beginner / comparison / time記事
↓
実践する
↓
おすすめUdemy 1件
↓
hands-on / outcome記事
↓
その他
```

既存100記事のarticleTypeを利用。

## 追加修正
- frontmatterの `articleType` / `searchIntent` / `qualification` / Udemy情報をArticleMetaへ読み込むように変更。
- Python旧category名を現在のカテゴリへ正規化。
- cybersecurityのfrontmatter category slugをそのまま優先するよう修正。
- IT資格のfrontmatter `qualification` を資格判定で優先。
- 旧AI記事では本文 `## Udemy` 配下の講座名を自動取得してハブの講座カードに利用。
- 4媒体のサイト説明・カテゴリ案内・SEO title/descriptionを新導線へ合わせて変更。

## 検証
- `npm run typecheck` : PASS
- 既存記事数：AI 52 / IT資格 53 / Python 100 / Cybersecurity 100
- Udemy CTA：4媒体すべて既存記事100%に存在
