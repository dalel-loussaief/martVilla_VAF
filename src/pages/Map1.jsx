import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css'; 
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import LeafletGeocoder from "./LeafletGeocoder";
import axios from 'axios'; // Importer Axios
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine"; // Importer Leaflet Routing Machine

function Map1() {
  const [locations, setLocations] = useState([]);
  const [propertyCounts, setPropertyCounts] = useState({});

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/userAuth/locations/');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

 

  useEffect(() => {
    const fetchPropertyCounts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/userAuth/locations-with-property-count/');
        setPropertyCounts(response.data.reduce((acc, curr) => {
          acc[curr.id] = curr.property_count;
          return acc;
        }, {}));
      } catch (error) {
        console.error('Error fetching property counts:', error);
      }
    };

    fetchPropertyCounts();
  }, []);


  let DefaultIcon = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  L.Marker.prototype.options.icon = DefaultIcon;



  return (
    <MapContainer center={[36.8065, 10.1815]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     
      <LeafletGeocoder/>

      {locations.map(location => (
        <Marker 
          key={location.id} 
          position={[location.latitude, location.longitude]} 
        
        >
          <Popup>
            <div>
              <h3>{location.title}</h3>
              {propertyCounts[location.id] !== undefined && (
                <div>
                  Number of properties: {propertyCounts[location.id]}
                </div>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map1;
