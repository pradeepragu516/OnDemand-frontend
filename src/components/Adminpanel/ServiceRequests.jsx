import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import "./ServiceRequests.css";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "http://localhost:4000";

const ServiceRequests = () => {
  const [requests, setRequests] = useState([]);
  const [technicians, setTechnicians] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRequests();
    fetchTechnicians();
  }, []);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/api/serviceRequests`);
      setRequests(response.data.appointments || []);
      response.data.appointments.map((item)=>{
        console.log(item.address)
       })
    } catch (error) {
      console.error("Error fetching service requests:", error);
      toast.error("Failed to fetch service requests.");
    }
    setLoading(false);
  };

  const fetchTechnicians = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/technicians/approved`);
      setTechnicians(response.data || []);
     
    } catch (error) {
      console.error("Error fetching technicians:", error);
      toast.error("Failed to fetch technicians.");
    }
  };

  const handleStatusChange = async (requestId, newStatus) => {
    try {
      await axios.put(`${API_URL}/api/serviceRequests/${requestId}/status`, {
        status: newStatus,
      });
      toast.success("Service status updated!");
      fetchRequests();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status.");
    }
  };

  const assignTechnician = async (requestId, technicianId) => {
    try {
      await axios.put(`${API_URL}/api/serviceRequests/${requestId}/assign`, {
        technicianId,
      });

      const assignedTechnician = technicians.find((tech) => tech._id === technicianId);

      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req._id === requestId ? { ...req, technician: assignedTechnician } : req
        )
      );

      toast.success("Technician assigned successfully!");
    } catch (error) {
      console.error("Error assigning technician:", error);
      toast.error("Failed to assign technician.");
    }
  };

  const cancelRequest = async (requestId) => {
    try {
      await axios.delete(`${API_URL}/api/serviceRequests/${requestId}`);
      toast.success("Service request cancelled.");
      fetchRequests();
    } catch (error) {
      console.error("Error cancelling request:", error);
      toast.error("Failed to cancel request.");
    }
  };

  return (
    <Container className="sr-container">
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
        Service Requests
      </Typography>

      {/* Search & Filter */}
      <div className="search-filter-container">
        <TextField
          label="Search by Address"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{ mr: 2 }}
        />
        <Select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          displayEmpty
          size="small"
        >
          <MenuItem value="">All Statuses</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
        </Select>
      </div>

      {loading ? (
        <div className="loading-container">
          <CircularProgress />
        </div>
      ) : (
        <TableContainer component={Paper} className="table-container">
          <Table>
            <TableHead className="table-header">
              <TableRow>
                <TableCell><b>Address</b></TableCell>
                <TableCell><b>Services</b></TableCell>
                <TableCell><b>Total</b></TableCell>
                <TableCell><b>Date</b></TableCell>
                <TableCell><b>Status</b></TableCell>
                <TableCell><b>Technician</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requests
                .filter((req) =>
                  req.address?.toLowerCase().includes(search.toLowerCase()) &&
                  (filterStatus ? req.status === filterStatus : true)
                )
                .map((req) => (
                  <TableRow key={req._id}>
                    <TableCell>{req.address}</TableCell>
                    <TableCell>
                      {req.services.map((service) => (
                        <div key={service._id}>
                          {service.name} (₹{service.price})
                        </div>
                      ))}
                    </TableCell>
                    <TableCell>₹{req.total}</TableCell>
                    <TableCell>{new Date(req.date).toLocaleString()}</TableCell>
                    <TableCell>
                      <Select
                        value={req.status}
                        onChange={(e) => handleStatusChange(req._id, e.target.value)}
                        size="small"
                        className="status-select"
                        sx={{ color: "white" }}
                      >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={req.technician?._id || req.technician || ""}
                        onChange={(e) => assignTechnician(req._id, e.target.value)}
                        displayEmpty
                        size="small"
                        className="technician-select"
                        sx={{ color: "white" }}
                      >
                        <MenuItem value="">Assign Technician</MenuItem>
                        {technicians.map((tech) => (
                          <MenuItem key={tech._id} value={tech._id}>
                            {tech.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => cancelRequest(req._id)}
                      >
                        Cancel
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default ServiceRequests;
