import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import jobRoutes from "./routes/jobs.js";
import applicationRoutes from "./routes/applications.js";

<<<<<<< HEAD
=======
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

app.use(helmet());
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGINS || '*' }));
app.use(rateLimit({ windowMs: 60_000, max: 100 }));

app.get('/health', (req,res)=> res.json({ ok: true }));


>>>>>>> branch1
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);


mongoose.connect(process.env.URI)
  .then(() => console.log(" Database connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
