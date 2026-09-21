# Architecture v6.3 — IT資格だけ4階層

100サイト共通テンプレは維持しつつ、**IT資格ナビだけ「詳細資格」を1階層追加**します。

```text
通常9サイト
TOP
  ↓
カテゴリ
  ↓
カテゴリメインページ
  ↓
記事

IT資格ナビだけ
TOP
  ↓
資格ジャンル（AWS / Azure / Cisco / Linux ...）
  ↓
詳細資格（SAA / CLF / AZ-900 / CCNA ...）
  ↓
詳細資格メインページ
  ├ 結論
  ├ 資格指定Udemy
  ├ 資格DB
  ├ 学習ルート
  └ 関連記事
  ↓
個別記事
```

## 1. IT資格のカテゴリページ

`/category/azure/` のようなページは、長い記事ではなく**資格選択ページ**です。

例：

```text
Azure
├ AZ-900
├ AZ-104
├ AZ-204
├ AZ-305
├ Azure AI Fundamentals
├ SC-900
├ DP-900
└ AI-102
```

資格を押すと `/category/azure/az-900/` のような詳細資格ページへ進みます。

## 2. 詳細資格ページ

詳細資格ページが「1本のメイン記事」です。

```text
結論
↓
おすすめUdemy（資格に一致する講座だけ）
↓
資格DB
↓
学習ルート
↓
関連記事
```

Udemy Catalog Research Master v4.1 の `topicCluster` は親カテゴリで一致させ、詳細資格では `topicTags`・講座名・verifiedFeatures と `qualifications[].match` を照合します。

カタログ未投入時だけ `featuredArticleSlugs` のCTAをフォールバックとして使います。

## 3. 記事の戻り先

IT資格記事は、詳細資格を判定できた場合、記事末尾の2番目の導線を詳細資格メインページへ変更します。

```text
検索
↓
SAA記事
↓
Udemy
または
↓
SAAメインページ
```

詳細資格を判定できない比較・横断記事は親カテゴリへ戻します。

## 4. データ管理

追加のDBやCMSは作らず、`data/sites.json` のIT資格カテゴリ内だけに `qualifications` を追加します。

```json
{
  "slug": "azure",
  "name": "Azure",
  "topicCluster": "Azure資格",
  "qualifications": [
    {
      "slug": "az-900",
      "name": "Microsoft Azure Fundamentals",
      "shortName": "AZ-900",
      "code": "AZ-900",
      "match": ["AZ-900", "Azure Fundamentals"]
    }
  ]
}
```

他9サイトは今までどおり `TOP → カテゴリ → 記事` です。

## 5. 空ページ

全詳細資格のページ枠は静的生成しますが、記事もUdemy講座もない詳細資格ページは `noindex` にします。
サイトマップには記事が紐づいた詳細資格だけを載せます。

## 6. 記事生成マスター

記事本文の生成は `docs/writer-master-v1.3-10media.md` を正式なWriterマスターとして使用します。
Udemy講座カタログ調査は `docs/udemy-catalog-research-master-v4.1-10media.md` を継続使用します。

詳細資格ページそのものはMarkdown記事ではなく共通テンプレートで生成し、個別記事はWriter Masterの `research.json → Markdown` フローを維持します。
