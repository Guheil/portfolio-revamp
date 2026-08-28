import Script from 'next/script';
import AnalyticsTracker from './AnalyticsTracker';

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

const isValidMeasurementId = (value?: string) =>
  Boolean(value && /^G-[A-Z0-9]+$/i.test(value));

export default function GoogleAnalytics() {
  const isNonProductionVercel =
    process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production';

  if (isNonProductionVercel || !isValidMeasurementId(measurementId) || !measurementId) {
    return null;
  }

  return (
    <>
      <Script id="ga4-bootstrap" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', '${measurementId}', {
            anonymize_ip: true
          });
        `}
      </Script>
      <Script
        id="ga4-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
      />
      <AnalyticsTracker />
    </>
  );
}
