---
site: "cybersecurity"
title: "Nmap・Burp Suite・Metasploitはどの順で学ぶ？"
description: "Nmap Burp Suite Metasploit 学習 順番で迷う方向けに、3つの実例・解説を比較し、違いと使い分け、再現しやすい考え方を整理します。Udemy講座は本文の疑問を解決した後の学習手段として紹介し、次に何を学ぶか判断できる形にまとめます。"
slug: "nmap-burp-metasploit-study-order"
date: "2026-09-21"
updated: "2026-09-21"
author: "サイバーセキュリティ研究所編集部"
category: "pentest"
categoryName: "ペネトレーションテスト"
parentHubUrl: "/category/pentest/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "beginner"
searchIntent: "informational"
hypothesis: "最初はNmapで発見、BurpでWeb通信理解、Metasploitは後半という順が概念を混同しにくい。"
udemyCourseTitle: "〖情報セキュリティ〗Ethical Hacking：ホワイトハッカー入門"
udemyCourseUrl: "https://www.udemy.com/course/ethical-hacking-jpn1/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fethical-hacking-jpn1%2F&subId1=cybersecurity&subId2=nmap-burp-metasploit-study-order&subId3=beginner"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "Ethical Hacking講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fethical-hacking-jpn1%2F&subId1=cybersecurity&subId2=nmap-burp-metasploit-study-order&subId3=beginner"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# Nmap・Burp Suite・Metasploitはどの順で学ぶ？

## 結論

最初はNmapで発見、BurpでWeb通信理解、Metasploitは後半という順が概念を混同しにくい。

Nmapで発見、BurpでWeb通信を理解、Metasploitで既知脆弱性の検証へ進む実践例を別々に確認できた。

## 3人の実例

### 事例1

- 前提：TryHackMeでNmapからSSH侵入までの流れを実践
- 環境・方法：Nmapでポートとサービスを確認し次の調査対象を絞る
- 結果：Nmapを入口の発見と次の行動を決める工程として利用

### 事例2

- 前提：Kali Linux上でBurp Suiteを学習
- 環境・方法：HTTPリクエストを観察しProxyで傍受・改変を試す
- 結果：通信の仕組みと手動検証を結び付けて理解

### 事例3

- 前提：TryHackMeを使う7日間ハンズオンへ取り組む
- 環境・方法：Nmapで脆弱性を探しMetasploitで有効なエクスプロイトを探す
- 結果：発見から悪用可能性確認までの流れを体験

## Nmap→Burp Suite→Metasploitで役割を分ける

3ツールは役割が違うため、同時に覚えるより「発見→通信理解→悪用可能性の検証」の順に置くと整理しやすくなります。Nmapは開いているポートとサービスを見つけ、次に何を見るかを決める入口です。

Webが対象ならBurp SuiteでHTTPリクエストを観察・変更し、通信とアプリの挙動を理解します。Metasploitは既知脆弱性に対して利用可能なモジュールを探す段階で使うと、前工程とのつながりを保てます。

## 実例3件の学習・検証例

### 1. Nmapを入口の発見と次の行動を決める工程として利用

TryHackMeでNmapからSSH侵入までの流れを実践。Nmapでポートとサービスを確認し次の調査対象を絞る。Nmapを入口の発見と次の行動を決める工程として利用。

この事例では、意図的に用意された学習環境での検証という条件もあります。

> 対象のサーバーに対して、どのポートが開いていて、何のサービスが動いているかを確認します。

この事例からは、Nmapを入口の発見と次の行動を決める工程として利用という具体的な判断材料を確認できます。

[引用元を見る](https://zenn.dev/dokusy/articles/bcb3a3f3eb75b0)

### 2. 通信の仕組みと手動検証を結び付けて理解

Kali Linux上でBurp Suiteを学習。HTTPリクエストを観察しProxyで傍受・改変を試す。通信の仕組みと手動検証を結び付けて理解。

この事例では、学習環境でのリクエスト改変という条件もあります。

> HTTPリクエストの仕組みを理解しつつ、実際にリクエスト改ざんを試してみました。

この事例からは、通信の仕組みと手動検証を結び付けて理解という具体的な判断材料を確認できます。

[引用元を見る](https://qiita.com/raux/items/5416c77a6ba144b65a43)

### 3. 発見から悪用可能性確認までの流れを体験

TryHackMeを使う7日間ハンズオンへ取り組む。Nmapで脆弱性を探しMetasploitで有効なエクスプロイトを探す。発見から悪用可能性確認までの流れを体験。

この事例では、演習用ターゲットでの学習という条件もあります。

> 見つかった脆弱性に対して有効なエクスプロイトをmetasploitから探す

この事例からは、発見から悪用可能性確認までの流れを体験という具体的な判断材料を確認できます。

[引用元を見る](https://zenn.dev/cfjp/articles/f258846c90cf83)

## 3ツールを一連のハンズオンでつなぐなら

**〖情報セキュリティ〗Ethical Hacking：ホワイトハッカー入門**

- エシカルハッキングの基礎とツール利用を扱う

- 発見から検証へ進む攻撃者視点を学べる

- 個別ツールの暗記ではなく一連の流れへつなげやすい

:::cta label="Ethical Hacking講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fethical-hacking-jpn1%2F&subId1=cybersecurity&subId2=nmap-burp-metasploit-study-order&subId3=beginner" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、最初はNmapで対象を発見し、Burp SuiteでWeb通信を理解し、Metasploitは既知脆弱性の検証を学ぶ後半に置くと混同しにくいです。

## あわせて読みたい

[ペネトレーションテスト](/category/pentest/)
