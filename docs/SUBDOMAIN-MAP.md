# 10媒体サブドメイン対応表

本プロジェクトは `data/sites.json` の `subdomain` を使い、`scripts/postbuild.mjs` がCloudflare Worker用のホスト→サイト変換を生成します。

| 媒体 | site slug | サブドメイン |
|---|---|---|
| AIツール研究所 | `ai-tools` | `ai-tools.ponpokoken.com` |
| IT資格ナビ | `it-cert` | `it-cert.ponpokoken.com` |
| Python自動化ラボ | `python-automation` | `python.ponpokoken.com` |
| サイバーセキュリティ研究所 | `cybersecurity` | `security.ponpokoken.com` |
| Microsoft 365仕事術 | `microsoft365` | `m365.ponpokoken.com` |
| SNS・デジタルマーケ研究所 | `digital-marketing` | `marketing.ponpokoken.com` |
| データ分析・SQL研究所 | `data-analysis` | `data.ponpokoken.com` |
| データサイエンス・機械学習ラボ | `data-science-ml` | `ds-ml.ponpokoken.com` |
| DevOps・クラウドネイティブラボ | `devops-cloud` | `devops.ponpokoken.com` |
| Webアプリ開発研究所 | `webapp-dev` | `webapp.ponpokoken.com` |

本番では以下を設定します。

```env
NEXT_PUBLIC_SUBDOMAIN_MODE=true
NEXT_PUBLIC_ROOT_DOMAIN=ponpokoken.com
```

ローカル開発では `NEXT_PUBLIC_SUBDOMAIN_MODE=false` とし、`/<site-slug>/...` で確認します。
