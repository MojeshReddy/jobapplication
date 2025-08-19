import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import jobRoutes from "./routes/jobs.js";
import applicationRoutes from "./routes/applications.js";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();
const app = express();

// Security & rate limiting
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGINS || '*' }));
app.use(rateLimit({ windowMs: 60_000, max: 100 }));

// Health check route
app.get('/health', (req, res) => res.json({ ok: true }));

// Root route
app.get("/", (req, res) => {
  res.send("Backend API is running ✅");
});


// API routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

// Connect to MongoDB
mongoose.connect(process.env.URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

