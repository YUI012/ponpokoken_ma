---
site: "python-automation"
title: "Pythonで失敗処理を自動再実行する方法｜Tenacityの3実例"
description: "Pythonで失敗した処理を自動再実行する方法をTenacityの3実例から整理します。最大試行回数、待機時間、対象例外、指数バックオフ、ログ出力を設定し、一時的な通信失敗だけを安全にリトライする方法を解説します。"
slug: "python-auto-retry"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "batch"
categoryName: "定期処理・バッチ"
parentHubUrl: "/category/batch/"

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "例外処理とリトライ条件を組み合わせれば、一時的な通信失敗などで処理を自動再実行できる"

udemyCourseTitle: "米国AI開発者がゼロから教えるPython入門講座"
udemyCourseUrl: "https://www.udemy.com/course/python-ai/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-ai%2F&subId1=python-automation&subId2=python-auto-retry&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Python入門講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-ai%2F&subId1=python-automation&subId2=python-auto-retry&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Pythonで失敗処理を自動再実行する方法｜Tenacityの3実例

## 結論

3件ともTenacityのretryデコレータを使い、例外時の再実行、試行回数、対象例外、待機条件を設定しています。一時障害だけを限定して再試行する設計が重要です。

リトライは『すべての失敗でもう一度やる』のではなく、TimeoutErrorやConnectionErrorのような一時障害だけを対象にし、最大回数と待機時間を決めるのが基本です。

## 3人の実例

### 事例1

- 前提：API/バッチ向けリトライ設計者
- 実践：Tenacityでstop_after_attempt、wait_random_exponential、対象例外、ログを設定する実務向けパターンを解説している。
- 結果：最大回数・待機・対象例外を制御

### 事例2

- 前提：Tenacityの学習・実装者
- 実践：retry_if_exception_typeやretry_if_resultを使い、例外・戻り値に応じて再試行する方法を実装している。
- 結果：条件付きリトライを実装

### 事例3

- 前提：Tenacity実装者
- 実践：stop_after_attemptやretry_if_exception_typeを使い、回数制限と特定例外だけのリトライを実装している。
- 結果：特定例外のみ再試行

3例ではTenacityを使い、関数にデコレータを付けてリトライ条件を宣言しています。APIやバッチでは固定間隔より指数バックオフを選び、最終的に失敗した場合はログ・通知・例外送出へつなげると運用しやすくなります。

## 実例ブログ・口コミ

### 1. japanさんの実例

Tenacityでstop_after_attempt、wait_random_exponential、対象例外、ログを設定する実務向けパターンを解説している。

> Tenacityは、Pythonでリトライ処理を宣言的に書けるライブラリです。

再試行回数だけでなく、どの例外を再試行するかまで限定している点が参考になります。

[引用元を見る](https://zenn.dev/japan/articles/b45d36c1403c2d)

### 2. ytsakairiさんの実例

retry_if_exception_typeやretry_if_resultを使い、例外・戻り値に応じて再試行する方法を実装している。

> 対象の関数にて例外が発生した際にはリトライ処理を実行し、値が返された場合はその値を返します。

再試行回数だけでなく、どの例外を再試行するかまで限定している点が参考になります。

[引用元を見る](https://zenn.dev/ytsakairi/articles/4b9803583b2e32)

### 3. taroman_zennさんの実例

stop_after_attemptやretry_if_exception_typeを使い、回数制限と特定例外だけのリトライを実装している。

> 特定のエラーを指定することで、そのエラーの発生時のみリトライを行うことができます。

再試行回数だけでなく、どの例外を再試行するかまで限定している点が参考になります。

[引用元を見る](https://zenn.dev/taroman_zenn/articles/dd0b33a3a37d1e)

## 例外処理を含むPython基礎を学ぶなら

**米国AI開発者がゼロから教えるPython入門講座**

- Python基礎・オブジェクト指向・SQL・例外処理・テストを扱う

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Python入門講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-ai%2F&subId1=python-automation&subId2=python-auto-retry&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Pythonの自動再実行は、対象例外・最大試行回数・待機時間を明示するのが基本です。Tenacityを使うとこれらをデコレータで整理でき、ログや指数バックオフも追加できます。

## あわせて読みたい

[定期処理・バッチの記事をまとめて見る](/category/batch/)
