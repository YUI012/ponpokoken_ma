---
site: "data-science"
title: "動的サイトのスクレイピングはSeleniumでできる？"
description: "動的サイト スクレイピング Seleniumを3つの実践例から検証。3つの独立した実践例では、動的サイト スクレイピング Seleniumに関連して、目的を絞って小さく実装し、結果を確認しながら改善する流れが共通していた。環境やデータで結果は変わるため条件付きで支持する。"
slug: "dynamic-site-selenium"
date: "2026-09-23"
updated: "2026-09-24"
author: "データサイエンス・機械学習ラボ編集部"
category: "data-collection"
categoryName: "データ収集・スクレイピング"
parentHubUrl: "/category/data-collection/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "hands-on"
searchIntent: "23〜38歳・マーケ・リサーチ・営業企画・副業メディア運営・若手エンジニア。現在は「Pythonの基本文法は少し分かるが、Requests・BeautifulSoup・Seleniumは未経験〜初級」という状態で、Web情報を手作業でコピーしており、時間がかかる。どのライブラリを使えばよいか分からない。最終的にWebデータを取得・整形・CSV保存まで自動化できるようになるために検索している。"
hypothesis: "23〜38歳・マーケ・リサーチ・営業企画・副業メディア運営・若手エンジニアなら、JavaScriptで後から表示される要素は、ブラウザ操作を再現できるSeleniumを使うと取得できるケースがある"
udemyCourseTitle: "Pythonによるビジネスに役立つWebスクレイピング（BeautifulSoup・Selenium・Requests）"
udemyCourseUrl: "https://www.udemy.com/course/python-web-scraping-with-beautifulsoup-selenium-requests/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-with-beautifulsoup-selenium-requests%2F&subId1=data-science"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "Udemy講座を確認する"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-with-beautifulsoup-selenium-requests%2F&subId1=data-science"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# 動的サイトのスクレイピングはSeleniumでできる？

## 結論

JavaScript実行後に表示される要素やログイン・クリックなどのブラウザ操作が必要なページは、requestsだけでは取得できないことがあります。その場合はSeleniumでブラウザを操作し、必要なら取得後のHTMLをBeautifulSoupで解析する方法が有効です。

## 3人の実例

### 事例1
- 実践者：Moh_no
- 取り組み：静的取得と動的取得を同じ記事で比較。
- 確認結果：JavaScriptでHTMLが書き換わる場合はwebdriverによる操作が必要と説明。
- 判断材料：requestsで取れない理由とSeleniumへ切り替える条件が明確。

### 事例2
- 実践者：naokey1228
- 取り組み：ログインが必要なWEBサイトをSeleniumで操作。
- 確認結果：Seleniumでログインした後のHTMLをBeautifulSoupで解析。
- 判断材料：ブラウザ操作とHTML解析を分担する実践例。

### 事例3
- 実践者：AzukiImo
- 取り組み：JavaScriptで変化する動的ページをSeleniumで取得。
- 確認結果：requestsとBeautifulSoupで難しいページへSeleniumを使用。
- 判断材料：記事テーマの「動的サイトをSeleniumで取れるか」に直接一致。

## 実例から分かること

- JavaScriptで後から生成される要素はrequestsだけでは取得できない場合がある。
- Seleniumは実ブラウザを操作し、クリック・ログイン・スクロール後のHTMLを取得できる。
- Seleniumで操作し、BeautifulSoupでHTML解析する組み合わせも使われている。

## 実例

### 1. 静的取得と動的取得を同じ記事で比較

静的取得と動的取得を同じ記事で比較。
JavaScriptでHTMLが書き換わる場合はwebdriverによる操作が必要と説明。

> 最近のホームページには、JavaScriptによる動的なコンテンツが埋め込まれるようになってきました。JavaScriptはクライアント側でHTMLを書き換えるため、requestsによる解決ができません（サーバ側でページを書き換えるPHPと違い、requestsでパラメータを渡しても目的の要素を獲得できない）。目的の要素を表示させるためには、webdriverでブラウザを操作する必要があります（ボタンを押す、タブを変更するなど）。

requestsで取れない理由とSeleniumへ切り替える条件が明確。

[引用元を見る](https://qiita.com/Moh_no/items/a835f77b6b4e3972fbbe)

### 2. ログインが必要なWEBサイトをSeleniumで操作

ログインが必要なWEBサイトをSeleniumで操作。
Seleniumでログインした後のHTMLをBeautifulSoupで解析。

> ログインが必要なWEBサイトのスクレイピングとして，WEBブラウザの自動操作を行うSeleniumを用いる方法があります．流れとしてはSeleniumでログインを突破し，取得したHTMLをBeautifulSoupで解析するといった感じです．

ブラウザ操作とHTML解析を分担する実践例。

[引用元を見る](https://qiita.com/naokey1228/items/6d0a0065e85ee513a580)

### 3. JavaScriptで変化する動的ページをSeleniumで取得

JavaScriptで変化する動的ページをSeleniumで取得。
requestsとBeautifulSoupで難しいページへSeleniumを使用。

> いくつかスクレイピングに関する記事を紹介したのですが，いずれもrequestsとBeautifulSoupで完結するものでした．今回は，JavaScriptなどでページの内容が変化していくような動的なWebページのスクレイピングをSeleniumを利用して行ってみたいと思います．

記事テーマの「動的サイトをSeleniumで取れるか」に直接一致。

[引用元を見る](https://qiita.com/AzukiImo/items/8641ead416150ecc71e5)

## 判断するときに外せない条件

- 対象ページの構造を確認すること
- 静的取得から始め必要ならブラウザ操作へ進むこと
- 利用規約とアクセス負荷を確認すること

注意点は次の通りです。

- 対象サイトの規約やrobots.txt、負荷への配慮が必要。
- 3事例は同一Udemy講座の利用を確認したものではない。

## データ収集を体系的に学ぶなら

**Pythonによるビジネスに役立つWebスクレイピング（BeautifulSoup・Selenium・Requests）**

- Webデータ収集・BeautifulSoup・Selenium・Requests
- 今回の検索意図に近い分野を、断片的な記事だけでなく順序立てて学ぶ候補にできる
- 実例に共通した『静的取得から始め必要ならブラウザ操作へ進むこと』を自分で試す前に、基礎操作や考え方をまとめて確認しやすい
- 3事例がこの講座を受講したと確認できたわけではないため、講座の効果を事例から直接推定してはいけない

:::cta label="Udemy講座を確認する" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-with-beautifulsoup-selenium-requests%2F&subId1=data-science" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

動的サイトでは、最初にrequestsでHTMLを確認し、目的要素がHTML内に存在しない・ログインやクリックが必要ならSeleniumへ切り替えると無駄がありません。Seleniumはブラウザ操作ができる一方で処理が重いため、操作が必要な部分だけSeleniumを使い、取得後の解析はBeautifulSoupへ渡す構成も実用的です。

## あわせて読みたい

[データ収集・スクレイピングの記事をまとめて見る](/category/data-collection/)
