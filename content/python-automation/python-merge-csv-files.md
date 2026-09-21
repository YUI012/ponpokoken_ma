---
site: "python-automation"
title: "Pythonで複数CSVを結合する方法｜3つの実例"
description: "Pythonで複数CSVを1つに結合する方法を3つの実例から整理します。glob・pathlibでCSV一覧を取得し、pandas.read_csvで読み込み、pd.concatで縦結合して1ファイルへ保存する基本パターンと列構造の注意点を解説します。"
slug: "python-merge-csv-files"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "file-operations"
categoryName: "ファイル操作"
parentHubUrl: "/category/file-operations/"

qualification: ""
qualificationName: ""
qualificationHubUrl: ""

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "pandasを使えば、同じ列構造の複数CSVを一括で読み込み、1つに結合できる"

udemyCourseTitle: "Gemini x Python データ分析 (2) pandas データ集計＆分析の自動化"
udemyCourseUrl: "https://www.udemy.com/course/gemini-python-data-analysis-pandas/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fgemini-python-data-analysis-pandas%2F&subId1=python-automation&subId2=python-merge-csv-files&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "pandas自動化講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fgemini-python-data-analysis-pandas%2F&subId1=python-automation&subId2=python-merge-csv-files&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Pythonで複数CSVを結合する方法｜3つの実例

## 結論

3件ともフォルダ内の複数CSVを列挙し、pandas.read_csvでDataFrameへ読み込み、pd.concatで1つに結合して出力しています。同じ列構造のCSVをまとめる定型処理は短いコードで一括化できます。

最もシンプルな形は、globまたはPath.globでCSV一覧を取り、各ファイルをread_csvし、DataFrameのリストをpd.concatで縦結合してto_csvする流れです。

## 3人の実例

### 事例1

- 前提：pandas concatの実装者
- 実践：Path.globで複数CSVを列挙し、read_csvでDataFrameのリストへ読み込み、pd.concatのignore_index=Trueで縦結合している。
- 結果：複数CSVをDataFrameへ結合

### 事例2

- 前提：業務でCSV結合を使う実装者
- 実践：仕事で頻繁に使う処理として、globでCSVを取得し、pandasで読み込んで1ファイルへ結合・保存するコードを記録している。
- 結果：複数CSVを1ファイルへ結合

### 事例3

- 前提：pandasでCSV結合を実装
- 実践：inputフォルダ内の複数CSVをglobで取得し、read_csvで読み込んでリスト化し、pd.concatで結合してoutput.csvへ出力している。
- 結果：フォルダ内CSVを1ファイルへ結合

3例に共通するのは、CSVの内容を直接文字列でつなぐのではなく、いったんDataFrameとして読み込んでから結合していることです。ignore_index=Trueを使えば、元ファイルごとの重複インデックスを振り直せます。

ただし、列名や列数が異なるCSVを結合すると欠損値が生じることがあります。結合前に列構造を確認し、必要なら列を揃える処理を入れる方が安全です。

## 実例ブログ・口コミ

### 1. coin_collectorさんの実例

Path.globで複数CSVを列挙し、read_csvでDataFrameのリストへ読み込み、pd.concatのignore_index=Trueで縦結合している。

> 複数のファイルを効率的にまとめて処理できる。

CSV一覧取得→read_csv→concat→to_csvという4段階は、そのまま大量ファイルの定型結合へ応用できます。

[引用元を見る](https://qiita.com/coin_collector/items/80346e05e30fd1d5d69b)

### 2. iwakazusuwaさんの実例

仕事で頻繁に使う処理として、globでCSVを取得し、pandasで読み込んで1ファイルへ結合・保存するコードを記録している。

> 仕事で頻繁に使っていたので備忘録的に

CSV一覧取得→read_csv→concat→to_csvという4段階は、そのまま大量ファイルの定型結合へ応用できます。

[引用元を見る](https://qiita.com/iwakazusuwa/items/ab7b8248a139df1162e4)

### 3. asunaroさんの実例

inputフォルダ内の複数CSVをglobで取得し、read_csvで読み込んでリスト化し、pd.concatで結合してoutput.csvへ出力している。

> inputフォルダ内に複数のCSVファイルがあり、それを一つのCSVにまとめて出力させている

CSV一覧取得→read_csv→concat→to_csvという4段階は、そのまま大量ファイルの定型結合へ応用できます。

[引用元を見る](https://qiita.com/asunaro/items/88618f8b12f2c49c72a5)

## pandasのデータ結合を学ぶなら

**Gemini x Python データ分析 (2) pandas データ集計＆分析の自動化**

- pandasを使ったデータ集計の自動化
- データ整形・結合・抽出
- CSVデータの集計と分析
- Geminiを使ったコード作成と分析効率化

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="pandas自動化講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fgemini-python-data-analysis-pandas%2F&subId1=python-automation&subId2=python-merge-csv-files&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Pythonで複数CSVを結合するなら、ファイル一覧を取得してread_csvで読み込み、pd.concatでまとめ、to_csvで保存するのが基本です。列構造と文字コードを確認し、必要ならignore_index=Trueでインデックスを振り直すと扱いやすくなります。

## あわせて読みたい

[ファイル操作の記事をまとめて見る](/category/file-operations/)
