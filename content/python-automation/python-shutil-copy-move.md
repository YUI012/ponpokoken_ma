---
site: "python-automation"
title: "Pythonでファイルをコピー・移動する方法｜shutilの3実例"
description: "Pythonのshutilでファイルをコピー・移動する方法を3つの実例から整理します。copy・copy2・copytree・moveの違い、pathlibとの組み合わせ、ファイルとフォルダを扱うときの基本パターンと注意点を解説します。"
slug: "python-shutil-copy-move"
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
hypothesis: "shutilを使えば、ファイルやフォルダのコピー・移動処理を自動化できる"

udemyCourseTitle: "独学で身につけるPython〜Windows自動化編〜"
udemyCourseUrl: "https://www.udemy.com/course/python-kaizen-windows/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen-windows%2F&subId1=python-automation&subId2=python-shutil-copy-move&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Windows自動化講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen-windows%2F&subId1=python-automation&subId2=python-shutil-copy-move&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Pythonでファイルをコピー・移動する方法｜shutilの3実例

## 結論

3件ともshutilやpathlibを使ってファイル・ディレクトリのコピーや移動を実装しています。単一ファイルはcopy・copy2、ディレクトリはcopytree、移動はmoveという使い分けが確認できます。

ファイルの複製ならcopyまたはcopy2、フォルダごと複製するならcopytree、元を残さず場所を変えるならmoveが基本です。pathlibでパスを扱うとコピー先フォルダの作成もまとめやすくなります。

## 3人の実例

### 事例1

- 前提：shutil操作の技術メモ
- 実践：shutil.copyfile・copy・copy2・copytree・moveを使い、ファイルとディレクトリのコピー・移動結果を実例で確認している。
- 結果：コピー・移動APIを整理

### 事例2

- 前提：pathlibとshutilの実装者
- 実践：Pathでコピー元・コピー先を扱い、shutil.copy2・copytree・moveを用途別に使い分ける構成を整理している。
- 結果：コピー・移動の使い分けを整理

### 事例3

- 前提：Python学習の技術メモ
- 実践：shutil.copyでファイルを複製し、glob.globで対象パスを取得する基本的なファイル操作を実装している。
- 結果：shutil.copyでファイルを複製

3例では、shutilの各関数を用途別に分けています。copy2は更新日時などのメタ情報も可能な範囲で保持し、moveは同一ドライブだけでなく異なる場所への移動にも使えます。

自動化では、コピー先が既に存在する場合の動作や、移動後に元ファイルが消えることを前提に処理を設計する必要があります。

## 実例ブログ・口コミ

### 1. flcn-xさんの実例

shutil.copyfile・copy・copy2・copytree・moveを使い、ファイルとディレクトリのコピー・移動結果を実例で確認している。

> ファイルおよびディレクトリの移動は、shutil.moveで行う。

コピーと移動を同じものとして扱わず、元ファイルを残すかどうかでAPIを選ぶ視点が参考になります。

[引用元を見る](https://qiita.com/flcn-x/items/e10fc4c4f3ddc404bc7a)

### 2. nozomi2025さんの実例

Pathでコピー元・コピー先を扱い、shutil.copy2・copytree・moveを用途別に使い分ける構成を整理している。

> Python でファイルの コピー・移動・削除 を行うとき、

コピーと移動を同じものとして扱わず、元ファイルを残すかどうかでAPIを選ぶ視点が参考になります。

[引用元を見る](https://qiita.com/nozomi2025/items/1cc9df78e59e5e75ee2e)

### 3. tubaki_k05さんの実例

shutil.copyでファイルを複製し、glob.globで対象パスを取得する基本的なファイル操作を実装している。

> shutil.copyは第一引数のパスを第二引数のパスにコピーする。

コピーと移動を同じものとして扱わず、元ファイルを残すかどうかでAPIを選ぶ視点が参考になります。

[引用元を見る](https://qiita.com/tubaki_k05/items/e41196a19fad604b4afc)

## ファイル操作をPythonで自動化するなら

**独学で身につけるPython〜Windows自動化編〜**

- ファイル・フォルダ自動化に関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Windows自動化講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen-windows%2F&subId1=python-automation&subId2=python-shutil-copy-move&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

shutilを使えば、ファイル・フォルダのコピーと移動をPythonで自動化できます。単一ファイルはcopy2、ディレクトリはcopytree、移動はmoveを基本にし、pathlibでパスとコピー先フォルダを管理すると扱いやすくなります。

## あわせて読みたい

[ファイル操作の記事をまとめて見る](/category/file-operations/)
