import { INDEXNOW_KEY, getProductionSiteUrl } from './seo-config.mjs';

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const rawSiteUrl = getProductionSiteUrl();

if (!rawSiteUrl) {
  console.error(
    'IndexNow was not submitted. Set NEXT_PUBLIC_SITE_URL or run this from a Vercel production environment.'
  );
  process.exit(1);
}

const siteUrl = rawSiteUrl.replace(/\/$/, '');
const site = new URL(siteUrl);

if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
  console.error('IndexNow submission skipped because this is not a production deployment.');
  process.exit(0);
}

const normalizeSubmittedUrl = (value) => {
  const url = new URL(value, `${siteUrl}/`);

  if (url.hostname !== site.hostname) {
    throw new Error(`Refusing to submit a URL outside ${site.hostname}: ${url.href}`);
  }

  url.hash = '';
  return url.href;
};

const decodeXml = (value) =>
  value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");

const explicitUrls = process.argv.slice(2);
let urls = [];

if (explicitUrls.length > 0) {
  urls = explicitUrls.map(normalizeSubmittedUrl);
} else {
  const sitemapUrl = `${siteUrl}/sitemap.xml`;
  const sitemapResponse = await fetch(sitemapUrl, {
    headers: { 'User-Agent': 'Xavier-Portfolio-IndexNow/1.0' },
  });

  if (!sitemapResponse.ok) {
    throw new Error(
      `Unable to fetch ${sitemapUrl}: ${sitemapResponse.status} ${sitemapResponse.statusText}`
    );
  }

  const sitemapXml = await sitemapResponse.text();
  urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/gis)]
    .map((match) => decodeXml(match[1].trim()))
    .map(normalizeSubmittedUrl);
}

urls = [...new Set(urls)].slice(0, 10000);

if (urls.length === 0) {
  console.log('No URLs found to submit to IndexNow.');
  process.exit(0);
}

const response = await fetch(INDEXNOW_ENDPOINT, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({
    host: site.hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${siteUrl}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }),
});

if (![200, 202].includes(response.status)) {
  const body = await response.text();
  throw new Error(
    `IndexNow submission failed: ${response.status} ${response.statusText}${body ? `\n${body}` : ''}`
  );
}

console.log(
  `IndexNow accepted ${urls.length} URL${urls.length === 1 ? '' : 's'} for ${site.hostname} with HTTP ${response.status}.`
);
