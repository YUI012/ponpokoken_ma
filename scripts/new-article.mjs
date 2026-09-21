import fs from 'node:fs';
import path from 'node:path';

const [site, slug] = process.argv.slice(2);
if (!site || !slug) {
  console.error('使い方: npm run new -- it-cert aws-saa-2weeks');
  process.exit(1);
}

const dir = path.join(process.cwd(), 'content', site);
if (!fs.existsSync(dir)) {
  console.error(`存在しない媒体です: ${site}`);
  process.exit(1);
}

const mdFile = path.join(dir, `${slug}.md`);
if (fs.existsSync(mdFile)) {
  console.error(`すでに存在します: ${mdFile}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const markdown = `---
title: "記事タイトル"
description: "検索結果で内容が伝わる説明文を120〜150文字程度で記載します。"
date: "${today}"
author: "編集部"
# 大カテゴリは data/sites.json の categories[].match から自動判定されます
# IT資格ナビだけは、同じファイルの qualifications[].match で詳細資格ページにも自動所属します
tags: ["メインテーマ", "関連テーマ"]
featured: false
noindex: false

# アフィリエイトCTAを使う場合だけ設定
primaryCtaLabel: ""
primaryCtaUrl: ""
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
stickyCta: false
---

## 先に結論

この記事で最初に伝えたい結論を、2〜4文で簡潔にまとめます。

## 比較データ

Markdownの表はそのまま記事内に表示できます。

| 項目 | A | B |
|---|---|---|
| 特徴 | 内容 | 内容 |
| 向いている人 | 内容 | 内容 |

## 実例ブログ・口コミ

このセクションでは ### 見出しごとに、画像イメージと同じシンプルな引用カードになります。

### ブログ名・記事名

> 実際の引用文を必要な範囲だけ掲載します。

[引用元を見る](https://実際の引用元URLに変更してください)

### ブログ名・記事名

> 2件目の引用文を掲載します。

[引用元を見る](https://実際の引用元URLに変更してください)

## 選び方

比較した結果から、どんな人にどの選択肢が向いているかを説明します。

## まとめ

記事全体の結論を簡潔にまとめます。

<!--
CTAを本文に入れる場合は以下を使用します。

:::cta label="おすすめを見る" url="https://アフィリエイトURL" note="PR：最新情報はリンク先でご確認ください"
:::
-->
`;

fs.writeFileSync(mdFile, markdown, 'utf8');
console.log(`作成しました: ${mdFile}`);
