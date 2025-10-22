import React, { useState } from "react";
import "./TechnicianRegister.css";
import scenery from "../../assets/scenery.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // ✅ Fix missing imports

const TechnicianRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    skills: "",
    experience: "",
    address: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value.trimStart() }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/technician/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Registration failed");
      } else {
        setSuccessMessage("Registration submitted. Awaiting admin approval.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          skills: "",
          experience: "",
          address: "",
        });
      }
    } catch (err) {
      console.error("Registration error:", err);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tech-register-container">
      <div
        className="background-overlay1"
        style={{ backgroundImage: `url(${scenery})` }}
      ></div>

      <h2>Technician Registration</h2>
      <form className="tech-register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          required
          onChange={handleChange}
        />

        {/* Password Field */}
        <div className="input-group1">
          <div className="password-input1">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <input
          type="text"
          name="skills"
          placeholder="Skills (e.g. Electrician, Plumber)"
          value={formData.skills}
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          value={formData.experience}
          required
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Address (optional)"
          value={formData.address}
          onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </button>

        {successMessage && <p className="success-msg">{successMessage}</p>}
        {errorMessage && <p className="error-msg">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default TechnicianRegister;