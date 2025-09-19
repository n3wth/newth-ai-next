/**
 * Environment variable validation and type safety
 */

export const env = {
  // Public variables (available on client and server)
  public: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://newth.ai',
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@newth.ai',
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    enableMonitoring: process.env.NEXT_PUBLIC_ENABLE_MONITORING === 'true',
    vercelAnalyticsId: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
  },
  // Server-only variables
  server: {
    databaseUrl: process.env.DATABASE_URL,
    apiSecretKey: process.env.API_SECRET_KEY,
    nodeEnv: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV === 'development',
    isProd: process.env.NODE_ENV === 'production',
  },
} as const

export type Env = typeof env
