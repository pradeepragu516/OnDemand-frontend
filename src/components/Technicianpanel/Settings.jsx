// src/components/technicianpanel/Settings.jsx
import React, { useState } from "react";
import "./Settings.css";
import {
  UserCog,
  Bell,
  Sun,
  Moon,
  Lock,
  LogOut,
  HelpCircle,
  Mail
} from "lucide-react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleLogoutAll = () => {
    alert("You’ve been logged out from all devices.");
    // Add backend logout all logic here
  };

  const handleContactSupport = () => {
    window.location.href = "mailto:support@repairtech.com";
  };

  return (
    <div className="settings-wrapper">
      <div className="settings-container">
        <h1>⚙️ Technician Settings</h1>

        <div className="settings-section">
          <h2><UserCog /> Account Settings</h2>
          <p>Edit your personal info like name, email, password, or availability status.</p>
          <button className="settings-btn">Manage Account</button>
        </div>

        <div className="settings-section">
          <h2><Bell /> Notifications</h2>
          <p>Manage your SMS, Email and App notification preferences.</p>
          <button className="settings-btn">Notification Preferences</button>
        </div>

        <div className="settings-section">
          <h2>{darkMode ? <Sun /> : <Moon />} Theme</h2>
          <p>Switch between light and dark mode for better comfort.</p>
          <button className="settings-btn" onClick={handleToggleTheme}>
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        <div className="settings-section">
          <h2><Lock /> Privacy</h2>
          <p>Logout from all connected devices securely.</p>
          <button className="settings-btn logout" onClick={handleLogoutAll}>
            <LogOut size={18} /> Logout All Devices
          </button>
        </div>

        <div className="settings-section">
          <h2><HelpCircle /> Help & Support</h2>
          <p>Need help? Contact our support team.</p>
          <button className="settings-btn support" onClick={handleContactSupport}>
            <Mail size={18} /> Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
