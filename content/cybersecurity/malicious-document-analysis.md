---
site: "cybersecurity"
title: "悪性文書とは？Office・PDF経由の攻撃をどう分析する？"
description: "悪性文書 マルウェア 解析を調べている方向けに、本文確認済みの3つの実例・検証を比較。悪性文書はファイル単体だけでなく、マクロ・埋め込み・外部通信・後続プロセスの連鎖として見る必要がある。 実例の違いとUdemy講座の使いどころまで整理します。"
slug: "malicious-document-analysis"
date: "2026-09-22"
updated: "2026-09-22"
author: "サイバーセキュリティ研究所編集部"
category: "malware"
categoryName: "マルウェア解析"
parentHubUrl: "/category/malware/"
qualification: ""
qualificationName: ""
qualificationHubUrl: ""
articleType: "other"
searchIntent: "informational"
hypothesis: "悪性文書はファイル単体だけでなく、マクロ・埋め込み・外部通信・後続プロセスの連鎖として見る必要がある。"
udemyCourseTitle: "Reverse Engineering and Malware Analysis Fundamentals"
udemyCourseUrl: "https://www.udemy.com/course/malware-analysis-fundamentals/"
udemyAffiliateUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmalware-analysis-fundamentals%2F&subId1=cybersecurity&subId2=malicious-document-analysis&subId3=other"
impactBaseUrl: "https://trk.udemy.com/c/7431603/4048681/39854"
primaryCtaLabel: "マルウェア解析講座を見る"
primaryCtaUrl: "https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmalware-analysis-fundamentals%2F&subId1=cybersecurity&subId2=malicious-document-analysis&subId3=other"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
featured: false
stickyCta: true
noindex: false
---

# 悪性文書とは？Office・PDF経由の攻撃をどう分析する？

## 結論

結論、悪性文書はOfficeやPDFのファイルだけを見るのでは不十分です。埋め込み・外部参照・スクリプト・後続プロセスまで連鎖で分析します。

本文確認済みの3例では、悪性Word文書の複数解析例で、マクロ、難読化、外部HTML、PowerShell、後続スクリプトまで連鎖を追う必要性を確認できる。

## 3人の実例

### 事例1

- 前提：CyberDefendersのBlue Teamチャレンジを実践
- 環境・方法：REMnux系ツールで悪性Word文書を解析
- 結果：Word文書内のマクロ・Base64・後続処理を段階的に追跡

### 事例2

- 前提：新しいOffice文書経由攻撃をローカルで解析
- 環境・方法：Wordファイルの内部XMLと外部HTMLを静的に追跡
- 結果：Word内部の外部参照から後続HTML・PowerShellまで攻撃連鎖を確認

### 事例3

- 前提：CyberDefendersのマルウェア解析チャレンジを実践
- 環境・方法：REMnuxとWindowsの仮想環境で悪性文書を解析
- 結果：VBAマクロ・難読化・後続スクリプトを段階的に解析

## 悪性文書は文書だけでなくマクロ・外部参照・後続処理まで追う

3例の共通点は、Office文書の内部構造やマクロを確認している、文書から後続コードや通信先へ追跡していることです。

一方で、Emotet系、Follina系、CyberDefenders教材で攻撃手法が異なる、静的中心と難読化解除中心で手法が異なるため、同じ手順をそのまま当てはめるのではなく、対象と目的を先に決める必要があります。

再現しやすい進め方は、まず文書内部のストリーム・マクロ・外部参照を確認する、抽出したスクリプトや通信先を別工程で追うことです。

注意点として、実ファイルは安全な仮想環境で扱う。

## 実例3件の学習・検証例

### 1. Word文書内のマクロ・Base64・後続処理を段階的に追跡

CyberDefendersのBlue Teamチャレンジを実践。REMnux系ツールで悪性Word文書を解析。Word文書内のマクロ・Base64・後続処理を段階的に追跡。

この事例では、難読化されたコードとストリームの追跡が必要という条件があります。

> Emotetを題材にした懐かしい感じのMaliciousなWordの解析でした。

この事例からは、Word文書内のマクロ・Base64・後続処理を段階的に追跡という判断材料を確認できます。

[引用元を見る](https://qiita.com/schectman-hell/items/f43f2530c7a793a64f29)

### 2. Word内部の外部参照から後続HTML・PowerShellまで攻撃連鎖を確認

新しいOffice文書経由攻撃をローカルで解析。Wordファイルの内部XMLと外部HTMLを静的に追跡。Word内部の外部参照から後続HTML・PowerShellまで攻撃連鎖を確認。

この事例では、悪性ファイルをローカルに置くため安全管理が必要という条件があります。

> このHTMLのダウンロード先ドメインはすでに死んでいるのでダウンロードはできないのだが

この事例からは、Word内部の外部参照から後続HTML・PowerShellまで攻撃連鎖を確認という判断材料を確認できます。

[引用元を見る](https://qiita.com/schectman-hell/items/181e26c2c0d4e687929f)

### 3. VBAマクロ・難読化・後続スクリプトを段階的に解析

CyberDefendersのマルウェア解析チャレンジを実践。REMnuxとWindowsの仮想環境で悪性文書を解析。VBAマクロ・難読化・後続スクリプトを段階的に解析。

この事例では、本物のマルウェアを含む可能性があるため仮想環境が必要という条件があります。

> スクリプトを用いたマルウェア解析でよくある解析てんこ盛りと言ったチャレンジでした。

この事例からは、VBAマクロ・難読化・後続スクリプトを段階的に解析という判断材料を確認できます。

[引用元を見る](https://qiita.com/schectman-hell/items/da31489a5c781c2cb020)

## 安全な環境で解析手順を体系化するなら

**Reverse Engineering and Malware Analysis Fundamentals**
- マルウェア解析に関する内容をUdemy公式講座ページで確認
- 記事テーマと講座DBのtopicTagsが一致
- 記事内の実例で確認した流れを、動画とハンズオンで整理する次の学習手段にしやすい
:::cta label="マルウェア解析講座を見る" url="https://trk.udemy.com/c/7431603/4048681/39854?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmalware-analysis-fundamentals%2F&subId1=cybersecurity&subId2=malicious-document-analysis&subId3=other" note="PR：価格・キャンペーンはリンク先でご確認ください"
:::

## 最終結論

結論、悪性文書はOfficeやPDFのファイルだけを見るのでは不十分です。埋め込み・外部参照・スクリプト・後続プロセスまで連鎖で分析します。

## あわせて読みたい

[マルウェア解析](/category/malware/)
