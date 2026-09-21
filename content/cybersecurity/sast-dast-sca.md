---
site: "cybersecurity"
title: "SAST・DAST・SCAの違い｜DevSecOpsでどう使い分ける？"
description: "SAST DAST SCA 違いを調べている方向けに、本文確認済みの3つの実例・検証を比較。SASTはコード、DASTは実行中アプリ、SCAは依存関係を見る。3つは代替ではなく補完。 実例の違いとUdemy講座の使いどころまで整理します。"
slug: "sast-dast-sca"
date: "2026-09-22"
updated: "2026-09-22"
author: "サイバーセキュリティ研究所編集部"
category: "operations"
categoryName: "セキュリティ運用"
parentHubUrl: "/category/operations/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "comparison"
searchIntent: "comparison"
hypothesis: "SASTはコード、DASTは実行中アプリ、SCAは依存関係を見る。3つは代替ではなく補完。"
udemyCourseTitle: "DevSecOps Fundamentals - Including Hands-On Demos"
udemyCourseUrl: "https://www.udemy.com/course/devsecops-fundamentals/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=sast-dast-sca&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "DevSecOps講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=sast-dast-sca&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# SAST・DAST・SCAの違い｜DevSecOpsでどう使い分ける？

## 結論

結論、SASTはコード、DASTは動作中のアプリ、SCAは依存関係を主に見るため代替関係ではありません。DevSecOpsでは補完する形で組み合わせます。

本文確認済みの3例では、SonarQubeによるSAST実装と、Semgrep・ZAP・Trivyの統合例から、コード・実行中アプリ・依存関係を別の手法で検査する必要性を確認できる。

## 3人の実例

### 事例1

- 前提：開発パイプラインにセキュリティ検査を追加
- 環境・方法：EC2上のSonarQubeをCI/CDへ接続し静的解析を自動化
- 結果：SASTをパイプライン化し最新コードの状態を継続確認

### 事例2

- 前提：CI/CDで複数のセキュリティ検査を自動化
- 環境・方法：GitHub ActionsでSAST・DAST・SCAを組み合わせる
- 結果：SAST・DAST・SCAを補完的に組み合わせる自動化を整理

### 事例3

- 前提：セキュリティ初心者としてDevSecOpsを導入
- 環境・方法：AWS・SonarQubeなどを使い開発プロセスへセキュリティ施策を組み込み
- 結果：開発初期からチェックと監視を組み込むシフトレフトを実践

## SAST・DAST・SCAは見る対象が違うため組み合わせる

3例の共通点は、複数の検査手法を開発パイプラインへ組み込んでいる、検査結果を継続的に確認することです。

一方で、SAST単体と3手法統合でカバー範囲が異なるため、同じ手順をそのまま当てはめるのではなく、対象と目的を先に決める必要があります。

再現しやすい進め方は、SASTでコードを早期確認する、SCAで依存関係、DASTで実行時の挙動を補うことです。

注意点として、3手法を入れても設定や認可など全リスクを自動検出できるわけではない。

## 実例3件の学習・検証例

### 1. SASTをパイプライン化し最新コードの状態を継続確認

開発パイプラインにセキュリティ検査を追加。EC2上のSonarQubeをCI/CDへ接続し静的解析を自動化。SASTをパイプライン化し最新コードの状態を継続確認。

この事例では、SAST・DAST・SCAの役割を分けて考える必要があるという条件があります。

> 今回はこの中からSASTにフォーカスし、SonarQubeを使ったパイプライン連携に挑戦しました。

この事例からは、SASTをパイプライン化し最新コードの状態を継続確認という判断材料を確認できます。

[引用元を見る](https://qiita.com/mohi-to/items/99d748c3871d5afd23c8)

### 2. SAST・DAST・SCAを補完的に組み合わせる自動化を整理

CI/CDで複数のセキュリティ検査を自動化。GitHub ActionsでSAST・DAST・SCAを組み合わせる。SAST・DAST・SCAを補完的に組み合わせる自動化を整理。

この事例では、偽陽性と運用負荷のチューニングが必要という条件があります。

> Semgrep + CodeQL + OWASP ZAP + Trivyを組み合わせたCI/CDパイプラインの構築方法

この事例からは、SAST・DAST・SCAを補完的に組み合わせる自動化を整理という判断材料を確認できます。

[引用元を見る](https://qiita.com/0h-n0/items/3e57130295db0ccf1b5a)

### 3. 開発初期からチェックと監視を組み込むシフトレフトを実践

セキュリティ初心者としてDevSecOpsを導入。AWS・SonarQubeなどを使い開発プロセスへセキュリティ施策を組み込み。開発初期からチェックと監視を組み込むシフトレフトを実践。

この事例では、開発工程ごとに施策とツールを整理する必要があるという条件があります。

> 私が実際にDevSecOpsを導入し、AWSやSonarQubeなどのツールを使って

この事例からは、開発初期からチェックと監視を組み込むシフトレフトを実践という判断材料を確認できます。

[引用元を見る](https://qiita.com/mizzun8/items/00f0b09fb2a76d6d943d)

## 開発工程へセキュリティを組み込むなら

**DevSecOps Fundamentals - Including Hands-On Demos**
- DevSecOpsに関する内容をUdemy公式講座ページで確認
- 記事テーマと講座DBのtopicTagsが一致
- 記事内の実例で確認した流れを、動画とハンズオンで整理する次の学習手段にしやすい
:::cta label="DevSecOps講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=sast-dast-sca&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、SASTはコード、DASTは動作中のアプリ、SCAは依存関係を主に見るため代替関係ではありません。DevSecOpsでは補完する形で組み合わせます。

## あわせて読みたい

[セキュリティ運用](/category/operations/)
