---
site: "data-science"
title: "Accuracyだけで分類モデルを評価していい？"
description: "Accuracy だけではだめを3つの実践例から検証。3つの独立した実践例では、Accuracy だけではだめに関連して、目的を絞って小さく実装し、結果を確認しながら改善する流れが共通していた。環境やデータで結果は変わるため条件付きで支持する。"
slug: "classification-metrics"
date: "2026-09-23"
updated: "2026-09-24"
author: "データサイエンス・機械学習ラボ編集部"
category: "machine-learning"
categoryName: "機械学習"
parentHubUrl: "/category/machine-learning/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "beginner"
searchIntent: "22〜36歳・若手データ分析担当・エンジニア・AI学習中の会社員や学生。現在は「機械学習の概要は理解したが、回帰・分類・評価指標の使い分けに自信がない」という状態で、アルゴリズム名は知っていても、どの課題で何を選ぶべきか判断できない。最終的に回帰・分類の代表モデルを比較し、課題に応じてモデルと評価指標を選べるようになるために検索している。"
hypothesis: "22〜36歳・若手データ分析担当・エンジニア・AI学習中の会社員や学生なら、不均衡データではAccuracyだけで判断せず、Precision・Recall・F1など目的に合う指標を見る必要がある"
udemyCourseTitle: "〖Python・初級者向け〗ビジネスの現場で「すぐに使える」データ分析手法をわかりやすく解説"
udemyCourseUrl: "https://www.udemy.com/course/python-analysis/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-analysis%2F&subId1=data-science"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "Udemy講座を確認する"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-analysis%2F&subId1=data-science"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# Accuracyだけで分類モデルを評価していい？

## 結論

Accuracyだけで分類モデルを評価するのは不十分な場合があります。特にクラス不均衡があると、少数派をまったく当てられなくても高いAccuracyが出ることがあります。見逃しを減らしたいならRecall、誤検知を減らしたいならPrecision、両方のバランスを見るならF1など、目的に合わせて複数指標を見る必要があります。

## 3人の実例

### 事例1
- 実践者：ssc-nsakamoto
- 取り組み：がん検診の不均衡データでAccuracyの限界を説明。
- 確認結果：全員を健康と予測して99%でも、がん患者を1人も発見できない例を提示。
- 判断材料：少数派クラスの性能がAccuracyに隠れる問題を具体化。

### 事例2
- 実践者：MetaYuan
- 取り組み：不正取引検知を例にAccuracy・Precision・Recallを整理。
- 確認結果：不均衡データではAccuracyだけを見ると判断を誤る場合があると説明。
- 判断材料：誤検知と見逃しのどちらを重視するかで指標を変える。

### 事例3
- 実践者：Yuki Ashino
- 取り組み：実務の分類モデル開発を背景に評価指標を整理。
- 確認結果：見逃しと誤警報の許容度はタスクで異なるため、指標の意味を理解して選ぶ必要があると説明。
- 判断材料：運用要件から評価指標を選ぶ考え方に直結。

## 実例から分かること

Accuracyは全体の正解率だが、不均衡データでは高く見えやすい。
PrecisionとRecallは誤検知・見逃しという異なる失敗を評価する。
F1はPrecisionとRecallのバランスを見るために使えるが、最終的には運用目的で指標を選ぶ。

## 実例

### 1. がん検診の不均衡データでAccuracyの限界を説明

がん検診の不均衡データでAccuracyの限界を説明。
全員を健康と予測して99%でも、がん患者を1人も発見できない例を提示。

> 99%の正解率ですが、このモデルはがん患者を1人も発見できていません。これが不均衡データにおける Accuracy の問題点です。多数派クラス（健康な人）を正しく当て続けるだけで高スコアが出るため、少数派クラス（がん患者）への予測性能が隠れてしまいます。

少数派クラスの性能がAccuracyに隠れる問題を具体化。

[引用元を見る](https://qiita.com/ssc-nsakamoto/items/84c87ec78fb64960012c)

### 2. 不正取引検知を例にAccuracy・Precision・Recallを整理

不正取引検知を例にAccuracy・Precision・Recallを整理。
不均衡データではAccuracyだけを見ると判断を誤る場合があると説明。

> 重要なポイントは以下です。accuracy は、全体の中でどれだけ正解したかを見る指標。precision は、Positive と予測したものがどれだけ正しかったかを見る指標。recall は、実際の Positive をどれだけ見つけられたかを見る指標。不均衡データでは、accuracy だけを見ると判断を誤ることがある

誤検知と見逃しのどちらを重視するかで指標を変える。

[引用元を見る](https://qiita.com/MetaYuan/items/99a6863191bc8c6c8744)

### 3. 実務の分類モデル開発を背景に評価指標を整理

実務の分類モデル開発を背景に評価指標を整理。
見逃しと誤警報の許容度はタスクで異なるため、指標の意味を理解して選ぶ必要があると説明。

> 評価指標は「モデルの良さ」を測るための道具ですが，指標の意味を取り違えるとモデル改善の方向性を誤ったり，運用上の期待と結果が噛み合わなかったりします．特に二値分類では，単に「当たった/外れた」だけでなく，見逃し（偽陰性）と誤警報（偽陽性）のどちらをどれだけ許容するかがタスクによって異なります．

運用要件から評価指標を選ぶ考え方に直結。

[引用元を見る](https://zenn.dev/okun/articles/5fa3ebc5ce9110)

## 判断するときに外せない条件

- ベースラインを先に作ること
- 学習用と評価用のデータを分けること
- 複数モデルを同じ指標で比較すること

注意点は次の通りです。

- 単一の評価値だけでモデルの良し悪しは決められない。
- 3事例は同一Udemy講座の利用を確認したものではない。

## 回帰・分類を体系的に学ぶなら

**〖Python・初級者向け〗ビジネスの現場で「すぐに使える」データ分析手法をわかりやすく解説**

- ランダムフォレスト分類
- 今回の検索意図に近い分野を、断片的な記事だけでなく順序立てて学ぶ候補にできる
- 実例に共通した『学習用と評価用のデータを分けること』を自分で試す前に、基礎操作や考え方をまとめて確認しやすい
- 3事例がこの講座を受講したと確認できたわけではないため、講座の効果を事例から直接推定してはいけない

:::cta label="Udemy講座を確認する" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-analysis%2F&subId1=data-science" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Accuracyは最初に確認しやすい指標ですが、それだけで判断すると不均衡データや重要な少数クラスの失敗を見落とせます。まず混同行列を確認し、見逃しが問題ならRecall、誤検知が問題ならPrecision、両者のバランスならF1を併記するのが基本です。最終的に重視する指標は、モデルを使う業務で「どの誤りが困るか」から決めるべきです。

## あわせて読みたい

[機械学習の記事をまとめて見る](/category/machine-learning/)
