import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./Dashboard.css";


const Dashboard = () => {
  const [stats, setStats] = useState({
    totalRequests: 10,
    completedRequests: 5,
    activeTechnicians: 6,
    totalUsers: 10,
    totalRevenue: 120000,
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/dashboard")
      .then((response) => setStats(response.data))
      .catch((error) => console.error("Error fetching dashboard data", error));
  }, []);

  const data = [
    { name: "Requests", value: stats.totalRequests },
    { name: "Completed", value: stats.completedRequests },
    { name: "Technicians", value: stats.activeTechnicians },
    { name: "Users", value: stats.totalUsers },
    { name: "Revenue", value: stats.totalRevenue },
  ];

  return (
    <div className="dashboard1">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-cards1">
        <div className="card1">
          <h2>Total Requests</h2>
          <p>{stats.totalRequests}</p>
        </div>
        <div className="card1">
          <h2>Completed Requests</h2>
          <p>{stats.completedRequests}</p>
        </div>
        <div className="card1">
          <h2>Active Technicians</h2>
          <p>{stats.activeTechnicians}</p>
        </div>
        <div className="card1">
          <h2>Total Revenue</h2>
          <p>${stats.totalRevenue}</p>
        </div>
      </div>
      <div className="chart-container1">
        <h2>Performance Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2ecc71" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
