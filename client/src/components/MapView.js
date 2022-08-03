import { MapContainer, TileLayer, Marker, Popup, } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import "./index.css";


const MapView = ({ positions }) => {
  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((position) => (
          <Marker
            position={[position.location.latitude, position.location.longitude]}
            // icon={Icon} 
          >
           
            <Popup>
              
              {position.name}
              <br />
              {position.location.city}
              <br />
              {position.location.latitude}
              <br />
              {position.location.longitude}
            </Popup>
          </Marker>
          
        ))}{" "}
      </MapContainer>
    </>
  );
};

export default MapView;
