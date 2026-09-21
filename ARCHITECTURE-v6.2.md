# Architecture v6.2 — Category = Main Guide

100サイトまで同じ構成で増やす前提の共通構造です。

```text
TOP
  ↓
カテゴリ
  ↓
カテゴリメイン記事
  ├ 結論
  ├ カテゴリ指定Udemy
  ├ 学習DB
  ├ 学習ルート
  └ 関連記事（最下部・簡素表示）
  ↓
個別記事
  ├ 検索意図への回答
  ├ Udemy CTA
  └ カテゴリメイン記事へ戻る
```

## 1. カテゴリは `data/sites.json` の1か所だけで管理

`data/sites.json` がサイト構成のSingle Source of Truthです。

各カテゴリは以下を持ちます。

- `slug`: URL用
- `name`: サイト表示用の短い名前
- `topicCluster`: Udemy Catalog Research Master v4.1 の固定topicCluster
- `description`: カテゴリ説明
- `match`: 既存記事を自動所属させる語
- `featuredArticleSlugs`: Udemyカタログ未投入時だけ使う明示的フォールバック

10媒体 × 10 topicCluster = 100カテゴリをMaster v4.1に合わせて登録済みです。

## 2. Udemyはカテゴリから自動抽出しない

カテゴリページで別カテゴリの商品を出さないため、次の順番で表示します。

```text
data/udemy/{master-siteId}-udemy-catalog.json
  ↓
topicCluster 完全一致
  ↓
catalogQualified = true
  ↓
active != false
  ↓
日本語優先 → courseRole → badge → reviewCount
```

カタログがまだ無い場合だけ `featuredArticleSlugs` のCTAを表示します。
カテゴリ内の全記事からアフィURLを拾う処理は廃止しました。

## 3. カテゴリページは一覧ではなく1本のメイン記事

順番は全サイト固定です。

```text
結論
↓
おすすめUdemy
↓
学習DB
↓
学習ルート
↓
記事一覧
```

記事一覧はカードを大量に並べません。
最初の12記事をテキストリンクで表示し、残りは折りたたみます。

## 4. 個別記事の出口

個別記事の末尾は最大3導線です。

1. 記事に指定されたUdemy CTA
2. カテゴリメイン記事
3. 関連記事1本

## 5. 100サイト化

サイト固有UIは作りません。
増やすときに変更するのは基本的に以下だけです。

- `data/sites.json`
- `content/{site}/`
- `data/udemy/{siteId}-udemy-catalog.json`

共通コンポーネントはそのまま使います。
