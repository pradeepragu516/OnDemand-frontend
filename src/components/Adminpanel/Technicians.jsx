import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";
import "./Technicians.css";


// Tamil Nadu, India Centered Map (Chennai as Example)
const SERVICE_AREA = {
  lat: 13.0827,  // Chennai, Tamil Nadu
  lng: 80.2707,
  radius: 5000, // 5 km radius
};

const Technician = () => {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    fetchTechnicians();
    const interval = setInterval(fetchTechnicians, 10000); // Update every 10s
    return () => clearInterval(interval);
  }, []);

  const fetchTechnicians = async () => {
    try {
      const response = await axios.get("https://your-api.com/technicians");
      setTechnicians(response.data);
      checkTechnicianStatus(response.data);
    } catch (error) {
      console.error("Error fetching technician data:", error);
    }
  };

  const checkTechnicianStatus = (data) => {
    data.forEach((tech) => {
      const distance = getDistanceFromLatLonInKm(
        SERVICE_AREA.lat,
        SERVICE_AREA.lng,
        tech.lat,
        tech.lng
      );

      if (distance > SERVICE_AREA.radius / 1000) {
        toast.warning(`${tech.name} has moved out of the service zone!`);
      } else if (tech.status === "Idle") {
        toast.info(`${tech.name} is idle. Consider assigning tasks.`);
      }
    });
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  return (
    <div className="technician-container1">
      <h2>Live Technician Tracking - Tamil Nadu</h2>

      <MapContainer center={[SERVICE_AREA.lat, SERVICE_AREA.lng]} zoom={12} className="map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {technicians.map((tech) => (
          <Marker key={tech.id} position={[tech.lat, tech.lng]}>
            <Popup>
              <b>{tech.name}</b> <br />
              Status: {tech.status} <br />
              Last Updated: {new Date(tech.updatedAt).toLocaleTimeString()}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Technician;
