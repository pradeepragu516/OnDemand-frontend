import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TechnicianManage.css";

const TechnicianManage = () => {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:4000/api/technicians/"; // updated path if needed

  useEffect(() => {
    fetchApprovedTechnicians();
  }, []);

  const fetchApprovedTechnicians = async () => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(API_URL + "approved", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTechnicians(response.data);
    } catch (error) {
      console.error("Error fetching technicians:", error);
      setError("Failed to fetch approved technicians. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Update Technician Status
  const updateStatus = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        API_URL + id,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchApprovedTechnicians();
    } catch (error) {
      console.error("Error updating technician status:", error);
      alert("Failed to update status.");
    }
  };

  // Remove Technician
  const removeTechnician = async (id) => {
    if (!window.confirm("Are you sure you want to remove this technician?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(API_URL + id, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchApprovedTechnicians();
    } catch (error) {
      console.error("Error removing technician:", error);
      alert("Failed to remove technician.");
    }
  };

  return (
    <div className="technician-management-container">
      <h2>Technician Management</h2>

      {/* Display Loading Message */}
      {loading && <p>Loading technicians...</p>}

      {/* Display Error Message */}
      {error && <p className="error-message">{error}</p>}

      <div className="table-container">
        <table className="technician-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Skills</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {technicians.map((tech) => (
              <tr key={tech._id}>
                <td>{tech._id}</td>
                <td>{tech.name}</td>
                <td>{tech.email}</td>
                <td>{tech.phone}</td>
                <td>{tech.skills.join(", ")}</td>
                <td>
                  <select
                    className="status-select"
                    value={tech.status}
                    onChange={(e) => updateStatus(tech._id, e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Blacklisted">Blacklisted</option>
                  </select>
                </td>
                <td>
                  <button className="remove-btn" onClick={() => removeTechnician(tech._id)}>Remove</button>
                </td>
              </tr>
            ))}
            {!loading && technicians.length === 0 && (
              <tr>
                <td colSpan="7">No approved technicians found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechnicianManage;