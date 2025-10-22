import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import scenery from "../../assets/scenery.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }
  
      // Save token & user data to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
  
      // 🔥 Add this part for users array:
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      const newUser = {
        id: data.user._id || Date.now(), // Use _id from backend or Date.now() as fallback
        name: data.user.name || "No Name",
        email: data.user.email || "No Email",
        registeredAt: new Date().toLocaleString(),
        status: "Pending",
        refund: false,
      };
  
      // Check if user already exists (by email)
      const exists = storedUsers.some(u => u.email === newUser.email);
      if (!exists) {
        storedUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(storedUsers));
      }
  
      alert("Login successful!");
      navigate("/Home"); // ✅ Change route as needed
  
    } catch (err) {
      console.error("Login Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="login-container1">
      <div
        className="background-overlay2"
        style={{ backgroundImage: `url(${scenery})` }}
      ></div>

      <div className="login-box1">
        <h2>Welcome Back</h2>
        <p>Sign in to continue</p>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button className="btn-login1" type="submit">Login</button>
          <button type="button" className="btn-guest">Continue as Guest</button>
        </form>

        <div className="register-link1">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;