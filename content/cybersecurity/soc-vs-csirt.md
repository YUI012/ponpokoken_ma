---
site: "cybersecurity"
title: "SOCとCSIRTの違い｜監視・分析・封じ込めは誰がやる？"
description: "SOC CSIRT 違いを調べている方向けに、本文確認済みの3つの実例・検証を比較。24/7監視と初動分析はSOC、組織横断の対応統括はCSIRTという切り分けが基本。 Udemy講座は疑問を解決した後の学習手段として紹介し、次に何を学ぶか判断できるよう整理します。"
slug: "soc-vs-csirt"
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
hypothesis: "24/7監視と初動分析はSOC、組織横断の対応統括はCSIRTという切り分けが基本。"
udemyCourseTitle: "SOC Analyst Level 1 & 2 Masterclass"
udemyCourseUrl: "https://www.udemy.com/course/soc-analyst-level-1-2-masterclass/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fsoc-analyst-level-1-2-masterclass%2F&subId1=cybersecurity&subId2=soc-vs-csirt&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "SOC講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fsoc-analyst-level-1-2-masterclass%2F&subId1=cybersecurity&subId2=soc-vs-csirt&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# SOCとCSIRTの違い｜監視・分析・封じ込めは誰がやる？

## 結論

24/7監視と初動分析はSOC、組織横断の対応統括はCSIRTという切り分けが基本。

監視・分析から対応・調整へ責任が移る境界が3つの実例で確認でき、SOCとCSIRTを工程で分ける仮説を支持する。

## 3人の実例

### 事例1

- 前提：SOC・CSIRTの役割をインシデント対応工程で整理
- 環境・方法：検知・分析・トリアージ・暫定対応・復旧を役割別に確認
- 結果：ビジネス影響の大きい対応はCSIRT側に置く例を提示

### 事例2

- 前提：CSIRTへ中途転職後に実践的なインシデント対応を学習
- 環境・方法：インシデントハンドリング講習や検証環境で対応力を強化
- 結果：CSIRTでは有事の振る舞いや対応判断が重要になることを示す

### 事例3

- 前提：ユーザー系SIerのセキュリティ運用を担当
- 環境・方法：SOCなどは他部署・ベンダーが担当し自チームは製品運用や要件定義を担当
- 結果：同じセキュリティ組織でも監視と対応・調整が分業される例を示す

## 監視から封じ込めへ進むほどCSIRTの判断が増える

SOCとCSIRTの違いは、どちらが上位かではなく担当工程です。SOC側はアラートを見つけ、分析し、優先順位を付けるところに強く、CSIRT側は被害拡大防止や復旧、関係者調整へ重心が移ります。

ただし実例でも役割は組織ごとに異なるとされています。SOCが一部の隔離まで担う場合もあるため、組織図の名前よりエスカレーション条件と対応権限を確認する方が実務的です。

## 実例3件の学習・検証例

### 1. ビジネス影響の大きい対応はCSIRT側に置く例を提示

SOC・CSIRTの役割をインシデント対応工程で整理。検知・分析・トリアージ・暫定対応・復旧を役割別に確認。ビジネス影響の大きい対応はCSIRT側に置く例を提示。

この事例では、役割定義には組織差があるという条件があります。

> ビジネスインパクトの大きい対応はCSIRTで行うことが一般的である。

この事例からは、ビジネス影響の大きい対応はCSIRT側に置く例を提示という判断材料を確認できます。

[引用元を見る](https://qiita.com/f_0000/items/dd23b046b3cf370b7394)

### 2. CSIRTでは有事の振る舞いや対応判断が重要になることを示す

CSIRTへ中途転職後に実践的なインシデント対応を学習。インシデントハンドリング講習や検証環境で対応力を強化。CSIRTでは有事の振る舞いや対応判断が重要になることを示す。

この事例では、1社のCSIRT経験という条件があります。

> インシデントハンドリングに関する実践的な講習を受けることで

この事例からは、CSIRTでは有事の振る舞いや対応判断が重要になることを示すという判断材料を確認できます。

[引用元を見る](https://qiita.com/IKESIRT/items/7ade895fdc20e78edb7b)

### 3. 同じセキュリティ組織でも監視と対応・調整が分業される例を示す

ユーザー系SIerのセキュリティ運用を担当。SOCなどは他部署・ベンダーが担当し自チームは製品運用や要件定義を担当。同じセキュリティ組織でも監視と対応・調整が分業される例を示す。

この事例では、組織構造に依存という条件があります。

> ちなみにSOC、フォレンジック、脆弱性診断などは他部署やベンダーさんが担当しています。

この事例からは、同じセキュリティ組織でも監視と対応・調整が分業される例を示すという判断材料を確認できます。

[引用元を見る](https://qiita.com/choco_py3/items/11f23e56c48f7a259021)

## SOC側の監視・分析工程を具体化するなら

**SOC Analyst Level 1 & 2 Masterclass**

- SOCアナリストに関する内容をUdemy公式講座ページで確認

- ハンズオン型として手を動かす学習に向く

- SOC・SIEM・SOCアナリストに直接対応する講座DB登録

:::cta label="SOC講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fsoc-analyst-level-1-2-masterclass%2F&subId1=cybersecurity&subId2=soc-vs-csirt&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、監視・初動分析はSOC、影響判断・封じ込め・復旧の調整はCSIRTという分け方が基本です。ただし実際の境界は組織ごとに変わります。

## あわせて読みたい

[SOC・SIEM](/category/soc-siem/)
