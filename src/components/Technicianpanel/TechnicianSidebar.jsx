// src/components/Technician/TechnicianSidebar.jsx
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  FaHome,
  FaTools,
  FaMapMarkedAlt,
  FaMoneyBill,
  FaUserCheck,
  FaBars,
  FaRegCalendarCheck,
  FaChartPie,
  FaCog,
} from "react-icons/fa";

import "./TechnicianSidebar.css";

const TechnicianSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => {
    if (window.innerWidth <= 768) setSidebarOpen(false);
  };

  return (
    <div className="technician-container">
  

      <nav className={`sidebar1 ${sidebarOpen ? "open" : ""}`}>
        <div className="logo-container">
          <h2>Technician</h2>
        </div>

        <ul>
          <li>
            <Link to="/TechnicianSidebar" onClick={closeSidebar}>
              <FaHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/TechnicianSidebar/jobs" onClick={closeSidebar}>
              <FaTools /> Job Details
            </Link>
          </li>
          <li>
            <Link to="/TechnicianSidebar/navigation" onClick={closeSidebar}>
              <FaMapMarkedAlt /> Live Navigation
            </Link>
          </li>
          <li>
            <Link to="/TechnicianSidebar/earnings" onClick={closeSidebar}>
              <FaMoneyBill /> Earnings
            </Link>
          </li>
          <li>
            <Link to="/TechnicianSidebar/profile" onClick={closeSidebar}>
              <FaUserCheck /> Profile & ID
            </Link>
          </li>
       
          <li>
            <Link to="/TechnicianSidebar/reports" onClick={closeSidebar}>
              <FaChartPie /> Reports
            </Link>
          </li>
          <li>
            <Link to="/TechnicianSidebar/settings" onClick={closeSidebar}>
              <FaCog /> Settings
            </Link>
          </li>
        </ul>
      </nav>

      <div className="technician-content">
        <Outlet />
      </div>
    </div>
  );
};

export default TechnicianSidebar;
