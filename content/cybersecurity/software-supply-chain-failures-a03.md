---
site: "cybersecurity"
title: "Software Supply Chain Failuresとは？OWASP A03:2025の要点"
description: "Software Supply Chain Failures とはで迷う方向けに、3つの実例・解説を比較し、違いと使い分け、再現しやすい考え方を整理します。Udemy講座は本文の疑問を解決した後の学習手段として紹介し、次に何を学ぶか判断できる形にまとめます。"
slug: "software-supply-chain-failures-a03"
date: "2026-09-21"
updated: "2026-09-21"
author: "サイバーセキュリティ研究所編集部"
category: "vulnerability"
categoryName: "脆弱性診断"
parentHubUrl: "/category/vulnerability/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "other"
searchIntent: "informational"
hypothesis: "依存ライブラリだけでなく、ビルド・配布・署名まで含めて供給網として考える必要がある。"
udemyCourseTitle: "DevSecOps Fundamentals - Including Hands-On Demos"
udemyCourseUrl: "https://www.udemy.com/course/devsecops-fundamentals/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=software-supply-chain-failures-a03&subId3=other"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "DevSecOps講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=software-supply-chain-failures-a03&subId3=other"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# Software Supply Chain Failuresとは？OWASP A03:2025の要点

## 結論

依存ライブラリだけでなく、ビルド・配布・署名まで含めて供給網として考える必要がある。

OWASP公式がA03を既知脆弱性コンポーネントからサプライチェーン全体へ拡張し、実例でも依存関係・CI/CD・SBOMを扱っている。

## 3人の実例

### 事例1

- 前提：GitHub EnterpriseでDependabotとSBOMを検証
- 環境・方法：依存関係の監視とSBOM生成をハンズオンで確認
- 結果：外部ライブラリ依存を可視化し継続監視する流れを提示

### 事例2

- 前提：OSSサプライチェーンインシデントを複数事例で分析
- 環境・方法：パッケージ、CI/CD、AIエージェントへ攻撃領域が広がる流れを整理
- 結果：信頼しているコンポーネントが攻撃経路になる共通点を提示

### 事例3

- 前提：OWASP Top 10:2025をSpring Bootの実装例で学習
- 環境・方法：カテゴリごとに問題と対策をコード・CIへ落とし込む
- 結果：A03で依存関係・ビルド・SBOM・CIスキャンを一体で扱う

## 供給網は依存ライブラリからCI/CD・配布まで続く

Software Supply Chain Failuresは、依存ライブラリのCVEだけを指す言葉ではありません。OWASP公式では、ソフトウェアを構築・配布・更新するプロセスの破綻や侵害まで含むカテゴリとして説明されています。

そのため、直接依存だけでなく推移的依存、パッケージの取得元、CI/CD、ビルド成果物、署名、SBOM、更新経路まで対象になります。「コードの中に脆弱なライブラリがないか」だけで終わらず、成果物が作られて利用者へ届くまでの信頼経路を管理する必要があります。

## 実例3件の学習・検証例

### 1. 外部ライブラリ依存を可視化し継続監視する流れを提示

GitHub EnterpriseでDependabotとSBOMを検証。依存関係の監視とSBOM生成をハンズオンで確認。外部ライブラリ依存を可視化し継続監視する流れを提示。

この事例では、GitHub Enterprise中心の実装例という条件もあります。

> 現代のソフトウェア開発では、アプリケーションが数百〜数千の外部ライブラリに依存しています。

この事例からは、外部ライブラリ依存を可視化し継続監視する流れを提示という具体的な判断材料を確認できます。

[引用元を見る](https://zenn.dev/itsdaichi/articles/a11a58c15919da)

### 2. 信頼しているコンポーネントが攻撃経路になる共通点を提示

OSSサプライチェーンインシデントを複数事例で分析。パッケージ、CI/CD、AIエージェントへ攻撃領域が広がる流れを整理。信頼しているコンポーネントが攻撃経路になる共通点を提示。

この事例では、個別インシデントの時点情報を含むという条件もあります。

> 共通するのは、開発者が暗黙的に信頼しているコンポーネントを狙っている点です。

この事例からは、信頼しているコンポーネントが攻撃経路になる共通点を提示という具体的な判断材料を確認できます。

[引用元を見る](https://qiita.com/nogataka/items/d00b92e3f1efc4e06ac5)

### 3. A03で依存関係・ビルド・SBOM・CIスキャンを一体で扱う

OWASP Top 10:2025をSpring Bootの実装例で学習。カテゴリごとに問題と対策をコード・CIへ落とし込む。A03で依存関係・ビルド・SBOM・CIスキャンを一体で扱う。

この事例では、Java/Spring Boot中心の例という条件もあります。

> CIで自動スキャン＋SBOMが基本セット。

この事例からは、A03で依存関係・ビルド・SBOM・CIスキャンを一体で扱うという具体的な判断材料を確認できます。

[引用元を見る](https://qiita.com/Masakore/items/7ee46f6cca4182773958)

## DevSecOpsで供給網対策を工程へ組み込むなら

**DevSecOps Fundamentals - Including Hands-On Demos**

- DevSecOpsの基礎を扱う

- ハンズオンを含み開発工程へセキュリティを組み込む考え方を学べる

- 依存関係やCI/CDを開発プロセス全体で見る記事テーマと合う

:::cta label="DevSecOps講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=software-supply-chain-failures-a03&subId3=other" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、Software Supply Chain Failuresは依存ライブラリだけでなく、ビルド、CI/CD、成果物、配布・更新まで含む供給網全体の問題として考える必要があります。

## あわせて読みたい

[脆弱性診断](/category/vulnerability/)
