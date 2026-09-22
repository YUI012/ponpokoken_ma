---
site: "cybersecurity"
title: "封じ込め・根絶・復旧の違い｜インシデント対応で順番を間違えない"
description: "封じ込め 根絶 復旧 違いを調べている方向けに、本文確認済みの3つの実例・検証を比較。証拠保全と影響抑制を考えずに『すぐ消す』のは危険。段階を分けて対応する必要がある。 実例の違いとUdemy講座の使いどころまで整理します。"
slug: "containment-eradication-recovery"
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
hypothesis: "証拠保全と影響抑制を考えずに『すぐ消す』のは危険。段階を分けて対応する必要がある。"
udemyCourseTitle: "CrowdStrike: For SOC Analysts"
udemyCourseUrl: "https://www.udemy.com/course/crowdstrike-for-soc-analysts/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcrowdstrike-for-soc-analysts%2F&subId1=cybersecurity&subId2=containment-eradication-recovery&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "EDR・XDR講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcrowdstrike-for-soc-analysts%2F&subId1=cybersecurity&subId2=containment-eradication-recovery&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# 封じ込め・根絶・復旧の違い｜インシデント対応で順番を間違えない

## 結論

封じ込め・根絶・復旧は分けて考えます。まず被害拡大を止め、侵害要素を除去し、安全性と業務条件を確認してから復旧へ進みます。

本文確認済みの3例を見ると、ランサムウェア演習と実感染対応で隔離・封じ込めを先に行う例があり、TTXでも復旧と証拠保全の判断を分けている。

## 3人の実例

### 事例1

- 前提：ランサムウェアTTX参加
- 環境・方法：封じ込めのため停止か稼働継続かを意思決定
- 結果：封じ込めは業務影響と被害拡大防止の判断であると体験

### 事例2

- 前提：実感染対応
- 環境・方法：感染確認後にネットワーク切断・機内モード
- 結果：根絶・復旧より前に隔離を実施する実例

### 事例3

- 前提：IR演習設計
- 環境・方法：復旧速度と証拠保全、隔離範囲を別の判断として扱う
- 結果：封じ込めと復旧を同一作業にしない観点を確認

## 封じ込めは被害拡大を止め、根絶と復旧はその後に分けて考える

今回の仮説は **supported** と判定できます。ランサムウェア演習と実感染対応で隔離・封じ込めを先に行う例があり、TTXでも復旧と証拠保全の判断を分けている。

## 実例3件の学習・検証例

### 1. 停止か継続かを封じ込め局面で判断

ランサムウェアTTX参加。封じ込めのため停止か稼働継続かを意思決定。封じ込めは業務影響と被害拡大防止の判断であると体験。

この事例では、病院シナリオという条件があります。

> 根拠の組み立てや意思決定の難しさを強く実感したポイントでした。

この事例からは、封じ込めは業務影響と被害拡大防止の判断であると体験という判断材料を確認できます。

[引用元を見る](https://qiita.com/minazukitsune/items/d17ca71e3bd7cd277766)

### 2. 感染端末を先に物理隔離

実感染対応。感染確認後にネットワーク切断・機内モード。根絶・復旧より前に隔離を実施する実例。

この事例では、Emotet事例という条件があります。

> 実際にEmotet感染と戦った記録です。

この事例からは、根絶・復旧より前に隔離を実施する実例という判断材料を確認できます。

[引用元を見る](https://qiita.com/kuranku817/items/2b615a7869fe572e0dc7)

### 3. 封じ込めと復旧条件を分けて検証

IR演習設計。復旧速度と証拠保全、隔離範囲を別の判断として扱う。封じ込めと復旧を同一作業にしない観点を確認。

この事例では、TTXの例という条件があります。

> むしろ主役は、組織の中を流れる情報と意思決定である。

この事例からは、封じ込めと復旧を同一作業にしない観点を確認という判断材料を確認できます。

[引用元を見る](https://zenn.dev/kuninogu/articles/7f51ff42b6aa71)

## 隔離・調査をEDR運用で具体化するなら

**CrowdStrike: For SOC Analysts**

- CrowdStrikeを直接扱う講座DB登録
- SOC視点のEDR・インシデント対応テーマに合う
- 検知後の調査・対応を学ぶ次の手段としてつなげやすい

:::cta label="EDR・XDR講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcrowdstrike-for-soc-analysts%2F&subId1=cybersecurity&subId2=containment-eradication-recovery&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、封じ込め・根絶・復旧は同じ作業ではありません。まず被害拡大を抑え、原因や侵害要素を除去し、安全を確認してから復旧へ進める順序で考えます。

## あわせて読みたい

[インシデント対応](/category/incident/)
