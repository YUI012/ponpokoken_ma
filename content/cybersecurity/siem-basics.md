---
site: "cybersecurity"
title: "SIEMとは？ログを集めるだけではない3つの役割"
description: "SIEM とはを調べている方向けに、本文確認済みの3つの実例・検証を比較。SIEMの価値は収集ではなく、相関・検知・調査の起点を一つにすることにある。 Udemy講座は疑問を解決した後の学習手段として紹介し、次に何を学ぶか判断できるよう整理します。"
slug: "siem-basics"
date: "2026-09-22"
updated: "2026-09-22"
author: "サイバーセキュリティ研究所編集部"
category: "soc-siem"
categoryName: "SOC・SIEM"
parentHubUrl: "/category/soc-siem/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "other"
searchIntent: "informational"
hypothesis: "SIEMの価値は収集ではなく、相関・検知・調査の起点を一つにすることにある。"
udemyCourseTitle: "Microsoft Sentinel course with hands on sims for beginners"
udemyCourseUrl: "https://www.udemy.com/course/microsoft-sentinel-course-with-hands-on-sims/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmicrosoft-sentinel-course-with-hands-on-sims%2F&subId1=cybersecurity&subId2=siem-basics&subId3=other"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "Sentinel講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmicrosoft-sentinel-course-with-hands-on-sims%2F&subId1=cybersecurity&subId2=siem-basics&subId3=other"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# SIEMとは？ログを集めるだけではない3つの役割

## 結論

SIEMの価値は収集ではなく、相関・検知・調査の起点を一つにすることにある。

3件ともSIEMを単なるログ保管ではなく、分析・検知・調査を進める基盤として扱っている。

## 3人の実例

### 事例1

- 前提：Entraテナントのログ監視を強化するためSIEMを検証
- 環境・方法：EntraログをSentinelへ集約し分析・検知・自動対応を確認
- 結果：ログ収集だけでなく分析・検知・自動対応までSIEMで扱えることを確認

### 事例2

- 前提：Microsoft Sentinelの基礎構成を学習
- 環境・方法：データコネクタからLog Analyticsへログを保管
- 結果：SIEMでは収集したログをクエリ・アラート・インシデント管理へつなぐ構成を整理

### 事例3

- 前提：SentinelのKQLとアラート、脅威インテリジェンスを検証
- 環境・方法：KQL関数でクエリロジックを部品化
- 結果：収集済みデータを再利用しやすい形で分析する運用例を提示

## SIEMの価値は収集後の分析・検知・調査にある

ログを一か所へ集めるだけなら保管基盤でもできます。実例では、Sentinelへ集約した後にKQLで検索し、分析ルールで検知し、インシデント管理や自動対応へつなげています。

つまりSIEMを見るときは、収集、相関・分析、検知・調査の3段階で考えると役割が分かれます。保存先を作っただけでは運用は完成せず、何を検知し、どう調べるかまで設計する必要があります。

## 実例3件の学習・検証例

### 1. ログ収集だけでなく分析・検知・自動対応までSIEMで扱えることを確認

Entraテナントのログ監視を強化するためSIEMを検証。EntraログをSentinelへ集約し分析・検知・自動対応を確認。ログ収集だけでなく分析・検知・自動対応までSIEMで扱えることを確認。

この事例では、Microsoft環境を使った検証という条件があります。

> そこでSIEMにログを集めることで、詳細な分析、自動分析からのインデント検知、自動対応などが可能となります。

この事例からは、ログ収集だけでなく分析・検知・自動対応までSIEMで扱えることを確認という判断材料を確認できます。

[引用元を見る](https://qiita.com/kaiinaba/items/987d6b7980e7ee700aac)

### 2. SIEMでは収集したログをクエリ・アラート・インシデント管理へつなぐ構成を整理

Microsoft Sentinelの基礎構成を学習。データコネクタからLog Analyticsへログを保管。SIEMでは収集したログをクエリ・アラート・インシデント管理へつなぐ構成を整理。

この事例では、Sentinelを題材にした説明という条件があります。

> Sentinelに対してConnector経由でサービスと接続し、ログはLog Analyticsに保管される。

この事例からは、SIEMでは収集したログをクエリ・アラート・インシデント管理へつなぐ構成を整理という判断材料を確認できます。

[引用元を見る](https://qiita.com/smr1/items/67fa1174d9282e0e389f)

### 3. 収集済みデータを再利用しやすい形で分析する運用例を提示

SentinelのKQLとアラート、脅威インテリジェンスを検証。KQL関数でクエリロジックを部品化。収集済みデータを再利用しやすい形で分析する運用例を提示。

この事例では、KQL中心の検証という条件があります。

> これによって再利用性が高まり、長いクエリを簡潔に管理できます。

この事例からは、収集済みデータを再利用しやすい形で分析する運用例を提示という判断材料を確認できます。

[引用元を見る](https://qiita.com/akiaiazure/items/9eb388f2fb5ac9404c71)

## SentinelでSIEMの一連の流れを手を動かして確認するなら

**Microsoft Sentinel course with hands on sims for beginners**

- Microsoft Sentinelに関する内容をUdemy公式講座ページで確認

- ハンズオン型として手を動かす学習に向く

- SOC・SIEM・Microsoft Sentinelに直接対応する講座DB登録

:::cta label="Sentinel講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmicrosoft-sentinel-course-with-hands-on-sims%2F&subId1=cybersecurity&subId2=siem-basics&subId3=other" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、SIEMはログを集めるだけの仕組みではありません。収集したデータを横断的に分析し、検知と調査へつなげるところまでが中核です。

## あわせて読みたい

[SOC・SIEM](/category/soc-siem/)
