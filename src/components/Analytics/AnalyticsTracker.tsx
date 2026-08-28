'use client';

import { useEffect } from 'react';

type AnalyticsEventValue = string | number | boolean | undefined;

type AnalyticsEventParams = Record<string, AnalyticsEventValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const AI_SOURCE_RULES = [
  { provider: 'ChatGPT', values: ['chatgpt.com', 'chat.openai.com'] },
  { provider: 'Perplexity', values: ['perplexity.ai'] },
  { provider: 'Microsoft Copilot', values: ['copilot.microsoft.com', 'copilot.com'] },
  { provider: 'Google Gemini', values: ['gemini.google.com'] },
  { provider: 'Claude', values: ['claude.ai'] },
] as const;

const normalizeHost = (value: string) => value.toLowerCase().replace(/^www\./, '');

const providerFromValue = (value: string) => {
  const normalized = normalizeHost(value);

  return AI_SOURCE_RULES.find((rule) =>
    rule.values.some(
      (candidate) =>
        normalized === candidate || normalized.endsWith(`.${candidate}`)
    )
  )?.provider;
};

const detectAiReferral = () => {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source')?.trim() ?? '';
  const utmProvider = providerFromValue(utmSource);

  if (utmProvider) {
    return { provider: utmProvider, sourceType: 'utm_source' };
  }

  if (!document.referrer) return null;

  try {
    const referrerHost = new URL(document.referrer).hostname;
    const referrerProvider = providerFromValue(referrerHost);

    return referrerProvider
      ? { provider: referrerProvider, sourceType: 'referrer' }
      : null;
  } catch {
    return null;
  }
};

const sendEvent = (name: string, params: AnalyticsEventParams = {}) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
};

export default function AnalyticsTracker() {
  useEffect(() => {
    const aiReferral = detectAiReferral();
    const storageKey = 'portfolio-ai-referral-recorded';
    let alreadyRecorded = false;

    try {
      alreadyRecorded = window.sessionStorage.getItem(storageKey) === '1';
    } catch {
      // Analytics should never interfere with portfolio functionality.
    }

    if (aiReferral && !alreadyRecorded) {
      sendEvent('ai_referral_landing', {
        ai_provider: aiReferral.provider,
        source_type: aiReferral.sourceType,
        landing_path: window.location.pathname,
      });

      try {
        window.sessionStorage.setItem(storageKey, '1');
      } catch {
        // Storage can be unavailable in restrictive browser contexts.
      }
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const element = target.closest<HTMLElement>('[data-analytics-event]');
      if (!element) return;

      const eventName = element.dataset.analyticsEvent;
      if (!eventName) return;

      sendEvent(eventName, {
        item_name: element.dataset.analyticsLabel,
        item_type: element.dataset.analyticsType,
        destination: element.dataset.analyticsDestination,
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
