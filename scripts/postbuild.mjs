import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const out = path.join(root, 'out');
const contentDir = path.join(root, 'content');
const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'ponpokoken.com';
const pageSize = 20;

const sites = JSON.parse(fs.readFileSync(path.join(root, 'data', 'sites.json'), 'utf8'));

if (!fs.existsSync(out)) {
  console.error('out/ がありません。next build の後に実行してください。');
  process.exit(1);
}

function xmlEscape(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function asTags(value) {
  if (Array.isArray(value)) return value.map(String).map((tag) => tag.trim()).filter(Boolean);
  if (typeof value === 'string') return value.split(',').map((tag) => tag.trim()).filter(Boolean);
  return [];
}

function articleCategory(site, article) {
  const pinned = site.categories.find((category) => category.featuredArticleSlugs?.includes(article.slug));
  if (pinned) return pinned.slug;

  const primary = String(article.category || '').normalize('NFKC').toLowerCase();
  for (const category of site.categories) {
    if (category.match.some((term) => primary.includes(String(term).normalize('NFKC').toLowerCase()))) return category.slug;
  }

  const haystack = [article.title, article.description, article.category, ...article.tags].join(' ').normalize('NFKC').toLowerCase();
  for (const category of site.categories) {
    if (category.match.some((term) => haystack.includes(String(term).normalize('NFKC').toLowerCase()))) return category.slug;
  }
  return 'other';
}

function articleQualification(site, article) {
  const categorySlug = articleCategory(site, article);
  const category = site.categories.find((item) => item.slug === categorySlug);
  if (!category?.qualifications?.length) return null;

  const pinned = category.qualifications.find((qualification) => qualification.featuredArticleSlugs?.includes(article.slug));
  if (pinned) return pinned.slug;

  const haystack = [article.title, article.description, article.category, ...article.tags].join(' ').normalize('NFKC').toLowerCase();
  const matched = category.qualifications.find((qualification) =>
    qualification.match.some((term) => haystack.includes(String(term).normalize('NFKC').toLowerCase())),
  );
  return matched?.slug || null;
}

const rootOrigin = `https://${rootDomain}`;
const rootUrls = [`${rootOrigin}/`, `${rootOrigin}/about/`, `${rootOrigin}/advertising/`, `${rootOrigin}/privacy/`, `${rootOrigin}/contact/`];
const rootUrlset = rootUrls.map((loc) => `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n    <priority>${loc === `${rootOrigin}/` ? '1.0' : '0.2'}</priority>\n  </url>`).join('\n');
fs.writeFileSync(path.join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rootUrlset}\n</urlset>\n`);
fs.writeFileSync(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${rootOrigin}/sitemap.xml\n`);

for (const site of sites) {
  const origin = `https://${site.subdomain}.${rootDomain}`;
  const urls = [
    { loc: `${origin}/`, priority: '1.0' }, { loc: `${origin}/articles/`, priority: '0.7' },
    { loc: `${origin}/about/`, priority: '0.2' }, { loc: `${origin}/advertising/`, priority: '0.2' },
    { loc: `${origin}/privacy/`, priority: '0.2' }, { loc: `${origin}/contact/`, priority: '0.2' },
  ];

  const folder = path.join(contentDir, site.slug);
  const articles = [];
  if (fs.existsSync(folder)) {
    for (const file of fs.readdirSync(folder).filter((name) => name.endsWith('.md'))) {
      const raw = fs.readFileSync(path.join(folder, file), 'utf8');
      const parsed = matter(raw);
      if (parsed.data.noindex === true) continue;
      const slug = file.replace(/\.md$/, '');
      const tags = asTags(parsed.data.tags);
      const title = String(parsed.data.title || slug);
      const description = String(parsed.data.description || '');
      const category = String(parsed.data.category || tags[0] || site.topic).trim();
      const lastmod = String(parsed.data.updated || parsed.data.date || '').trim() || undefined;
      const row = { slug, tags, title, description, category, lastmod };
      row.mainCategory = articleCategory(site, row);
      row.qualification = articleQualification(site, row);
      articles.push(row);
      urls.push({ loc: `${origin}/${slug}/`, lastmod, priority: '0.8' });
    }
  }

  const articlePages = Math.ceil(articles.length / pageSize);
  for (let page = 2; page <= articlePages; page += 1) urls.push({ loc: `${origin}/articles/page/${page}/`, priority: '0.6' });

  const categoryCounts = new Map();
  for (const article of articles) categoryCounts.set(article.mainCategory, (categoryCounts.get(article.mainCategory) || 0) + 1);
  for (const [slug, count] of categoryCounts) {
    if (count > 0) urls.push({ loc: `${origin}/category/${slug}/`, priority: '0.8' });
  }

  for (const category of site.categories) {
    if (!category.qualifications?.length) continue;
    for (const qualification of category.qualifications) {
      const count = articles.filter((article) =>
        article.mainCategory === category.slug && article.qualification === qualification.slug,
      ).length;
      if (count > 0) {
        urls.push({ loc: `${origin}/category/${category.slug}/${qualification.slug}/`, priority: '0.85' });
      }
    }
  }

  const seoDir = path.join(out, '__seo', site.slug);
  fs.mkdirSync(seoDir, { recursive: true });
  const urlset = urls.map((u) => `  <url>\n    <loc>${xmlEscape(u.loc)}</loc>${u.lastmod ? `\n    <lastmod>${xmlEscape(u.lastmod)}</lastmod>` : ''}\n    <priority>${u.priority}</priority>\n  </url>`).join('\n');
  fs.writeFileSync(path.join(seoDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`);
  fs.writeFileSync(path.join(seoDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
}

const hostMap = Object.fromEntries(sites.map((s) => [s.subdomain, s.slug]));
const worker = `const HOST_TO_SITE = ${JSON.stringify(hostMap, null, 2)};\n\nexport default {\n  async fetch(request, env) {\n    const url = new URL(request.url);\n    const firstLabel = url.hostname.split('.')[0].toLowerCase();\n    const site = HOST_TO_SITE[firstLabel];\n\n    if (!site) return env.ASSETS.fetch(request);\n\n    if (url.pathname === '/robots.txt') {\n      const target = new URL(request.url);\n      target.pathname = '/__seo/' + site + '/robots.txt';\n      return env.ASSETS.fetch(new Request(target, request));\n    }\n\n    if (url.pathname === '/sitemap.xml') {\n      const target = new URL(request.url);\n      target.pathname = '/__seo/' + site + '/sitemap.xml';\n      return env.ASSETS.fetch(new Request(target, request));\n    }\n\n    if (url.pathname.startsWith('/_next/') || /\\.[a-z0-9]{2,8}$/i.test(url.pathname)) {\n      return env.ASSETS.fetch(request);\n    }\n\n    if (url.pathname !== '/' && !url.pathname.endsWith('/')) {\n      const redirect = new URL(request.url);\n      redirect.pathname += '/';\n      return Response.redirect(redirect.toString(), 301);\n    }\n\n    const target = new URL(request.url);\n    if (!target.pathname.startsWith('/' + site + '/')) {\n      target.pathname = '/' + site + (target.pathname === '/' ? '/' : target.pathname);\n    }\n    return env.ASSETS.fetch(new Request(target, request));\n  }\n};\n`;
fs.writeFileSync(path.join(out, '_worker.js'), worker);
console.log('Subdomain worker + simplified per-site sitemap/robots generated.');
