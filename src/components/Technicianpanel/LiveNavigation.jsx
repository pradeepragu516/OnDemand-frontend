import React from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./LiveNavigation.css";

// Fix Leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const LiveNavigation = () => {
  const location = useLocation();
  const task = location.state?.task;

  if (!task || task.status !== "Accepted") {
    return <p>No task assigned or accepted yet.</p>;
  }

  const { lat, lng, address, estimatedTime, distance } = task.location;

  const handleStartNavigation = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <div className="navigation-container">
      <h2>📍 Live Navigation</h2>

      <div className="map-section">
        <MapContainer
          center={[lat, lng]}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: "300px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="route-details">
        <p><strong>Destination:</strong> {address}</p>
        <p><strong>Distance:</strong> {distance}</p>
        <p><strong>ETA:</strong> {estimatedTime}</p>
        <button className="btn-start-navigation" onClick={handleStartNavigation}>
          Start Navigation
        </button>
      </div>
    </div>
  );
};

export default LiveNavigation;
