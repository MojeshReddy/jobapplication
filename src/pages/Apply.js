import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Apply() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [resumeLink, setResumeLink] = useState("");
  const [note, setNote] = useState("");
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs/${jobId}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [jobId]);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must log in first!");
      return navigate("/login");
    }

    try {
      const res = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ jobId, resumeLink, note }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Application submitted!");
        navigate("/my-applications");
      } else {
        alert(data.error || "Failed to apply");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to apply due to network error");
    }
  };

  return (
    <div className="container">
      <h2>Apply for {job?.title}</h2>
      <div className="space-y">
        <input
          className="input"
          placeholder="Resume Link"
          value={resumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
        />
        <textarea
          className="input"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>
          Submit Application
        </button>
      </div>
    </div>
  );
}
