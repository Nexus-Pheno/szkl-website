import { COPY, type Language } from '../src/i18n';

type Env = {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
};

const DOCUMENT_ROUTES = new Set(['/', '/index.html', '/about-us', '/about-us/']);

const SECURITY_HEADERS = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    "img-src 'self' data: blob:",
    "media-src 'self' https://d8j0ntlcm91z4.cloudfront.net",
    "connect-src 'self' ws: wss:",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
  ].join('; '),
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
} as const;

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function generatedPublicFile(request: Request): Response | undefined {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return undefined;
  }

  const url = new URL(request.url);
  const bodyFor = (content: string) => (request.method === 'HEAD' ? null : content);

  if (url.pathname === '/robots.txt') {
    return new Response(bodyFor(`User-agent: *\nAllow: /\nSitemap: ${url.origin}/sitemap.xml\n`), {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  if (url.pathname === '/sitemap.xml') {
    const englishUrl = `${url.origin}/`;
    const chineseUrl = `${url.origin}/?lang=zh`;
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${englishUrl}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${englishUrl}" />
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${chineseUrl}" />
  </url>
  <url>
    <loc>${chineseUrl.replaceAll('&', '&amp;')}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${englishUrl}" />
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${chineseUrl.replaceAll('&', '&amp;')}" />
  </url>
</urlset>
`;

    return new Response(bodyFor(sitemap), {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
  }

  return undefined;
}

async function withSecurityHeaders(request: Request, response: Response): Promise<Response> {
  const url = new URL(request.url);
  const headers = new Headers(response.headers);
  let body: ReadableStream<Uint8Array> | string | null = response.body;

  if (request.method === 'GET' && response.headers.get('content-type')?.includes('text/html')) {
    const language: Language = url.searchParams.get('lang') === 'zh' ? 'zh' : 'en';
    const copy = COPY[language];
    const canonicalUrl = `${url.origin}/${language === 'zh' ? '?lang=zh' : ''}`;

    body = (await response.text())
      .replaceAll('__SITE_ORIGIN__', escapeHtml(url.origin))
      .replaceAll('__CANONICAL_URL__', escapeHtml(canonicalUrl))
      .replaceAll('__HTML_LANG__', language === 'zh' ? 'zh-CN' : 'en')
      .replaceAll('__OG_LOCALE__', language === 'zh' ? 'zh_CN' : 'en_US')
      .replaceAll('__META_TITLE__', escapeHtml(copy.metaTitle))
      .replaceAll('__META_DESCRIPTION__', escapeHtml(copy.metaDescription));
    headers.delete('content-length');
  }

  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }

  if (['127.0.0.1', '::1', 'localhost'].includes(url.hostname)) {
    headers.set(
      'Content-Security-Policy',
      SECURITY_HEADERS['Content-Security-Policy'].replace(
        "script-src 'self'",
        "script-src 'self' 'unsafe-inline'",
      ),
    );
  }

  if (url.protocol === 'https:') {
    headers.set('Strict-Transport-Security', 'max-age=31536000');
  }

  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return await withSecurityHeaders(
        request,
        new Response('Method Not Allowed', {
          status: 405,
          headers: {
            Allow: 'GET, HEAD',
            'Content-Type': 'text/plain; charset=utf-8',
          },
        }),
      );
    }

    const generatedResponse = generatedPublicFile(request);
    if (generatedResponse) {
      return await withSecurityHeaders(request, generatedResponse);
    }

    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return await withSecurityHeaders(request, response);
    }

    const url = new URL(request.url);
    const acceptsHtml = request.headers.get('accept')?.includes('text/html') ?? false;
    const isDocumentRequest =
      (request.method === 'GET' || request.method === 'HEAD') &&
      acceptsHtml &&
      DOCUMENT_ROUTES.has(url.pathname);

    if (!isDocumentRequest) {
      return await withSecurityHeaders(request, response);
    }

    const indexUrl = new URL('/index.html', request.url);
    const indexResponse = await env.ASSETS.fetch(new Request(indexUrl, request));
    return await withSecurityHeaders(request, indexResponse);
  },
};
