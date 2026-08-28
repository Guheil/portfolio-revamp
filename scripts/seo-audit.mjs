import { INDEXNOW_KEY, getProductionSiteUrl } from './seo-config.mjs';

const siteUrl = getProductionSiteUrl();

if (!siteUrl) {
  console.error(
    'SEO audit cannot run. Set NEXT_PUBLIC_SITE_URL or run it in a Vercel production environment.'
  );
  process.exit(1);
}

const normalizeUrl = (value) => {
  const url = new URL(value, `${siteUrl}/`);
  url.hash = '';
  if (url.pathname !== '/') url.pathname = url.pathname.replace(/\/$/, '');
  return url.href.replace(/\/$/, url.pathname === '/' ? '/' : '');
};

const decodeXml = (value) =>
  value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");

const failures = [];
const passes = [];

const check = (condition, success, failure) => {
  if (condition) passes.push(success);
  else failures.push(failure);
};

const fetchText = async (url) => {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'Xavier-Portfolio-SEO-Audit/1.0' },
    redirect: 'follow',
  });
  return { response, text: await response.text() };
};

const robotsUrl = `${siteUrl}/robots.txt`;
const sitemapUrl = `${siteUrl}/sitemap.xml`;
const keyUrl = `${siteUrl}/${INDEXNOW_KEY}.txt`;

const [{ response: robotsResponse, text: robots }, { response: sitemapResponse, text: sitemap }, { response: keyResponse, text: keyBody }] =
  await Promise.all([fetchText(robotsUrl), fetchText(sitemapUrl), fetchText(keyUrl)]);

check(robotsResponse.ok, 'robots.txt is reachable', `robots.txt returned ${robotsResponse.status}`);
check(
  robots.includes('OAI-SearchBot'),
  'OAI-SearchBot has an explicit robots rule',
  'robots.txt does not contain an OAI-SearchBot rule'
);
check(
  robots.includes(`Sitemap: ${sitemapUrl}`),
  'robots.txt references the production sitemap',
  'robots.txt does not reference the expected production sitemap'
);
check(sitemapResponse.ok, 'sitemap.xml is reachable', `sitemap.xml returned ${sitemapResponse.status}`);
check(
  keyResponse.ok && keyBody.trim() === INDEXNOW_KEY,
  'IndexNow ownership key is reachable and valid',
  'IndexNow key file is missing or does not contain the expected key'
);

const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/gis)]
  .map((match) => decodeXml(match[1].trim()))
  .map(normalizeUrl);

check(urls.length > 0, `sitemap.xml contains ${urls.length} URL(s)`, 'sitemap.xml contains no <loc> URLs');
check(new Set(urls).size === urls.length, 'sitemap URLs are unique', 'sitemap.xml contains duplicate URLs');

for (const url of urls) {
  const { response, text: html } = await fetchText(url);
  const path = new URL(url).pathname;

  check(response.ok, `${path} returns ${response.status}`, `${path} returned ${response.status}`);
  check(/<title[^>]*>[^<]+<\/title>/i.test(html), `${path} has a title`, `${path} is missing a title`);
  check(
    /<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/i.test(html) ||
      /<meta[^>]+content=["'][^"']+["'][^>]+name=["']description["']/i.test(html),
    `${path} has a meta description`,
    `${path} is missing a meta description`
  );
  check(
    !/<meta[^>]+(?:name=["']robots["'][^>]+content=["'][^"']*noindex|content=["'][^"']*noindex[^"']*["'][^>]+name=["']robots["'])/i.test(html),
    `${path} is indexable`,
    `${path} contains a noindex directive`
  );

  const canonicalMatch =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
    html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  const canonical = canonicalMatch?.[1] ? normalizeUrl(canonicalMatch[1]) : '';

  check(Boolean(canonical), `${path} has a canonical URL`, `${path} is missing a canonical URL`);
  if (canonical) {
    check(canonical === normalizeUrl(url), `${path} canonical matches its sitemap URL`, `${path} canonical is ${canonical}, expected ${normalizeUrl(url)}`);
  }
}

console.log(`\nSEO production audit for ${siteUrl}`);
for (const message of passes) console.log(`PASS  ${message}`);
for (const message of failures) console.error(`FAIL  ${message}`);
console.log(`\n${passes.length} passed, ${failures.length} failed.`);

if (failures.length > 0) process.exit(1);
