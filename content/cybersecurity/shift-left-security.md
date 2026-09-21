---
site: "cybersecurity"
title: "Shift Left Securityとは？早く検査するだけではない意味"
description: "Shift Left Security とはを調べている方向けに、本文確認済みの3つの実例・検証を比較。Shift Leftの本質はテスト時期を前倒しすることより、開発者が早い段階で直せるフィードバックを作ること。 実例の違いとUdemy講座の使いどころまで整理します。"
slug: "shift-left-security"
date: "2026-09-22"
updated: "2026-09-22"
author: "サイバーセキュリティ研究所編集部"
category: "operations"
categoryName: "セキュリティ運用"
parentHubUrl: "/category/operations/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "other"
searchIntent: "informational"
hypothesis: "Shift Leftの本質はテスト時期を前倒しすることより、開発者が早い段階で直せるフィードバックを作ること。"
udemyCourseTitle: "DevSecOps Fundamentals - Including Hands-On Demos"
udemyCourseUrl: "https://www.udemy.com/course/devsecops-fundamentals/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=shift-left-security&subId3=other"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "DevSecOps講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=shift-left-security&subId3=other"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# Shift Left Securityとは？早く検査するだけではない意味

## 結論

結論、Shift Left Securityの本質は検査時期を早めるだけではなく、開発者が小さい変更のうちに問題を見つけて直せるフィードバックループを作ることです。

本文確認済みの3例では、初心者のDevSecOps導入例とSAST自動化、複数検査のCI/CD統合から、開発中に結果を返して修正につなげることがシフトレフトの実務であると確認できる。

## 3人の実例

### 事例1

- 前提：セキュリティ初心者としてDevSecOpsを導入
- 環境・方法：AWS・SonarQubeなどを使い開発プロセスへセキュリティ施策を組み込み
- 結果：開発初期からチェックと監視を組み込むシフトレフトを実践

### 事例2

- 前提：開発パイプラインにセキュリティ検査を追加
- 環境・方法：EC2上のSonarQubeをCI/CDへ接続し静的解析を自動化
- 結果：SASTをパイプライン化し最新コードの状態を継続確認

### 事例3

- 前提：CI/CDで複数のセキュリティ検査を自動化
- 環境・方法：GitHub ActionsでSAST・DAST・SCAを組み合わせる
- 結果：SAST・DAST・SCAを補完的に組み合わせる自動化を整理

## Shift Leftは早く検査するだけでなく、早く直せる仕組みを作る

3例の共通点は、開発初期からセキュリティチェックを実行する、結果を開発チームへ返す仕組みを作っていることです。

一方で、SASTのみと複数検査で対象範囲が異なる、手動判断の残り方が異なるため、同じ手順をそのまま当てはめるのではなく、対象と目的を先に決める必要があります。

再現しやすい進め方は、PRやコミット時点で検査する、修正担当と失敗条件を決めることです。

注意点として、検査を前倒ししてもノイズが多いと開発者が使わなくなる。

## 実例3件の学習・検証例

### 1. 開発初期からチェックと監視を組み込むシフトレフトを実践

セキュリティ初心者としてDevSecOpsを導入。AWS・SonarQubeなどを使い開発プロセスへセキュリティ施策を組み込み。開発初期からチェックと監視を組み込むシフトレフトを実践。

この事例では、開発工程ごとに施策とツールを整理する必要があるという条件があります。

> 私が実際にDevSecOpsを導入し、AWSやSonarQubeなどのツールを使って

この事例からは、開発初期からチェックと監視を組み込むシフトレフトを実践という判断材料を確認できます。

[引用元を見る](https://qiita.com/mizzun8/items/00f0b09fb2a76d6d943d)

### 2. SASTをパイプライン化し最新コードの状態を継続確認

開発パイプラインにセキュリティ検査を追加。EC2上のSonarQubeをCI/CDへ接続し静的解析を自動化。SASTをパイプライン化し最新コードの状態を継続確認。

この事例では、SAST・DAST・SCAの役割を分けて考える必要があるという条件があります。

> 今回はこの中からSASTにフォーカスし、SonarQubeを使ったパイプライン連携に挑戦しました。

この事例からは、SASTをパイプライン化し最新コードの状態を継続確認という判断材料を確認できます。

[引用元を見る](https://qiita.com/mohi-to/items/99d748c3871d5afd23c8)

### 3. SAST・DAST・SCAを補完的に組み合わせる自動化を整理

CI/CDで複数のセキュリティ検査を自動化。GitHub ActionsでSAST・DAST・SCAを組み合わせる。SAST・DAST・SCAを補完的に組み合わせる自動化を整理。

この事例では、偽陽性と運用負荷のチューニングが必要という条件があります。

> Semgrep + CodeQL + OWASP ZAP + Trivyを組み合わせたCI/CDパイプラインの構築方法

この事例からは、SAST・DAST・SCAを補完的に組み合わせる自動化を整理という判断材料を確認できます。

[引用元を見る](https://qiita.com/0h-n0/items/3e57130295db0ccf1b5a)

## 開発工程へセキュリティを組み込むなら

**DevSecOps Fundamentals - Including Hands-On Demos**
- DevSecOpsに関する内容をUdemy公式講座ページで確認
- 記事テーマと講座DBのtopicTagsが一致
- 記事内の実例で確認した流れを、動画とハンズオンで整理する次の学習手段にしやすい
:::cta label="DevSecOps講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=shift-left-security&subId3=other" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、Shift Left Securityの本質は検査時期を早めるだけではなく、開発者が小さい変更のうちに問題を見つけて直せるフィードバックループを作ることです。

## あわせて読みたい

[セキュリティ運用](/category/operations/)
