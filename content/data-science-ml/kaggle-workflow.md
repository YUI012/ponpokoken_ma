---
site: "data-science"
title: "Kaggleコンペはどんな流れ？EDAから提出までを整理"
description: "Kaggleコンペの基本フローは「問題と評価指標の確認→データ理解・EDA→前処理・特徴量作成→モデル学習→CVで評価→テスト予測→submission作成→提出」です。初心者はこの流れを一度固定し、各工程を少しずつ改善すると迷いにくくなります。"
slug: "kaggle-workflow"
date: "2026-09-23"
updated: "2026-09-24"
author: "データサイエンス・機械学習ラボ編集部"
category: "model-evaluation"
categoryName: "モデル評価・改善"
parentHubUrl: "/category/model-evaluation/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "roadmap"
searchIntent: "20〜34歳・学生・若手エンジニア・分析職・未経験からデータサイエンティストを目指す会社員。現在は「Python・pandas・機械学習を一通り学んだが、実データでの経験が少ない」という状態で、教材では理解できても、実際のコンペでEDA・特徴量・評価・提出をどう進めるか分からない。最終的にKaggleで1コンペを完走し、改善プロセスを説明できるNotebookを作るために検索している。"
hypothesis: "20〜34歳・学生・若手エンジニア・分析職・未経験からデータサイエンティストを目指す会社員なら、Kaggleはデータ確認→EDA→前処理→ベースライン→評価→提出の順を固定すると迷いにくい"
udemyCourseTitle: "Pythonデータ分析&機械学習パーフェクトスターター"
udemyCourseUrl: "https://www.udemy.com/course/kagglepython/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fkagglepython%2F&subId1=data-science"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "Udemy講座を確認する"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fkagglepython%2F&subId1=data-science"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# Kaggleコンペはどんな流れ？EDAから提出までを整理

## 結論

Kaggleコンペの基本フローは「問題と評価指標の確認→データ理解・EDA→前処理・特徴量作成→モデル学習→CVで評価→テスト予測→submission作成→提出」です。初心者はこの流れを一度固定し、各工程を少しずつ改善すると迷いにくくなります。

## 3人の実例

### 事例1
- 実践者：ひろゆー
- 取り組み：Titanicで特徴量作成、モデル作成、学習・評価、予測・提出を順に実施。
- 確認結果：Kaggleの一連の工程を4段階に整理して完走した初心者例。
- 判断材料：Kaggleの一連の工程を4段階に整理して完走した初心者例。


### 事例2
- 実践者：kito2718
- 取り組み：TitanicでEDA、特徴量エンジニアリング、5モデル比較、5-Fold CV、提出まで実施。
- 確認結果：EDAからCV、提出までを1つのワークフローとして扱う実践例。
- 判断材料：EDAからCV、提出までを1つのワークフローとして扱う実践例。


### 事例3
- 実践者：ac-yasushi
- 取り組み：TitanicでJoin Competition後、データ確認・コード作成・CSV出力・Submit・Leaderboard確認まで実施。
- 確認結果：モデルを作るだけでなく、提出ファイル形式とSubmitまで含めてKaggleの作業になる。
- 判断材料：モデルを作るだけでなく、提出ファイル形式とSubmitまで含めてKaggleの作業になる。


## 実例から分かること

- EDAの前に目的変数と評価指標を確認する。
- モデル比較はCVを基準にして、Leaderboardだけで選ばない。
- 提出CSVの形式確認までをワークフローに含める。

## 実例

### 1. Titanicで特徴量作成、モデル作成、学習・評価、予測・提出を順に実施。

Titanicで特徴量作成、モデル作成、学習・評価、予測・提出を順に実施。
Kaggleの一連の工程を4段階に整理して完走した初心者例。

> 最初に行ったのは、データの読み込みと特徴量（feature）の確認。性別（Sex）によって生存率が大きく異なっていたため、「これは効きそうだ」と直感。

Kaggleの一連の工程を4段階に整理して完走した初心者例。

[引用元を見る](https://zenn.dev/headwaters/articles/93286f1c8d8073)

### 2. TitanicでEDA、特徴量エンジニアリング、5モデル比較、5-Fold CV、提出まで実施。

TitanicでEDA、特徴量エンジニアリング、5モデル比較、5-Fold CV、提出まで実施。
EDAからCV、提出までを1つのワークフローとして扱う実践例。

> その後、名前から敬称（Title）を抽出、家族の人数から新しい特徴量(家族サイズ)を作ったりで、5つのモデルで交差検証(5-Fold CV)をやってみた、その一連の流れのまとめ。

EDAからCV、提出までを1つのワークフローとして扱う実践例。

[引用元を見る](https://zenn.dev/rg687076/articles/zenn_260627_0000_01_first_submission)

### 3. TitanicでJoin Competition後、データ確認・コード作成・CSV出力・Submit・Leaderboard確認まで実施。

TitanicでJoin Competition後、データ確認・コード作成・CSV出力・Submit・Leaderboard確認まで実施。
モデルを作るだけでなく、提出ファイル形式とSubmitまで含めてKaggleの作業になる。

> 前述のDataタブに提出の形式が書かれているのでその形式に沿った学習結果のファイルを出力して上のページでSubmitする。

モデルを作るだけでなく、提出ファイル形式とSubmitまで含めてKaggleの作業になる。

[引用元を見る](https://qiita.com/ac-yasushi/items/aaa5aa7c8307986ebe78)

## 判断するときに外せない条件

- 評価指標とsubmission形式を最初に確認すること
- EDA→前処理→特徴量→モデルをNotebook上で区切ること
- CV結果と提出スコアを記録して改善理由を残すこと

注意点は次の通りです。

- 3事例は同一条件・同一データで比較した実験ではありません。
- 引用は各元ページの連続した原文で、途中の文字数切断はしていません。
- 3事例が掲載Udemy講座を受講したと確認できたわけではありません。

## Kaggle・MLOpsを体系的に学ぶなら

**Pythonデータ分析&機械学習パーフェクトスターター**

- Kaggleコンペはどんな流れ？EDAから提出までを整理に近い基礎テーマを順序立てて学ぶ候補として確認できます。
- 今回の3実例から分かった「EDAの前に目的変数と評価指標を確認する。」を、実践前に整理する用途で使えます。
- 3事例から講座そのものの効果を直接推定することはできません。

:::cta label="Udemy講座を確認する" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fkagglepython%2F&subId1=data-science" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

初心者は毎回同じ型で進めると安定します。最初にRules・評価指標・データ列・提出形式を確認し、EDA、前処理、特徴量、ベースライン、CV、予測、提出までを1つのNotebookで完走してください。次の周回から「特徴量を1つ変える」「モデルを1つ変える」のように改善点を限定すると比較しやすくなります。

## あわせて読みたい

[モデル評価・改善の記事をまとめて見る](/category/model-evaluation/)
