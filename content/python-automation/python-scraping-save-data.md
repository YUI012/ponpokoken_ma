---
site: "python-automation"
title: "Pythonスクレイピングのデータを保存する方法｜CSV・DBの3実例"
description: "Pythonスクレイピングで取得したデータをCSVやDBへ保存する方法を3つの実例から整理します。BeautifulSoupで抽出した表や価格、株価データをcsv.writerやSQLiteへ保存し、後で分析・再利用できる形にする流れを解説します。"
slug: "python-scraping-save-data"
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
hypothesis: "取得データをCSVやデータベースへ保存する処理まで組み込むと、スクレイピング結果を再利用しやすくなる"

udemyCourseTitle: "PythonによるWebスクレイピング 〜Webアプリケーション編〜"
udemyCourseUrl: "https://www.udemy.com/course/python-scraping-application/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-scraping-application%2F&subId1=python-automation&subId2=python-scraping-save-data&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "スクレイピング講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-scraping-application%2F&subId1=python-automation&subId2=python-scraping-save-data&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Pythonスクレイピングのデータを保存する方法｜CSV・DBの3実例

## 結論

3件ともスクレイピングで取得したデータをCSVまたはSQLiteへ保存し、その後の確認・分析・再利用につなげています。取得して表示するだけでなく、永続化まで含めることで定期収集データを蓄積できます。

少量のデータならCSV、検索や履歴管理を増やしたいならSQLiteなどのDBが扱いやすくなります。まず抽出結果の列構造を決めてから保存処理を足すと、後工程で再利用しやすくなります。

## 3人の実例

### 事例1

- 前提：株価スクレイピングの実装者
- 実践：BeautifulSoup等で株価を取得し、SQLiteへ格納する一連の流れを実装している。
- 結果：取得データをSQLiteへ格納

### 事例2

- 前提：スクレイピング歴0から実装
- 実践：WebページのtableをBeautifulSoupで抽出し、csv.writerで行・列をCSVへ書き出している。
- 結果：Web表をCSVへ保存

### 事例3

- 前提：定期スクレイピングの実装者
- 実践：requestsとBeautifulSoupで取得した献血状況をCSVへ書き込む処理をGitHub Actionsで定期実行している。
- 結果：収集結果をCSVへ保存

3例では、スクレイピングの直後に保存形式へ変換しています。CSVは人がExcelなどで確認しやすく、SQLiteは複数回の取得結果を蓄積して検索・更新しやすいのが違いです。

定期実行する場合は、毎回全件を追記するのか、日付をキーに更新するのかを先に決めると、重複やデータ肥大化を防げます。

## 実例ブログ・口コミ

### 1. kuk_a_i_aiさんの実例

BeautifulSoup等で株価を取得し、SQLiteへ格納する一連の流れを実装している。

> 今までの総集編として、スクレイピングをしつつDBへ格納する一連の流れを書いていきます。

スクレイピング結果を画面表示で終わらせず、後から扱える形式へ永続化している点が参考になります。

[引用元を見る](https://qiita.com/kuk_a_i_ai/items/ab395c1cf4493517a1dd)

### 2. tsuno0829さんの実例

WebページのtableをBeautifulSoupで抽出し、csv.writerで行・列をCSVへ書き出している。

> 最後に，上のプログラムにCSV保存機能をつけます．

スクレイピング結果を画面表示で終わらせず、後から扱える形式へ永続化している点が参考になります。

[引用元を見る](https://qiita.com/tsuno0829/items/add031f205aaf57fb0ac)

### 3. ren-h129さんの実例

requestsとBeautifulSoupで取得した献血状況をCSVへ書き込む処理をGitHub Actionsで定期実行している。

> BeautifulSoupとrequestsを使ってスクレイピングをして、CSVファイルに書き込む処理を行います。

スクレイピング結果を画面表示で終わらせず、後から扱える形式へ永続化している点が参考になります。

[引用元を見る](https://qiita.com/ren-h129/items/8f2b4c71b65082fe1a1a)

## スクレイピング結果の保存まで学ぶなら

**PythonによるWebスクレイピング 〜Webアプリケーション編〜**

- BeautifulSoupによるデータ収集
- 取得データをCSVへ書き込む
- スクレイピングを組み合わせたアプリケーションを作成する
- Herokuで定期実行を設定する

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="スクレイピング講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-scraping-application%2F&subId1=python-automation&subId2=python-scraping-save-data&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

スクレイピング結果はCSVまたはDBへ保存すると再利用しやすくなります。CSVは簡単な共有・確認、SQLiteは履歴蓄積や検索に向きます。列構造、文字コード、重複時の扱いまで決めて保存処理を組み込むのが実務的です。

## あわせて読みたい

[Webスクレイピングの記事をまとめて見る](/category/web-scraping/)
