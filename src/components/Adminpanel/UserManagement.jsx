import React, { useState, useEffect } from "react";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from backend and localStorage
  useEffect(() => {
    // Fetch from backend (assuming your backend API is set up correctly)
    // In UserManagement.jsx

    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/users");
        if (!response.ok) {
          throw new Error("Error fetching users");
        }
        const data = await response.json();
        console.log(data);
        setUsers(data); // <--- Don't forget to update users state!
        setLoading(false); // <--- Remove loading after data fetched
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };
    


    fetchUsers(); // Call to fetch data on mount
  }, []); // Empty dependency means this runs only once on mount

  // Update user status
  const updateStatus = (id, newStatus) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: newStatus } : user));
  };

  // Process refund
  const processRefund = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, refund: true } : user));
    alert("Refund processed successfully!");
  };

  if (loading) return <p>Loading...</p>; // Loading message

  return (
    <div className="user-management-container">
      <h2>User Management</h2>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Refund</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <select
                      className="status-select"
                      value={user.status}
                      onChange={(e) => updateStatus(user.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                  <td className={user.refund ? "refund-processed" : "refund-pending"}>
                    {user.refund ? "Processed" : "Pending"}
                  </td>
                  <td>
                    {!user.refund && (
                      <button className="refund-button" onClick={() => processRefund(user.id)}>
                        Process Refund
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Users Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;