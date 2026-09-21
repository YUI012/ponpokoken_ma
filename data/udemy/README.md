# Udemy catalog placement

カテゴリページの「おすすめUdemy」は、まずこのディレクトリのJSONを参照します。

ファイル名は Udemy Catalog Research Master v4.1 の固定 `siteId` を使います。

- `ai-tools-udemy-catalog.json`
- `it-cert-udemy-catalog.json`
- `python-automation-udemy-catalog.json`
- `cybersecurity-udemy-catalog.json`
- `m365-work-udemy-catalog.json`
- `digital-marketing-udemy-catalog.json`
- `data-sql-udemy-catalog.json`
- `data-science-udemy-catalog.json`
- `devops-cloud-udemy-catalog.json`
- `web-app-udemy-catalog.json`

表示条件は以下だけです。

1. `catalogQualified = true`
2. `active != false`
3. `topicCluster` がカテゴリ設定と完全一致
4. `affiliateUrl` と `courseTitle` が存在

並び順は日本語を優先し、その後 `courseRole`、Bestseller / Highest Rated、レビュー件数を使います。

カタログがまだ無いカテゴリでは、`lib/sites.ts` の `featuredArticleSlugs` に明示した記事のCTAだけをフォールバック表示します。カテゴリ内の記事から自動抽出はしません。
