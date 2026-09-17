---
title: "【RAG】自分の資料を全部AIに覚えさせられるんじゃないか？3人の個人開発で検証"
description: "【RAG】自分の資料を全部AIに覚えさせられるんじゃないか？3人の個人開発で検証 実際に使った3人の事例から、できること・難しいこと・使いどころを整理します。"
date: "2026-09-17"
updated: "2026-09-17"
author: "AIツール研究所編集部"
tags: ["RAG", "LLM", "生成AI", "AIアプリ開発", "Udemy"]
featured: false
primaryCtaLabel: "【RAG入門】Next.jsとAzure OpenAI Serviceで作るChatGPT風WEBアプリ開発講座"
primaryCtaUrl: "https://www.udemy.com/course/ragnextjsazure-openai-servicechatgptweb/"
primaryCtaNote: "PR：価格・キャンペーンはリンク先でご確認ください"
stickyCta: true
noindex: false
---
## 結論

結論、「AIそのものに資料を永久学習させる」と考えると違います。ただし、質問時に関連文書を検索して回答へ渡すRAGなら、自分のPDF・メモ・社内資料を参照するAIを作ることは可能です。

「RAGを使えば、ちょっと無理そうなことまでできるんじゃないか？」という仮説で、実際に手を動かした3人の記事を見てみます。

## Udemy

**【RAG入門】Next.jsとAzure OpenAI Serviceで作るChatGPT風WEBアプリ開発講座**

https://www.udemy.com/course/ragnextjsazure-openai-servicechatgptweb/

PR：価格・キャンペーン・サービス内容はリンク先でご確認ください。

:::cta label="【RAG入門】Next.jsとAzure OpenAI Serviceで作るChatGPT風WEBアプリ開発講座" url="https://www.udemy.com/course/ragnextjsazure-openai-servicechatgptweb/" note="PR：価格・キャンペーン・サービス内容はリンク先でご確認ください"
:::

## 3つの実例

| 事例 | 確認できたこと | 出典 |
|---|---|---|
| 1 | RAGという仕組みを使った小さなAIアプリを作ってみました。 | [元記事](https://zenn.dev/ossudesu/articles/2bcc789faa8725) |
| 2 | 企画→設計→ローカル構築→E2E実測→LLM評価まで | [元記事](https://zenn.dev/yamato_snow/articles/local-rag-plan-to-eval) |
| 3 | NotionとRAGを組み合わせてチャットボットを作ってみました。 | [元記事](https://zenn.dev/yukiyoshimura/articles/a3b4a2eb413124) |

## 実例ブログ・口コミ

### 1. ブログから確認できたこと

> RAGという仕組みを使った小さなAIアプリを作ってみました。

https://zenn.dev/ossudesu/articles/2bcc789faa8725

### 2. ブログから確認できたこと

> 企画→設計→ローカル構築→E2E実測→LLM評価まで

https://zenn.dev/yamato_snow/articles/local-rag-plan-to-eval

### 3. ブログから確認できたこと

> NotionとRAGを組み合わせてチャットボットを作ってみました。

https://zenn.dev/yukiyoshimura/articles/a3b4a2eb413124

## 改めて結論

- 独自文書を回答の根拠として使える
- 完全学習ではなく検索＋生成の仕組み
- データ整形と検索精度が品質を左右する

3人の体験を見ると、**「全部自動でできる」ではなく、「範囲を絞ればかなり実用的にできる」**という見方が近そうです。

## Udemy

**【RAG入門】Next.jsとAzure OpenAI Serviceで作るChatGPT風WEBアプリ開発講座**

https://www.udemy.com/course/ragnextjsazure-openai-servicechatgptweb/

PR：価格・キャンペーン・サービス内容はリンク先でご確認ください。

:::cta label="【RAG入門】Next.jsとAzure OpenAI Serviceで作るChatGPT風WEBアプリ開発講座" url="https://www.udemy.com/course/ragnextjsazure-openai-servicechatgptweb/" note="PR：価格・キャンペーン・サービス内容はリンク先でご確認ください"
:::
