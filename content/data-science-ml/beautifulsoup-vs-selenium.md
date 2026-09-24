---
site: "data-science"
title: "BeautifulSoupとSeleniumどっちを使う？違いを整理"
description: "BeautifulSoup Selenium 違いを3つの実践例から検証。3つの独立した実践例では、BeautifulSoup Selenium 違いに関連して、目的を絞って小さく実装し、結果を確認しながら改善する流れが共通していた。環境やデータで結果は変わるため条件付きで支持する。"
slug: "beautifulsoup-vs-selenium"
date: "2026-09-23"
updated: "2026-09-24"
author: "データサイエンス・機械学習ラボ編集部"
category: "data-collection"
categoryName: "データ収集・スクレイピング"
parentHubUrl: "/category/data-collection/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "comparison"
searchIntent: "23〜38歳・マーケ・リサーチ・営業企画・副業メディア運営・若手エンジニア。現在は「Pythonの基本文法は少し分かるが、Requests・BeautifulSoup・Seleniumは未経験〜初級」という状態で、Web情報を手作業でコピーしており、時間がかかる。どのライブラリを使えばよいか分からない。最終的にWebデータを取得・整形・CSV保存まで自動化できるようになるために検索している。"
hypothesis: "23〜38歳・マーケ・リサーチ・営業企画・副業メディア運営・若手エンジニアなら、静的HTMLの取得はBeautifulSoup、ブラウザ操作が必要なページはSeleniumという基準で分けると選びやすい"
udemyCourseTitle: "PythonによるWebスクレイピング 〜Webアプリケーション編〜"
udemyCourseUrl: "https://www.udemy.com/course/python-scraping-application/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-scraping-application%2F&subId1=data-science"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "Udemy講座を確認する"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-scraping-application%2F&subId1=data-science"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# BeautifulSoupとSeleniumどっちを使う？違いを整理

## 結論

BeautifulSoupとSeleniumは競合というより役割が違います。静的HTMLを取得・解析するだけならrequests + BeautifulSoupが軽く、JavaScriptで後から描画される要素やログイン・クリックなどブラウザ操作が必要ならSeleniumが必要になります。実務では「まずrequests/BeautifulSoupで取れるか確認し、必要な箇所だけSelenium」を基本にすると過剰なブラウザ自動化を避けやすいです。

## 3人の実例

### 事例1
- 実践者：Moh_no
- 取り組み：requests/BeautifulSoupとSeleniumを同じスクレイピング記事で使い分け。
- 確認結果：JavaScriptでHTMLが書き換わるケースではwebdriver操作が必要と説明。
- 判断材料：静的・動的で手段を切り替える根拠が明確。

### 事例2
- 実践者：naokey1228
- 取り組み：ログインが必要なサイトをSeleniumで操作。
- 確認結果：Seleniumでログイン後、HTMLをBeautifulSoupで解析する流れを採用。
- 判断材料：両ツールを組み合わせる具体例になっている。

### 事例3
- 実践者：tomo0227
- 取り組み：静的取得と動的取得を一通り実装。
- 確認結果：SeleniumはJavaScriptを使う動的サイト向けと整理。
- 判断材料：スクロールやデータ読み込みなどブラウザ操作も含めて説明。

## 実例から分かること

BeautifulSoupは取得済みHTMLの解析に向く。
JavaScriptで動くページやブラウザ操作が必要な場合はSeleniumが有効。
Seleniumでページを操作し、取得HTMLをBeautifulSoupで解析する併用もできる。

## 実例

### 1. requests/BeautifulSoupとSeleniumを同じスクレイピング記事で使い分け

requests/BeautifulSoupとSeleniumを同じスクレイピング記事で使い分け。
JavaScriptでHTMLが書き換わるケースではwebdriver操作が必要と説明。

> JavaScriptはクライアント側でHTMLを書き換えるため、requestsによる解決ができません（サーバ側でページを書き換えるPHPと違い、requestsでパラメータを渡しても目的の要素を獲得できない）。目的の要素を表示させるためには、webdriverでブラウザを操作する必要があります（ボタンを押す、タブを変更するなど）。

静的・動的で手段を切り替える根拠が明確。

[引用元を見る](https://qiita.com/Moh_no/items/a835f77b6b4e3972fbbe)

### 2. ログインが必要なサイトをSeleniumで操作

ログインが必要なサイトをSeleniumで操作。
Seleniumでログイン後、HTMLをBeautifulSoupで解析する流れを採用。

> ログインが必要なWEBサイトのスクレイピングとして，WEBブラウザの自動操作を行うSeleniumを用いる方法があります．流れとしてはSeleniumでログインを突破し，取得したHTMLをBeautifulSoupで解析するといった感じです．今回は検証として，Googleで「Python」と検索した時の検索結果を取得してみました．

両ツールを組み合わせる具体例になっている。

[引用元を見る](https://qiita.com/naokey1228/items/6d0a0065e85ee513a580)

### 3. 静的取得と動的取得を一通り実装

静的取得と動的取得を一通り実装。
SeleniumはJavaScriptを使う動的サイト向けと整理。

> 最後にSeleniumについてです。SeleniumはJavaScriptが使われた動的なサイトのスクレイピングで用いられます。ヘッドレスブラウザの操作やページのスクロール、データの読み込み、ページの解析などを行います。

スクロールやデータ読み込みなどブラウザ操作も含めて説明。

[引用元を見る](https://qiita.com/tomo0227/items/3e86e10cb6c2033362c5)

## 判断するときに外せない条件

- 対象ページの構造を確認すること
- 静的取得から始め必要ならブラウザ操作へ進むこと
- 利用規約とアクセス負荷を確認すること

注意点は次の通りです。

- 対象サイトの規約やrobots.txt、負荷への配慮が必要。
- 3事例は同一Udemy講座の利用を確認したものではない。

## データ収集を体系的に学ぶなら

**PythonによるWebスクレイピング 〜Webアプリケーション編〜**

- BeautifulSoup・Dash・データ可視化Webアプリ
- 今回の検索意図に近い分野を、断片的な記事だけでなく順序立てて学ぶ候補にできる
- 実例に共通した『静的取得から始め必要ならブラウザ操作へ進むこと』を自分で試す前に、基礎操作や考え方をまとめて確認しやすい
- 3事例がこの講座を受講したと確認できたわけではないため、講座の効果を事例から直接推定してはいけない

:::cta label="Udemy講座を確認する" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-scraping-application%2F&subId1=data-science" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

BeautifulSoupとSeleniumは「どちらが上」ではなく、対象ページの作りで選びます。最初はrequests + BeautifulSoupでHTML取得を試し、JavaScript描画・ログイン・ボタン操作などが必要な部分だけSeleniumに切り替えるのがシンプルです。Seleniumで操作した後のHTMLをBeautifulSoupで解析する併用も有効です。

## あわせて読みたい

[データ収集・スクレイピングの記事をまとめて見る](/category/data-collection/)
