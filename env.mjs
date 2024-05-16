import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    POSTGRES_PRISMA_URL: z.string().url(),
    POSTGRES_URL_NON_POOLING: z.string().url(),
    PRISMA_GENERATE_NO_ENGINE: z.boolean().min(1)
  },
  client: {
    NEXT_PUBLIC_SERVER_URL: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    PRISMA_GENERATE_NO_ENGINE: process.env.PRISMA_GENERATE_NO_ENGINE,
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  },
})
