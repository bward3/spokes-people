// import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { MapContainer, TileLayer} from "react-leaflet";
import LocationMarker from "./LocationMarker";
import "./index.css";

const MapView = () => {
  const center = [39.7392364, -104.984862]
  return (
    <>
    <h1>Hello world</h1>
    <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker></LocationMarker>
    </MapContainer>
    </>
  );
};

export default MapView;
