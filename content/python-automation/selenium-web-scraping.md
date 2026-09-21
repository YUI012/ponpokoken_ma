---
site: "python-automation"
title: "SeleniumでWebスクレイピングする方法｜動的サイトの3実例"
description: "Seleniumで動的サイトをスクレイピングする方法を3つの実例から整理します。JavaScript描画やログイン・クリックが必要なページでブラウザを操作し、page_sourceを取得してBeautifulSoupで解析する流れと注意点を解説します。"
slug: "selenium-web-scraping"
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
hypothesis: "JavaScriptで内容が変わるページは、Seleniumでブラウザを操作すると取得できるケースがある"

udemyCourseTitle: "〖夢月流〗Pythonスクレイピング入門～seleniumでWebスクレイピングプログラムを素早く作るコツを教えます～"
udemyCourseUrl: "https://www.udemy.com/course/pythonweb/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpythonweb%2F&subId1=python-automation&subId2=selenium-web-scraping&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Seleniumスクレイピング講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpythonweb%2F&subId1=python-automation&subId2=selenium-web-scraping&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# SeleniumでWebスクレイピングする方法｜動的サイトの3実例

## 結論

3件ともJavaScript描画やブラウザ操作が必要なページでSeleniumを使い、クリック・入力・レンダリング後HTMLの取得を実装しています。静的HTMLだけでは目的データを取得できないケースでブラウザ自動化が有効です。

Requestsで取れるHTMLに目的の要素がなく、JavaScript実行後に表示される場合は、Seleniumでブラウザを起動してページを操作する方法があります。操作後のHTMLをpage_sourceで取得し、BeautifulSoupへ渡す構成も使えます。

## 3人の実例

### 事例1

- 前提：SeleniumとBeautifulSoupの実装者
- 実践：SeleniumでGoogle検索を操作し、検索後のpage_sourceを取得してBeautifulSoupで検索結果を解析している。
- 結果：ブラウザ操作後HTMLを解析

### 事例2

- 前提：Selenium/BeautifulSoup比較の実装者
- 実践：Seleniumはブラウザを自動化し、JavaScriptでレンダリングされたコンテンツやクリック・スクロールが必要なページに対応できると整理している。
- 結果：動的コンテンツ取得を整理

### 事例3

- 前提：スクレイピングの使い分けを検証
- 実践：動的データはJavaScriptなどで表示内容が変わると整理し、静的・動的の違いをSelenium選択の判断軸にしている。
- 結果：静的・動的で手段を選択

3例では、Seleniumは単なるHTML取得ライブラリではなく、ブラウザの入力・クリック・画面遷移まで含めて自動化しています。動的サイトではJavaScript実行後のDOMを扱える点が静的取得との違いです。

ただしブラウザ起動はRequestsより重いため、静的な部分まで何でもSeleniumへ寄せる必要はありません。ブラウザ操作が必要な部分だけSeleniumを使い、解析はBeautifulSoupへ分ける方法もあります。

## 実例ブログ・口コミ

### 1. Nozawa Naokiさんの実例

SeleniumでGoogle検索を操作し、検索後のpage_sourceを取得してBeautifulSoupで検索結果を解析している。

> 流れとしてはSeleniumでログインを突破し，取得したHTMLをBeautifulSoupで解析するといった感じです．

動的ページで何の操作が必要なのかを先に整理すると、Seleniumを使う範囲を最小限にできます。

[引用元を見る](https://qiita.com/naokey1228/items/6d0a0065e85ee513a580)

### 2. ojizou003さんの実例

Seleniumはブラウザを自動化し、JavaScriptでレンダリングされたコンテンツやクリック・スクロールが必要なページに対応できると整理している。

> ブラウザを自動化できるので、JavaScriptでレンダリングされたコンテンツを取得可能

動的ページで何の操作が必要なのかを先に整理すると、Seleniumを使う範囲を最小限にできます。

[引用元を見る](https://qiita.com/ojizou003/items/047f057c44db8eba8d88)

### 3. tarotaro98さんの実例

動的データはJavaScriptなどで表示内容が変わると整理し、静的・動的の違いをSelenium選択の判断軸にしている。

> 取得したいデータが動的なのか静的なのか分かればいい訳です。

動的ページで何の操作が必要なのかを先に整理すると、Seleniumを使う範囲を最小限にできます。

[引用元を見る](https://qiita.com/tarotaro98/items/2c60f6364b16d8fe9fde)

## Seleniumスクレイピングを実践的に学ぶなら

**〖夢月流〗Pythonスクレイピング入門～seleniumでWebスクレイピングプログラムを素早く作るコツを教えます～**

- Seleniumを使ったWebスクレイピング

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Seleniumスクレイピング講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpythonweb%2F&subId1=python-automation&subId2=selenium-web-scraping&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Seleniumは、JavaScript描画・ログイン・クリックなどブラウザ操作が必要なスクレイピングに向きます。ページを開いて必要な操作を行い、表示完了後のHTMLや要素を取得する流れにすると、静的取得だけでは取れないデータへ対応できます。

## あわせて読みたい

[Webスクレイピングの記事をまとめて見る](/category/web-scraping/)
