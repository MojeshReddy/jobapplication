import mongoose from "mongoose";

const appSchema = new mongoose.Schema({
  jobId: String,
  userId: String,
  resumeLink: String,
  note: String,
});

export default mongoose.model("Application", appSchema);
