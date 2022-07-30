import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import "./index.css";

const MapView = ({ positions }) => {
  return (
    <>
      <h1>Hello world</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((position) => (
          <Marker
            position={[position.location.latitude, position.location.longitude]}
            // icon={icon}
          >
            <Popup>{position.name}</Popup>
          </Marker>
        ))}{" "}
      </MapContainer>
    </>
  );
};

export default MapView;
