---
site: "cybersecurity"
title: "OpenID Connectとは？OAuth 2.0との違いを図解で整理"
description: "OpenID Connect OAuth 違いを調べている方向けに、本文確認済みの3つの実例・検証を比較。OIDCはOAuth 2.0の上に『誰がログインしたか』を確認する仕組みを加えたもの、と捉えると分かりやすい。 実例の違いとUdemy講座の使いどころまで整理します。"
slug: "openid-connect-vs-oauth2"
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
hypothesis: "OIDCはOAuth 2.0の上に『誰がログインしたか』を確認する仕組みを加えたもの、と捉えると分かりやすい。"
udemyCourseTitle: "The Nuts and Bolts of OAuth 2.0"
udemyCourseUrl: "https://www.udemy.com/course/oauth-2-simplified/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Foauth-2-simplified%2F&subId1=cybersecurity&subId2=openid-connect-vs-oauth2&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "OAuth・OIDC講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Foauth-2-simplified%2F&subId1=cybersecurity&subId2=openid-connect-vs-oauth2&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# OpenID Connectとは？OAuth 2.0との違いを図解で整理

## 結論

OpenID ConnectはOAuth 2.0の認可フローを土台に、誰がログインしたかを確認する認証の役割を追加します。

本文確認済みの3例を見ると、3例でOAuthを認可、OIDCを認証に使う役割分担が確認できる。

## 3人の実例

### 事例1

- 前提：OAuth/OIDCの連携を整理
- 環境・方法：OAuthを認可、OIDCを認証として組み合わせる
- 結果：両者は実アプリで補完関係にあると整理

### 事例2

- 前提：e-Gov API連携を設計
- 環境・方法：API認可はOAuth、利用者認証はOIDC
- 結果：1つのAPI実装で両者の役割を明確に分ける例

### 事例3

- 前提：認証・認可を基礎から学習
- 環境・方法：OIDCがOAuth 2.0に何を追加するかまで整理
- 結果：OIDCを認証レイヤーとして学ぶ流れを確認

## OIDCはOAuth 2.0に認証の役割を加えて使い分ける

3例は環境や目的が同一ではありませんが、共通して「用語の定義だけ」で終わらず、実装・運用・判断へ落とし込んでいます。検索キーワードの違いは、実際にはどこで境界を引くかを見ると整理しやすくなります。

今回の仮説は **supported** と判定できます。3例でOAuthを認可、OIDCを認証に使う役割分担が確認できる。

## 実例3件の学習・検証例

### 1. 認可と認証を組み合わせる構成を整理

OAuth/OIDCの連携を整理。OAuthを認可、OIDCを認証として組み合わせる。両者は実アプリで補完関係にあると整理。

この事例では、一般的構成の説明という条件があります。

> 実際のアプリケーションでは両者を組み合わせて使用することが一般的です。

この事例からは、両者は実アプリで補完関係にあると整理という判断材料を確認できます。

[引用元を見る](https://qiita.com/reoring/items/f5a63797c1ac44bec869)

### 2. 実APIでOAuthとOIDCを役割分担

e-Gov API連携を設計。API認可はOAuth、利用者認証はOIDC。1つのAPI実装で両者の役割を明確に分ける例。

この事例では、e-Gov固有仕様を含むという条件があります。

> 利用者の認証に OpenID Connect を使います。

この事例からは、1つのAPI実装で両者の役割を明確に分ける例という判断材料を確認できます。

[引用元を見る](https://qiita.com/doruboxshiki/items/e89d12680312703bb629)

### 3. OAuthの上にOIDC認証を追加して整理

認証・認可を基礎から学習。OIDCがOAuth 2.0に何を追加するかまで整理。OIDCを認証レイヤーとして学ぶ流れを確認。

この事例では、学習整理の例という条件があります。

> 似ているようで、扱っている問題が全く異なります。

この事例からは、OIDCを認証レイヤーとして学ぶ流れを確認という判断材料を確認できます。

[引用元を見る](https://qiita.com/kirozero/items/322d1555d52733f294da)

## OAuthとOIDCを同じ流れで整理するなら

**The Nuts and Bolts of OAuth 2.0**

- OAuth・OIDCを直接扱う講座DB登録
- 認証と認可の役割分担を深掘りできるテーマ
- 記事で整理した概念を体系的に学ぶ次の手段としてつなげやすい

:::cta label="OAuth・OIDC講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Foauth-2-simplified%2F&subId1=cybersecurity&subId2=openid-connect-vs-oauth2&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、OIDCはOAuth 2.0の上に認証を追加する仕組みです。アクセス権はOAuth、ログインした人の確認はOIDCと分けると整理できます。

## あわせて読みたい

[IAM・認証](/category/iam/)
