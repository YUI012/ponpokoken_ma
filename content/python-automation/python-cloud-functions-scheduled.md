---
site: "python-automation"
title: "PythonをCloud Functionsで定期実行する方法｜3実例"
description: "PythonをGoogle Cloud Functionsで定期実行する方法を3つの実例から整理します。Cloud SchedulerからHTTPまたはPub/Subで関数を起動し、cron式・認証・サービスアカウントを設定する基本構成を解説します。"
slug: "python-cloud-functions-scheduled"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "batch"
categoryName: "定期処理・バッチ"
parentHubUrl: "/category/batch/"

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "PythonスクリプトをCloud Functionsへ配置しスケジュール実行すれば、PCを起動せず定期処理を動かせる"

udemyCourseTitle: "PythonでGoogle検索順位を計測するプログラムを作ってCloudFunctionsにデプロイし定期実行しよう！"
udemyCourseUrl: "https://www.udemy.com/course/python-cloudfunctions/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-cloudfunctions%2F&subId1=python-automation&subId2=python-cloud-functions-scheduled&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Cloud Functions講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-cloudfunctions%2F&subId1=python-automation&subId2=python-cloud-functions-scheduled&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# PythonをCloud Functionsで定期実行する方法｜3実例

## 結論

3件ともCloud Functionsへ処理を配置し、Cloud Schedulerからcron形式のスケジュールで呼び出しています。HTTP認証またはPub/Subを使えば、ローカルPCを常時起動せずに定期実行できます。

Cloud Functions側にPython処理を配置し、Cloud Scheduler側にcron式・タイムゾーン・呼び出し先を設定すると、PCを起動せず定期処理を動かせます。

## 3人の実例

### 事例1

- 前提：Google Cloudの定期実行構築
- 実践：Cloud Schedulerから認証付きHTTPでCloud Functionsを毎日指定時刻に実行する設定を構築している。
- 結果：SchedulerからFunctionsを自動実行

### 事例2

- 前提：認証付きCloud Functionsの実装者
- 実践：第2世代Cloud Functionsを認証付きAPIとして作り、Cloud SchedulerからOIDC付きHTTPで定期実行している。
- 結果：サービスアカウント経由の定期実行を構築

### 事例3

- 前提：Cloud Functions定期投稿の実装者
- 実践：Python Cloud FunctionをPub/Subで起動し、Cloud Schedulerへ10分間隔のcronを設定して自動実行している。
- 結果：SchedulerからPython関数を定期起動

3例では、Schedulerを実行タイミング、Functionsを処理本体として分離しています。認証付きHTTPではOIDCとサービスアカウント、Pub/Subではトピックの紐付けが重要です。

## 実例ブログ・口コミ

### 1. Kouさんの実例

Cloud Schedulerから認証付きHTTPでCloud Functionsを毎日指定時刻に実行する設定を構築している。

> Cloud Functionsの関数をcronジョブとして定期実行する設定を理解し、構築する。

実行タイミングと処理本体を別サービスに分ける構成が参考になります。

[引用元を見る](https://zenn.dev/kou_kawa/articles/05-cloud-scheduler)

### 2. bashawayさんの実例

第2世代Cloud Functionsを認証付きAPIとして作り、Cloud SchedulerからOIDC付きHTTPで定期実行している。

> 認証付き関数の起動元ロールが付与されたサービスアカウントを利用したHTTPアクセス

実行タイミングと処理本体を別サービスに分ける構成が参考になります。

[引用元を見る](https://qiita.com/bashaway/items/53742fee7e2df62e46ac)

### 3. niwasawaさんの実例

Python Cloud FunctionをPub/Subで起動し、Cloud Schedulerへ10分間隔のcronを設定して自動実行している。

> プロジェクトで最初のジョブを作成するときは、リージョンの選択が必要となる。

実行タイミングと処理本体を別サービスに分ける構成が参考になります。

[引用元を見る](https://qiita.com/niwasawa/items/90476112dfced169c113)

## Cloud FunctionsでPythonを定期実行するなら

**PythonでGoogle検索順位を計測するプログラムを作ってCloudFunctionsにデプロイし定期実行しよう！**

- Pythonプログラムをクラウドで定期実行する

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Cloud Functions講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-cloudfunctions%2F&subId1=python-automation&subId2=python-cloud-functions-scheduled&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Cloud Functionsの定期実行は、関数をデプロイし、Cloud SchedulerからHTTPまたはPub/Subで呼ぶ構成が基本です。認証・タイムゾーン・ログまで確認すると運用しやすくなります。

## あわせて読みたい

[定期処理・バッチの記事をまとめて見る](/category/batch/)
