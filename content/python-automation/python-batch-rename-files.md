---
site: "python-automation"
title: "Pythonでファイル名を一括変更する方法｜3つの実例"
description: "Pythonでファイル名を一括変更する方法を3つの実例から整理します。globで対象ファイルを取得し、os.renameで連番化・文字列削除・規則的なリネームを行う基本手順と、元に戻せない変更を避ける注意点を解説します。"
slug: "python-batch-rename-files"
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
hypothesis: "Pythonを使えば、複数ファイルの名前を規則に沿って一括変更できる"

udemyCourseTitle: "独学で身につけるPython〜Windows自動化編〜"
udemyCourseUrl: "https://www.udemy.com/course/python-kaizen-windows/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen-windows%2F&subId1=python-automation&subId2=python-batch-rename-files&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Windows自動化講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen-windows%2F&subId1=python-automation&subId2=python-batch-rename-files&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Pythonでファイル名を一括変更する方法｜3つの実例

## 結論

3件ともglobなどで複数ファイルを列挙し、os.renameで規則に沿って名前を一括変更しています。連番付与や先頭文字削除など、単純なルールであれば短いPythonスクリプトでまとめて処理できます。

一括リネームは短いコードでできますが、失敗すると元に戻しにくい処理です。実行前に変更後の名前をprintで確認し、コピーしたフォルダでテストしてからos.renameを実行する方が安全です。

## 3人の実例

### 事例1

- 前提：仕事効率化の入門実装
- 実践：globでpngファイルを取得し、enumerateで連番を作り、os.renameでicon1.pngのような名前へ一括変更している。
- 結果：大量ファイルを連番リネーム

### 事例2

- 前提：ファイル操作の実装者
- 実践：globでjpg一覧を取得し、enumerateとformatで001形式の連番を作ってos.renameで一括変更している。
- 結果：桁合わせ連番へ一括変更

### 事例3

- 前提：大量ファイルのリネーム実装者
- 実践：親フォルダ内の大量ファイルをglobで取得し、ファイル名の先頭から指定文字数を削除してos.renameで一括変更している。
- 結果：先頭文字列を一括削除

3例では、globで対象を絞り、for文の中で新しい名前を作ってos.renameしています。違うのは新しい名前の作り方だけで、連番、先頭数文字の削除、文字列置換などへ同じ型を応用できます。

業務では、同じ名前が生成されないか、拡張子まで誤って変えないか、処理順で名前が衝突しないかを先に確認する必要があります。

## 実例ブログ・口コミ

### 1. miyazakiknaさんの実例

globでpngファイルを取得し、enumerateで連番を作り、os.renameでicon1.pngのような名前へ一括変更している。

> シンプル、且つ、簡単に大量のファイル名を一括変更できるので個人的に重宝しております。

変更ルールだけ差し替えれば、同じループ構造をさまざまな一括リネームへ応用できます。

[引用元を見る](https://qiita.com/miyazakikna/items/b9c6d6d83ebcd529afd7)

### 2. coffee_g9さんの実例

globでjpg一覧を取得し、enumerateとformatで001形式の連番を作ってos.renameで一括変更している。

> 新しいファイル_001.jpg、新しいファイル_002.jpg...と桁合わせした連番になります。

変更ルールだけ差し替えれば、同じループ構造をさまざまな一括リネームへ応用できます。

[引用元を見る](https://qiita.com/coffee_g9/items/f9ba1ad15709c07623ed)

### 3. norariclさんの実例

親フォルダ内の大量ファイルをglobで取得し、ファイル名の先頭から指定文字数を削除してos.renameで一括変更している。

> すんごい大量のファイルの、名前を、頭から指定した文字数だけ削除したい

変更ルールだけ差し替えれば、同じループ構造をさまざまな一括リネームへ応用できます。

[引用元を見る](https://qiita.com/noraricl/items/be7bf3f7a8040d00deca)

## ファイル・フォルダ操作を学ぶなら

**独学で身につけるPython〜Windows自動化編〜**

- ファイル・フォルダ自動化に関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Windows自動化講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpython-kaizen-windows%2F&subId1=python-automation&subId2=python-batch-rename-files&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Pythonの一括リネームは、globで対象を取得し、新しい名前を生成してos.renameするのが基本です。実行前に変更予定を表示し、バックアップしたテスト用フォルダで確認してから本番へ適用すると安全です。

## あわせて読みたい

[ファイル操作の記事をまとめて見る](/category/file-operations/)
