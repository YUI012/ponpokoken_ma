---
site: "python-automation"
title: "openpyxlでExcelを読み込む方法｜3つの実装例"
description: "openpyxlでExcelファイルを読み込む方法を、3つの実装例から整理します。load_workbookでブックを開き、シートを選び、セルのvalueや行ループで値を取得する基本手順と注意点を解説します。"
slug: "openpyxl-read-excel"
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
hypothesis: "openpyxlのload_workbookを使えば、既存Excelを読み込み、シートやセルの値を取得できる"

udemyCourseTitle: "0から始めるOpenPyXL！PythonでExcel操作を自動化しよう"
udemyCourseUrl: "https://www.udemy.com/course/openpyxl_basics/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fopenpyxl_basics%2F&subId1=python-automation&subId2=openpyxl-read-excel&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "OpenPyXL講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fopenpyxl_basics%2F&subId1=python-automation&subId2=openpyxl-read-excel&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# openpyxlでExcelを読み込む方法｜3つの実装例

## 結論

3件ともopenpyxlで既存Excelを開き、シートやセルの値を取得しています。基本はload_workbookでブックを読み込み、対象シートを選び、cell.valueやiter_rowsで必要な値を取り出す流れです。

最小構成は、load_workbookでExcelを開き、シートを選択してセルのvalueを取得する流れです。表全体を読む場合はiter_rowsへ広げます。

## 3人の実例

### 事例1

- 前提：Python初心者向け
- 実践：load_workbookでブックを開き、シート、セル、セル値、行ループの順に読み込み方法を実装している。
- 結果：Excel表の値を読み込み

### 事例2

- 前提：Excel自動化の入門実装
- 実践：load_workbookで既存Excelを読み込み、activeまたはシート名で選択し、セルのvalueを取得している。
- 結果：既存Excelのセル値を取得

### 事例3

- 前提：Excel自動化実践ガイド
- 実践：load_workbookで既存ファイルを開き、activeシートからセル値を読み取る基本操作を示している。
- 結果：Excel読み書きを自動化

3例で共通するのは、workbook→worksheet→cellの順に対象を絞ることです。単一セルならA1形式やrow・column指定で取得でき、複数行を処理する場合はiter_rowsを使うとループしやすくなります。

初心者は、まず1セルを表示し、次に1行、最後に表全体へ広げると、読み込み対象を確認しながら進められます。

## 実例ブログ・口コミ

### 1. adgjmptw0さんの実例

load_workbookでブックを開き、シート、セル、セル値、行ループの順に読み込み方法を実装している。

> for文で1行づつ繰り返し、1列づつセルを読み取ってリストに格納し

Excelを開く処理と、どのシート・セルを読むかを分けて考えると、コードの役割が分かりやすくなります。

[引用元を見る](https://qiita.com/adgjmptw0/items/e21bef0e773fc0e3e47f)

### 2. Yamashita_Sosukeさんの実例

load_workbookで既存Excelを読み込み、activeまたはシート名で選択し、セルのvalueを取得している。

> PythonからExcelを操作する方法はいくつかあり、 用途によって使い分けることが重要です。

Excelを開く処理と、どのシート・セルを読むかを分けて考えると、コードの役割が分かりやすくなります。

[引用元を見る](https://qiita.com/Yamashita_Sosuke/items/1e4d8a68d4058d1585a8)

### 3. automate.jpさんの実例

load_workbookで既存ファイルを開き、activeシートからセル値を読み取る基本操作を示している。

> Pythonのopenpyxlを使えばこれらをスクリプト1本で終わらせられます。

Excelを開く処理と、どのシート・セルを読むかを分けて考えると、コードの役割が分かりやすくなります。

[引用元を見る](https://zenn.dev/automate/articles/python-excel-automation-openpyxl)

## openpyxlの読み書きを学ぶなら

**0から始めるOpenPyXL！PythonでExcel操作を自動化しよう**

- openpyxlに関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="OpenPyXL講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fopenpyxl_basics%2F&subId1=python-automation&subId2=openpyxl-read-excel&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

openpyxlでは、load_workbookで既存Excelを読み込み、シートを選んでセルのvalueを取得できます。最初は1セルで動作確認し、必要に応じてiter_rowsで表全体へ広げるのが分かりやすい手順です。

## あわせて読みたい

[Excel自動化の記事をまとめて見る](/category/excel-automation/)
