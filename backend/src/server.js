const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Validate env variables early
const env = require("./configs/env.config");

const app = express();
const PORT = env.SERVER_PORT;

const { corsOptions } = require("./configs/cors");
const { db } = require("./configs/prisma");

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
const contactRoutes = require("./routes/contact.routes");
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Backend Running Successfully 🚀</h1>");
});

// Initialize DB and start server
const startServer = async () => {
  try {
    await db.getInstance();
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`DEBUG: NODE_ENV = ${env.NODE_ENV}`);
      console.log(`✅ Active Backend URL: ${env.BACKEND_URL}`);
      console.log(`✅ Allowed Frontend URL: ${env.FRONTEND_URL}`);
    });
  } catch (error) {
    console.error("Failed to start server due to DB connection error:", error);
    process.exit(1);
  }
};

startServer();