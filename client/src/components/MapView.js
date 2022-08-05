import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
// import LocationMarker from "./LocationMarker";
import "./index.css";

function MapView() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    let bikes = [];
    fetch("http://api.citybik.es/v2/networks/")
      .then((res) => res.json())
      .then(function (response) {
        var networks = response.networks;
        var usNetworks = networks.filter(
          (network) => network.location.country === "US"
        );
        var api = "http://api.citybik.es";
        for (var i = 0; i < usNetworks.length; i++) {
          const href = usNetworks[i].href;
          fetch(api + href)
            .then((data) => data.json())
            .then(function (data) {
              var station = data.network.stations;
              for (var j = 0; j < station.length; j++) {
                var name = station[j].name;
                var lat = station[j].latitude;
                var lon = station[j].longitude;
                var emptySlots = station[j].empty_slots;
                var availableBikes = station[j].free_bikes;
                var id = station[j].id;
                let info = {
                  name,
                  id,
                  location: { lat, lon },
                  emptySlots,
                  availableBikes,
                };
                bikes.push(info);
              }
            });
        }
        return bikes.slice(0,100);
      }).then((bikes) => {
        setSpots(bikes);
      });
  },[]);

  return (
    <MapContainer
      center={[37.78387, -99.044231]}
      zoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {spots.map((position) => (
        <Marker
          position={[position.location.lat, position.location.lon]}
          // icon={Icon}
          key={position.id}
        ></Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
