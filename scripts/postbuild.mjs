import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const out = path.join(root, 'out');
const contentDir = path.join(root, 'content');
const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'ponpokoken.com';
const pageSize = 20;

const sites = [
  { slug: 'ai-tools', subdomain: 'ai-tools', topic: 'AIツール比較' },
  { slug: 'it-cert', subdomain: 'it-cert', topic: 'IT資格' },
  { slug: 'ai-video', subdomain: 'ai-video', topic: 'AI動画' },
  { slug: 'python-automation', subdomain: 'python', topic: 'Python自動化' },
  { slug: 'cybersecurity', subdomain: 'security', topic: 'セキュリティ' },
  { slug: 'canva-ai', subdomain: 'design', topic: 'AIデザイン' },
  { slug: 'microsoft365', subdomain: 'm365', topic: 'Microsoft 365' },
  { slug: 'digital-marketing', subdomain: 'marketing', topic: 'デジタルマーケ' },
  { slug: 'ai-english', subdomain: 'ai-english', topic: '英語学習' },
  { slug: 'blender', subdomain: 'blender', topic: 'Blender' },
];

if (!fs.existsSync(out)) {
  console.error('out/ がありません。next build の後に実行してください。');
  process.exit(1);
}

function xmlEscape(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function taxonomySlug(value) {
  return String(value || '')
    .normalize('NFKC')
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[\/\\?#%&=+.:;,()\[\]{}'"<>|!@$^*~`]+/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'other';
}

function asTags(value) {
  if (Array.isArray(value)) return value.map(String).map((tag) => tag.trim()).filter(Boolean);
  if (typeof value === 'string') return value.split(',').map((tag) => tag.trim()).filter(Boolean);
  return [];
}


// Root-domain SEO files. The per-site subdomain versions are generated under __seo/ below
// and served by _worker.js according to the request hostname.
const rootOrigin = `https://${rootDomain}`;
const rootUrls = [
  `${rootOrigin}/`,
  `${rootOrigin}/about/`,
  `${rootOrigin}/advertising/`,
  `${rootOrigin}/privacy/`,
  `${rootOrigin}/contact/`,
];
const rootUrlset = rootUrls
  .map((loc) => `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n    <priority>${loc === `${rootOrigin}/` ? '1.0' : '0.2'}</priority>\n  </url>`)
  .join('\n');
fs.writeFileSync(
  path.join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rootUrlset}\n</urlset>\n`,
);
fs.writeFileSync(
  path.join(out, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${rootOrigin}/sitemap.xml\n`,
);

for (const site of sites) {
  const origin = `https://${site.subdomain}.${rootDomain}`;
  const urls = [
    { loc: `${origin}/`, priority: '1.0' },
    { loc: `${origin}/articles/`, priority: '0.8' },
    { loc: `${origin}/about/`, priority: '0.2' },
    { loc: `${origin}/advertising/`, priority: '0.2' },
    { loc: `${origin}/privacy/`, priority: '0.2' },
    { loc: `${origin}/contact/`, priority: '0.2' },
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
      const category = String(parsed.data.category || tags[0] || site.topic).trim();
      const lastmod = String(parsed.data.updated || parsed.data.date || '').trim() || undefined;
      articles.push({ slug, tags, category, lastmod });
      urls.push({ loc: `${origin}/${slug}/`, lastmod, priority: '0.8' });
    }
  }

  const articlePages = Math.ceil(articles.length / pageSize);
  for (let page = 2; page <= articlePages; page += 1) {
    urls.push({ loc: `${origin}/articles/page/${page}/`, priority: '0.7' });
  }

  const categories = new Map();
  for (const article of articles) {
    const categorySlug = taxonomySlug(article.category);
    if (!categories.has(categorySlug)) categories.set(categorySlug, { name: article.category, count: 0 });
    categories.get(categorySlug).count += 1;

  }

  for (const [slug, entry] of categories) {
    urls.push({ loc: `${origin}/category/${slug}/`, priority: '0.7' });
    const pages = Math.ceil(entry.count / pageSize);
    for (let page = 2; page <= pages; page += 1) urls.push({ loc: `${origin}/category/${slug}/page/${page}/`, priority: '0.6' });
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
console.log('Subdomain worker + per-site sitemap/robots generated.');
