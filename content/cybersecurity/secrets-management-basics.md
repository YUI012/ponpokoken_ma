---
site: "cybersecurity"
title: "Secrets Managementとは？APIキーをコードに書かないための基本"
description: "Secrets Management とはを調べている方向けに、本文確認済みの3つの実例・検証を比較。秘密情報は『暗号化して保存』だけでなく、配布・ローテーション・監査まで管理して初めて運用になる。 Udemy講座は疑問を解決した後の学習手段として紹介し、次に何を学ぶか判断できるよう整理します。"
slug: "secrets-management-basics"
date: "2026-09-22"
updated: "2026-09-22"
author: "サイバーセキュリティ研究所編集部"
category: "cloud-security"
categoryName: "クラウドセキュリティ"
parentHubUrl: "/category/cloud-security/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "other"
searchIntent: "informational"
hypothesis: "秘密情報は『暗号化して保存』だけでなく、配布・ローテーション・監査まで管理して初めて運用になる。"
udemyCourseTitle: "DevSecOps Fundamentals - Including Hands-On Demos"
udemyCourseUrl: "https://www.udemy.com/course/devsecops-fundamentals/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=secrets-management-basics&subId3=other"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "DevSecOps講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=secrets-management-basics&subId3=other"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# Secrets Managementとは？APIキーをコードに書かないための基本

## 結論

秘密情報は『暗号化して保存』だけでなく、配布・ローテーション・監査まで管理して初めて運用になる。

3件ともシークレットをコードから分離し、取得・ローテーション・運用まで管理しており、暗号化保存だけでは足りないことを示している。

## 3人の実例

### 事例1

- 前提：APIアクセストークンをSecrets Managerへ保存
- 環境・方法：アプリからBoto3でシークレットを取得
- 結果：コードへ直接トークンを書かず実行時に取得する流れを確認

### 事例2

- 前提：RDS接続パスワードをSecrets Managerで管理
- 環境・方法：LambdaローテーションとRDSパスワード更新を連動
- 結果：保存だけでなくローテーションまで自動化する例を提示

### 事例3

- 前提：Aurora MySQLのシークレットローテーションをCloudFormationで構築
- 環境・方法：DBユーザーのシークレットを自動ローテーション
- 結果：IaCでローテーション設定を管理する実践例を提示

## Secrets Managementは保管だけでなく取得とローテーションまで設計する

APIキーやDBパスワードをコードへ直接書かないことは入口です。実例ではSecrets Managerへ保存し、アプリケーションが実行時に取得する形へ分離しています。

さらにDBパスワードではローテーションと実DBの更新を同期する例があります。Secrets Managementは保管場所だけでなく、誰が取得できるか、いつ更新するか、アプリ側が更新後の値をどう使うかまで一続きで設計する必要があります。

## 実例3件の学習・検証例

### 1. コードへ直接トークンを書かず実行時に取得する流れを確認

APIアクセストークンをSecrets Managerへ保存。アプリからBoto3でシークレットを取得。コードへ直接トークンを書かず実行時に取得する流れを確認。

この事例では、AWS Secrets Managerの例という条件があります。

> これでAWS Secrets Managerで管理しているAPIのアクセストークンを取得できました。

この事例からは、コードへ直接トークンを書かず実行時に取得する流れを確認という判断材料を確認できます。

[引用元を見る](https://zenn.dev/ryouta26/articles/502f156b1f6633)

### 2. 保存だけでなくローテーションまで自動化する例を提示

RDS接続パスワードをSecrets Managerで管理。LambdaローテーションとRDSパスワード更新を連動。保存だけでなくローテーションまで自動化する例を提示。

この事例では、VPCやエンドポイント設定が必要という条件があります。

> シークレット情報のローテーションと同期して、RDSのパスワードを更新させる。

この事例からは、保存だけでなくローテーションまで自動化する例を提示という判断材料を確認できます。

[引用元を見る](https://qiita.com/leomarokun/items/8c12ad53f2f0190ee85b)

### 3. IaCでローテーション設定を管理する実践例を提示

Aurora MySQLのシークレットローテーションをCloudFormationで構築。DBユーザーのシークレットを自動ローテーション。IaCでローテーション設定を管理する実践例を提示。

この事例では、CloudFormation固有の注意点があるという条件があります。

> ネイティブ認証のDBユーザーのシークレットを自動ローテーションする機能がある。

この事例からは、IaCでローテーション設定を管理する実践例を提示という判断材料を確認できます。

[引用元を見る](https://qiita.com/itsuki3/items/d4d9bb0289ceb332bc8f)

## Secrets ManagementをDevSecOpsの流れで学ぶなら

**DevSecOps Fundamentals - Including Hands-On Demos**

- DevSecOpsに関する内容をUdemy公式講座ページで確認

- ハンズオン型として手を動かす学習に向く

- アプリ・DevSecOps・DevSecOpsに直接対応する講座DB登録

:::cta label="DevSecOps講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevsecops-fundamentals%2F&subId1=cybersecurity&subId2=secrets-management-basics&subId3=other" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、Secrets ManagementはAPIキーをコードから外すだけでは不十分です。保管、権限制御、取得、ローテーション、監査までを一つの運用として設計します。

## あわせて読みたい

[クラウドセキュリティ](/category/cloud-security/)
