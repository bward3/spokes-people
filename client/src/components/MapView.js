import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import "./index.css";

/*

positions = [
  {
    name: <name>
    location:  {
      latitude: <lat>
      longitude: <lon>
    }
  }
]


**/

const MapView = ({ positions }) => {
  return (
    <>
      <MapContainer center={[37.783870, -99.044231]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((position) => (
          <Marker
            position={[position.location.latitude, position.location.longitude]}
            // icon={Icon}
            key={`marker-${position.name}`}
          >
            <Popup key={`popup-${position.name}`}>
              {position.name}
              <br />
              {/* {position.location.city} */}
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
