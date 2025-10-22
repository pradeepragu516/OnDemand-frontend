import { NavLink, useNavigate } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  List as ListIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Support as SupportIcon,
  Logout as LogoutIcon,
  Engineering as TechnicianIcon,
  AssignmentInd as TechnicianRequestIcon,
} from "@mui/icons-material";

import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { to: "/admin/dashboard", icon: <DashboardIcon />, label: "Dashboard" },
    { to: "/admin/technician-requests", icon: <TechnicianRequestIcon />, label: "Technician Requests" },
    { to: "/admin/service-requests", icon: <ListIcon />, label: "Service Requests" },
    { to: "/admin/technicians", icon: <PeopleIcon />, label: "Technicians" },
    { to: "/admin/technician-management", icon

: <TechnicianIcon />, label: "Technician Management" },
    { to: "/admin/user-management", icon: <PeopleIcon />, label: "Users Management" },
    { to: "/admin/reports-analytics", icon: <BarChartIcon />, label: "Reports & Analytics" },
    { to: "/admin/customer-support", icon: <SupportIcon />, label: "Customer Support" },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar2">
        <span className="menu-dots"></span>
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-menu">
          {navItems.map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
              >
                <span className="icon">{icon}</span> {label}
              </NavLink>
            </li>
          ))}
          <li className="logout">
            <button onClick={handleLogout} className="logout-btn">
              <span className="icon"><LogoutIcon /></span> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;