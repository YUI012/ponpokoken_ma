---
site: "m365-work"
title: "Power Appsで申請アプリは作れる？3人の実例で検証"
description: "「Power Appsで申請アプリは作れる？」という疑問を、3人の実例と原文引用から検証。入力項目と承認の流れが整理できていればPower Appsで申請画面を作れるケースがある。実務で再現するポイントと注意点も整理します。"
slug: "power-apps-approval-app"
date: "2026-09-23"
updated: "2026-09-23"
author: "Microsoft 365仕事術編集部"

category: "power-apps"
categoryName: "Power Apps"
parentHubUrl: "/category/power-apps/"

qualification: ""
qualificationName: ""
qualificationHubUrl: ""

articleType: "use-case"
searchIntent: "outcome"
hypothesis: "入力項目と承認の流れが整理できていればPower Appsで申請画面を作れるケースがある"

udemyCourseTitle: "作って学ぶPower Apps ！すぐに現場で使えるアプリを3つ以上作成"
udemyCourseUrl: "https://www.udemy.com/course/power-platform-one/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpower-platform-one%2F&subId1=m365-work"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Udemyで講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpower-platform-one%2F&subId1=m365-work"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Power Appsで申請アプリは作れる？3人の実例で検証

## 結論

Power Appsで申請画面を作り、Power AutomateやDataverse/SharePointと組み合わせて承認・通知・状態管理まで実装した例が複数ある。入力項目と承認状態を先に整理すれば、小規模な申請アプリは十分試作できる。

## 3人の実例

### 事例1
- 作業：申請入力と承認フローを作成 / 方法：Power Apps・Power Automate・SharePointを連携 / 結果：コード記述をほとんどせず短時間で構築できたと記載

### 事例2
- 作業：シンプルな申請承認アプリ / 方法：Dataverseに申請データを保存しPower AutomateでTeams承認 / 結果：申請から承認通知まで一連の流れを実装

### 事例3
- 作業：図書購入申請をアプリ化 / 方法：Power Appsで申請状態を管理しPower Automateで通知 / 結果：承認中の編集ロックやメール送信まで実装

## 3人の比較から分かること

- Power Appsを申請入力画面として使っている
- 承認処理や通知はPower Automateと連携している
- 申請項目と承認者を先に表にする
- 申請中・承認・否認など状態を定義する
- 最初は1段階承認で動作確認する

注意点もあります。
- 多段承認や代理承認は設計が複雑になる
- 権限と編集制御を申請状態に合わせて確認する

## 3人の詳細実例

### 1. 初心者向け Power Appsで申請・承認フローを作る

申請入力と承認フローを作成。Power Apps・Power Automate・SharePointを連携。コード記述をほとんどせず短時間で構築できたと記載。

> 短時間でコードの記述もほとんどなくアプリを構築

[引用元を見る](https://qiita.com/eiji-noguchi/items/21d52c4efe7c748e7c37)

### 2. Power Apps＆Automateで申請/承認アプリを作る

シンプルな申請承認アプリ。Dataverseに申請データを保存しPower AutomateでTeams承認。申請から承認通知まで一連の流れを実装。

> ごくシンプルな申請承認アプリ

[引用元を見る](https://qiita.com/kumukai/items/94a5c49697f079c3a912)

### 3. Power AppsとPower Automateで図書購入申請アプリを作ってみた

図書購入申請をアプリ化。Power Appsで申請状態を管理しPower Automateで通知。承認中の編集ロックやメール送信まで実装。

> 承認プロセス中は編集ロックがかかるシステム

[引用元を見る](https://qiita.com/meccha__eeyan/items/7627df8a33aa9e0e9216)

## 作って学ぶPower Apps ！すぐに現場で使えるアプリを3つ以上作成で体系的に学ぶなら

**作って学ぶPower Apps ！すぐに現場で使えるアプリを3つ以上作成**

- 日報・備品登録・備品管理など複数アプリのハンズオン
- Power Apps・Power Automate・Dataverse・SharePoint・Teams連携を扱う
- プログラミング経験不要を前提にしている

:::cta label="Udemyで講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpower-platform-one%2F&subId1=m365-work" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

YES。Power Appsで申請画面を作り、Power AutomateやDataverse/SharePointと組み合わせて承認・通知・状態管理まで実装した例が複数ある。入力項目と承認状態を先に整理すれば、小規模な申請アプリは十分試作できる。

## あわせて読みたい

- [Power Appsの記事をまとめて見る](/category/power-apps/)
