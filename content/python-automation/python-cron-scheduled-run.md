---
site: "python-automation"
title: "Pythonをcronで定期実行する方法｜3つの実例"
description: "Pythonをcronで定期実行する方法を3つの実例から整理します。crontabの書式、pythonとスクリプトの絶対パス、ログ出力、Docker内cronなど、手動実行では動くのにcronで失敗する典型原因も解説します。"
slug: "python-cron-scheduled-run"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "batch"
categoryName: "定期処理・バッチ"
parentHubUrl: "/category/batch/"

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "cronへPythonスクリプトを登録すれば、LinuxやmacOSで定期処理を自動実行できる"

udemyCourseTitle: "Learn Python: The Complete Python Automation Course!"
udemyCourseUrl: "https://www.udemy.com/course/pythonautomation/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpythonautomation%2F&subId1=python-automation&subId2=python-cron-scheduled-run&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Python Automation講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpythonautomation%2F&subId1=python-automation&subId2=python-cron-scheduled-run&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Pythonをcronで定期実行する方法｜3つの実例

## 結論

3件ともcron/crontabへPython実行コマンドを登録し、指定時刻でスクリプトを自動実行しています。PATHや権限が手動実行時と異なるため、絶対パスとログ出力が重要です。

cronでの定期実行は、crontabへ時刻と実行コマンドを書くだけですが、python本体とスクリプトを絶対パスにする方がトラブルを減らせます。

## 3人の実例

### 事例1

- 前提：Ubuntuでcronを設定
- 実践：Ubuntuでcronを起動し、crontabにpython3とスクリプトのパスを登録して定期実行している。
- 結果：Pythonプログラムの定期実行を実現

### 事例2

- 前提：MacでSelenium定期実行を構築
- 実践：macOS上でSeleniumスクリプトをcronから起動し、絶対パス指定で定期実行している。
- 結果：cronからブラウザ操作を自動実行

### 事例3

- 前提：Docker上のcron実装者
- 実践：Docker ComposeでcronとPostgreSQLを起動し、定刻にPythonでQiita情報を取得してDB保存している。
- 結果：Python処理とDB保存を定期実行

3例では、cron式の登録に加え、PATH・権限・ログを意識しています。手動で動いてcronだけ失敗する場合は、仮想環境、環境変数、カレントディレクトリを疑うと切り分けしやすくなります。

## 実例ブログ・口コミ

### 1. ganoさんの実例

Ubuntuでcronを起動し、crontabにpython3とスクリプトのパスを登録して定期実行している。

> 以上で、test.pyは定期的に自動実行されるようになりました。

cron専用の実行環境を前提に絶対パスとログを用意する点が参考になります。

[引用元を見る](https://qiita.com/gano/items/802519add83c524e3019)

### 2. kaneyamaさんの実例

macOS上でSeleniumスクリプトをcronから起動し、絶対パス指定で定期実行している。

> コマンドのパスも、実行するファイルのパスも絶対パスで書かなければいけないこと！

cron専用の実行環境を前提に絶対パスとログを用意する点が参考になります。

[引用元を見る](https://qiita.com/kaneyama/items/bfea471a713c93d5b700)

### 3. nsuharaさんの実例

Docker ComposeでcronとPostgreSQLを起動し、定刻にPythonでQiita情報を取得してDB保存している。

> Python ScriptでQiita情報を取得してPostgreSQLへ登録する

cron専用の実行環境を前提に絶対パスとログを用意する点が参考になります。

[引用元を見る](https://qiita.com/nsuhara/items/8ba2595f241d97d62907)

## Pythonの定期実行を学ぶなら

**Learn Python: The Complete Python Automation Course!**

- メール送受信・スケジュールに関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Python Automation講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpythonautomation%2F&subId1=python-automation&subId2=python-cron-scheduled-run&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

cronでPythonを定期実行するなら、crontabへcron式と絶対パス付きコマンドを登録し、標準出力・標準エラーをログへ残す構成が基本です。

## あわせて読みたい

[定期処理・バッチの記事をまとめて見る](/category/batch/)
