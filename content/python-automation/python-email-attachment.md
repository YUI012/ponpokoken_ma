---
site: "python-automation"
title: "Pythonで添付ファイル付きメールを自動送信する方法｜3実例"
description: "Pythonで添付ファイル付きメールを自動送信する方法を3つの実例から整理します。EmailMessage.add_attachmentやMIMEBaseでPDF・CSVなどを添付し、smtplibでSMTP送信する基本構成を解説します。"
slug: "python-email-attachment"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"
category: "mail-report"
categoryName: "メール・レポート自動化"
parentHubUrl: "/category/mail-report/"
articleType: "hands-on"
searchIntent: "informational"
hypothesis: "Pythonのメール機能を使えば、生成したCSVやPDFを添付して自動送信できる"
udemyCourseTitle: "The Complete Python Masterclass : Become a Python Engineer"
udemyCourseUrl: "https://www.udemy.com/course/the-complete-python-masterclass-become-a-python-engineer-b/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fthe-complete-python-masterclass-become-a-python-engineer-b%2F&subId1=python-automation&subId2=python-email-attachment&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "Python Masterclassを見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fthe-complete-python-masterclass-become-a-python-engineer-b%2F&subId1=python-automation&subId2=python-email-attachment&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# Pythonで添付ファイル付きメールを自動送信する方法｜3実例

## 結論

3件ともPythonでメール本文を作成し、PDFなどのファイルをMIME/EmailMessageへ添付してsmtplibから送信しています。

Python 3ではEmailMessage.add_attachmentを使うと比較的簡潔です。既存コードではMIMEMultipartとMIMEBaseも使われます。

## 3人の実例

### 事例1

- 前提：Python email実装者
- 実践：EmailMessage.add_attachmentでPDFを添付しsend_messageで送る実装を示している。
- 結果：EmailMessageで添付メールを送信

### 事例2

- 前提：メール送信スクリプト実装者
- 実践：MIMEMultipartに本文とMIMEBase添付を追加してSMTP送信している。
- 結果：添付メールをSMTP送信

### 事例3

- 前提：PDFレポート自動化実装者
- 実践：MySQLから月次レポートPDFを生成しMIMEBaseで添付して自動送信している。
- 結果：生成PDFをメール添付して送信

本文と添付を同じMIMEメッセージへまとめてSMTPで送る構成が共通しています。CSVやPDFの生成処理と送信処理を分離すると再利用しやすくなります。

## 実例ブログ・口コミ

### 1. tarao1006さんの実例

EmailMessage.add_attachmentでPDFを添付しsend_messageで送る実装を示している。

> EmailMessageを使えばより簡潔にメッセージの作成が行えるので紹介します。

レポート生成とメール送信を別関数にすると再利用しやすくなります。

[引用元を見る](https://qiita.com/tarao1006/items/d257299e3d202fbf4460)

### 2. tonbi_attackさんの実例

MIMEMultipartに本文とMIMEBase添付を追加してSMTP送信している。

> ここでは、MIMEMultipartオブジェクトを使用してメールを作成し、本文を設定し、ファイルを添付しています。

レポート生成とメール送信を別関数にすると再利用しやすくなります。

[引用元を見る](https://qiita.com/tonbi_attack/items/36c0ccbff6e8f3453d90)

### 3. mindwoodさんの実例

MySQLから月次レポートPDFを生成しMIMEBaseで添付して自動送信している。

> 本メールはシステムから自動送信しています。

レポート生成とメール送信を別関数にすると再利用しやすくなります。

[引用元を見る](https://qiita.com/mindwood/items/4332daa027cc26451b8a)

## Pythonのメール・ファイル処理を広く学ぶなら

**The Complete Python Masterclass : Become a Python Engineer**

- SMTP・メール添付に関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け

:::cta label="Python Masterclassを見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fthe-complete-python-masterclass-become-a-python-engineer-b%2F&subId1=python-automation&subId2=python-email-attachment&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

添付メール自動送信は、本文作成→添付ファイル読込→MIMEへ追加→SMTP送信の順で実装できます。

## あわせて読みたい

[メール・レポート自動化の記事をまとめて見る](/category/mail-report/)
