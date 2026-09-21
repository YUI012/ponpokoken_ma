---
site: "python-automation"
title: "pytestをGitHub Actionsで自動実行する方法｜3つの実例"
description: "pytestをGitHub Actionsで自動実行する方法を3つの実例から整理します。pushやPull RequestをトリガーにPythonテストを実行し、CIで失敗を検出する基本構成を確認します。"
slug: "pytest-github-actions-ci"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "python-basics"
categoryName: "Python基礎"
parentHubUrl: "/category/python-basics/"

qualification: ""
qualificationName: ""
qualificationHubUrl: ""

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "pytestとGitHub Actionsを組み合わせれば、Pythonコードのテストをpush時などに自動実行できる"

udemyCourseTitle: "Pytestによるテストの基礎とGitHubにおける自動テストCIの実行"
udemyCourseUrl: "https://www.udemy.com/course/pytest-github-ci/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpytest-github-ci%2F&subId1=python-automation&subId2=pytest-github-actions-ci&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Pytest CI講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpytest-github-ci%2F&subId1=python-automation&subId2=pytest-github-actions-ci&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# pytestをGitHub Actionsで自動実行する方法｜3つの実例

## 結論

3件ともGitHub Actions上でpytestを実行し、pushやPull Requestを契機に自動テストを走らせています。ローカルだけでなくGitHub側でも同じ確認を自動化できます。

GitHub Actionsへpytestを組み込むと、ローカルでテストを忘れても、pushやPull Requestのタイミングで自動チェックできます。

## 3人の実例

### 事例1
- 前提：初心者としてCIを実装
- 実践：mainへのpushやPull Requestを契機にGitHub Actionsでpytestを自動実行している。
- 結果：push時の自動テスト
### 事例2
- 前提：Docker CI実装
- 実践：Docker環境でpytestを実行し、GitHub Actionsからpush・PR時に自動テストとカバレッジを走らせている。
- 結果：CIでpytest実行
### 事例3
- 前提：GitHub Actions運用
- 実践：pytestとLocalStackをGitHub Actions上で動かし、テストが通らないとマージできない仕組みを作っている。
- 結果：マージ前テストを自動化

3例の最小構成は共通しており、リポジトリをcheckoutし、Python環境と依存パッケージを用意し、最後にpytestを実行します。DockerやLocalStackは必要な場合だけ追加すればよく、最初は通常のpytest実行で十分です。

実運用で重要なのは、ローカルだけに入っている依存を残さないことです。CIはまっさらな環境から始まるため、requirementsやpyprojectへ依存関係を明示する必要があります。

## 実例ブログ・口コミ

### 1. tosane932さんの実例

mainへのpushやPull Requestを契機にGitHub Actionsでpytestを自動実行している。

> コードの変更をGitHubへ反映したときに、自動テストを実行して問題がないか確認する仕組み

CIではローカル環境の暗黙の依存がなくなるため、再現可能なテスト環境を作れているかも確認できます。

[引用元を見る](https://qiita.com/tosane932/items/afd3f96a0b7a1bc1d773)
### 2. ebasuke0226さんの実例

Docker環境でpytestを実行し、GitHub Actionsからpush・PR時に自動テストとカバレッジを走らせている。

> pytest によるユニットテストとカバレッジが実行される

CIではローカル環境の暗黙の依存がなくなるため、再現可能なテスト環境を作れているかも確認できます。

[引用元を見る](https://qiita.com/ebasuke0226/items/2852d8082955eca3ad7a)
### 3. dogfortuneさんの実例

pytestとLocalStackをGitHub Actions上で動かし、テストが通らないとマージできない仕組みを作っている。

> 自動でテストを回してPassしないとマージできないようにしました。

CIではローカル環境の暗黙の依存がなくなるため、再現可能なテスト環境を作れているかも確認できます。

[引用元を見る](https://zenn.dev/dogfortune/articles/f2edc5b660158d)

## pytestとCIをまとめて学ぶなら

**Pytestによるテストの基礎とGitHubにおける自動テストCIの実行**

- pytestの基礎
- GitHub上での自動テストCIを扱う

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 初心者が手を動かしながら学ぶ用途に合わせやすい
- 記事で扱った内容を体系的に確認したい人向け

:::cta label="Pytest CI講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fpytest-github-ci%2F&subId1=python-automation&subId2=pytest-github-actions-ci&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

pytestとGitHub Actionsを組み合わせれば、pushやPull Requestごとに自動テストできます。最初はcheckout→Pythonセットアップ→依存導入→pytestの4段階で構成し、必要に応じてDockerやカバレッジを追加すると整理しやすいです。

## あわせて読みたい

[Python基礎の記事をまとめて見る](/category/python-basics/)
