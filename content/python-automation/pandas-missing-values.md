---
site: "python-automation"
title: "pandasで欠損値を処理する方法｜dropna・fillnaの3実例"
description: "pandasで欠損値を処理する方法を3つの実例から整理します。isnaで欠損を確認し、dropnaで削除、fillnaで固定値・平均値などへ補完する基本パターンと、削除と補完の使い分けを解説します。"
slug: "pandas-missing-values"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "pandas"
categoryName: "pandas業務自動化"
parentHubUrl: "/category/pandas/"

qualification: ""
qualificationName: ""
qualificationHubUrl: ""

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "dropnaとfillnaを使い分ければ、欠損データの削除・補完をルール化して自動処理できる"

udemyCourseTitle: "Gemini x Python データ分析 (2) pandas データ集計＆分析の自動化"
udemyCourseUrl: "https://www.udemy.com/course/gemini-python-data-analysis-pandas/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fgemini-python-data-analysis-pandas%2F&subId1=python-automation&subId2=pandas-missing-values&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "pandas自動化講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fgemini-python-data-analysis-pandas%2F&subId1=python-automation&subId2=pandas-missing-values&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# pandasで欠損値を処理する方法｜dropna・fillnaの3実例

## 結論

3件ともpandasで欠損値を確認し、dropnaによる削除またはfillnaによる補完を実装しています。欠損の意味に応じて削除・固定値・平均値などのルールを選ぶ形が共通しています。

欠損値処理は、まずisnaでどこが欠けているか確認し、不要ならdropna、残す必要があるならfillnaで補完する流れが基本です。

## 3人の実例

### 事例1

- 前提：Pandas入門記事の実装者
- 実践：CSVを読み込み、isnaで欠損数を確認し、dropnaとfillnaによる削除・補完を実装している。
- 結果：欠損検出・削除・補完を実装

### 事例2

- 前提：欠損処理の実装者
- 実践：欠損行の削除、固定値・平均値補完、欠損率確認まで一連の処理を実装している。
- 結果：削除と補完を使い分け

### 事例3

- 前提：データ分析学習の実装者
- 実践：実務データの欠損・表記揺れ・重複を確認し、pandasで削除や置換を行う前処理を整理している。
- 結果：欠損を確認して対処

3例では、欠損値を見つけてから削除か補完を選んでいます。単にNaNを消すのではなく、その列の意味や欠損率を確認してルールを決めることが、業務データでは重要です。

## 実例ブログ・口コミ

### 1. haruhiro1020さんの実例

CSVを読み込み、isnaで欠損数を確認し、dropnaとfillnaによる削除・補完を実装している。

> 欠損値とは， データが存在しない状態 を指します．

欠損の検出と処理を分けると、誤って必要な行を消すリスクを減らせます。

[引用元を見る](https://zenn.dev/haruhiro1020/articles/b5d73357a4b417)

### 2. zhao-xyさんの実例

欠損行の削除、固定値・平均値補完、欠損率確認まで一連の処理を実装している。

> 欠損率のチェックや可視化と組み合わせるとさらに効果的

欠損の検出と処理を分けると、誤って必要な行を消すリスクを減らせます。

[引用元を見る](https://qiita.com/zhao-xy/items/0b0bc228dfcfccff0790)

### 3. korokoro_26さんの実例

実務データの欠損・表記揺れ・重複を確認し、pandasで削除や置換を行う前処理を整理している。

> 欠損値がある場合、意図しない分析結果やプログラムのエラーにつながることがあります。

欠損の検出と処理を分けると、誤って必要な行を消すリスクを減らせます。

[引用元を見る](https://zenn.dev/korokoro_26/articles/00e1ce478ecfad)

## pandasのデータクレンジングを学ぶなら

**Gemini x Python データ分析 (2) pandas データ集計＆分析の自動化**

- pandasを使ったデータ集計の自動化
- データ整形・結合・抽出
- CSVデータの集計と分析
- Geminiを使ったコード作成と分析効率化

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="pandas自動化講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fgemini-python-data-analysis-pandas%2F&subId1=python-automation&subId2=pandas-missing-values&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

pandasの欠損処理は、isnaで確認し、dropnaで削除するかfillnaで補完するかを決めるのが基本です。処理ルールをコード化すれば毎回同じ前処理を再現できます。

## あわせて読みたい

[pandas業務自動化の記事をまとめて見る](/category/pandas/)
