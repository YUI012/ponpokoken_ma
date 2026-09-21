---
site: "python-automation"
title: "pandasのconcatとmergeの違い｜3実例で使い分け"
description: "pandasのconcatとmergeの違いを3つの実例から整理します。単純な縦・横連結に向くconcatと、社員IDなど共通キーでJOINするmergeを、複数CSVやマスタ結合の用途で比較します。"
slug: "pandas-concat-vs-merge"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "pandas"
categoryName: "pandas業務自動化"
parentHubUrl: "/category/pandas/"

qualification: ""
qualificationName: ""
qualificationHubUrl: ""

articleType: "comparison"
searchIntent: "comparison"
hypothesis: "行方向の連結はconcat、キーでの結合はmergeを使い分けると複数データを統合しやすい"

udemyCourseTitle: "Gemini x Python データ分析 (2) pandas データ集計＆分析の自動化"
udemyCourseUrl: "https://www.udemy.com/course/gemini-python-data-analysis-pandas/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fgemini-python-data-analysis-pandas%2F&subId1=python-automation&subId2=pandas-concat-vs-merge&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "pandas自動化講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fgemini-python-data-analysis-pandas%2F&subId1=python-automation&subId2=pandas-concat-vs-merge&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# pandasのconcatとmergeの違い｜3実例で使い分け

## 結論

3件ともconcatはDataFrameの単純な縦・横連結、mergeは共通列などのキーに基づく結合として使い分けています。月別ファイルの積み上げとマスタ結合では目的が異なります。

同じ形式の月別CSVを上下に積み上げるならconcat、顧客ID・社員IDなど共通キーで別表を横につなぐならmergeが基本です。

## 3人の実例

### 事例1

- 前提：pandas結合の比較実装者
- 実践：concat・merge・joinを実データで比較し、concatは単純連結、mergeはデータ列を軸とする結合として整理している。
- 結果：concatとmergeの用途差を整理

### 事例2

- 前提：複数CSV結合の実装者
- 実践：concatの縦横結合とmergeのキー結合を比較し、複数CSVの一括結合まで実装している。
- 結果：concatとmergeの判断基準を整理

### 事例3

- 前提：Pandas入門シリーズ実装者
- 実践：社員IDをキーにmergeで結合し、concatで行・列方向の単純結合も実装して違いを整理している。
- 結果：キー結合と単純結合を比較

3例では、concatはデータの位置関係を使って単純に結合し、mergeはキー列の値を照合して結合しています。処理前に『積み上げたいのか』『キーで対応付けたいのか』を決めると選びやすくなります。

## 実例ブログ・口コミ

### 1. a-hiraさんの実例

concat・merge・joinを実データで比較し、concatは単純連結、mergeはデータ列を軸とする結合として整理している。

> 複数のデータフレームを縦方向または横方向に結合する手段です。

結合方法を関数名ではなく、積み上げかキー結合かで選ぶ視点が参考になります。

[引用元を見る](https://qiita.com/a-hira/items/927dfc8b3f0733bdb483)

### 2. coin_collectorさんの実例

concatの縦横結合とmergeのキー結合を比較し、複数CSVの一括結合まで実装している。

> Pandas でデータフレームを結合する方法には `concat` の他に `merge` もあります。

結合方法を関数名ではなく、積み上げかキー結合かで選ぶ視点が参考になります。

[引用元を見る](https://qiita.com/coin_collector/items/80346e05e30fd1d5d69b)

### 3. haruhiro1020さんの実例

社員IDをキーにmergeで結合し、concatで行・列方向の単純結合も実装して違いを整理している。

> 両ファイルでは，社員IDをキーにして，データを結合していきます．

結合方法を関数名ではなく、積み上げかキー結合かで選ぶ視点が参考になります。

[引用元を見る](https://zenn.dev/haruhiro1020/articles/42eae9e729c2ce)

## pandasのデータ結合を学ぶなら

**Gemini x Python データ分析 (2) pandas データ集計＆分析の自動化**

- pandasを使ったデータ集計の自動化
- データ整形・結合・抽出
- CSVデータの集計と分析
- Geminiを使ったコード作成と分析効率化

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="pandas自動化講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fgemini-python-data-analysis-pandas%2F&subId1=python-automation&subId2=pandas-concat-vs-merge&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

pandasでは、単純な縦・横連結はconcat、共通キーでの結合はmergeが基本です。結合後の行数・欠損・キー重複を確認しながら使い分けます。

## あわせて読みたい

[pandas業務自動化の記事をまとめて見る](/category/pandas/)
