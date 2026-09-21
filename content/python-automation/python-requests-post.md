---
site: "python-automation"
title: "Python requestsでPOSTリクエストを送る方法｜3実例"
description: "Python requestsでPOSTリクエストを送る方法を3つの実例から整理します。jsonとdataの違い、JSONボディの送信、Content-Type、httpbinでの確認まで、APIへデータを送る基本パターンと失敗しやすい点を解説します。"
slug: "python-requests-post"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "api-automation"
categoryName: "API自動化"
parentHubUrl: "/category/api-automation/"

qualification: ""
qualificationName: ""
qualificationHubUrl: ""

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "requests.postを使えば、PythonからJSONやフォームデータをPOST送信できる"

udemyCourseTitle: "Python Requests: HTTP Requests for Humans"
udemyCourseUrl: "https://www.udemy.com/course/learn-python-requests/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Flearn-python-requests%2F&subId1=python-automation&subId2=python-requests-post&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Requests講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Flearn-python-requests%2F&subId1=python-automation&subId2=python-requests-post&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Python requestsでPOSTリクエストを送る方法｜3実例

## 結論

3件ともrequests.postでデータを送信しており、json引数ではJSON、data引数ではフォームまたは文字列として送る違いが確認できます。API仕様に合わせてjsonとdataを使い分ける必要があります。

JSON APIならrequests.postのjson引数へPythonの辞書を渡すのがシンプルです。フォーム送信ではdataを使うため、API仕様書のContent-Typeを先に確認する必要があります。

## 3人の実例

### 事例1

- 前提：Python初心者向けAPI連携記事
- 実践：payload辞書をrequests.postのjson引数へ渡し、POSTリクエストを送る基本例を実装している。
- 結果：JSON POSTを実装

### 事例2

- 前提：RequestsでPOST実装時に失敗を経験
- 実践：httpbinでdataとjsonを比較し、フォームとapplication/jsonの違い、二重JSON化の失敗を検証している。
- 結果：dataとjsonの違いを検証

### 事例3

- 前提：Python3.12でPOSTを検証
- 実践：httpbinへJSONデータをPOSTし、JSONファイルやPOST先URLを引数で指定できるスクリプトまで実装している。
- 結果：JSON POSTスクリプトを実装

3例では、jsonとdataの違いが重要です。jsonに辞書を渡すとRequests側でJSON化とContent-Type設定が行われ、dataに辞書を渡すとフォーム送信になります。

二重にjson.dumpsしたり、API側が要求する形式と違う引数を使うとparseエラーになるため、送信前にrequest bodyを確認すると切り分けしやすくなります。

## 実例ブログ・口コミ

### 1. pythontimesさんの実例

payload辞書をrequests.postのjson引数へ渡し、POSTリクエストを送る基本例を実装している。

> json= に辞書を渡すと自動でJSON変換してくれる！

POSTそのものより、APIがJSONとフォームのどちらを受け取るかを先に確認する点が重要です。

[引用元を見る](https://qiita.com/pythontimes/items/3263fbd4e14540530162)

### 2. moonwalkerpodayさんの実例

httpbinでdataとjsonを比較し、フォームとapplication/jsonの違い、二重JSON化の失敗を検証している。

> post時のdataとjsonをふわっとした理解で使っていたため、こんな書き方をしていました。

POSTそのものより、APIがJSONとフォームのどちらを受け取るかを先に確認する点が重要です。

[引用元を見る](https://qiita.com/moonwalkerpoday/items/0c31c35588df49a5ca57)

### 3. seigotさんの実例

httpbinへJSONデータをPOSTし、JSONファイルやPOST先URLを引数で指定できるスクリプトまで実装している。

> jsonファイル+POST先URLも引数指定可能にする

POSTそのものより、APIがJSONとフォームのどちらを受け取るかを先に確認する点が重要です。

[引用元を見る](https://qiita.com/seigot/items/1602fc949622e274c691)

## requestsのPOST操作を学ぶなら

**Python Requests: HTTP Requests for Humans**

- Requestsに関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Requests講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Flearn-python-requests%2F&subId1=python-automation&subId2=python-requests-post&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

requests.postでは、JSON APIならjsonに辞書、フォームならdataに辞書を渡すのが基本です。API仕様のContent-Typeを確認し、レスポンスと送信bodyを確認すれば、形式違いのエラーを切り分けやすくなります。

## あわせて読みたい

[API自動化の記事をまとめて見る](/category/api-automation/)
