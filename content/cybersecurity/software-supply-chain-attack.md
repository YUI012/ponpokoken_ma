---
site: "cybersecurity"
title: "ソフトウェアサプライチェーン攻撃とは？開発チームが見るべき範囲"
description: "ソフトウェアサプライチェーン 攻撃 対策を調べている方向けに、本文確認済みの3つの実例・検証を比較。依存パッケージだけでなく、CI/CD・成果物・署名・配布経路までが供給網。 実例の違いとUdemy講座の使いどころまで整理します。"
slug: "software-supply-chain-attack"
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
hypothesis: "依存パッケージだけでなく、CI/CD・成果物・署名・配布経路までが供給網。"
udemyCourseTitle: "DevSecOps Fundamentals - Including Hands-On Demos"
udemyCourseUrl: "https://www.udemy.com/course/devsecops-fundamentals/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=software-supply-chain-attack&subId3=other"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "DevSecOps講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=software-supply-chain-attack&subId3=other"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# ソフトウェアサプライチェーン攻撃とは？開発チームが見るべき範囲

## 結論

結論、ソフトウェアサプライチェーンは依存パッケージだけではありません。CI/CD、認証、ビルド成果物、配布経路まで含めて一連の供給網として守る必要があります。

本文確認済みの3例では、SBOMの継続収集、CI/CDでのSCA、OIDCによるデプロイ認証の実例から、依存関係・パイプライン・認証・成果物の流れを一体で見る必要性を確認できる。

## 3人の実例

### 事例1

- 前提：複数リポジトリ・サーバの依存関係管理
- 環境・方法：Trivy・Argo Workflows・Ansible・Dependency-TrackでSBOMを収集・集約
- 結果：依存関係を継続的に可視化し影響範囲確認を高速化

### 事例2

- 前提：CI/CDで複数のセキュリティ検査を自動化
- 環境・方法：GitHub ActionsでSAST・DAST・SCAを組み合わせる
- 結果：SAST・DAST・SCAを補完的に組み合わせる自動化を整理

### 事例3

- 前提：AWS上のポートフォリオサイトをCI/CDでデプロイ
- 環境・方法：GitHub ActionsとOIDCでAWSへ短期認証
- 結果：長期アクセスキーを置かずにS3デプロイを自動化

## 供給網は依存パッケージだけでなく、ビルドと配布の経路まで含む

再現しやすい進め方は、SBOMやSCAで依存関係を把握する、CI/CDの権限と認証を最小化することです。

注意点として、SBOMだけではビルド改ざんや資格情報漏洩は防げない。

## 実例3件の学習・検証例

### 1. 依存関係を継続的に可視化し影響範囲確認を高速化

複数リポジトリ・サーバの依存関係管理。Trivy・Argo Workflows・Ansible・Dependency-TrackでSBOMを収集・集約。依存関係を継続的に可視化し影響範囲確認を高速化。

この事例では、SBOMは継続更新と対象拡大時の運用設計が必要という条件があります。

> ジーニーでは、SBOMを継続的に収集・集約し、必要なときにすぐ検索できる状態を目指しました。

この事例からは、依存関係を継続的に可視化し影響範囲確認を高速化という判断材料を確認できます。

[引用元を見る](https://zenn.dev/geniee/articles/751e4305d6b97a)

### 2. SAST・DAST・SCAを補完的に組み合わせる自動化を整理

CI/CDで複数のセキュリティ検査を自動化。GitHub ActionsでSAST・DAST・SCAを組み合わせる。SAST・DAST・SCAを補完的に組み合わせる自動化を整理。

この事例では、偽陽性と運用負荷のチューニングが必要という条件があります。

> Semgrep + CodeQL + OWASP ZAP + Trivyを組み合わせたCI/CDパイプラインの構築方法

この事例からは、SAST・DAST・SCAを補完的に組み合わせる自動化を整理という判断材料を確認できます。

[引用元を見る](https://qiita.com/0h-n0/items/3e57130295db0ccf1b5a)

### 3. 長期アクセスキーを置かずにS3デプロイを自動化

AWS上のポートフォリオサイトをCI/CDでデプロイ。GitHub ActionsとOIDCでAWSへ短期認証。長期アクセスキーを置かずにS3デプロイを自動化。

この事例では、IAMロールとOIDC信頼設定が必要という条件があります。

> GitHub Actions + OIDC を使ってアクセスキーを一切持たずに S3 デプロイ

この事例からは、長期アクセスキーを置かずにS3デプロイを自動化という判断材料を確認できます。

[引用元を見る](https://zenn.dev/kingdom0927/articles/fce8b036fead5f)

## 開発工程へセキュリティを組み込むなら

**DevSecOps Fundamentals - Including Hands-On Demos**
- DevSecOpsに関する内容をUdemy公式講座ページで確認
- 記事テーマと講座DBのtopicTagsが一致
- 記事内の実例で確認した流れを、動画とハンズオンで整理する次の学習手段にしやすい
:::cta label="DevSecOps講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=software-supply-chain-attack&subId3=other" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、ソフトウェアサプライチェーンは依存パッケージだけではありません。CI/CD、認証、ビルド成果物、配布経路まで含めて一連の供給網として守る必要があります。

## あわせて読みたい

[セキュリティ運用](/category/operations/)
