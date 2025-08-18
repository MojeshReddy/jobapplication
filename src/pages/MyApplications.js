import { useEffect, useState } from "react";

export default function MyApplications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:5000/api/applications/my", {
      headers: { Authorization: `Bearer ${token}` }, 
    })
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>My Applications</h2>
      <ul>
        {apps.map((a) => (
          <li key={a._id}>
            Job: {a.jobId?.title || "Deleted Job"} <br />
            Note: {a.note} <br />
            Resume:{" "}
            <a href={a.resumeLink} target="_blank" rel="noreferrer">
              {a.resumeLink}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
