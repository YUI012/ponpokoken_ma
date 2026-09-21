---
site: "python-automation"
title: "PythonでDiscord Botを作る方法｜discord.pyの3実例"
description: "PythonでDiscord Botを作る方法を3つの実例から整理します。Developer PortalでBotを作成し、discord.pyとトークンを設定して、コマンド応答やメッセージ返信を自動化する基本手順を解説します。"
slug: "python-discord-bot"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"
category: "mail-report"
categoryName: "メール・レポート自動化"
parentHubUrl: "/category/mail-report/"
articleType: "hands-on"
searchIntent: "informational"
hypothesis: "PythonでDiscord Botを作れば、定型通知やコマンド応答を自動化できる"
udemyCourseTitle: "Develop Discord Bots in Python - Ultimate Course"
udemyCourseUrl: "https://www.udemy.com/course/develop-discord-bots-in-python/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevelop-discord-bots-in-python%2F&subId1=python-automation&subId2=python-discord-bot&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "Discord Bot講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevelop-discord-bots-in-python%2F&subId1=python-automation&subId2=python-discord-bot&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# PythonでDiscord Botを作る方法｜discord.pyの3実例

## 結論

3件ともDiscord Botを作成し、discord.py系ライブラリとBotトークンを使ってPythonからメッセージ応答を実装しています。

最初はDeveloper PortalでBotを作成し、トークンを環境変数へ入れ、discord.pyで起動してhelloコマンドへ返信するだけで十分です。

## 3人の実例

### 事例1

- 前提：Discord Bot開発者
- 実践：discord.pyとpython-dotenvでスラッシュコマンドhelloへ返信するBotを実装している。
- 結果：スラッシュコマンド応答を実装

### 事例2

- 前提：Discord Bot入門実装者
- 実践：commands.Botを使い!helloコマンドへ返信する初心者向けBotを実装している。
- 結果：prefix command応答を実装

### 事例3

- 前提：個人用Bot実装者
- 実践：discord.Clientでメンションを検知しランダム返信するBotを実装している。
- 結果：メンションへの自動返信を実装

Discord側のBot作成とPythonコードを分け、動作後に定型通知やスラッシュコマンドへ広げる流れが共通しています。

## 実例ブログ・口コミ

### 1. dragonnnさんの実例

discord.pyとpython-dotenvでスラッシュコマンドhelloへ返信するBotを実装している。

> チャンネルで/helloと打つと、Botが挨拶を返してくれるはずです！

まず1つの応答だけを実装してから機能を増やす進め方が参考になります。

[引用元を見る](https://qiita.com/dragonnn/items/2f2e87d87204958ffaa2)

### 2. Aizardさんの実例

commands.Botを使い!helloコマンドへ返信する初心者向けBotを実装している。

> discord.pyを使って簡単なDiscord botを作成する方法を紹介します。

まず1つの応答だけを実装してから機能を増やす進め方が参考になります。

[引用元を見る](https://qiita.com/Aizard/items/56c6bcec1bbac4e787e2)

### 3. shown_itさんの実例

discord.Clientでメンションを検知しランダム返信するBotを実装している。

> メンションするとあらかじめ設定された数パターンの中からランダムに返信を返すDiscord Botを実装します。

まず1つの応答だけを実装してから機能を増やす進め方が参考になります。

[引用元を見る](https://qiita.com/shown_it/items/6e7fb7777f45008e0496)

## Discord Bot開発を体系的に学ぶなら

**Develop Discord Bots in Python - Ultimate Course**

- Discord Botに関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け

:::cta label="Discord Bot講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdevelop-discord-bots-in-python%2F&subId1=python-automation&subId2=python-discord-bot&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Discord Botは、Bot作成→token設定→discord.py導入→イベント/コマンド実装→起動の順で作れます。

## あわせて読みたい

[メール・レポート自動化の記事をまとめて見る](/category/mail-report/)
