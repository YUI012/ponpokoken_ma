import ReactMarkdown from 'react-markdown';
import type { ReactElement, ReactNode } from 'react';
import remarkGfm from 'remark-gfm';
import { slugifyHeading } from '@/lib/content';
import { RichBlock } from './RichBlock';

function childText(children: ReactNode): string {
  if (typeof children === 'string' || typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(childText).join('');
  if (children && typeof children === 'object' && 'props' in children) {
    return childText((children as ReactElement<{ children?: ReactNode }>).props.children);
  }
  return '';
}

function isAffiliate(href?: string) {
  if (!href) return false;
  return /trk\.udemy\.com|a8\.net|px\.a8\.net|affiliate|impact\.com/i.test(href);
}

const richKinds = new Set(['cta', 'point', 'info', 'warning', 'verdict', 'data', 'product', 'proscons', 'steps']);

function parseAttrs(input: string) {
  const attrs: Record<string, string> = {};
  const re = /([\w-]+)=(?:"([^"]*)"|'([^']*)'|([^\s]+))/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(input))) attrs[match[1]] = match[2] ?? match[3] ?? match[4] ?? '';
  return attrs;
}

function preprocessRichBlocks(markdown: string) {
  const lines = markdown.split('\n');
  const out: string[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const start = lines[index].match(/^:::([a-zA-Z][\w-]*)(.*)$/);
    if (!start || !richKinds.has(start[1])) {
      out.push(lines[index]);
      continue;
    }

    const kind = start[1];
    const attrs = parseAttrs(start[2]);
    const body: string[] = [];
    let closed = false;

    for (index += 1; index < lines.length; index += 1) {
      if (lines[index].trim() === ':::') {
        closed = true;
        break;
      }
      body.push(lines[index]);
    }

    if (!closed) {
      out.push(`:::${kind}`);
      out.push(...body);
      continue;
    }

    const payload = encodeURIComponent(JSON.stringify({ kind, attrs, body: body.join('\n').trim() }));
    out.push('', '```ui-block', payload, '```', '');
  }

  return out.join('\n');
}

type Section = {
  title: string;
  markdown: string;
  intro: boolean;
};

function splitIntoSections(markdown: string): Section[] {
  const lines = markdown.split('\n');
  const sections: Section[] = [];
  let buffer: string[] = [];
  let title = '';
  let intro = true;

  const flush = () => {
    const value = buffer.join('\n').trim();
    if (value) sections.push({ title, markdown: value, intro });
    buffer = [];
  };

  for (const line of lines) {
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      flush();
      title = match[1].trim();
      intro = false;
      buffer.push(line);
    } else {
      buffer.push(line);
    }
  }
  flush();
  return sections;
}

function splitSourceEntries(markdown: string) {
  const lines = markdown.split('\n');
  const firstH2 = lines.findIndex((line) => /^##\s+/.test(line));
  const content = firstH2 >= 0 ? lines.slice(firstH2 + 1) : lines;
  const intro: string[] = [];
  const entries: { title: string; body: string }[] = [];
  let currentTitle = '';
  let currentBody: string[] = [];

  const flush = () => {
    const body = currentBody.join('\n').trim();
    if (currentTitle && body) entries.push({ title: currentTitle, body });
    currentBody = [];
  };

  for (const line of content) {
    const match = line.match(/^###\s+(.+)$/);
    if (match) {
      flush();
      currentTitle = match[1].trim();
    } else if (currentTitle) {
      currentBody.push(line);
    } else {
      intro.push(line);
    }
  }
  flush();
  return { intro: intro.join('\n').trim(), entries };
}


function splitComparisonEntries(markdown: string) {
  const lines = markdown.split('\n');
  const firstH2 = lines.findIndex((line) => /^##\s+/.test(line));
  const content = firstH2 >= 0 ? lines.slice(firstH2 + 1) : lines;
  const intro: string[] = [];
  const entries: { title: string; fields: { label: string; value: string }[] }[] = [];
  let currentTitle = '';
  let currentFields: { label: string; value: string }[] = [];

  const flush = () => {
    if (currentTitle && currentFields.length) entries.push({ title: currentTitle, fields: currentFields });
    currentFields = [];
  };

  for (const line of content) {
    const heading = line.match(/^###\s+(.+)$/);
    if (heading) {
      flush();
      currentTitle = heading[1].trim();
      continue;
    }

    const field = line.match(/^[-*]\s+([^：:]+)[：:]\s*(.+)$/);
    if (field && currentTitle) {
      currentFields.push({ label: field[1].trim(), value: field[2].trim() });
      continue;
    }

    if (!currentTitle && line.trim()) intro.push(line);
  }

  flush();
  return { intro: intro.join('\n').trim(), entries };
}

function MarkdownChunk({ markdown }: { markdown: string }) {
  const prepared = preprocessRichBlocks(markdown);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h2 id={slugifyHeading(childText(children))}>{children}</h2>,
        h2: ({ children }) => <h2 id={slugifyHeading(childText(children))}>{children}</h2>,
        h3: ({ children }) => <h3 id={slugifyHeading(childText(children))}>{children}</h3>,
        a: ({ href, children }) => {
          const affiliate = isAffiliate(href);
          return (
            <a
              href={href}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={affiliate ? 'nofollow sponsored noopener noreferrer' : href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={affiliate ? 'affiliateTextLink' : undefined}
            >
              {children}
            </a>
          );
        },
        img: ({ src, alt }) => <img src={src || ''} alt={alt || ''} loading="lazy" />,
        blockquote: ({ children }) => <blockquote>{children}</blockquote>,
        table: ({ children }) => <div className="tableWrap"><table>{children}</table></div>,
        pre: ({ children }) => {
          const only = Array.isArray(children) ? children[0] : children;
          if (only && typeof only === 'object' && 'props' in only) {
            const element = only as ReactElement<{ className?: string; children?: ReactNode }>;
            if (element.props.className === 'language-ui-block') {
              return <RichBlock encoded={childText(element.props.children)} />;
            }
          }
          return <pre>{children}</pre>;
        },
      }}
    >
      {prepared}
    </ReactMarkdown>
  );
}


function ComparisonSection({ title, markdown }: { title: string; markdown: string }) {
  const parsed = splitComparisonEntries(markdown);

  return (
    <section className="mdSectionCard comparisonSectionCard" aria-labelledby={slugifyHeading(title)}>
      <h2 id={slugifyHeading(title)}>{title}</h2>
      {parsed.intro && <div className="comparisonSectionIntro"><MarkdownChunk markdown={parsed.intro} /></div>}
      <div className="comparisonCaseList">
        {parsed.entries.map((entry) => (
          <article className="comparisonCaseCard" key={entry.title}>
            <div className="comparisonCaseGrid">
              {entry.fields.slice(0, 4).map((field, index) => (
                <div className="comparisonCaseField" key={`${entry.title}-${field.label}-${index}`}>
                  <span className="comparisonCaseLabel">{field.label}</span>
                  <strong className="comparisonCaseValue">{field.value}</strong>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SourceSection({ title, markdown }: { title: string; markdown: string }) {
  const parsed = splitSourceEntries(markdown);

  return (
    <section className="mdSectionCard sourceSectionCard" aria-labelledby={slugifyHeading(title)}>
      <h2 id={slugifyHeading(title)}>{title}</h2>
      {parsed.intro && <div className="sourceSectionIntro"><MarkdownChunk markdown={parsed.intro} /></div>}
      <div className="sourceEntryList">
        {parsed.entries.map((entry) => (
          <article className="sourceEntry" key={entry.title}>
            <h3>{entry.title}</h3>
            <MarkdownChunk markdown={entry.body} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function MarkdownArticle({ markdown }: { markdown: string }) {
  const sections = splitIntoSections(markdown);

  return (
    <div className="markdownBody mdArticleFlow">
      {sections.map((section, index) => {
        if (section.intro) {
          return <div className="mdIntro" key={`${index}-intro`}><MarkdownChunk markdown={section.markdown} /></div>;
        }

        const isComparisonSection = /3人.*実例|実例.*3人|3人.*比較/.test(section.title);
        if (isComparisonSection) {
          return <ComparisonSection key={`${index}-${section.title}`} title={section.title} markdown={section.markdown} />;
        }

        const isSourceSection = /(実例ブログ|個人ブログ|口コミ|体験談|参考ブログ|参考情報|引用|合格者3人の学習例)/.test(section.title);
        if (isSourceSection) {
          return <SourceSection key={`${index}-${section.title}`} title={section.title} markdown={section.markdown} />;
        }

        return (
          <section className="mdSectionCard" key={`${index}-${section.title}`}>
            <MarkdownChunk markdown={section.markdown} />
          </section>
        );
      })}
    </div>
  );
}
