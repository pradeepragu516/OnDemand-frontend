import React, { useState, useEffect } from "react";
import "./Profile.css";
import { Pencil, ToggleLeft, ToggleRight } from "lucide-react";
import axios from "axios";
import defaultImg from "../../assets/technician.jpg";

const Profile = () => {
  const [technician, setTechnician] = useState(null);
  const [editedTechnician, setEditedTechnician] = useState({});
  const [availability, setAvailability] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const fetchOrCreateTechnician = async () => {
      try {
        const res = await axios.post("http://localhost:4000/api/profile/createOrFetch");
        const data = res.data;
        setTechnician(data);
        setEditedTechnician(data);
        setAvailability(data.availability || "Available");
      } catch (error) {
        console.error("Error fetching/creating technician:", error);
      }
    };

    fetchOrCreateTechnician();
  }, []);

  const toggleAvailability = async () => {
    const newStatus = availability === "Available" ? "Unavailable" : "Available";
    setAvailability(newStatus);

    try {
      const res = await axios.put(`http://localhost:4000/api/profile/${technician._id}`, {
        ...technician,
        availability: newStatus,
      });
      setTechnician(res.data);
    } catch (error) {
      console.error("Error updating availability:", error);
    }
  };

  const handleEditChange = (field, value) => {
    setEditedTechnician((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditSkillChange = (index, value) => {
    const updatedSkills = [...editedTechnician.skills];
    updatedSkills[index] = value;
    setEditedTechnician((prev) => ({ ...prev, skills: updatedSkills }));
  };

  const handleAddSkill = () => {
    setEditedTechnician((prev) => ({ ...prev, skills: [...(prev.skills || []), ""] }));
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...editedTechnician.skills];
    updatedSkills.splice(index, 1);
    setEditedTechnician((prev) => ({ ...prev, skills: updatedSkills }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:4000/api/profile/${technician._id}`, editedTechnician);
      setTechnician(res.data);
      setAvailability(res.data.availability);
      setShowEditModal(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  if (!technician) return <div>Loading technician profile...</div>;

  return (
    <div className="profile-container">
      <h2>👷 Technician Profile</h2>

      <div className="profile-card">
        <div className="profile-left">
          <img
            src={technician.profileImg || defaultImg}
            alt="Technician"
            className="profile-img"
            onError={(e) => (e.target.src = defaultImg)}
          />
          <span className={`status-tag ${availability.toLowerCase()}`}>{availability}</span>

          <button className="toggle-btn" onClick={toggleAvailability}>
            {availability === "Available" ? (
              <>
                <ToggleRight size={20} /> Set Unavailable
              </>
            ) : (
              <>
                <ToggleLeft size={20} /> Set Available
              </>
            )}
          </button>
        </div>

        <div className="profile-right">
          <div className="profile-header">
            <h3>{technician.name}</h3>
            <button className="edit-btn" onClick={() => setShowEditModal(true)}>
              <Pencil size={16} /> Edit Profile
            </button>
          </div>

          <p><strong>Email:</strong> {technician.email}</p>
          <p><strong>Phone:</strong> {technician.phone}</p>
          <p><strong>Location:</strong> {technician.address}</p>
          <p><strong>ID Proof:</strong> {technician.idProof}</p>

          <div className="skills">
            <strong>Skills:</strong>
            <div className="skill-tags">
              {technician.skills?.map((skill, index) => (
                <span className="skill-tag" key={index}>🔧 {skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Edit Technician Profile</h3>

            <label>Name:</label>
            <input
              type="text"
              value={editedTechnician.name || ""}
              onChange={(e) => handleEditChange("name", e.target.value)}
            />

            <label>Email:</label>
            <input
              type="email"
              value={editedTechnician.email || ""}
              onChange={(e) => handleEditChange("email", e.target.value)}
            />

            <label>Phone:</label>
            <input
              type="text"
              value={editedTechnician.phone || ""}
              onChange={(e) => handleEditChange("phone", e.target.value)}
            />

            <label>Address:</label>
            <input
              type="text"
              value={editedTechnician.address || ""}
              onChange={(e) => handleEditChange("address", e.target.value)}
            />

            <label>ID Proof:</label>
            <input
              type="text"
              value={editedTechnician.idProof || ""}
              onChange={(e) => handleEditChange("idProof", e.target.value)}
            />

            <label>Skills:</label>
            {editedTechnician.skills?.map((skill, index) => (
              <div key={index} className="skill-edit-row">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleEditSkillChange(index, e.target.value)}
                />
                <button onClick={() => handleRemoveSkill(index)}>❌</button>
              </div>
            ))}
            <button onClick={handleAddSkill}>➕ Add Skill</button>

            <div className="modal-actions">
              <button onClick={handleSave}>💾 Save</button>
              <button className="cancel-btn" onClick={() => setShowEditModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
