---
site: "python-automation"
title: "Pythonで複数Excelを一括処理する方法｜3つの実例"
description: "Pythonで複数のExcelファイルを一括処理する方法を3つの実例から整理します。フォルダ内のxlsxを列挙し、pandasやopenpyxlで読み込み、結合・集計して1ファイルへ出力する流れを解説します。"
slug: "python-excel-batch-processing"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "excel-automation"
categoryName: "Excel自動化"
parentHubUrl: "/category/excel-automation/"

qualification: ""
qualificationName: ""
qualificationHubUrl: ""

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "Pythonを使えば、同じ形式の複数Excelファイルを一括で読み込み・結合・集計できる"

udemyCourseTitle: "独学で身につけるPython〜Excel自動化編〜〖業務効率化・自動化で残業を無くそう！〗"
udemyCourseUrl: "https://www.udemy.com/course/python-kaizen-excel/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen-excel%2F&subId1=python-automation&subId2=python-excel-batch-processing&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Excel自動化講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen-excel%2F&subId1=python-automation&subId2=python-excel-batch-processing&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Pythonで複数Excelを一括処理する方法｜3つの実例

## 結論

3件ともフォルダ内の複数ExcelをPythonで列挙し、1ファイルずつ読み込み、結合または集計して1つの成果物へ出力しています。同じ形式のファイルをまとめる定型作業は一括処理しやすいと確認できます。

基本形は、対象フォルダのExcel一覧を取得し、1件ずつ読み込み、共通のDataFrameや出力シートへ追加し、最後に1ファイルへ保存する流れです。

## 3人の実例

### 事例1

- 前提：初心者向け実装
- 実践：同じ形式の複数Excelから特定列を抽出し、pandasとopenpyxlで1つのCSVへまとめるスクリプトを作成している。
- 結果：複数ExcelをCSVへ結合

### 事例2

- 前提：pandas技術メモ
- 実践：複数Excelをpandasで読み込み、concatで1つのDataFrameへ結合し、部署別集計後にExcelへ書き出している。
- 結果：複数Excelの結合・集計・出力

### 事例3

- 前提：Excel自動化実践ガイド
- 実践：Path.globで月次売上Excelを列挙し、openpyxlで順番に読み込んで1枚の集計シートへ追加している。
- 結果：月次Excelを1枚へ集約

3例とも、複数ファイルを手で開いてコピーする代わりに、Python側でファイル一覧を取得してループしています。表データを結合するならpandasのconcat、セルやレイアウトを細かく扱うならopenpyxlという違いがあります。

一括処理を安定させるには、入力ファイルの列名・シート名・形式を揃えることが重要です。まず3ファイル程度で確認し、問題がなければ対象フォルダ全体へ広げると安全です。

## 実例ブログ・口コミ

### 1. toshimizuさんの実例

同じ形式の複数Excelから特定列を抽出し、pandasとopenpyxlで1つのCSVへまとめるスクリプトを作成している。

> 複数のExcelファイルから、特定の列だけを抽出して1つのCSVにまとめるPythonスクリプトを作成しました。

ファイル一覧取得→読み込み→結合→保存という共通パターンを見ると、月次・週次の集計へ応用しやすくなります。

[引用元を見る](https://qiita.com/toshizu/items/c688713703b49c74f6fe)

### 2. eses-incさんの実例

複数Excelをpandasで読み込み、concatで1つのDataFrameへ結合し、部署別集計後にExcelへ書き出している。

> これで3つのエクセルファイルが1つにまとまりました。

ファイル一覧取得→読み込み→結合→保存という共通パターンを見ると、月次・週次の集計へ応用しやすくなります。

[引用元を見る](https://qiita.com/eses-inc/items/f72ae41abce4f99c74bc)

### 3. automate.jpさんの実例

Path.globで月次売上Excelを列挙し、openpyxlで順番に読み込んで1枚の集計シートへ追加している。

> フォルダ内の月次売上ファイルを全部読み込んで1枚に集約。

ファイル一覧取得→読み込み→結合→保存という共通パターンを見ると、月次・週次の集計へ応用しやすくなります。

[引用元を見る](https://zenn.dev/automate/articles/python-excel-automation-openpyxl)

## 複数Excelの自動化を学ぶなら

**独学で身につけるPython〜Excel自動化編〜〖業務効率化・自動化で残業を無くそう！〗**

- Excel自動化に関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Excel自動化講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen-excel%2F&subId1=python-automation&subId2=python-excel-batch-processing&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Pythonでは、複数Excelを一括で読み込み、結合・集計して1ファイルへ出力できます。ファイル形式を揃え、少数ファイルで確認した後にフォルダ全体へ広げると、定型集計を安全に自動化しやすくなります。

## あわせて読みたい

[Excel自動化の記事をまとめて見る](/category/excel-automation/)
