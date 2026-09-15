import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Payload = {
  kind: string;
  attrs: Record<string, string>;
  body: string;
};

function getPayload(encoded: string): Payload | null {
  try {
    return JSON.parse(decodeURIComponent(encoded.trim())) as Payload;
  } catch {
    return null;
  }
}

function MiniMarkdown({ children }: { children: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>;
}

export function RichBlock({ encoded }: { encoded: string }) {
  const payload = getPayload(encoded);
  if (!payload) return null;
  const { kind, attrs, body } = payload;

  if (kind === 'cta') {
    if (!attrs.url) return null;
    return (
      <aside className="richCta">
        {attrs.kicker && <p className="richCtaKicker">{attrs.kicker}</p>}
        <a href={attrs.url} target="_blank" rel="nofollow sponsored noopener noreferrer">
          <span>{attrs.label || '詳しく見る'}</span><span aria-hidden="true">→</span>
        </a>
        {attrs.note && <small>{attrs.note}</small>}
      </aside>
    );
  }

  if (kind === 'product') {
    return (
      <aside className="productCallout">
        <div className="productCalloutHead">
          <div>
            {attrs.badge && <span className="productCalloutBadge">{attrs.badge}</span>}
            {attrs.title && <strong>{attrs.title}</strong>}
          </div>
          {attrs.price && <span className="productCalloutPrice">{attrs.price}</span>}
        </div>
        {body && <div className="productCalloutBody"><MiniMarkdown>{body}</MiniMarkdown></div>}
        {attrs.url && (
          <a className="productCalloutButton" href={attrs.url} target="_blank" rel="nofollow sponsored noopener noreferrer">
            {attrs.label || '詳しく見る'} <span aria-hidden="true">→</span>
          </a>
        )}
        {attrs.note && <small>{attrs.note}</small>}
      </aside>
    );
  }

  const title = attrs.title || ({
    verdict: '結論',
    data: 'データ',
    point: 'ポイント',
    info: '補足',
    warning: '注意',
    proscons: 'ポイント',
    steps: '手順',
  } as Record<string, string>)[kind];

  return (
    <aside className={`simpleCallout simpleCallout-${kind}`}>
      {title && <strong>{title}</strong>}
      {body && <div className="simpleCalloutBody"><MiniMarkdown>{body}</MiniMarkdown></div>}
    </aside>
  );
}
