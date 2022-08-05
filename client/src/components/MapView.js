import { MapContainer, TileLayer, Marker, Popup, } from "react-leaflet";
// import LocationMarker from "./LocationMarker";
import "./index.css";
const  MapView = ({ positions }) => {
  console.log(positions);
  return (
      <MapContainer center={[37.783870, -99.044231]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((position) => (
          <Marker
            position={[position.location.lat, position.location.lon]}
            
            key={position.uuid}
          >
            {console.log(position.name, position.location.lat, position.location.lon)}
            {/* <Popup>{position.name}</Popup> */}
            <Popup>{`${position.name} ${position.availableBikes}`}</Popup>
            
           
          </Marker>
        ))}
      </MapContainer>
  );
};



export default MapView;
