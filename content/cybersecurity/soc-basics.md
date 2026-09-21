---
site: "cybersecurity"
title: "SOCとは？仕事内容・監視対象・CSIRTとの違いを整理"
description: "SOC とは CSIRT 違いを調べている方向けに、本文確認済みの3つの実例・検証を比較。SOCは継続監視と分析、CSIRTはインシデント対応の調整を担う、と役割で分けると理解しやすい。 Udemy講座は疑問を解決した後の学習手段として紹介し、次に何を学ぶか判断できるよう整理します。"
slug: "soc-basics"
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
hypothesis: "SOCは継続監視と分析、CSIRTはインシデント対応の調整を担う、と役割で分けると理解しやすい。"
udemyCourseTitle: "SOC Analyst Level 1 & 2 Masterclass"
udemyCourseUrl: "https://www.udemy.com/course/soc-analyst-level-1-2-masterclass/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fsoc-analyst-level-1-2-masterclass%2F&subId1=cybersecurity&subId2=soc-basics&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "SOC講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fsoc-analyst-level-1-2-masterclass%2F&subId1=cybersecurity&subId2=soc-basics&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# SOCとは？仕事内容・監視対象・CSIRTとの違いを整理

## 結論

SOCは継続監視と分析、CSIRTはインシデント対応の調整を担う、と役割で分けると理解しやすい。

SOC運用の工程整理、CSIRT実務、他部署との分業という3つの実例から、SOCとCSIRTは役割で分けて理解するのが実務に近い。

## 3人の実例

### 事例1

- 前提：SOC立上げ・導入を行う立場から監視運用を整理
- 環境・方法：アラート検知・分析・トリアージ・暫定対応を工程別に検討
- 結果：SOCは技術的な検知・分析、CSIRTはビジネス影響を含む対応という役割差を整理

### 事例2

- 前提：ユーザー系SIerのセキュリティ担当として製品運用を経験
- 環境・方法：SOC・フォレンジック・脆弱性診断は他部署やベンダーが担当
- 結果：セキュリティ組織ではSOC以外の担当やベンダーとの分業があることを示す

### 事例3

- 前提：CSIRTへ中途転職し1年間の業務と学習を振り返り
- 環境・方法：インシデントハンドリング講習やCTF、各種セキュリティ学習を実施
- 結果：CSIRTではインシデント時の対応力まで求められる実務像を示す

## SOCは監視・分析、CSIRTは対応判断へ比重が移る

SOCの仕事はログを見ることだけではありません。実例では、アラートの検知、分析、トリアージまでをSOC側の主な工程として整理し、影響が大きい対応はCSIRT側へ寄せています。

一方で、組織によってSOCを外部委託したり、セキュリティ製品運用とCSIRTを別チームに分けたりします。名称よりも、誰が検知し、誰が影響を判断し、誰が封じ込めや復旧を指揮するかで見る方が実態をつかみやすいです。

## 実例3件の学習・検証例

### 1. SOCは技術的な検知・分析、CSIRTはビジネス影響を含む対応という役割差を整理

SOC立上げ・導入を行う立場から監視運用を整理。アラート検知・分析・トリアージ・暫定対応を工程別に検討。SOCは技術的な検知・分析、CSIRTはビジネス影響を含む対応という役割差を整理。

この事例では、組織ごとに役割分担は異なるという条件があります。

> 数多あるアラートに対し、調査すべき対象を特定し高度な分析をすることが人間に求められてることである。

この事例からは、SOCは技術的な検知・分析、CSIRTはビジネス影響を含む対応という役割差を整理という判断材料を確認できます。

[引用元を見る](https://qiita.com/f_0000/items/dd23b046b3cf370b7394)

### 2. セキュリティ組織ではSOC以外の担当やベンダーとの分業があることを示す

ユーザー系SIerのセキュリティ担当として製品運用を経験。SOC・フォレンジック・脆弱性診断は他部署やベンダーが担当。セキュリティ組織ではSOC以外の担当やベンダーとの分業があることを示す。

この事例では、所属組織固有の分業例という条件があります。

> ちなみにSOC、フォレンジック、脆弱性診断などは他部署やベンダーさんが担当しています。

この事例からは、セキュリティ組織ではSOC以外の担当やベンダーとの分業があることを示すという判断材料を確認できます。

[引用元を見る](https://qiita.com/choco_py3/items/11f23e56c48f7a259021)

### 3. CSIRTではインシデント時の対応力まで求められる実務像を示す

CSIRTへ中途転職し1年間の業務と学習を振り返り。インシデントハンドリング講習やCTF、各種セキュリティ学習を実施。CSIRTではインシデント時の対応力まで求められる実務像を示す。

この事例では、CSIRTの業務範囲は組織で異なるという条件があります。

> インシデントハンドリングに関する実践的な講習を受けることで

この事例からは、CSIRTではインシデント時の対応力まで求められる実務像を示すという判断材料を確認できます。

[引用元を見る](https://qiita.com/IKESIRT/items/7ade895fdc20e78edb7b)

## SOCの監視から分析までを流れで学ぶなら

**SOC Analyst Level 1 & 2 Masterclass**

- SOCアナリストに関する内容をUdemy公式講座ページで確認

- ハンズオン型として手を動かす学習に向く

- SOC・SIEM・SOCアナリストに直接対応する講座DB登録

:::cta label="SOC講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fsoc-analyst-level-1-2-masterclass%2F&subId1=cybersecurity&subId2=soc-basics&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、SOCは継続監視と初動分析、CSIRTはインシデント発生後の対応判断・調整へ比重を置く、と役割で分けると理解しやすいです。

## あわせて読みたい

[SOC・SIEM](/category/soc-siem/)
