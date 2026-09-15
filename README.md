# Affiliate Media Engine v5.11 — Cloudflare公開用最終版

IT資格ナビに表示確認用を含む32記事を収録しています。

### v5.11 修正

- Cloudflare用 `postbuild.mjs` のサイトマップから `/tag/.../` URL生成を削除
- タグページは公開・生成しません
- `tags` は記事SEO・関連記事判定・テーマ分類の内部情報として引き続き利用します
- カテゴリページと20件ずつのページネーションはそのまま維持します

- TOP: 最新12件
- 記事一覧: 20件ずつ
- IT資格記事: 32件（既存2件 + 追加30件）
- テーマ分類: `tags` の先頭を自動利用
- お問い合わせ: Googleフォーム

```bash
npm install
npm run dev
```

主な確認URL:

- `/it-cert/`
- `/it-cert/articles/`
- `/it-cert/articles/page/2/`

---

# Affiliate Media Engine v5.8 — Pagination / Category / Tag / Markdown Only

記事・トップ・各メディア・固定ページを、白背景＋薄い青枠＋角丸カードの同じUIで統一したNext.jsメディアです。記事はMarkdown 1ファイルだけで追加できます。

## 起動

```bash
npm install
npm run dev
```

ローカルでは `http://localhost:3000/` を開きます。

## 記事追加

```bash
npm run new -- it-cert aws-saa-2weeks
```

または `content/<site>/<slug>.md` を直接追加します。

## Markdownで使えるもの

- `##` セクション → 自動でカード化
- `###` 小見出し
- Markdown表 → スマホは横スクロール
- 引用 `>`
- 画像
- 箇条書き
- 外部リンク
- `:::cta` CTAボタン

### ブログ引用の書き方

`## 実例ブログ・口コミ` の中で `###` ごとに引用元を書くと、番号・アイコンなしのシンプルな引用カードになります。

```md
## 実例ブログ・口コミ

短期合格者の体験談を確認しました。

### ブログ名・記事名

> 必要な範囲だけ引用します。

[引用元を見る](https://example.com/real-source)

### 別のブログ名

> 2件目の引用文です。

[引用元を見る](https://example.com/real-source-2)
```

## CTA

```md
:::cta label="おすすめ講座を見る" url="https://affiliate-url.example" note="PR：最新情報はリンク先でご確認ください"
:::
```

固定CTAを使う場合はfrontmatterに追加します。

```yaml
primaryCtaLabel: "おすすめ講座を見る"
primaryCtaUrl: "https://affiliate-url.example"
primaryCtaNote: "PR：最新情報はリンク先でご確認ください"
stickyCta: true
```

## SEO

- ページごとの title / description
- canonical
- Open Graph / Twitter Card
- Article JSON-LD
- BreadcrumbList JSON-LD
- CollectionPage / ItemList JSON-LD
- robots.txt
- sitemap.xml
- サブドメインごとの sitemap / robots を postbuild で生成
- 見出しを H1 → H2 → H3 で構造化
- 関連記事の内部リンク

## URL

- `/` 総合トップ
- `/<site>/` メディアTOP（最新12件）
- `/<site>/articles/` 記事一覧（20件ずつ）
- `/<site>/articles/page/2/` 記事一覧2ページ目以降
- `/<site>/category/<category>/` カテゴリページ
- `/<site>/<slug>/` 記事
- `/<site>/about/` など固定ページ

## ローカル推奨設定

```env
NEXT_PUBLIC_SUBDOMAIN_MODE=false
NEXT_PUBLIC_ROOT_DOMAIN=ponpokoken.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_FORM_URL=https://forms.gle/PeSsrEUGeZZMAYmt5
```

## チェック

```bash
npm run typecheck
npm run build
```


## モバイル最適化

- 360〜430px幅の一般的なスマートフォンを基準にしたモバイルファーストUI
- 記事タイトル 29〜33px、本文16px、H2 22pxを基準に可読性を改善
- ページ全体はスマホ画面幅を使い、左右12pxの余白のみ
- 表だけ横スクロールし、本文全体は横にはみ出さない
- CTAは56px以上のタップ領域、スマホでは下部固定CTAを表示
- `viewport` を明示して実機とDevToolsで同じ幅計算になるよう調整


## v5.6 カード間隔の統一

記事・目次・Markdownセクション・関連記事・トップページの各カード間隔は、MDではなくCSSテンプレート側で一元管理します。

- スマホ: `--card-gap: 14px`
- 768px以上: `--card-gap: 16px`
- `##` を追加するだけで、前後のカードと同じ間隔になります
- 各カード自身の `margin-top` / `margin-bottom` は0に統一
- 親要素の `gap` だけで外側の間隔を決定
- CTAや表などカード内部の余白は外側のカード間隔と分離

そのため、記事作成時に空行数や独自CSSで見た目を調整する必要はありません。


## Googleフォームをお問い合わせに使う

メールアドレスは公開せず、Googleフォームへのボタンだけを表示します。

`.env.local` または Cloudflare Pages の環境変数に以下を設定してください。

```env
NEXT_PUBLIC_GOOGLE_FORM_URL=https://forms.gle/PeSsrEUGeZZMAYmt5
```

Googleフォーム側の項目は以下の4つを推奨します。

- お問い合わせ種別
- メールアドレス
- お問い合わせ内容
- 送信

URL未設定時は公開ページにメールアドレスを表示せず、「お問い合わせフォームを準備中です。」と表示します。


## v5.8 記事一覧・カテゴリ

- メディアTOPには最新12記事だけ表示
- 「すべての記事を見る」から20件ずつの記事一覧へ移動
- 21件目以降は `/articles/page/2/` のように自動ページ分割
- frontmatter の `category` からカテゴリページを自動生成
- カテゴリ内の記事が20件を超えた場合も自動ページ分割

新規記事では次のように指定します。

```yaml
category: "AWS"
tags: ["AWS", "SAA", "資格"]
```


## v5.9: テーマ分類について

- サイトTOPの「タグから探す」は削除しました。
- タグ用の一覧ページも生成しません。
- `tags` は記事SEO・関連記事判定・テーマ分類の内部情報として残します。
- `category` を毎回書く必要はありません。`tags` の先頭要素が自動でテーマ分類に使われます。
- `tags` も省略した場合は、そのサイトの既定テーマに自動で入ります。

例:

```yaml
tags: ["AWS", "SAA", "資格"]
```

この場合、サイトTOPの「テーマから探す」では自動的に `AWS` に分類されます。


## v5.12 Cloudflare build fix

Next.js static export で記事数が20件以下の場合でも、動的ページネーションルートの `generateStaticParams()` が空配列にならないように修正しました。フォールバックページは noindex で、sitemap には掲載されません。


## v5.13 Cloudflare Pages fix

- `app/robots.ts` / `app/sitemap.ts` を削除し、静的 export と競合しないようにしました。
- `scripts/postbuild.mjs` が root domain と各サブドメインの `robots.txt` / `sitemap.xml` を生成します。
- ページネーションの動的ルートは、記事数が少ない場合でも `generateStaticParams()` が空配列を返さない構成です。
- Cloudflare Pages: Build command `npm run build`, output directory `out`.
