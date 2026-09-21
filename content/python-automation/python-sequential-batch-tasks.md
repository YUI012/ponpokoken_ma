---
site: "python-automation"
title: "Pythonで複数処理を順番に実行する方法｜3実例"
description: "Pythonで複数処理を順番に実行する方法を3つの実例から整理します。関数を順番に呼ぶ方法、subprocess.runで外部スクリプトを1つずつ実行する方法、取得→加工→通知のパイプライン化を解説します。"
slug: "python-sequential-batch-tasks"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "batch"
categoryName: "定期処理・バッチ"
parentHubUrl: "/category/batch/"

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "関数やスクリプトを処理順に呼び出せば、取得→加工→保存→通知のような一連のバッチを自動化できる"

udemyCourseTitle: "独学で身につけるPython〜基礎編〜〖業務効率化・自動化で残業を無くそう！〗"
udemyCourseUrl: "https://www.udemy.com/course/python-kaizen/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen%2F&subId1=python-automation&subId2=python-sequential-batch-tasks&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Python基礎自動化講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen%2F&subId1=python-automation&subId2=python-sequential-batch-tasks&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Pythonで複数処理を順番に実行する方法｜3実例

## 結論

3件とも複数の処理を決めた順番で実行し、前工程の結果を後工程へ渡す構成を使っています。1プロセス内なら関数、別スクリプトならsubprocessやシェルラッパーで順序を管理できます。

同じPython内の処理なら関数をmainから順番に呼び、別ファイルやshellをつなぐならsubprocess.runを使うと実行順を明示できます。

## 3人の実例

### 事例1

- 前提：データ分析パイプライン運用者
- 実践：データ取得・分析・通知を3つのスクリプトへ分離し、ラッパースクリプトから順番に実行している。
- 結果：取得→分析→通知を順次実行

### 事例2

- 前提：複数APIスクリプトの実装者
- 実践：複数のshellファイルをsortedで並べ、forループとsubprocess.runで一つずつ実行している。
- 結果：外部スクリプトを順番に自動実行

### 事例3

- 前提：野球データパイプライン実装者
- 実践：複数のPythonスクレイピング処理を時刻差で順番に起動し、最後にS3へCSVをアップロードしている。
- 結果：複数取得処理からS3保存まで自動化

3例に共通するのは、取得・加工・保存・通知などを別工程へ分けたうえで順番だけを上位の処理が管理していることです。各工程を単独でテストできるため、失敗箇所の切り分けもしやすくなります。

## 実例ブログ・口コミ

### 1. techquantさんの実例

データ取得・分析・通知を3つのスクリプトへ分離し、ラッパースクリプトから順番に実行している。

> シンプルに 3 つのスクリプトに分割します。

処理本体と実行順制御を分けることで、工程を差し替えやすくしている点が参考になります。

[引用元を見る](https://zenn.dev/techquant/articles/python-auto-analysis)

### 2. Ryo-0131さんの実例

複数のshellファイルをsortedで並べ、forループとsubprocess.runで一つずつ実行している。

> 複数のシェルスクリプトファイルを１コマンドで勝手に一つずつ実行させていくコードを書いたので紹介します。

処理本体と実行順制御を分けることで、工程を差し替えやすくしている点が参考になります。

[引用元を見る](https://qiita.com/Ryo-0131/items/6a3f1eace33636cbc3cb)

### 3. h-hirotaさんの実例

複数のPythonスクレイピング処理を時刻差で順番に起動し、最後にS3へCSVをアップロードしている。

> これで、野球データの取得から S3 バケットへのアップロードまでを自動化できる流れが完成します。

処理本体と実行順制御を分けることで、工程を差し替えやすくしている点が参考になります。

[引用元を見る](https://qiita.com/h-hirota/items/24568292d5d1309b0388)

## Python業務自動化の基礎を学ぶなら

**独学で身につけるPython〜基礎編〜〖業務効率化・自動化で残業を無くそう！〗**

- Python業務自動化基礎に関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Python基礎自動化講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen%2F&subId1=python-automation&subId2=python-sequential-batch-tasks&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

複数処理は、各工程を独立させ、上位のmainやラッパーから順番に呼び出すと管理しやすくなります。後続処理へ進む前に終了コードや戻り値を確認する設計も重要です。

## あわせて読みたい

[定期処理・バッチの記事をまとめて見る](/category/batch/)
