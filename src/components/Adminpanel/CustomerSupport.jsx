import React, { useState, useEffect } from "react";
import "./CustomerSupport.css"; // Adjust the path as necessary


const CustomerSupport = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");

  // Dummy data (Replace with API call)
  useEffect(() => {
    setQueries([
      { id: 1, name: "John Doe", email: "john@example.com", issue: "Login issue", status: "Pending", response: "" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", issue: "Payment failure", status: "Resolved", response: "Issue fixed" },
      { id: 3, name: "Alice Brown", email: "alice@example.com", issue: "Service delay", status: "In Progress", response: "" },
    ]);
  }, []);

  // Handle status update
  const updateStatus = (id, newStatus) => {
    setQueries(queries.map(query => query.id === id ? { ...query, status: newStatus } : query));
  };

  // Handle response submission
  const sendResponse = (id) => {
    const responseText = prompt("Enter your response:");
    if (responseText) {
      setQueries(queries.map(query => query.id === id ? { ...query, response: responseText, status: "Resolved" } : query));
      alert("Response sent successfully!");
    }
  };

  return (
    <div className="customer-support-container">
      <h2>📞 Customer Support</h2>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or issue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="support-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Response</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {queries
              .filter(query => query.name.toLowerCase().includes(search.toLowerCase()) || query.issue.toLowerCase().includes(search.toLowerCase()))
              .map((query) => (
                <tr key={query.id}>
                  <td>{query.name}</td>
                  <td>{query.email}</td>
                  <td>{query.issue}</td>
                  <td>
                    <select
                      className="status-select"
                      value={query.status}
                      onChange={(e) => updateStatus(query.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                  <td className={query.response ? "response-sent" : "response-pending"}>
                    {query.response || "No response yet"}
                  </td>
                  <td>
                    {!query.response && (
                      <button className="response-button" onClick={() => sendResponse(query.id)}>
                        Send Response
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerSupport;
