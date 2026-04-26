const env = require("./env.config");

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigin = env.FRONTEND_URL;
    
    // Allow requests with no origin (like mobile apps or curl) or matching origin
    if (!origin || origin === allowedOrigin || env.NODE_ENV === "development") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = {
  corsOptions
};