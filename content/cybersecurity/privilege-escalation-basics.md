---
site: "cybersecurity"
title: "特権昇格とは？ローカル権限と管理者権限の違いを安全に学ぶ"
description: "特権昇格 とはで迷う方向けに、3つの実例・解説を比較し、成立する条件と注意点を分けて整理します。Udemy講座は本文の疑問を解決した後の学習手段として紹介し、次に何を学ぶか判断できる形にまとめます。"
slug: "privilege-escalation-basics"
date: "2026-09-21"
updated: "2026-09-21"
author: "サイバーセキュリティ研究所編集部"
category: "pentest"
categoryName: "ペネトレーションテスト"
parentHubUrl: "/category/pentest/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "comparison"
searchIntent: "comparison"
hypothesis: "特権昇格は単発テクニックではなく、権限境界の設定ミスを理解するテーマとして学ぶべき。"
udemyCourseTitle: "〖サイバーセキュリティ 実践〗Boot2Root CTFチャレンジで学ぶハッキングの手口とローカル特権昇格"
udemyCourseUrl: "https://www.udemy.com/course/boot2root-easy/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fboot2root-easy%2F&subId1=cybersecurity&subId2=privilege-escalation-basics&subId3=comparison"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "Boot2Root講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fboot2root-easy%2F&subId1=cybersecurity&subId2=privilege-escalation-basics&subId3=comparison"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# 特権昇格とは？ローカル権限と管理者権限の違いを安全に学ぶ

## 結論

特権昇格は単発テクニックではなく、権限境界の設定ミスを理解するテーマとして学ぶべき。 ただし、確認できた事例から一律に言える範囲には条件があります。

初期アクセス後の列挙と権限昇格を追う実例はあるが、設定ミス以外の昇格要因もあるため仮説を条件付きで支持する。

## 3人の実例

### 事例1

- 前提：TryHackMeでLinux特権昇格を学習
- 環境・方法：初期アクセス後にhostname、uname、ps、env、sudo -l、idなどで列挙
- 結果：特権昇格前の情報収集と確認項目を整理

### 事例2

- 前提：初心者としてVulnHubのBoot2Root問題へ挑戦
- 環境・方法：情報収集から侵入、権限昇格まで一台のマシンを攻略
- 結果：入口から特権昇格まで攻撃経路を連続して確認

### 事例3

- 前提：TryHackMeを使う7日間ハンズオンへ取り組む
- 環境・方法：Nmapで脆弱性を探しMetasploitで有効なエクスプロイトを探す
- 結果：発見から悪用可能性確認までの流れを体験

## 特権昇格は権限境界が破れる理由を調べる

特権昇格は、一般ユーザーなど低い権限で得た足場から、より強い権限へ移ることです。学習では、いきなりエクスプロイトを探すのではなく、現在のユーザー、sudo設定、実行中プロセス、ファイル権限などを列挙して権限境界を確認します。

設定不備は重要な学習材料ですが、特権昇格の原因はそれだけではありません。脆弱なソフトウェアや資格情報など複数の経路があるため、「権限境界がなぜ破れたか」を説明できるようにするのが目的です。

## 実例3件の学習・検証例

### 1. 特権昇格前の情報収集と確認項目を整理

TryHackMeでLinux特権昇格を学習。初期アクセス後にhostname、uname、ps、env、sudo -l、idなどで列挙。特権昇格前の情報収集と確認項目を整理。

この事例では、演習環境のWriteUpであり実システムへの手順ではないという条件もあります。

> 覚えておきたい代表的なコマンドやファイルは以下。

この事例からは、特権昇格前の情報収集と確認項目を整理という具体的な判断材料を確認できます。

[引用元を見る](https://qiita.com/michio_birder/items/76338b40ef17878b4f92)

### 2. 入口から特権昇格まで攻撃経路を連続して確認

初心者としてVulnHubのBoot2Root問題へ挑戦。情報収集から侵入、権限昇格まで一台のマシンを攻略。入口から特権昇格まで攻撃経路を連続して確認。

この事例では、CTF用の意図的に脆弱な環境での検証という条件もあります。

> CTFのBoot2Root問題を練習したいと思ったので、以前から気になっていたVulnHubのマシンを攻略していきます！

この事例からは、入口から特権昇格まで攻撃経路を連続して確認という具体的な判断材料を確認できます。

[引用元を見る](https://qiita.com/8omp/items/a44927af5edee43ef085)

### 3. 発見から悪用可能性確認までの流れを体験

TryHackMeを使う7日間ハンズオンへ取り組む。Nmapで脆弱性を探しMetasploitで有効なエクスプロイトを探す。発見から悪用可能性確認までの流れを体験。

この事例では、演習用ターゲットでの学習という条件もあります。

> 見つかった脆弱性に対して有効なエクスプロイトをmetasploitから探す

この事例からは、発見から悪用可能性確認までの流れを体験という具体的な判断材料を確認できます。

[引用元を見る](https://zenn.dev/cfjp/articles/f258846c90cf83)

## ローカル特権昇格まで手を動かすなら

**〖サイバーセキュリティ 実践〗Boot2Root CTFチャレンジで学ぶハッキングの手口とローカル特権昇格**

- Boot2Root形式で特権昇格を扱う

- 情報収集から認証情報アクセスまで一連で確認できる

- 設定不備を攻撃経路の一部として理解しやすい

:::cta label="Boot2Root講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fboot2root-easy%2F&subId1=cybersecurity&subId2=privilege-escalation-basics&subId3=comparison" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、特権昇格は単発テクニックではなく、低権限から高権限へ移る権限境界の破れを調べるテーマです。設定ミスは代表例ですが、原因はそれだけに限りません。

## あわせて読みたい

[ペネトレーションテスト](/category/pentest/)
