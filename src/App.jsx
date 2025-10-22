import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import Sidebar from "./components/Adminpanel/Sidebar";
import Dashboard from "./components/Adminpanel/Dashboard";
import TechnicianRequestPage from "./components/Adminpanel/TechnicianRequestPage";
import ServiceRequests from "./components/Adminpanel/ServiceRequests";
import Technician from "./components/Adminpanel/Technicians";
import TechnicianManage from "./components/Adminpanel/TechnicianManage";
import UserManagement from "./components/Adminpanel/UserManagement";
import ReportsAnalytics from "./components/Adminpanel/ReportsAnalytics";
import CustomerSupport from "./components/Adminpanel/CustomerSupport";

import Landscape from "./components/authentication/Landscape";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import TechnicianLogin from "./components/authentication/TechnicianLogin";
import TechnicianRegister from "./components/authentication/TechnicianRegister";
import AdminLogin from "./components/authentication/AdminLogin";

import TechnicianSidebar from "./components/Technicianpanel/TechnicianSidebar";
import DashboardHome from "./components/Technicianpanel/DashboardHome";
import JobDetail from "./components/Technicianpanel/JobDetail";
import Earnings from "./components/Technicianpanel/Earnings";
import LiveNavigation from "./components/Technicianpanel/LiveNavigation";
import Profile from "./components/Technicianpanel/Profile";
import TechnicianReportsPage from "./components/Technicianpanel/TechnicianReportsPage";
import Settings from "./components/Technicianpanel/Settings";

import Home from "./pages/Home";
import ServiceRequest from "./pages/ServiceRequest";
import UserLayout from "./UserLayout";
import "./App.css";

// Admin Panel Layout
const AdminLayout = () => (
  <div className="app-container">
    <div className="sidebar-container">
      <Sidebar />
    </div>
    <div className="main-content">
      <Outlet />
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Authentication Pages */}
        <Route path="/" element={<Landscape />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/technician-login" element={<TechnicianLogin />} />
        <Route path="/technician-register" element={<TechnicianRegister />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* Admin Panel */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="technician-requests" element={<TechnicianRequestPage />} />
          <Route path="service-requests" element={<ServiceRequests />} />
          <Route path="technicians" element={<Technician />} />
          <Route path="technician-management" element={<TechnicianManage />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="reports-analytics" element={<ReportsAnalytics />} />
          <Route path="customer-support" element={<CustomerSupport />} />
        </Route>

        {/* Technician Panel */}
        <Route path="/TechnicianSidebar" element={<TechnicianSidebar />}>
          <Route index element={<DashboardHome />} />
          <Route path="jobs" element={<JobDetail />} />
          <Route path="navigation" element={<LiveNavigation />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reports" element={<TechnicianReportsPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* User Pages with Navbar & Footer */}
        <Route element={<UserLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/servicerequest" element={<ServiceRequest />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
