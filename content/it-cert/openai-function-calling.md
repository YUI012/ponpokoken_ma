---
title: "【OpenAI Function Calling】AIに外部ツールまで勝手に使わせられるんじゃないか？3人の検証"
description: "【OpenAI Function Calling】AIに外部ツールまで勝手に使わせられるんじゃないか？3人の検証 実際に使った3人の事例から、できること・難しいこと・使いどころを整理します。"
date: "2026-09-17"
updated: "2026-09-17"
author: "AIツール研究所編集部"
tags: ["FunctionCalling", "OpenAIAPI", "AIエージェント", "生成AI", "Udemy"]
featured: false
primaryCtaLabel: "【初心者向け】生成系AI時代のPython×自動化！Function Callingを使って煩雑な作業を自動化しよう！"
primaryCtaUrl: "https://www.udemy.com/course/ai-python-function-calling/"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
stickyCta: true
noindex: false
---
## 結論

結論、AIが外部処理を無制限に勝手に実行する仕組みではありません。ただし、「どのツールを使うか」「どんな引数を渡すか」をAIに判断させる部分は実装でき、AIエージェントの基礎になります。

「OpenAI Function Callingを使えば、ちょっと無理そうなことまでできるんじゃないか？」という仮説で、実際に手を動かした3人の記事を見てみます。

## Udemy

**【初心者向け】生成系AI時代のPython×自動化！Function Callingを使って煩雑な作業を自動化しよう！**

https://www.udemy.com/course/ai-python-function-calling/

PR：価格・キャンペーン・サービス内容はリンク先でご確認ください。

:::cta label="【初心者向け】生成系AI時代のPython×自動化！Function Callingを使って煩雑な作業を自動化しよう！" url="https://www.udemy.com/course/ai-python-function-calling/" note="PR：価格・キャンペーン・サービス内容はリンク先でご確認ください"
:::

## 3つの実例

| 事例 | 確認できたこと | 出典 |
|---|---|---|
| 1 | 天気取得・計算・現在時刻取得の3つのツールを持たせ | [元記事](https://qiita.com/yakumo_09/items/56476339c1005ac825cc) |
| 2 | 実際に触ってみて初めてわかる挙動がいくつかあった | [元記事](https://qiita.com/ry-na/items/30734da58660d15bf9bb) |
| 3 | 実行すべき関数を判断できるかどうかを確認します。 | [元記事](https://zenn.dev/ryota_09/articles/1b44973515dc4c) |

## 実例ブログ・口コミ

### 1. ブログから確認できたこと

> 天気取得・計算・現在時刻取得の3つのツールを持たせ

https://qiita.com/yakumo_09/items/56476339c1005ac825cc

### 2. ブログから確認できたこと

> 実際に触ってみて初めてわかる挙動がいくつかあった

https://qiita.com/ry-na/items/30734da58660d15bf9bb

### 3. ブログから確認できたこと

> 実行すべき関数を判断できるかどうかを確認します。

https://zenn.dev/ryota_09/articles/1b44973515dc4c

## 改めて結論

- AIは関数自体より呼び出し判断を担う
- 関数説明や引数定義が精度へ影響する
- 外部API連携の土台になる

3人の体験を見ると、**「全部自動でできる」ではなく、「範囲を絞ればかなり実用的にできる」**という見方が近そうです。

## Udemy

**【初心者向け】生成系AI時代のPython×自動化！Function Callingを使って煩雑な作業を自動化しよう！**

https://www.udemy.com/course/ai-python-function-calling/

PR：価格・キャンペーン・サービス内容はリンク先でご確認ください。

:::cta label="【初心者向け】生成系AI時代のPython×自動化！Function Callingを使って煩雑な作業を自動化しよう！" url="https://www.udemy.com/course/ai-python-function-calling/" note="PR：価格・キャンペーン・サービス内容はリンク先でご確認ください"
:::
