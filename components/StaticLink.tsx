import type { AnchorHTMLAttributes } from 'react';

type StaticLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
};

/**
 * Plain anchor navigation for the static-export site.
 *
 * We intentionally avoid next/link so Next.js does not prefetch or perform
 * App Router client-side navigations that request __next.*.txt route payloads.
 */
export default function StaticLink({ href, children, ...props }: StaticLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
