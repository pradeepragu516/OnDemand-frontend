// src/components/technicianpanel/JobDetail.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JobDetail.css";

// ✅ Correct relative path using forward slashes
import leak1 from "../../assets/leak1.jpg";
import leak2 from "../../assets/leak2.jpg";

const JobDetail = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Pending");

  const job = {
    id: "JOB1234",
    customer: "Arun Kumar",
    address: "No. 12, 2nd Street, Anna Nagar, Chennai",
    contact: "+91 9876543210",
    issue: "Leaking pipe in the kitchen",
    images: [leak1, leak2], // ✅ Use imported images
    location: {
      lat: 13.0827,
      lng: 80.2707,
      address: "No. 12, 2nd Street, Anna Nagar, Chennai",
      estimatedTime: "15 mins",
      distance: "5.2 km",
    },
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);

    if (newStatus === "Accepted") {
      navigate("/TechnicianSidebar/navigation", {
        state: { task: { ...job, status: newStatus } },
      });
    }
  };

  return (
    <div className="job-detail-container">
      <h2>🛠️ Job Details</h2>
      <div className="job-card">
        <p><strong>Job ID:</strong> {job.id}</p>
        <p><strong>Customer:</strong> {job.customer}</p>
        <p><strong>Address:</strong> {job.address}</p>
        <p><strong>Contact:</strong> {job.contact}</p>
        <p><strong>Issue:</strong> {job.issue}</p>

        <div className="job-images">
          <p><strong>Uploaded Images:</strong></p>
          <div className="image-preview">
            {job.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`issue-${index}`}
                style={{ width: "200px", height: "auto", marginRight: "10px", borderRadius: "10px" }}
              />
            ))}
          </div>
        </div>

        <div className="status-section">
          <label htmlFor="status">Update Status:</label>
          <select id="status" value={status} onChange={handleStatusChange}>
            <option value="Pending">Pending</option>
            <option value="rejected">Rejected</option>
            <option value="Accepted">Accepted</option>
            <option value="On the Way">On the Way</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button className="btn-update">Update</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
