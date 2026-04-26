import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  NEXT_PUBLIC_FRONTEND_LOCAL_URL: z.string().url().optional(),
  NEXT_PUBLIC_FRONTEND_SERVER_URL: z.string().url().optional(),
  NEXT_PUBLIC_BACKEND_LOCAL_URL: z.string().url().optional(),
  NEXT_PUBLIC_BACKEND_SERVER_URL: z.string().url().optional(),
});

// Validate environment variables
const envVars = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_FRONTEND_LOCAL_URL: process.env.NEXT_PUBLIC_FRONTEND_LOCAL_URL,
  NEXT_PUBLIC_FRONTEND_SERVER_URL: process.env.NEXT_PUBLIC_FRONTEND_SERVER_URL,
  NEXT_PUBLIC_BACKEND_LOCAL_URL: process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL,
  NEXT_PUBLIC_BACKEND_SERVER_URL: process.env.NEXT_PUBLIC_BACKEND_SERVER_URL,
};

const parsed = envSchema.safeParse(envVars);

if (!parsed.success) {
  console.error("❌ Invalid frontend environment variables:", parsed.error.format());
  throw new Error("Invalid environment variables");
}

export const env = {
  ...parsed.data,
  // Derive the active Backend URL based on NODE_ENV
  BACKEND_URL: parsed.data.NODE_ENV === "production" 
    ? parsed.data.NEXT_PUBLIC_BACKEND_SERVER_URL 
    : parsed.data.NEXT_PUBLIC_BACKEND_LOCAL_URL,
};
