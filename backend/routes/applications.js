import express from "express";
import Application from "../models/Application.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Submit an application
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { jobId, resumeLink, note } = req.body;
    if (!jobId || !resumeLink) {
      return res.status(400).json({ error: "Job ID and resume link are required" });
    }

    const app = new Application({
      jobId,
      userId: req.user.id, // from token
      resumeLink,
      note,
    });

    await app.save();
    res.status(201).json(app);
  } catch (err) {
    res.status(500).json({ error: "Failed to submit application", details: err.message });
  }
});

// Get my applications
router.get("/my", authMiddleware, async (req, res) => {
  try {
    const apps = await Application.find({ userId: req.user.id }).populate("jobId");
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch applications" });
  }
});

export default router;
