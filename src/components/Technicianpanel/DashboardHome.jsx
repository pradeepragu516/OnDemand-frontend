// src/components/Technician/DashboardHome.jsx
import React from "react";
import "./DashboardHome.css";
import { FaUserCog } from "react-icons/fa";

const DashboardHome = () => {
  const assignedJobs = [
    { job: "Fix Water Leak", location: "22 Baker St", status: "In Progress" },
    { job: "AC Gas Refill", location: "15 Green Ave", status: "Pending" },
    { job: "TV Wall Mount", location: "9 King Cross", status: "Completed" },
    { job: "Wiring Fix", location: "34 Oak Drive", status: "Cancelled" },
  ];

  return (
    <div className="dashboard-home1">
      <header className="dashboard-header">
        <h1>Technician Dashboard</h1>
        <div className="profile">
          <FaUserCog className="profile-icon" />
          <span>Technician</span>
        </div>
      </header>

      <section className="dashboard-body1">
        <div className="left-column">
          <h2>📆 Today's Schedule</h2>
          <div className="schedule-table">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Job</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09:00 AM</td>
                  <td>AC Maintenance</td>
                  <td>Sector 12, Downtown</td>
                  <td className="pending">Pending</td>
                </tr>
                <tr>
                  <td>11:30 AM</td>
                  <td>Water Purifier Repair</td>
                  <td>Lakeview Apartments</td>
                  <td className="in-progress">In Progress</td>
                </tr>
                <tr>
                  <td>02:00 PM</td>
                  <td>Ceiling Fan Installation</td>
                  <td>Central Park Towers</td>
                  <td className="pending">Pending</td>
                </tr>
                <tr>
                  <td>04:15 PM</td>
                  <td>Washing Machine Service</td>
                  <td>Sunshine Residency</td>
                  <td className="completed">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="assigned-jobs">
            <h3>👷‍♂️ Assigned Jobs</h3>
            <table>
              <thead>
                <tr>
                  <th>Job</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {assignedJobs.map((job, index) => (
                  <tr key={index}>
                    <td>{job.job}</td>
                    <td>{job.location}</td>
                    <td className={`status ${job.status.toLowerCase().replace(" ", "-")}`}>
                      {job.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="right-column">
          <div className="stats-box">
            <h3>Total Jobs</h3>
            <div className="circle-chart">
              <svg viewBox="0 0 36 36">
                <path
                  className="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray="75, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831"
                />
              </svg>
              <div className="chart-text">
                <span>18</span><small>Ongoing</small>
                <span className="deactivated">5</span><small>Completed</small>
              </div>
            </div>
          </div>

          <div className="earnings-box">
            <h3>💰 Earnings Snapshot</h3>
            <div className="earnings-info">
              <p><strong>Total Earnings:</strong> ₹45,000</p>
              <p><strong>Today’s Earnings:</strong> ₹1,200</p>
            </div>
          </div>

          <div className="ratings-box">
            <h3>⭐ Ratings Overview</h3>
            <div className="rating-value">4.6</div>
            <div className="stars">
              <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
              <span className="faded">☆</span>
            </div>
            <p className="rating-desc">Based on 210 reviews</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
