import express from "express";
import Job from "../models/Job.js";
import jwt from "jsonwebtoken";

const router = express.Router();


function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid token" });
  }
}

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});


router.post("/", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Only admin can post jobs" });
  }
  try {
    const job = new Job(req.body);
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

