---
site: "cybersecurity"
title: "Microsoft Sentinelとは？SIEM/SOARとして何ができる？"
description: "Microsoft Sentinel とはを調べている方向けに、本文確認済みの3つの実例・検証を比較し、役割や使い分けを整理します。Udemy講座は本文の疑問を解決した後の学習手段として紹介し、次に何を学ぶか判断できる形にまとめます。 実務・学習時に迷いやすいポイントも確認します。"
slug: "microsoft-sentinel-basics"
date: "2026-09-22"
updated: "2026-09-22"
author: "サイバーセキュリティ研究所編集部"
category: "soc-siem"
categoryName: "SOC・SIEM"
parentHubUrl: "/category/soc-siem/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "outcome"
searchIntent: "informational"
hypothesis: "SentinelはAzureのログ置き場ではなく、クラウドSIEMと自動化を組み合わせる運用基盤として捉えるべき。"
udemyCourseTitle: "Microsoft Sentinel course with hands on sims for beginners"
udemyCourseUrl: "https://www.udemy.com/course/microsoft-sentinel-course-with-hands-on-sims/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmicrosoft-sentinel-course-with-hands-on-sims%2F&subId1=cybersecurity&subId2=microsoft-sentinel-basics&subId3=outcome"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "Sentinel講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmicrosoft-sentinel-course-with-hands-on-sims%2F&subId1=cybersecurity&subId2=microsoft-sentinel-basics&subId3=outcome"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# Microsoft Sentinelとは？SIEM/SOARとして何ができる？

## 結論

SentinelはAzureのログ置き場ではなく、クラウドSIEMと自動化を組み合わせる運用基盤として捉えるべき。

3件ともSentinelをLog Analytics上のログ置き場だけではなく、SIEM/SOARとして検知・調査・対応へつなぐ運用基盤として扱っている。

## 3人の実例

### 事例1

- 前提：実務でSentinel導入経験を持つ筆者が運用設計を整理
- 環境・方法：SIEM/SOAR、コンテンツハブ、インシデント管理、自動化を扱う
- 結果：Sentinelをログ分析から対応まで一元管理する基盤として説明

### 事例2

- 前提：Entraログ監視を目的にSentinelを構築
- 環境・方法：ログ集約後に詳細分析・自動検知・自動対応を検証
- 結果：SIEMのログ活用と対応自動化を実環境に近い形で確認

### 事例3

- 前提：Sentinelの基本構成を整理
- 環境・方法：ConnectorとLog Analyticsを使うデータ収集構成
- 結果：ログを集約した後のアラート・可視化・インシデント管理まで整理

## SentinelはLog Analyticsを土台に検知・対応までつなぐ

Sentinelではログの保管先としてLog Analyticsを使いますが、そこで終わりません。実例ではKQLによる分析、分析ルールによる検知、インシデント管理、自動化ルールやプレイブックによる対応まで一連で扱っています。

そのため導入時は、何のログを入れるかだけでなく、どの検知ルールを使い、誰がインシデントを処理し、どこまで自動化するかをセットで考える必要があります。

## 実例3件の学習・検証例

### 1. Sentinelをログ分析から対応まで一元管理する基盤として説明

実務でSentinel導入経験を持つ筆者が運用設計を整理。SIEM/SOAR、コンテンツハブ、インシデント管理、自動化を扱う。Sentinelをログ分析から対応まで一元管理する基盤として説明。

この事例では、Microsoft Defenderポータル統合を前提とする時点情報を含むという条件があります。

> Microsoft Sentinelは、Azureが提供するクラウドネイティブなSIEM/SOARプラットフォームです。

この事例からは、Sentinelをログ分析から対応まで一元管理する基盤として説明という判断材料を確認できます。

[引用元を見る](https://qiita.com/pienhalifax/items/047f051914b48b3383cb)

### 2. SIEMのログ活用と対応自動化を実環境に近い形で確認

Entraログ監視を目的にSentinelを構築。ログ集約後に詳細分析・自動検知・自動対応を検証。SIEMのログ活用と対応自動化を実環境に近い形で確認。

この事例では、Entra中心の検証という条件があります。

> そこでSIEMにログを集めることで、詳細な分析、自動分析からのインデント検知、自動対応などが可能となります。

この事例からは、SIEMのログ活用と対応自動化を実環境に近い形で確認という判断材料を確認できます。

[引用元を見る](https://qiita.com/kaiinaba/items/987d6b7980e7ee700aac)

### 3. ログを集約した後のアラート・可視化・インシデント管理まで整理

Sentinelの基本構成を整理。ConnectorとLog Analyticsを使うデータ収集構成。ログを集約した後のアラート・可視化・インシデント管理まで整理。

この事例では、Sentinel基礎学習の記事という条件があります。

> Sentinelに対してConnector経由でサービスと接続し、ログはLog Analyticsに保管される。

この事例からは、ログを集約した後のアラート・可視化・インシデント管理まで整理という判断材料を確認できます。

[引用元を見る](https://qiita.com/smr1/items/67fa1174d9282e0e389f)

## SentinelのSIEM/SOAR運用をハンズオンで確認するなら

**Microsoft Sentinel course with hands on sims for beginners**

- Microsoft Sentinelに関する内容をUdemy公式講座ページで確認

- ハンズオン型として手を動かす学習に向く

- SOC・SIEM・Microsoft Sentinelに直接対応する講座DB登録

:::cta label="Sentinel講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmicrosoft-sentinel-course-with-hands-on-sims%2F&subId1=cybersecurity&subId2=microsoft-sentinel-basics&subId3=outcome" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、Microsoft Sentinelは単なるログ置き場ではなく、ログ収集・分析・検知・インシデント管理・自動化をつなぐSIEM/SOAR基盤です。

## あわせて読みたい

[SOC・SIEM](/category/soc-siem/)
