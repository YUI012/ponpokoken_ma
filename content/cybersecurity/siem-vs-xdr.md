---
site: "cybersecurity"
title: "SIEMとXDRの違い｜ログ基盤と検知・対応基盤をどう分ける？"
description: "SIEM XDR 違いを調べている方向けに、本文確認済みの3つの実例・検証を比較。SIEMは広いログ相関、XDRはエンドポイント等の検知・対応を深く扱うため、競合ではなく補完関係になりやすい。 Udemy講座は疑問を解決した後の学習手段として紹介し、次に何を学ぶか判断できるよう整理します。"
slug: "siem-vs-xdr"
date: "2026-09-22"
updated: "2026-09-22"
author: "サイバーセキュリティ研究所編集部"
category: "soc-siem"
categoryName: "SOC・SIEM"
parentHubUrl: "/category/soc-siem/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "comparison"
searchIntent: "comparison"
hypothesis: "SIEMは広いログ相関、XDRはエンドポイント等の検知・対応を深く扱うため、競合ではなく補完関係になりやすい。"
udemyCourseTitle: "Microsoft Sentinel course with hands on sims for beginners"
udemyCourseUrl: "https://www.udemy.com/course/microsoft-sentinel-course-with-hands-on-sims/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmicrosoft-sentinel-course-with-hands-on-sims%2F&subId1=cybersecurity&subId2=siem-vs-xdr&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "Sentinel講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmicrosoft-sentinel-course-with-hands-on-sims%2F&subId1=cybersecurity&subId2=siem-vs-xdr&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# SIEMとXDRの違い｜ログ基盤と検知・対応基盤をどう分ける？

## 結論

SIEMは広いログ相関、XDRはエンドポイント等の検知・対応を深く扱うため、競合ではなく補完関係になりやすい。

SIEMは異種ログの収集・横断相関、XDRは特定のセキュリティ領域で検知から対応まで深く統合するという補完関係が複数ソースで確認できる。

## 3人の実例

### 事例1

- 前提：Defender for Cloud・Defender XDR・Sentinelの統合構成を整理
- 環境・方法：XDRのネイティブ相関とSentinelの横断ログ基盤を比較
- 結果：Sentinelには長期保管・横断相関・ハンティングの役割が残ると整理

### 事例2

- 前提：Sentinel導入経験から運用設計を整理
- 環境・方法：組織全体のログを集約して脅威検出から対応まで管理
- 結果：SIEM側の広いログソースとインシデント管理の役割を示す

### 事例3

- 前提：Defender for CloudとSentinelの役割を学習
- 環境・方法：ネットワーク機器・SaaS・オンプレ・Azureのログを横断して扱う構成を整理
- 結果：SIEMはワークロード単体を越えたログ一元化と脅威検出に使うと整理

## SIEMは広く集め、XDRは対象領域を深くつなぐ

SIEMはネットワーク機器、SaaS、クラウド、オンプレなど異なるログを横断して分析するのが得意です。一方、XDRはエンドポイントやID、メールなど複数のセキュリティシグナルを関連付け、検知から対応までを一続きに扱います。

Microsoft環境では両者が同じポータルへ統合されつつありますが、役割まで同一になったわけではありません。SIEMの広いデータ基盤とXDRの深い相関・対応を組み合わせる考え方が実務に合います。

## 実例3件の学習・検証例

### 1. Sentinelには長期保管・横断相関・ハンティングの役割が残ると整理

Defender for Cloud・Defender XDR・Sentinelの統合構成を整理。XDRのネイティブ相関とSentinelの横断ログ基盤を比較。Sentinelには長期保管・横断相関・ハンティングの役割が残ると整理。

この事例では、2026年時点のMicrosoft統合構成という条件があります。

> Sentinel に残る役割は、長期保管・横断相関・ハンティングのデータ基盤。

この事例からは、Sentinelには長期保管・横断相関・ハンティングの役割が残ると整理という判断材料を確認できます。

[引用元を見る](https://zenn.dev/microsoft/articles/defender-for-cloud-sentinel-xdr)

### 2. SIEM側の広いログソースとインシデント管理の役割を示す

Sentinel導入経験から運用設計を整理。組織全体のログを集約して脅威検出から対応まで管理。SIEM側の広いログソースとインシデント管理の役割を示す。

この事例では、Microsoft環境中心という条件があります。

> 組織全体のセキュリティログを集約・分析し、脅威の検出から対応までを一元管理できます。

この事例からは、SIEM側の広いログソースとインシデント管理の役割を示すという判断材料を確認できます。

[引用元を見る](https://qiita.com/pienhalifax/items/047f051914b48b3383cb)

### 3. SIEMはワークロード単体を越えたログ一元化と脅威検出に使うと整理

Defender for CloudとSentinelの役割を学習。ネットワーク機器・SaaS・オンプレ・Azureのログを横断して扱う構成を整理。SIEMはワークロード単体を越えたログ一元化と脅威検出に使うと整理。

この事例では、個人学習メモという条件があります。

> 総合的に見た時のインシデント管理やログ一元化・脅威検出を実施できる仕組みと認識

この事例からは、SIEMはワークロード単体を越えたログ一元化と脅威検出に使うと整理という判断材料を確認できます。

[引用元を見る](https://zenn.dev/kkou/scraps/10d1d14964df43)

## まずSIEM側のログ相関をSentinelで理解するなら

**Microsoft Sentinel course with hands on sims for beginners**

- Microsoft Sentinelに関する内容をUdemy公式講座ページで確認

- ハンズオン型として手を動かす学習に向く

- SOC・SIEM・Microsoft Sentinelに直接対応する講座DB登録

:::cta label="Sentinel講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmicrosoft-sentinel-course-with-hands-on-sims%2F&subId1=cybersecurity&subId2=siem-vs-xdr&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、SIEMとXDRは置き換え関係ではありません。SIEMは広いログ相関、XDRはセキュリティシグナルの深い検知・対応を担い、組み合わせて使えます。

## あわせて読みたい

[SOC・SIEM](/category/soc-siem/)
