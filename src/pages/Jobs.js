import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); //

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handlePost = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({ title, company, location, salary, description }),
      });
      const job = await res.json();
      setJobs([...jobs, job]);
      setTitle("");
      setCompany("");
      setLocation("");
      setSalary("");
      setDescription("");
    } catch (err) {
      console.error("Error posting job:", err);
    }
  };

  return (
    <div>
      <h2>Jobs</h2>

      
      {role === "admin" && (
        <div style={{ marginBottom: "20px" }}>
          <h3>Post a Job</h3>
          <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br/>
          <input placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} /><br/>
          <input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} /><br/>
          <input placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} /><br/>
          <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br/>
          <button onClick={handlePost}>Post Job</button>
        </div>
      )}

   
      <ul>
        {jobs.map((j) => (
          <li key={j._id}>
            <b>{j.title}</b> - {j.company} ({j.location})
            {token && role === "user" && (
              <Link to={`/apply/${j._id}`} style={{ marginLeft: "10px" }}>
                Apply
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
