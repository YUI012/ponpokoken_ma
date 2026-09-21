---
site: "python-automation"
title: "PythonでWebサイトの表をスクレイピングする方法｜3つの実例"
description: "PythonでWebページのtableをスクレイピングする方法を3つの実例から整理します。pandas.read_htmlで表をDataFrameへ直接読み込む方法と、BeautifulSoupでtable要素を特定してからpandasへ渡す方法を解説します。"
slug: "python-scrape-web-table"
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
hypothesis: "Pythonを使えば、Webページ上の表データを抽出してCSVやDataFrameへ変換できる"

udemyCourseTitle: "Pythonによるビジネスに役立つWebスクレイピング（BeautifulSoup・Selenium・Requests）"
udemyCourseUrl: "https://www.udemy.com/course/python-web-scraping-with-beautifulsoup-selenium-requests/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-with-beautifulsoup-selenium-requests%2F&subId1=python-automation&subId2=python-scrape-web-table&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Webスクレイピング講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-with-beautifulsoup-selenium-requests%2F&subId1=python-automation&subId2=python-scrape-web-table&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# PythonでWebサイトの表をスクレイピングする方法｜3つの実例

## 結論

3件ともHTMLのtable要素をPythonで取得し、pandasのDataFrameへ変換しています。単純な公開表はread_htmlへURLを渡すだけでも取得でき、特定tableの選択や動的ページではBeautifulSoupやブラウザ取得を組み合わせる方法が確認できます。

HTMLのtableがそのままページに存在するなら、pandas.read_htmlでURLからDataFrameへ直接読み込める場合があります。目的の表だけ取りたい場合はBeautifulSoupでtableを絞ってから処理します。

## 3人の実例

### 事例1

- 前提：テーブルスクレイピングの実装者
- 実践：WikipediaのHTMLテーブルをpd.read_htmlで直接取得する方法と、BeautifulSoupでtable・tr・tdをたどってDataFrameを作る方法を比較している。
- 結果：HTML表をDataFrameへ取得

### 事例2

- 前提：pandasでHTML表取得を実装
- 実践：国税庁ページのtableをpandas.io.html.read_htmlへURL指定して読み込み、取得した表をDataFrameとして扱っている。
- 結果：read_htmlで表を取得

### 事例3

- 前提：pandas read_htmlの運用改善者
- 実践：単純な表はpandasへURLを直接渡し、特定tableが必要な場合はRequestsとBeautifulSoupで絞ってread_htmlへ渡す役割分離を整理している。
- 結果：URL直読みとtable選択を整理

3例を見ると、表スクレイピングはページの構造によって方法を変えられます。単純な静的tableはread_htmlが最短で、複雑なページではBeautifulSoupで目的のtableを選ぶ方が制御しやすくなります。

JavaScriptで後から表が生成される場合は、PlaywrightやSeleniumでレンダリング後HTMLを取得してからpandasへ渡す方法もあります。まず静的HTMLにtableが存在するか確認するのが第一歩です。

## 実例ブログ・口コミ

### 1. go_honnさんの実例

WikipediaのHTMLテーブルをpd.read_htmlで直接取得する方法と、BeautifulSoupでtable・tr・tdをたどってDataFrameを作る方法を比較している。

> 出力結果は下記画像のようになり、確かにスクレイピングすることができていますね。

最短のread_htmlと、tableを明示的に選ぶ方法を使い分けると、ページ構造に合わせやすくなります。

[引用元を見る](https://qiita.com/go_honn/items/ec96c2246229e4ee2ea6)

### 2. kitsuyuiさんの実例

国税庁ページのtableをpandas.io.html.read_htmlへURL指定して読み込み、取得した表をDataFrameとして扱っている。

> HTML の表をスクレイピングするのは結構だるい作業です。

最短のread_htmlと、tableを明示的に選ぶ方法を使い分けると、ページ構造に合わせやすくなります。

[引用元を見る](https://qiita.com/kitsuyui/items/4906bb457af4d0e2d0a5)

### 3. boku_researchさんの実例

単純な表はpandasへURLを直接渡し、特定tableが必要な場合はRequestsとBeautifulSoupで絞ってread_htmlへ渡す役割分離を整理している。

> 最も推奨されるアプローチは、pandasにソースを直接渡すこと。

最短のread_htmlと、tableを明示的に選ぶ方法を使い分けると、ページ構造に合わせやすくなります。

[引用元を見る](https://qiita.com/boku_research/items/1e2b792427f69c2e1467)

## 表データのスクレイピングを学ぶなら

**Pythonによるビジネスに役立つWebスクレイピング（BeautifulSoup・Selenium・Requests）**

- BeautifulSoup・Selenium・Requestsに関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Webスクレイピング講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-with-beautifulsoup-selenium-requests%2F&subId1=python-automation&subId2=python-scrape-web-table&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Webページの表は、静的HTMLならpandas.read_htmlでDataFrameへ直接取り込めます。複数表や特定表だけを対象にする場合はBeautifulSoupでtableを選び、動的ページならブラウザ取得を組み合わせると対応範囲を広げられます。

## あわせて読みたい

[Webスクレイピングの記事をまとめて見る](/category/web-scraping/)
