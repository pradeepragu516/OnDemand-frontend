import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TechnicianRequestPage.css";

const TechnicianRequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:4000/api/admin/technicians/requests"; // FIXED ✅

  useEffect(() => {
    fetchTechnicianRequests();
  }, []);

  const fetchTechnicianRequests = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authentication token found.");
        setLoading(false);
        return;
      }

      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log(response.data);
      setRequests(response.data || []);
    } catch (err) {
      console.error("Error fetching technician requests:", err);
      setError("Failed to load technician requests.");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:4000/api/admin/technicians/approve/${id}`, {}, { // FIXED ✅
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Technician approved.");
      fetchTechnicianRequests();
    } catch (err) {
      console.error("Approval failed:", err);
      alert("Failed to approve technician.");
    }
  };

  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:4000/api/admin/technicians/reject/${id}`, {}, { // FIXED ✅
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Technician rejected.");
      fetchTechnicianRequests();
    } catch (err) {
      console.error("Reject failed:", err);
      alert("Failed to reject technician.");
    }
  };

  return (
    <div className="tech-request-page">
      <h2>Technician Authentication Requests</h2>

      {loading && <p>Loading requests...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && requests.length === 0 && (
        <p>No pending technician requests.</p>
      )}

      {!loading && requests.length > 0 && (
        <table className="request-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Skills</th>
              <th>Experience</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((tech) => (
              <tr key={tech._id}>
                <td>{tech.name}</td>
                <td>{tech.email}</td>
                <td>{tech.phone}</td>
                <td>{tech.skills.join(", ")}</td>
                <td>{tech.experience} yrs</td>
                <td>{tech.address}</td>
                <td>
                  <button className="approve-btn" onClick={() => handleApprove(tech._id)}>
                    Approve
                  </button>
                  <button className="reject-btn" onClick={() => handleReject(tech._id)}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TechnicianRequestPage;