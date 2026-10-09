/** Canonical origin. Override with NEXT_PUBLIC_SITE_URL (e.g. for previews). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ciphertextlabs.com').replace(/\/$/, '')
