---
site: "python-automation"
title: "PythonでAPIのJSONをCSV保存する方法｜3実例"
description: "PythonでREST APIからJSONを取得してCSV保存する方法を3つの実例から整理します。requestsでAPIを呼び、response.jsonを辞書・リストとして整形し、pandasやcsvモジュールでCSVへ保存する基本パターンを解説します。"
slug: "python-api-json-to-csv"
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
hypothesis: "APIから取得したJSONをPythonで整形しCSVへ保存すれば、定期的なデータ収集を自動化できる"

udemyCourseTitle: "Pythonによるビジネスに役立つデータ収集入門（Webスクレイピング・Web API・ChatGPT API編）"
udemyCourseUrl: "https://www.udemy.com/course/python-web-scraping-api/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-api%2F&subId1=python-automation&subId2=python-api-json-to-csv&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Web APIデータ収集講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-api%2F&subId1=python-automation&subId2=python-api-json-to-csv&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# PythonでAPIのJSONをCSV保存する方法｜3実例

## 結論

3件ともAPIからJSON形式のデータを取得し、必要な項目を整形してCSVへ保存しています。requestsで取得、response.jsonでPythonデータ化、DataFrameやcsv.DictWriterで出力という流れが確認できます。

基本はrequestsでAPIを呼び、response.jsonでdict/listに変換し、必要な項目だけ平坦化してからDataFrameまたはcsv.DictWriterでCSVへ保存します。

## 3人の実例

### 事例1

- 前提：APIメタデータ収集の実装者
- 実践：8888件のAPIメタデータをrequests.getで取得し、必要キーを抽出してpandas DataFrameへ変換しCSVへ保存している。
- 結果：大量JSONをCSVへ保存

### 事例2

- 前提：SheetDB APIの実装者
- 実践：SheetDB APIをrequests.getで取得し、response.jsonのリストをcsv.DictWriterでoutput.csvへ出力している。
- 結果：API内容をCSV化

### 事例3

- 前提：FastAPIとPandasの連携実装者
- 実践：各CSV行からAPIをPOSTで呼び、response.jsonの回答をDataFrameのoutput列へ格納してoutput.csvへ保存している。
- 結果：API応答をCSVへ保存

3例では、JSONをそのままCSVへ書くのではなく、必要なキーを選んで行形式へ整えています。単純なオブジェクト配列ならDictWriter、加工・列追加・大量処理ならpandasが使いやすくなります。

ネストしたJSONでは、どの階層を列にするかを決める必要があります。定期収集へ広げる場合は、APIレート制限、エラー時の再試行、重複データの扱いも決めると安定します。

## 実例ブログ・口コミ

### 1. JarvisSan22さんの実例

8888件のAPIメタデータをrequests.getで取得し、必要キーを抽出してpandas DataFrameへ変換しCSVへ保存している。

> データを集まった後で、pandasのモジュールを利用して、csvのファイルに保存しました。

API取得とCSV出力の間に、必要な項目だけを行形式へ整える処理を置いている点が重要です。

[引用元を見る](https://qiita.com/JarvisSan22/items/7577314fb125b29b73b0)

### 2. issei-izumidaKPUさんの実例

SheetDB APIをrequests.getで取得し、response.jsonのリストをcsv.DictWriterでoutput.csvへ出力している。

> このように、APIの内容をCSVファイルとして出力することができました。

API取得とCSV出力の間に、必要な項目だけを行形式へ整える処理を置いている点が重要です。

[引用元を見る](https://qiita.com/issei-izumidaKPU/items/aabc1cf876249b7fb71e)

### 3. shuji_asatsuma0251さんの実例

各CSV行からAPIをPOSTで呼び、response.jsonの回答をDataFrameのoutput列へ格納してoutput.csvへ保存している。

> output.csvに自動で出力されました！

API取得とCSV出力の間に、必要な項目だけを行形式へ整える処理を置いている点が重要です。

[引用元を見る](https://qiita.com/shuji_asatsuma0251/items/2def2fe0eadcae894bd7)

## APIデータ収集を学ぶなら

**Pythonによるビジネスに役立つデータ収集入門（Webスクレイピング・Web API・ChatGPT API編）**

- WebスクレイピングとWeb APIによるデータ収集

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Web APIデータ収集講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-web-scraping-api%2F&subId1=python-automation&subId2=python-api-json-to-csv&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

REST APIのJSONをCSVへ保存する基本は、requestsで取得→response.json→必要項目の抽出→DataFrameまたはDictWriter→CSV出力です。定期収集ではAPI制限とエラー処理も追加すると実用的になります。

## あわせて読みたい

[API自動化の記事をまとめて見る](/category/api-automation/)
