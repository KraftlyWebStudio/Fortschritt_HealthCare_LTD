const { z } = require("zod");

const envSchema = z.object({
  SERVER_PORT: z.string().default("5001"),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  FRONTEND_LOCAL_URL: z.string().url(),
  FRONTEND_SERVER_URL: z.string().url(),
  BACKEND_LOCAL_URL: z.string().url(),
  BACKEND_SERVER_URL: z.string().url(),
  DATABASE_URL: z.string(),
  DIRECT_URL: z.string(),
  CONTACT_EMAIL_USER: z.string().email(),
  CONTACT_EMAIL_PASS: z.string().min(1),
  CONTACT_RECIPIENT_EMAIL: z.string().email(),
});

// Validate environment variables
const envVars = process.env;

const { success, data, error } = envSchema.safeParse(envVars);

if (!success) {
  console.error("❌ Invalid environment variables:", error.format());
  process.exit(1);
}

const validatedEnv = data;

// Derive the correct URL based on NODE_ENV
validatedEnv.FRONTEND_URL = validatedEnv.NODE_ENV === "production" 
  ? validatedEnv.FRONTEND_SERVER_URL 
  : validatedEnv.FRONTEND_LOCAL_URL;

validatedEnv.BACKEND_URL = validatedEnv.NODE_ENV === "production"
  ? validatedEnv.BACKEND_SERVER_URL
  : validatedEnv.BACKEND_LOCAL_URL;

module.exports = validatedEnv;
