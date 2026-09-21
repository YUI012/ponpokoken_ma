---
site: "python-automation"
title: "PythonでCSVを読み込み・書き込みする方法｜3つの実例"
description: "PythonでCSVを読み込み・書き込みする方法を3つの実例から整理します。csv.reader・writer、DictReader・DictWriterの違い、ヘッダー付きCSVを辞書として扱う方法と、読み込んだ値を加工して再保存する基本手順を解説します。"
slug: "python-csv-read-write"
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
hypothesis: "Python標準機能やpandasを使えば、CSVの読み込み・加工・書き出しを自動化できる"

udemyCourseTitle: "はじめてのPython3。経験0からGUIアプリケーションを作れるまでの基礎力を！"
udemyCourseUrl: "https://www.udemy.com/course/python3_for_beginners/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython3_for_beginners%2F&subId1=python-automation&subId2=python-csv-read-write&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Pythonファイル処理講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython3_for_beginners%2F&subId1=python-automation&subId2=python-csv-read-write&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# PythonでCSVを読み込み・書き込みする方法｜3つの実例

## 結論

3件ともPython標準のcsvモジュールを使い、CSVを読み込み、行や辞書として値を扱い、writer・DictWriterで書き出しています。ヘッダーをキーとして扱う場合はDictReader/DictWriterが使いやすいことが確認できます。

列番号で扱うだけならreader/writer、ヘッダー名で値へアクセスしたいならDictReader/DictWriterが分かりやすいです。読み込んだ値は文字列になるため、計算する列は型変換が必要です。

## 3人の実例

### 事例1

- 前提：Python初心者の学習記録
- 実践：DictReaderでヘッダーをキーにしてCSVを辞書として読み込み、DictWriterでfieldnames・writeheader・writerowsを使って書き出している。
- 結果：辞書形式でCSV読み書きを実装

### 事例2

- 前提：CSV標準ライブラリの技術メモ
- 実践：csv.readerで行をリストとして読み込み、DictReader・DictWriterによる辞書形式の入出力も整理している。
- 結果：readerとDictReaderを整理

### 事例3

- 前提：初心者エンジニアの学習記録
- 実践：csv.reader・writerとDictReader・DictWriterを使い、リスト型・辞書型の両方でCSVを読み書きする方法を学習記録として実装している。
- 結果：CSVの読み込み・書き込みを実装

3例に共通するのは、CSVをファイルとして開いた後にcsvモジュールへ渡し、行ごとに処理していることです。DictReaderを使うと列番号ではなくヘッダー名で値へアクセスできるため、列の意味がコード上でも読みやすくなります。

書き込みでは、ヘッダーを含めるか、列順をどうするかをfieldnamesで決めると、入力と出力の対応を固定できます。

## 実例ブログ・口コミ

### 1. gaku-devlogさんの実例

DictReaderでヘッダーをキーにしてCSVを辞書として読み込み、DictWriterでfieldnames・writeheader・writerowsを使って書き出している。

> カラム名でデータにアクセスしたい場合にはとても便利です。

リスト型と辞書型のどちらで扱うかを、CSVの列名をコードで使いたいかどうかで選ぶと整理しやすくなります。

[引用元を見る](https://qiita.com/gaku-devlog/items/479fe6c18b5ad3ab84b6)

### 2. dorankoさんの実例

csv.readerで行をリストとして読み込み、DictReader・DictWriterによる辞書形式の入出力も整理している。

> 読み込み後の各要素は文字列 `str` となる。

リスト型と辞書型のどちらで扱うかを、CSVの列名をコードで使いたいかどうかで選ぶと整理しやすくなります。

[引用元を見る](https://qiita.com/doranko/items/b16a52d60ced37fad9a6)

### 3. nozarashiさんの実例

csv.reader・writerとDictReader・DictWriterを使い、リスト型・辞書型の両方でCSVを読み書きする方法を学習記録として実装している。

> csvファイルをの読み込みと書き込みをしたいと思います。

リスト型と辞書型のどちらで扱うかを、CSVの列名をコードで使いたいかどうかで選ぶと整理しやすくなります。

[引用元を見る](https://qiita.com/nozarashi/items/057797e260d300998076)

## CSV・JSONなどのファイル処理を学ぶなら

**はじめてのPython3。経験0からGUIアプリケーションを作れるまでの基礎力を！**

- CSV・XML・JSONの読み書き
- batファイルからPythonスクリプトを実行
- GUIアプリ作成を扱う

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Pythonファイル処理講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython3_for_beginners%2F&subId1=python-automation&subId2=python-csv-read-write&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Python標準のcsvモジュールだけでもCSVの読み込み・加工・書き出しはできます。単純な行処理はreader/writer、ヘッダー名で扱うならDictReader/DictWriterを選び、必要な型変換を挟んで保存するのが基本です。

## あわせて読みたい

[ファイル操作の記事をまとめて見る](/category/file-operations/)
