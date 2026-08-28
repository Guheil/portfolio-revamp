export const INDEXNOW_KEY = 'e7e296c8c6d4245bc05841b4b7d62647';

export const getProductionSiteUrl = () => {
  const rawSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : '');

  return rawSiteUrl.replace(/\/$/, '');
};
