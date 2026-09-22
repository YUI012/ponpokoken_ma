---
site: "cybersecurity"
title: "SAML・OAuth 2.0・OIDCの違い｜SSOで何を使う？"
description: "SAML OAuth OIDC 違いを調べている方向けに、本文確認済みの3つの実例・検証を比較。SAMLは企業SSOで長く使われ、OAuth/OIDCはAPI・モダンアプリと相性が良い、という利用場面で分けると理解しやすい。 実例の違いとUdemy講座の使いどころまで整理します。"
slug: "saml-oauth-oidc"
date: "2026-09-22"
updated: "2026-09-22"
author: "サイバーセキュリティ研究所編集部"
category: "iam"
categoryName: "IAM・認証"
parentHubUrl: "/category/iam/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "comparison"
searchIntent: "comparison"
hypothesis: "SAMLは企業SSOで長く使われ、OAuth/OIDCはAPI・モダンアプリと相性が良い、という利用場面で分けると理解しやすい。"
udemyCourseTitle: "Enterprise OAuth 2.0 and OpenID Connect"
udemyCourseUrl: "https://www.udemy.com/course/enterprise-oauth-for-developers/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fenterprise-oauth-for-developers%2F&subId1=cybersecurity&subId2=saml-oauth-oidc&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "OAuth・OIDC講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fenterprise-oauth-for-developers%2F&subId1=cybersecurity&subId2=saml-oauth-oidc&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# SAML・OAuth 2.0・OIDCの違い｜SSOで何を使う？

## 結論

SAML・OAuth 2.0・OIDCは、目的で分けると整理できます。企業SSOの認証はSAML、APIの権限委譲はOAuth、モダンなログイン認証はOIDCが中心です。

本文確認済みの3例を見ると、SAML/OAuth/OIDCの比較と実APIでのOAuth/OIDC使い分けが一致する。

## 3人の実例

### 事例1

- 前提：SAML/OAuth/OIDCの違いを整理
- 環境・方法：SSO・認証・認可の目的で比較
- 結果：SAMLはSSO、OAuthは認可、OIDCは認証という整理を提示

### 事例2

- 前提：SSOの仕組みを整理
- 環境・方法：IdP/SPからSAML・OAuth・OIDCまで比較
- 結果：企業向けSaaSとモダンWebで得意分野が異なることを整理

### 事例3

- 前提：API連携を実設計
- 環境・方法：OAuth認可とOIDC認証を併用
- 結果：API連携ではOAuth/OIDCを同時に使う例を確認

## SAMLは企業SSO、OAuthは認可、OIDCはモダン認証で役割を分ける

今回の仮説は **supported** と判定できます。SAML/OAuth/OIDCの比較と実APIでのOAuth/OIDC使い分けが一致する。

## 実例3件の学習・検証例

### 1. 3プロトコルを目的別に比較

SAML/OAuth/OIDCの違いを整理。SSO・認証・認可の目的で比較。SAMLはSSO、OAuthは認可、OIDCは認証という整理を提示。

この事例では、実装詳細は別途確認という条件があります。

> SAMLはSSOやID連携に使われる認証のプロトコルであり

この事例からは、SAMLはSSO、OAuthは認可、OIDCは認証という整理を提示という判断材料を確認できます。

[引用元を見る](https://zenn.dev/chihaso/articles/a55d04249305c4)

### 2. SSO方式をSAML・OAuth・OIDCまで横断整理

SSOの仕組みを整理。IdP/SPからSAML・OAuth・OIDCまで比較。企業向けSaaSとモダンWebで得意分野が異なることを整理。

この事例では、一般的な技術選定という条件があります。

> アカウントのライフサイクル全体を一元管理できる。

この事例からは、企業向けSaaSとモダンWebで得意分野が異なることを整理という判断材料を確認できます。

[引用元を見る](https://qiita.com/Saito-3815/items/c6e127a4554744f19ef7)

### 3. APIではOAuthとOIDCを組み合わせて設計

API連携を実設計。OAuth認可とOIDC認証を併用。API連携ではOAuth/OIDCを同時に使う例を確認。

この事例では、SAMLは使わないケースという条件があります。

> 利用者の認証に OpenID Connect を使います。

この事例からは、API連携ではOAuth/OIDCを同時に使う例を確認という判断材料を確認できます。

[引用元を見る](https://qiita.com/doruboxshiki/items/e89d12680312703bb629)

## エンタープライズ認証でOAuthとOIDCを深掘りするなら

**Enterprise OAuth 2.0 and OpenID Connect**

- OAuth・OIDCを直接扱う講座DB登録
- 認証と認可の役割分担を深掘りできるテーマ
- 記事で整理した概念を体系的に学ぶ次の手段としてつなげやすい

:::cta label="OAuth・OIDC講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fenterprise-oauth-for-developers%2F&subId1=cybersecurity&subId2=saml-oauth-oidc&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、SAML・OAuth 2.0・OIDCは同じ用途の代替ではありません。企業SSO、API権限委譲、モダンな認証という役割から選ぶと混同しにくくなります。

## あわせて読みたい

[IAM・認証](/category/iam/)
