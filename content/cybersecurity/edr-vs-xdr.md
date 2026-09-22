---
site: "cybersecurity"
title: "EDRとXDRの違い｜どこまで見えるか・何を連携するか"
description: "EDR XDR 違いを調べている方向けに、本文確認済みの3つの実例・検証を比較。EDRは端末中心、XDRはID・メール・クラウド等まで横断して検知・調査する考え方。 実例の違いとUdemy講座の使いどころまで整理します。"
slug: "edr-vs-xdr"
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
hypothesis: "EDRは端末中心、XDRはID・メール・クラウド等まで横断して検知・調査する考え方。"
udemyCourseTitle: "CrowdStrike: For SOC Analysts"
udemyCourseUrl: "https://www.udemy.com/course/crowdstrike-for-soc-analysts/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcrowdstrike-for-soc-analysts%2F&subId1=cybersecurity&subId2=edr-vs-xdr&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "EDR・XDR講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcrowdstrike-for-soc-analysts%2F&subId1=cybersecurity&subId2=edr-vs-xdr&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# EDRとXDRの違い｜どこまで見えるか・何を連携するか

## 結論

EDRはエンドポイントの検知・調査・隔離が中心で、XDRは端末に加えてID・メール・クラウドなど複数領域の情報をつないで調査します。

本文確認済みの3例を見ると、Falconの端末隔離検証と、Defender XDR/Sentinel統合の2例から、端末中心と横断統合の違いを確認できる。

## 3人の実例

### 事例1

- 前提：CrowdStrike Falcon＋Zscaler
- 環境・方法：通信可視化、NW隔離/解除、隔離時RTRを実機検証
- 結果：EDRが端末中心の可視化と隔離を担う実例

### 事例2

- 前提：Defender XDR＋Sentinel
- 環境・方法：インシデントとアラートを統合して実操作
- 結果：XDRで複数情報をインシデント単位に統合する例

### 事例3

- 前提：Defender/Sentinel統合
- 環境・方法：XDR検知とSentinelの長期保管・横断相関を役割分担
- 結果：EDRより広い横断分析の考え方を示す

## EDRは端末の可視化・隔離、XDRは複数領域の情報を横断する

今回の仮説は **supported** と判定できます。Falconの端末隔離検証と、Defender XDR/Sentinel統合の2例から、端末中心と横断統合の違いを確認できる。

## 実例3件の学習・検証例

### 1. Falconで可視化・隔離・RTRを検証

CrowdStrike Falcon＋Zscaler。通信可視化、NW隔離/解除、隔離時RTRを実機検証。EDRが端末中心の可視化と隔離を担う実例。

この事例では、製品バージョン依存という条件があります。

> ZCC Tunnel2.0＋CrowdStrike Falconの組み合わせにおいて全て問題なく動作しました。

この事例からは、EDRが端末中心の可視化と隔離を担う実例という判断材料を確認できます。

[引用元を見る](https://qiita.com/igaiga2/items/d99c1f997be15acd44f9)

### 2. Defender XDRへSentinelインシデントを統合

Defender XDR＋Sentinel。インシデントとアラートを統合して実操作。XDRで複数情報をインシデント単位に統合する例。

この事例では、一部Sentinel情報は未連携という条件があります。

> インシデント詳細からは Defender XDR と同様な表示が行われます。

この事例からは、XDRで複数情報をインシデント単位に統合する例という判断材料を確認できます。

[引用元を見る](https://qiita.com/hisnakad/items/31524ca90fb00f7eb866)

### 3. XDRとSentinelの役割を横断相関で整理

Defender/Sentinel統合。XDR検知とSentinelの長期保管・横断相関を役割分担。EDRより広い横断分析の考え方を示す。

この事例では、統合仕様は変化しうるという条件があります。

> Sentinel に残る役割は、長期保管・横断相関・ハンティングのデータ基盤。

この事例からは、EDRより広い横断分析の考え方を示すという判断材料を確認できます。

[引用元を見る](https://zenn.dev/microsoft/articles/defender-for-cloud-sentinel-xdr)

## EDRの現場操作から違いを理解するなら

**CrowdStrike: For SOC Analysts**

- CrowdStrikeを直接扱う講座DB登録
- SOC視点のEDR・インシデント対応テーマに合う
- 検知後の調査・対応を学ぶ次の手段としてつなげやすい

:::cta label="EDR・XDR講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcrowdstrike-for-soc-analysts%2F&subId1=cybersecurity&subId2=edr-vs-xdr&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、EDRはエンドポイントの検知・調査・隔離が中心です。XDRはそこへID・メール・クラウドなど複数領域のシグナルをつなぎ、横断調査しやすくします。

## あわせて読みたい

[インシデント対応](/category/incident/)
