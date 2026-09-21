---
site: "cybersecurity"
title: "IOCとIOAの違い｜侵害の痕跡と攻撃行動をどう見る？"
description: "IOC IOA 違いを調べている方向けに、本文確認済みの3つの実例・検証を比較。IOCは既知の痕跡、IOAは攻撃者の行動パターンを見るため、組み合わせると検知の幅が広がる。 実例の違いとUdemy講座の使いどころまで整理します。"
slug: "ioc-vs-ioa"
date: "2026-09-22"
updated: "2026-09-22"
author: "サイバーセキュリティ研究所編集部"
category: "malware"
categoryName: "マルウェア解析"
parentHubUrl: "/category/malware/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "comparison"
searchIntent: "comparison"
hypothesis: "IOCは既知の痕跡、IOAは攻撃者の行動パターンを見るため、組み合わせると検知の幅が広がる。"
udemyCourseTitle: "The Complete Ethical Hacking Course!"
udemyCourseUrl: "https://www.udemy.com/course/ethical-hacking-professional/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fethical-hacking-professional%2F&subId1=cybersecurity&subId2=ioc-vs-ioa&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "マルウェア解析講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fethical-hacking-professional%2F&subId1=cybersecurity&subId2=ioc-vs-ioa&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# IOCとIOAの違い｜侵害の痕跡と攻撃行動をどう見る？

## 結論

結論、IOCは侵害後に残る具体的な痕跡、IOAは攻撃中の行動パターンを見る考え方です。両方を組み合わせると検知と調査の幅が広がります。

本文確認済みの3例では、脅威ハンティングの整理と実際の通信解析・侵入分析から、既知の痕跡と行動パターンを分けて見る必要性を確認できる。

## 3人の実例

### 事例1

- 前提：脅威ハンティングと脅威インテリジェンスを実務観点で整理
- 環境・方法：EDR・SIEM・ネットワークログを横断するハンティングモデル
- 結果：IoC・IoA・TTPを使う調査とインテリジェンスへのフィードバックを整理

### 事例2

- 前提：マルウェア解析の一連の流れを検証
- 環境・方法：FLARE-VM・FakeNet・Wiresharkで隔離した動的解析を実施
- 結果：静的解析で見つけた通信構成と動的解析の通信を照合

### 事例3

- 前提：業務でサイバー攻撃調査を行うセキュリティアナリスト
- 環境・方法：侵入分析・フォレンジック・インテリジェンスを整理
- 結果：侵入分析で必要な調査観点とツール検証を整理

## IOCは見つかった痕跡、IOAは攻撃の進み方を見る

3例の共通点は、単一の指標だけでなく複数ログや挙動を組み合わせている、観測結果を次の検知や調査へつなげていることです。

一方で、IoC/IoAの概念整理と実検体の通信観測で粒度が異なる、ハンティングと個体解析で目的が異なるため、同じ手順をそのまま当てはめるのではなく、対象と目的を先に決める必要があります。

再現しやすい進め方は、ハッシュ・IP・ドメイン等の痕跡を記録する、PowerShellやプロセス連鎖など行動も併せて見ることです。

注意点として、IoCは変更されやすく、行動だけでも誤検知が起こり得る。

## 実例3件の学習・検証例

### 1. IoC・IoA・TTPを使う調査とインテリジェンスへのフィードバックを整理

脅威ハンティングと脅威インテリジェンスを実務観点で整理。EDR・SIEM・ネットワークログを横断するハンティングモデル。IoC・IoA・TTPを使う調査とインテリジェンスへのフィードバックを整理。

この事例では、IoCとIoAは目的と観測対象を混同しやすいという条件があります。

> ハンティングで発見した新たなIoCやTTPは脅威インテリジェンス基盤に還流され

この事例からは、IoC・IoA・TTPを使う調査とインテリジェンスへのフィードバックを整理という判断材料を確認できます。

[引用元を見る](https://qiita.com/suzukengo/items/d75131b0e3590afd76cb)

### 2. 静的解析で見つけた通信構成と動的解析の通信を照合

マルウェア解析の一連の流れを検証。FLARE-VM・FakeNet・Wiresharkで隔離した動的解析を実施。静的解析で見つけた通信構成と動的解析の通信を照合。

この事例では、動的解析は隔離環境と十分な準備が必要という条件があります。

> パケットのキャプチャに成功すると、静的解析で得たHTTPリクエスト構成と一致しているHTTPリクエストを発見しました。

この事例からは、静的解析で見つけた通信構成と動的解析の通信を照合という判断材料を確認できます。

[引用元を見る](https://qiita.com/gux2hi/items/939f898cf778ab01c539)

### 3. 侵入分析で必要な調査観点とツール検証を整理

業務でサイバー攻撃調査を行うセキュリティアナリスト。侵入分析・フォレンジック・インテリジェンスを整理。侵入分析で必要な調査観点とツール検証を整理。

この事例では、解析手法が広く、継続的な検証が必要という条件があります。

> 現在すでにサイバー攻撃の調査を業務上行っているジュニア向けに書いています。

この事例からは、侵入分析で必要な調査観点とツール検証を整理という判断材料を確認できます。

[引用元を見る](https://qiita.com/eguchi7309/items/f3e984dad653b151dfc1)

## 安全な環境で解析手順を体系化するなら

**The Complete Ethical Hacking Course!**
- リバースエンジニアリングに関する内容をUdemy公式講座ページで確認
- 記事テーマと講座DBのtopicTagsが一致
- 記事内の実例で確認した流れを、動画とハンズオンで整理する次の学習手段にしやすい
:::cta label="マルウェア解析講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fethical-hacking-professional%2F&subId1=cybersecurity&subId2=ioc-vs-ioa&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、IOCは侵害後に残る具体的な痕跡、IOAは攻撃中の行動パターンを見る考え方です。両方を組み合わせると検知と調査の幅が広がります。

## あわせて読みたい

[マルウェア解析](/category/malware/)
