import React, { useState } from "react";
import "./TechnicianLogin.css";
import scenery from "../../assets/scenery.jpg";  // Background image
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for page redirection

const TechnicianLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:4000/api/technician/login", {
      email,
      password,
    });

    alert(res.data.message);

    localStorage.setItem("technician", JSON.stringify(res.data.technician));
    localStorage.setItem("technicianId", res.data.technician._id);  // ✅ Save ID separately

    navigate("/TechnicianSidebar");
  } catch (error) {
    console.error("Login Error:", error);
    setError(error.response?.data?.error || "Login failed. Please check your credentials.");
  }
};


  return (
    <div className="tech-login-container">
      <div
        className="login-background-overlay"
        style={{ backgroundImage: `url(${scenery})` }}
      ></div>

      <h2>Technician Login</h2>

      {/* Display error message if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form className="tech-login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your EMAIL ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default TechnicianLogin;