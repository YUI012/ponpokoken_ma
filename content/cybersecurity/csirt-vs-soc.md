---
site: "cybersecurity"
title: "CSIRTとSOCの違い｜インシデント時の役割分担を整理"
description: "CSIRT SOC 違いを調べている方向けに、本文確認済みの3つの実例・検証を比較。SOCは監視・分析、CSIRTは対応統括と組織調整。兼務でも役割を分けて考えると運用しやすい。 実例の違いとUdemy講座の使いどころまで整理します。"
slug: "csirt-vs-soc"
date: "2026-09-22"
updated: "2026-09-22"
author: "サイバーセキュリティ研究所編集部"
category: "incident"
categoryName: "インシデント対応"
parentHubUrl: "/category/incident/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "comparison"
searchIntent: "comparison"
hypothesis: "SOCは監視・分析、CSIRTは対応統括と組織調整。兼務でも役割を分けて考えると運用しやすい。"
udemyCourseTitle: "CrowdStrike: For SOC Analysts"
udemyCourseUrl: "https://www.udemy.com/course/crowdstrike-for-soc-analysts/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcrowdstrike-for-soc-analysts%2F&subId1=cybersecurity&subId2=csirt-vs-soc&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "EDR・XDR講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcrowdstrike-for-soc-analysts%2F&subId1=cybersecurity&subId2=csirt-vs-soc&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# CSIRTとSOCの違い｜インシデント時の役割分担を整理

## 結論

SOCとCSIRTは協働しますが、役割の重心が違います。SOCは継続監視・トリアージ・分析、CSIRTはインシデント認定後の対応統括や組織連携まで広く扱います。

本文確認済みの3例を見ると、SOCのアラート分析、CSIRT実務・講習、組織判断を扱うTTXの3例で役割の重心が異なることを確認できる。

## 3人の実例

### 事例1

- 前提：SOC監視を再考
- 環境・方法：大量アラートから調査対象を選び高度分析
- 結果：SOCの中心が継続監視・トリアージ・分析にある例

### 事例2

- 前提：CSIRTへ中途転職
- 環境・方法：インシデントハンドリングの実践講習を経験
- 結果：CSIRT側は対応プロセス・ハンドリングを担う実例

### 事例3

- 前提：SOC・IR・DFIR実務
- 環境・方法：TTXで重大度・経営報告・業務停止を検証
- 結果：CSIRT側の組織判断・連携がSOC監視より広いことを示す

## SOCは継続監視と分析、CSIRTは対応判断と組織連携へ広がる

3例は環境や目的が同一ではありませんが、共通して「用語の定義だけ」で終わらず、実装・運用・判断へ落とし込んでいます。検索キーワードの違いは、実際にはどこで境界を引くかを見ると整理しやすくなります。

今回の仮説は **supported** と判定できます。SOCのアラート分析、CSIRT実務・講習、組織判断を扱うTTXの3例で役割の重心が異なることを確認できる。

## 実例3件の学習・検証例

### 1. SOCでアラートを選別し高度分析

SOC監視を再考。大量アラートから調査対象を選び高度分析。SOCの中心が継続監視・トリアージ・分析にある例。

この事例では、運用体制は組織差ありという条件があります。

> 数多あるアラートに対し、調査すべき対象を特定し高度な分析をすることが人間に求められてることである。

この事例からは、SOCの中心が継続監視・トリアージ・分析にある例という判断材料を確認できます。

[引用元を見る](https://qiita.com/f_0000/items/dd23b046b3cf370b7394)

### 2. CSIRTでインシデントハンドリングを学ぶ

CSIRTへ中途転職。インシデントハンドリングの実践講習を経験。CSIRT側は対応プロセス・ハンドリングを担う実例。

この事例では、職場ごとに役割差ありという条件があります。

> インシデントハンドリングに関する実践的な講習を受けることで

この事例からは、CSIRT側は対応プロセス・ハンドリングを担う実例という判断材料を確認できます。

[引用元を見る](https://qiita.com/IKESIRT/items/7ade895fdc20e78edb7b)

### 3. SOC検知から組織判断へ広げて演習

SOC・IR・DFIR実務。TTXで重大度・経営報告・業務停止を検証。CSIRT側の組織判断・連携がSOC監視より広いことを示す。

この事例では、役割分担は組織依存という条件があります。

> むしろ主役は、組織の中を流れる情報と意思決定である。

この事例からは、CSIRT側の組織判断・連携がSOC監視より広いことを示すという判断材料を確認できます。

[引用元を見る](https://zenn.dev/kuninogu/articles/7f51ff42b6aa71)

## SOC側の検知・調査から役割を掴むなら

**CrowdStrike: For SOC Analysts**

- CrowdStrikeを直接扱う講座DB登録
- SOC視点のEDR・インシデント対応テーマに合う
- 検知後の調査・対応を学ぶ次の手段としてつなげやすい

:::cta label="EDR・XDR講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcrowdstrike-for-soc-analysts%2F&subId1=cybersecurity&subId2=csirt-vs-soc&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、SOCとCSIRTは重なる場面がありますが同じ役割ではありません。SOCは監視・分析、CSIRTはインシデント対応の統括や組織連携へ重心が置かれます。

## あわせて読みたい

[インシデント対応](/category/incident/)
