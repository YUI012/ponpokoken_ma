---
site: "python-automation"
title: "PythonでWebページのリンク一覧を取得する方法｜3つの実例"
description: "PythonとBeautifulSoupでWebページのリンク一覧を取得する方法を3つの実例から整理します。find_allでaタグを列挙し、getでhref属性を抽出する基本形と、相対URLの絶対URL化・重複除去・内部リンクの絞り込みを解説します。"
slug: "python-extract-links"
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
hypothesis: "BeautifulSoupでaタグとhref属性を抽出すれば、ページ内リンクを一覧化できる"

udemyCourseTitle: "〖初心者向け〗Webスクレイピングを学ぼう！PythonのBeautifulSoupで様々な応用プログラムを作ろう！"
udemyCourseUrl: "https://www.udemy.com/course/python-scraping-beautifulsoup/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-scraping-beautifulsoup%2F&subId1=python-automation&subId2=python-extract-links&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "BeautifulSoup講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-scraping-beautifulsoup%2F&subId1=python-automation&subId2=python-extract-links&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# PythonでWebページのリンク一覧を取得する方法｜3つの実例

## 結論

3件ともBeautifulSoupでaタグを列挙し、href属性からリンクURLを取得しています。実用例では相対URLをurljoinで絶対URLへ変換したり、setで重複を除去したり、正規表現で内部リンクだけを絞る処理も確認できます。

基本形は `soup.find_all("a")` でaタグを一覧化し、各要素の `get("href")` を取り出す方法です。実際の巡回に使う場合は相対URLの変換と重複除去も追加します。

## 3人の実例

### 事例1

- 前提：BeautifulSoup入門の実装者
- 実践：requestsでHTMLを取得し、BeautifulSoupのfindAllで全aタグを取得して、各タグのget hrefをループで出力している。
- 結果：aタグからhrefを取得

### 事例2

- 前提：サイト内リンク一覧ツールの実装者
- 実践：基点URLからaタグのhrefを抽出し、urljoinで相対URLを絶対URLへ変換しながら再帰的にリンク・データファイル一覧をTSV出力している。
- 結果：リンクとデータファイルを一覧化

### 事例3

- 前提：ドメイン内クロールの実装者
- 実践：BeautifulSoupのfind_allでaタグとhrefを抽出し、setで重複を避けながらドメイン内リンクを再帰的に列挙している。
- 結果：内部リンクを重複なしで列挙

3例に共通するのは、リンクそのものではなくaタグのhref属性を取得していることです。単に一覧表示するだけなら数行で済みますが、サイト内を巡回する場合はurljoinで相対パスを絶対URLに直し、setで既訪問URLを管理すると扱いやすくなります。

また、画像・PDF・外部ドメインなど目的外のリンクを除外したい場合は、正規表現やURL解析で条件を追加します。

## 実例ブログ・口コミ

### 1. neet-AIさんの実例

requestsでHTMLを取得し、BeautifulSoupのfindAllで全aタグを取得して、各タグのget hrefをループで出力している。

> 属性の取得には先ほどのタグに対してgetメソッドを用いる

aタグ取得の基本に、絶対URL化・重複除去・フィルタを足すことで、単なる一覧からクローラーの入口へ発展できます。

[引用元を見る](https://qiita.com/neet-AI/items/98d4194872ee4f53e3b4)

### 2. sugenumaさんの実例

基点URLからaタグのhrefを抽出し、urljoinで相対URLを絶対URLへ変換しながら再帰的にリンク・データファイル一覧をTSV出力している。

> webサイトに貼り付けられているCSVファイルやExcel、PDFファイルなどをリストアップするために作成。

aタグ取得の基本に、絶対URL化・重複除去・フィルタを足すことで、単なる一覧からクローラーの入口へ発展できます。

[引用元を見る](https://qiita.com/sugenuma/items/2c4a3ed5dae4878fcea5)

### 3. omossan7182tさんの実例

BeautifulSoupのfind_allでaタグとhrefを抽出し、setで重複を避けながらドメイン内リンクを再帰的に列挙している。

> ドメイン内のすべてのページをもれなく列挙しよう！ と思い立った。

aタグ取得の基本に、絶対URL化・重複除去・フィルタを足すことで、単なる一覧からクローラーの入口へ発展できます。

[引用元を見る](https://qiita.com/omossan7182t/items/963e0681b85708eeb887)

## BeautifulSoupのリンク抽出を学ぶなら

**〖初心者向け〗Webスクレイピングを学ぼう！PythonのBeautifulSoupで様々な応用プログラムを作ろう！**

- BeautifulSoupに関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="BeautifulSoup講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-scraping-beautifulsoup%2F&subId1=python-automation&subId2=python-extract-links&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

BeautifulSoupでリンク一覧を作るなら、find_allでaタグを取得し、getでhref属性を取り出すのが基本です。巡回用途ではurljoinで相対URLを補正し、setで重複を除き、対象ドメインや拡張子でフィルタすると実用的になります。

## あわせて読みたい

[Webスクレイピングの記事をまとめて見る](/category/web-scraping/)
