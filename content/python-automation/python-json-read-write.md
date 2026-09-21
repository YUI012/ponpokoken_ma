---
site: "python-automation"
title: "PythonでJSONを読み込み・書き込みする方法｜3つの実例"
description: "PythonでJSONを読み込み・書き込みする方法を3つの実例から整理します。json.load・dumpとloads・dumpsの違い、辞書やリストとの変換、UTF-8やindentを使った保存、設定ファイルを更新して再保存する基本手順を解説します。"
slug: "python-json-read-write"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "file-operations"
categoryName: "ファイル操作"
parentHubUrl: "/category/file-operations/"

qualification: ""
qualificationName: ""
qualificationHubUrl: ""

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "Pythonのjsonモジュールを使えば、JSONデータの読み書きと変換を自動化できる"

udemyCourseTitle: "はじめてのPython3。経験0からGUIアプリケーションを作れるまでの基礎力を！"
udemyCourseUrl: "https://www.udemy.com/course/python3_for_beginners/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython3_for_beginners%2F&subId1=python-automation&subId2=python-json-read-write&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Pythonファイル処理講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython3_for_beginners%2F&subId1=python-automation&subId2=python-json-read-write&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# PythonでJSONを読み込み・書き込みする方法｜3つの実例

## 結論

3件ともPython標準のjsonモジュールを使い、JSONファイルをloadでPythonのdict/listへ読み込み、dumpで再びファイルへ保存しています。文字列を扱うloads/dumpsとの使い分けも確認できます。

JSONファイルそのものを扱うならload/dump、JSON文字列を扱うならloads/dumpsと覚えると整理しやすいです。読み込むとPythonの辞書・リストとして操作でき、加工後に再保存できます。

## 3人の実例

### 事例1

- 前提：Python初心者の学習記録
- 実践：json.dumps・loadsで文字列変換、json.dump・loadでファイル読み書きを実装し、sの有無による役割の違いを整理している。
- 結果：JSON変換とファイル読み書きを確認

### 事例2

- 前提：JSON設定ファイルの実装者
- 実践：設定用JSONをjson.loadで読み込み、値を更新し、json.dumpで同じファイルへ保存するクラスを実装している。
- 結果：設定JSONの読み込み・更新を実装

### 事例3

- 前提：Pythonファイル処理の技術メモ
- 実践：input.jsonをjson.loadで読み込み、そのままjson.dumpでoutput.jsonへ書き出す基本例とloads/dumpsの使い分けを説明している。
- 結果：JSONファイルを読み込み別ファイルへ書き出し

3例に共通するのは、JSONを特別なデータとして直接編集するのではなく、いったんPythonのdictやlistへ変換して扱うことです。値を更新した後にdumpすれば、設定ファイルやAPIレスポンスの加工結果をJSONとして保存できます。

日本語を人が読むファイルとして保存する場合は、encoding='utf-8'、indent、ensure_ascii=Falseなどの指定を検討すると可読性を上げられます。

## 実例ブログ・口コミ

### 1. gaku-devlogさんの実例

json.dumps・loadsで文字列変換、json.dump・loadでファイル読み書きを実装し、sの有無による役割の違いを整理している。

> 辞書やリストとJSONとの相互変換は、データのやりとりにおいてよく使われるので

JSONファイルとJSON文字列でload/dumpとloads/dumpsを使い分ける点を押さえると混乱しにくくなります。

[引用元を見る](https://qiita.com/gaku-devlog/items/a89399c52aaf00ffa216)

### 2. akeyi2018さんの実例

設定用JSONをjson.loadで読み込み、値を更新し、json.dumpで同じファイルへ保存するクラスを実装している。

> jsonファイルはWebをはじめ、IoT、アプリケーションの設定などでいろんな場面で使われているため

JSONファイルとJSON文字列でload/dumpとloads/dumpsを使い分ける点を押さえると混乱しにくくなります。

[引用元を見る](https://qiita.com/akeyi2018/items/73847c66bf257209a7c1)

### 3. sachioksgさんの実例

input.jsonをjson.loadで読み込み、そのままjson.dumpでoutput.jsonへ書き出す基本例とloads/dumpsの使い分けを説明している。

> input.jsonというJSON形式のファイルがあるとして、それを読み込みそのままoutput.jsonに

JSONファイルとJSON文字列でload/dumpとloads/dumpsを使い分ける点を押さえると混乱しにくくなります。

[引用元を見る](https://qiita.com/sachioksg/items/135cc9f2fc89632a25fb)

## CSV・JSONのファイル処理を学ぶなら

**はじめてのPython3。経験0からGUIアプリケーションを作れるまでの基礎力を！**

- CSV・XML・JSONの読み書き
- batファイルからPythonスクリプトを実行
- GUIアプリ作成を扱う

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Pythonファイル処理講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython3_for_beginners%2F&subId1=python-automation&subId2=python-json-read-write&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Pythonのjsonモジュールを使えば、JSONファイルをloadでPythonデータへ変換し、加工後にdumpで保存できます。ファイルはload/dump、文字列はloads/dumpsという区別を押さえ、UTF-8やindentも指定すると扱いやすくなります。

## あわせて読みたい

[ファイル操作の記事をまとめて見る](/category/file-operations/)
