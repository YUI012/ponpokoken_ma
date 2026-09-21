---
site: "python-automation"
title: "PythonでPDFを結合・分割する方法｜pypdfの3実例"
description: "PythonでPDFを結合・分割する方法をpypdfの3実例から整理します。PdfWriterで複数PDFをappendして1つにまとめる方法、PdfReaderでページを取り出して分割保存する方法、APIのバージョン差に関する注意点を解説します。"
slug: "python-pdf-merge-split"
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
hypothesis: "PythonのPDF処理ライブラリを使えば、複数PDFの結合やページ単位の分割を自動化できる"

udemyCourseTitle: "Python Project: Build a PDF File Handling Tool from Scratch"
udemyCourseUrl: "https://www.udemy.com/course/python-project-build-a-pdf-file-handling-tool-from-scratch/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-project-build-a-pdf-file-handling-tool-from-scratch%2F&subId1=python-automation&subId2=python-pdf-merge-split&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "PDF処理講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-project-build-a-pdf-file-handling-tool-from-scratch%2F&subId1=python-automation&subId2=python-pdf-merge-split&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# PythonでPDFを結合・分割する方法｜pypdfの3実例

## 結論

3件の実装ではpypdfを使い、複数PDFの結合とページ単位の分割を行っています。現在の実装例ではPdfWriterへPDFやページを追加し、writeで新しいPDFへ保存する構成が確認できます。

結合は複数PDFをPdfWriterへ順番に追加し、分割はPdfReaderから必要なページを取り出して新しいPdfWriterへ追加するのが基本です。ライブラリのバージョンでAPIが変わることがあるため、使用中のpypdfに合わせて書く必要があります。

## 3人の実例

### 事例1

- 前提：pypdfの入門実装者
- 実践：pypdfで複数PDFをPdfWriterへappendして結合し、PdfReaderのページをPdfWriterへadd_pageして分割する両方の例を実装している。
- 結果：PDFの結合と分割を実装

### 事例2

- 前提：毎月PDF分割を行う実務者
- 実践：毎月の事務作業で行っていたPDF分割・リネームを、PdfReaderとPdfWriterでページ単位に分割保存するスクリプトへ置き換えている。
- 結果：PDF分割作業をPythonで自動化

### 事例3

- 前提：PDF結合を実装
- 実践：分割PDFで配布された文献をpypdfのPdfWriterへappendし、1つのPDFへ結合するコードを実行している。
- 結果：複数PDFを1ファイルへ結合

3例から、PDF結合と分割はどちらも「読み込む→Writerへ追加→保存」という共通パターンで組めます。結合はファイル単位でappendし、分割はページ単位でadd_pageする違いです。

古い記事で使われるPdfMergerは現行バージョンでは変更されているため、サンプルコードをそのままコピーするのではなく、インストール済みpypdfのバージョンと公式APIを確認する方が安全です。

## 実例ブログ・口コミ

### 1. ryutarom128さんの実例

pypdfで複数PDFをPdfWriterへappendして結合し、PdfReaderのページをPdfWriterへadd_pageして分割する両方の例を実装している。

> これで、`1kankyosyo.pdf`と`2.kankyosyo.pdf`の結合ができました。

結合と分割は別機能に見えますが、Writerへ何を追加するかがファイル単位かページ単位かという違いで整理できます。

[引用元を見る](https://qiita.com/ryutarom128/items/6e5d36efb136f9595f07)

### 2. 西畑一馬さんの実例

毎月の事務作業で行っていたPDF分割・リネームを、PdfReaderとPdfWriterでページ単位に分割保存するスクリプトへ置き換えている。

> 毎月の事務作業でPDFを分割してリネームするという作業があるのですがPythonを使って自動化してみました。

結合と分割は別機能に見えますが、Writerへ何を追加するかがファイル単位かページ単位かという違いで整理できます。

[引用元を見る](https://zenn.dev/kazumanishihata/articles/56b69b6fd240f0)

### 3. p4gさんの実例

分割PDFで配布された文献をpypdfのPdfWriterへappendし、1つのPDFへ結合するコードを実行している。

> 分割PDFで配布されている文献をDownloadしたが結合したくなった。

結合と分割は別機能に見えますが、Writerへ何を追加するかがファイル単位かページ単位かという違いで整理できます。

[引用元を見る](https://zenn.dev/pen4g/scraps/220813474c7787)

## PDF操作をハンズオンで学ぶなら

**Python Project: Build a PDF File Handling Tool from Scratch**

- PDF操作に関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="PDF処理講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-project-build-a-pdf-file-handling-tool-from-scratch%2F&subId1=python-automation&subId2=python-pdf-merge-split&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

PythonでPDFを結合・分割するならpypdfを使い、結合はPDFを順番にappend、分割はPdfReaderのページをadd_pageして保存するのが基本です。API変更があるため、古いPyPDF2/PdfMergerの例は現在のpypdfに合わせて読み替える必要があります。

## あわせて読みたい

[ファイル操作の記事をまとめて見る](/category/file-operations/)
