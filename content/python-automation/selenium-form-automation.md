---
site: "python-automation"
title: "Seleniumでフォーム入力を自動化する方法｜3つの実例"
description: "PythonとSeleniumでフォーム入力を自動化する方法を3つの実例から整理します。入力欄をfind_elementで取得し、clear・send_keysで値を入れ、送信ボタンをclickする基本パターンと、多項目フォームを効率化する考え方を解説します。"
slug: "selenium-form-automation"
date: "2026-09-21"
updated: "2026-09-21"
author: "Python自動化ラボ編集部"

category: "browser-automation"
categoryName: "ブラウザ自動化"
parentHubUrl: "/category/browser-automation/"

qualification: ""
qualificationName: ""
qualificationHubUrl: ""

articleType: "hands-on"
searchIntent: "informational"
hypothesis: "Seleniumの要素取得とsend_keysを使えば、Webフォームへの定型入力を自動化できる"

udemyCourseTitle: "Selenium WebDriver × Pythonで始めるUIテスト自動化"
udemyCourseUrl: "https://www.udemy.com/course/selenium-webdriver-pythonui/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fselenium-webdriver-pythonui%2F&subId1=python-automation&subId2=selenium-form-automation&subId3=hands-on"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"

primaryCtaLabel: "Selenium自動化講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fselenium-webdriver-pythonui%2F&subId1=python-automation&subId2=selenium-form-automation&subId3=hands-on"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"

featured: false
stickyCta: true
noindex: false
---

# Seleniumでフォーム入力を自動化する方法｜3つの実例

## 結論

3件ともSeleniumでフォームの入力要素を特定し、send_keysで値を入力してボタン操作まで自動化しています。項目数が多い定型フォームほど、人の繰り返し入力をコードへ置き換える効果が大きいことが確認できます。

入力項目が多いフォームでは、各フィールドのセレクタと入力値を整理し、find_element→clear→send_keysを繰り返すだけでも手入力を大きく減らせます。テスト環境で送信まで確認してから本番へ適用します。

## 3人の実例

### 事例1

- 前提：フォームテストの実装者
- 実践：項目数の多いフォームの手入力を減らすため、XPathで入力欄を取得し、clear・send_keys・clickまで自動化している。
- 結果：フォーム入力を一発実行

### 事例2

- 前提：問い合わせフォーム開発者
- 実践：問い合わせフォームの複数inputへsend_keysで値を入れ、submitボタンのクリックまで自動化している。
- 結果：フォーム入力・送信テストを自動化

### 事例3

- 前提：Selenium入門の実装者
- 実践：会社の交通費申請を題材に、ログイン情報の入力やフォーム操作をSeleniumで自動化している。
- 結果：交通費申請の入力を自動化

3例では、フォーム入力を特別な処理として扱わず、入力欄の特定と値の投入の繰り返しとして実装しています。項目が増えたら、セレクタと値を辞書や設定ファイルへ分離すると保守しやすくなります。

送信まで自動化する場合は、確認画面やバリデーションエラーも含めて期待結果を確認し、誤送信を防ぐ仕組みを入れる必要があります。

## 実例ブログ・口コミ

### 1. usayamadausakoさんの実例

項目数の多いフォームの手入力を減らすため、XPathで入力欄を取得し、clear・send_keys・clickまで自動化している。

> そこで、フォームの入力だけでも一発で実行する方法をまとめました。

人が同じ項目へ毎回入力する作業を、セレクタと入力値の組み合わせへ置き換えている点が参考になります。

[引用元を見る](https://qiita.com/usayamadausako/items/43cdaea7eda5f4affe8b)

### 2. outsider-kithyさんの実例

問い合わせフォームの複数inputへsend_keysで値を入れ、submitボタンのクリックまで自動化している。

> 手動で何度もinput要素に入力して、select要素を選択して、submitボタンを押して

人が同じ項目へ毎回入力する作業を、セレクタと入力値の組み合わせへ置き換えている点が参考になります。

[引用元を見る](https://qiita.com/outsider-kithy/items/861049a22152b2f6a6fb)

### 3. harumaki_dayoさんの実例

会社の交通費申請を題材に、ログイン情報の入力やフォーム操作をSeleniumで自動化している。

> 繰り返し同じ処理をするものを自動化させましょう。

人が同じ項目へ毎回入力する作業を、セレクタと入力値の組み合わせへ置き換えている点が参考になります。

[引用元を見る](https://qiita.com/harumaki_dayo/items/7f925b24e902e24442c9)

## フォーム操作をSeleniumで学ぶなら

**Selenium WebDriver × Pythonで始めるUIテスト自動化**

- Selenium UI自動化に関する内容をUdemy公式講座ページで確認

- 今回の記事テーマとUdemy DB上の講座トピックが一致
- 記事で扱った内容を体系的に確認したい人向け
- 手を動かしながら学ぶ用途に合わせやすい

:::cta label="Selenium自動化講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fselenium-webdriver-pythonui%2F&subId1=python-automation&subId2=selenium-form-automation&subId3=hands-on" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

Seleniumのフォーム自動入力は、要素をfind_elementで取得し、必要ならclearしてsend_keysで値を入れ、最後にclickで送信するのが基本です。項目を設定化し、テスト環境で確認してから運用へ入れると安全です。

## あわせて読みたい

[ブラウザ自動化の記事をまとめて見る](/category/browser-automation/)
