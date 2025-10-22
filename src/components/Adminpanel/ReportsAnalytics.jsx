import React from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./ReportsAnalytics.css";

const ReportsAnalytics = () => {
  // Revenue Reports Data
  const revenueData = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 18000 },
    { month: "Mar", revenue: 22000 },
    { month: "Apr", revenue: 17000 },
    { month: "May", revenue: 25000 },
    { month: "Jun", revenue: 30000 },
  ];

  // Top Technicians Data
  const technicianData = [
    { name: "John Doe", jobsCompleted: 120 },
    { name: "Jane Smith", jobsCompleted: 98 },
    { name: "Alice Brown", jobsCompleted: 85 },
    { name: "Michael Johnson", jobsCompleted: 75 },
  ];

  // User Engagement Data
  const userEngagementData = [
    { name: "Positive", value: 65 },
    { name: "Neutral", value: 20 },
    { name: "Negative", value: 15 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

  return (
    <div className="reports-analytics-container">
      <h2>📊 Reports & Analytics</h2>

      <div className="report-grid">
        {/* Revenue Report */}
        <div className="report-card">
          <h3>💰 Monthly Revenue Report</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Technicians */}
        <div className="report-card">
          <h3>🏆 Top Performing Technicians</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={technicianData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="jobsCompleted" fill="#22C55E" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Engagement */}
        <div className="report-card">
          <h3>📈 User Engagement & Satisfaction</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={userEngagementData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {userEngagementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
