import React from "react";
import "./TechnicianReportsPage.css";
import { Briefcase, DollarSign, Star } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const jobData = [
  { date: "Apr 1", jobs: 2, earnings: 200 },
  { date: "Apr 2", jobs: 3, earnings: 300 },
  { date: "Apr 3", jobs: 1, earnings: 100 },
  { date: "Apr 4", jobs: 4, earnings: 400 },
  { date: "Apr 5", jobs: 2, earnings: 250 },
];

const TechnicianReportsPage = () => {
  return (
    <div className="technician-reports-page">
      <div className="cards-grid">
        <div className="card">
          <div className="card-icon">
            <Briefcase color="#2563eb" />
          </div>
          <div className="card-text">
            <p>Jobs Completed</p>
            <h3>135</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <DollarSign color="#16a34a" />
          </div>
          <div className="card-text">
            <p>Total Earnings</p>
            <h3>₹18,250</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <Star color="#facc15" />
          </div>
          <div className="card-text">
            <p>Avg. Rating</p>
            <h3>4.7 ★</h3>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="card-chart">
          <div className="chart-title">Jobs Completed Over Time</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={jobData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="jobs" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card-chart">
          <div className="chart-title">Earnings Over Time</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={jobData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="earnings" stroke="#10b981" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="table-container">
        <div className="table-title">Recent Job History</div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Service</th>
              <th>Customer</th>
              <th>Earnings</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apr 5</td>
              <td>Electrical</td>
              <td>Ravi S.</td>
              <td>₹500</td>
              <td>5 ★</td>
            </tr>
            <tr>
              <td>Apr 4</td>
              <td>Plumbing</td>
              <td>Ayesha K.</td>
              <td>₹700</td>
              <td>4.5 ★</td>
            </tr>
            {/* Add more rows dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechnicianReportsPage;