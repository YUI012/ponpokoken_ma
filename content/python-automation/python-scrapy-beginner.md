---
site: "python-automation"
title: "Scrapyの使い方｜複数ページをクロールする3つの実例"
description: "PythonのScrapyで複数ページをクロールする方法を3つの実例から整理します。Spider、start_urls、parse、yield、response.followの役割と、ページリンクをたどりながらデータをJSONなどへ保存する基本構成を解説します。"
slug: "python-scrapy-beginner"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "web-scraping"
categoryName: "Webスクレイピング"
parentHubUrl: "/category/web-scraping/"

qualification: ""
qualificationName: ""
qualificationHubUrl: ""

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "複数ページを継続的にクロールする用途では、Scrapyの構造を使うと収集処理を整理しやすい"

udemyCourseTitle: "PythonでWebスクレイピング・クローリングを極めよう！（Scrapy・Selenium編）"
udemyCourseUrl: "https://www.udemy.com/course/python-web-scraping-with-scrapy/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-with-scrapy%2F&subId1=python-automation&subId2=python-scrapy-beginner&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Scrapy講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-with-scrapy%2F&subId1=python-automation&subId2=python-scrapy-beginner&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Scrapyの使い方｜複数ページをクロールする3つの実例

## 結論

3件ともScrapyのSpiderに開始URLとparse処理を定義し、yieldでデータや次ページへのRequestを返して複数ページをクロールしています。継続的なリンク追跡とデータ抽出をフレームワークの構造に分けられることが確認できます。

Scrapyは、1回だけHTMLを読むコードよりも、複数ページをたどりながら収集する処理をSpiderとして構造化したいときに使いやすいフレームワークです。

## 3人の実例

### 事例1

- 前提：Scrapy初心者向けガイドの実装者
- 実践：ScrapyのSpider、start_urls、parse、yieldを使い、単一商品ページからCrawlSpiderによる製品カタログ全体の巡回へ拡張している。
- 結果：単一ページから複数ページへ拡張

### 事例2

- 前提：Scrapy入門の実装者
- 実践：Spiderのstart_urlsとparseを定義し、response.followをyieldしてリンク先ページへ進む実装を説明している。
- 結果：Spiderを作成してクロール実行

### 事例3

- 前提：Scrapyプロジェクトの実装者
- 実践：アニメ一覧のstart_urlsからparseでタイトルと得点を抽出し、nextリンクをたどって次ページへクロールしている。
- 結果：ページネーションをたどってデータ収集

3例の基本は同じで、start_urlsなどから最初のリクエストを作り、parseでレスポンスを解析し、yieldで抽出データや次のRequestを返します。ページングやサイト内リンクをたどる処理を再帰的に書けるため、複数ページ収集を整理できます。

大量収集では速度だけでなく、DOWNLOAD_DELAYや許可ドメイン、重複URLなどの運用設計も重要です。最初は2〜3ページをたどるSpiderから動作確認すると分かりやすいです。

## 実例ブログ・口コミ

### 1. DataJournalさんの実例

ScrapyのSpider、start_urls、parse、yieldを使い、単一商品ページからCrawlSpiderによる製品カタログ全体の巡回へ拡張している。

> ウェブサイトからデータを抽出するための人気のあるPythonフレームワークです。

単発の取得コードではなく、開始URL・解析・次ページ処理を分離している点がScrapyの特徴です。

[引用元を見る](https://qiita.com/DataJournal/items/e14c71a628cf6a576d8b)

### 2. hotokuさんの実例

Spiderのstart_urlsとparseを定義し、response.followをyieldしてリンク先ページへ進む実装を説明している。

> この段階で、とりあえずクローラを走らせることができる。

単発の取得コードではなく、開始URL・解析・次ページ処理を分離している点がScrapyの特徴です。

[引用元を見る](https://qiita.com/hotoku/items/a9dca9979a27b09aab4a)

### 3. monisoiさんの実例

アニメ一覧のstart_urlsからparseでタイトルと得点を抽出し、nextリンクをたどって次ページへクロールしている。

> Scrapyを使って基本的なクローリング&スクレイピングを行いました。

単発の取得コードではなく、開始URL・解析・次ページ処理を分離している点がScrapyの特徴です。

[引用元を見る](https://qiita.com/monisoi/items/b403d4ab67ccb5b94453)

## Scrapyでクローリングを学ぶなら

**PythonでWebスクレイピング・クローリングを極めよう！（Scrapy・Selenium編）**

- Scrapy・Seleniumに関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Scrapy講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-with-scrapy%2F&subId1=python-automation&subId2=python-scrapy-beginner&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Scrapyでは、Spiderへ開始URLとparseを定義し、yieldで抽出データや次のRequestを返すのが基本です。複数ページやページネーションを継続して収集する用途では、この構造に沿って処理を分離すると管理しやすくなります。

## あわせて読みたい

[Webスクレイピングの記事をまとめて見る](/category/web-scraping/)
