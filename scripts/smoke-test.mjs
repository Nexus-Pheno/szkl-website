import assert from 'node:assert/strict';

const baseUrl = new URL(process.env.SITE_URL ?? 'http://127.0.0.1:5173/');

async function request(path, init) {
  const response = await fetch(new URL(path, baseUrl), init);
  const body = await response.text();
  return { response, body };
}

const english = await request('/');
assert.equal(english.response.status, 200);
assert.match(english.body, /<html lang="en">/);
assert.match(english.body, /SZKL — Scientific Intelligence That Compounds/);
assert.match(english.body, /rel="canonical" href="http:\/\/127\.0\.0\.1:5173\/"/);
assert.doesNotMatch(
  english.body,
  /__(?:SITE_ORIGIN|CANONICAL_URL|HTML_LANG|META_TITLE|META_DESCRIPTION)__/,
);
assert.equal(english.response.headers.get('x-content-type-options'), 'nosniff');
assert.equal(english.response.headers.get('x-frame-options'), 'DENY');
assert.match(
  english.response.headers.get('content-security-policy') ?? '',
  /frame-ancestors 'none'/,
);

const chinese = await request('/?lang=zh');
assert.equal(chinese.response.status, 200);
assert.match(chinese.body, /<html lang="zh-CN">/);
assert.match(chinese.body, /SZKL — 让科研智能持续积累/);
assert.match(chinese.body, /rel="canonical" href="http:\/\/127\.0\.0\.1:5173\/\?lang=zh"/);

const about = await request('/about-us', {
  headers: { Accept: 'text/html' },
});
assert.equal(about.response.status, 200);
assert.match(about.body, /<div id="root"><\/div>/);

const missing = await request('/route-that-does-not-exist', {
  headers: { Accept: 'text/html' },
});
assert.equal(missing.response.status, 404);

const missingJson = await request('/api/route-that-does-not-exist', {
  headers: { Accept: 'application/json' },
});
assert.equal(missingJson.response.status, 404);

const post = await request('/api/test', { method: 'POST' });
assert.equal(post.response.status, 405);

const robots = await request('/robots.txt');
assert.equal(robots.response.status, 200);
assert.match(robots.response.headers.get('content-type') ?? '', /text\/plain/);
assert.match(robots.body, new RegExp(`Sitemap: ${baseUrl.origin}/sitemap\\.xml`));

const sitemap = await request('/sitemap.xml');
assert.equal(sitemap.response.status, 200);
assert.match(sitemap.response.headers.get('content-type') ?? '', /application\/xml/);
assert.match(sitemap.body, /hreflang="zh-CN"/);
assert.match(sitemap.body, /\?lang=zh/);

const socialImage = await fetch(new URL('/og.png', baseUrl));
assert.equal(socialImage.status, 200);
assert.match(socialImage.headers.get('content-type') ?? '', /image\/png/);

console.log('Smoke checks passed.');
