---
site: "m365-work"
title: "SharePointリストで申請管理はできる？3人の実例で検証"
description: "「SharePointリストで申請管理はできる？」という疑問を、3人の実例と原文引用から検証。SharePointリストを使うと申請データを共有管理しやすくなる可能性がある。実務で再現するポイントと注意点も整理します。"
slug: "sharepoint-list-approval-management"
date: "2026-09-23"
updated: "2026-09-23"
author: "Microsoft 365仕事術編集部"

category: "sharepoint"
categoryName: "SharePoint"
parentHubUrl: "/category/sharepoint/"

qualification: ""
qualificationName: ""
qualificationHubUrl: ""

articleType: "use-case"
searchIntent: "outcome"
hypothesis: "SharePointリストを使うと申請データを共有管理しやすくなる可能性がある"

udemyCourseTitle: "SharePoint Online リスト活用講座"
udemyCourseUrl: "https://www.udemy.com/course/sharepoint_lists/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fsharepoint_lists%2F&subId1=m365-work"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Udemyで講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fsharepoint_lists%2F&subId1=m365-work"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# SharePointリストで申請管理はできる？3人の実例で検証

## 結論

SharePointリストは申請データ・承認者・状態・結果を共有管理する土台として使える。Power AutomateやPower Appsを組み合わせれば、申請登録から承認・履歴更新までを一連のフローにできる実例がある。

## 3人の実例

### 事例1
- design：SharePointリストを申請フォームとして利用
- automation：Power Automateで申請業務を自動化
- result：ノーコードで構築できたと記載

### 事例2
- design：承認者マスターと申請管理リストを作成
- columns：承認者・状態・コメント等を保持
- automation：Power Automateで承認処理

### 事例3
- design：申請詳細リストと承認履歴リストを分離
- input：Power Appsで登録
- update：Power Automateで結果列を更新

## 3人の比較から分かること

- 申請情報をSharePointリストへ集約している
- 承認結果や状態をPower Automateで更新している
- まず申請項目とステータス列を作る
- 次にPower Automateで承認を追加する
- 必要ならPower Appsで入力画面を改善する

注意点もあります。
- 権限設計が複雑になりやすい
- 多段承認では履歴・否認・再申請の設計が必要

## 3人の詳細実例

### 1. SharePointリストを申請フォームとして利用、Power Automateで申請業務を自動

SharePointリストを申請フォームとして利用、Power Automateで申請業務を自動化、ノーコードで構築できたと記載。

> 全体的に言うとノーコードで作ることができるため、スクリプトを書けなくても問題なかった。

[引用元を見る](https://qiita.com/arowoftree/items/c71a2e9fb7f9af59eeda)

### 2. 承認者マスターと申請管理リストを作成、承認者・状態・コメント等を保持、Power Automat

承認者マスターと申請管理リストを作成、承認者・状態・コメント等を保持、Power Automateで承認処理。

> 承認者リスト列はユーザー型で複数のユーザーを設定できるようにします。

[引用元を見る](https://qiita.com/Rambosan/items/e5b9fe32ffbd727f5e38)

### 3. 申請詳細リストと承認履歴リストを分離、Power Appsで登録、Power Automateで

申請詳細リストと承認履歴リストを分離、Power Appsで登録、Power Automateで結果列を更新。

> Power AppsのSubmitForm関数で申請を記録し、Power Automateで承認結果に応じて、列を更新していくリストになります。

[引用元を見る](https://qiita.com/DEmodoriGatsuO/items/56c3324dae17a961e891)

## SharePoint Online リスト活用講座で体系的に学ぶなら

**SharePoint Online リスト活用講座**

- SharePointリスト
- 列・ビュー・書式の実務活用
- 実例で見えた問題を自分の業務へ置き換えて練習しやすい

:::cta label="Udemyで講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fsharepoint_lists%2F&subId1=m365-work" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

YES。SharePointリストは申請データ・承認者・状態・結果を共有管理する土台として使える。Power AutomateやPower Appsを組み合わせれば、申請登録から承認・履歴更新までを一連のフローにできる実例がある。

## あわせて読みたい

- [SharePointの記事をまとめて見る](/category/sharepoint/)
