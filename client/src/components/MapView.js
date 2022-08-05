import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import LocationMarker from "./LocationMarker";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { CREATE_FAVORITE } from "../utils/mutations";
import "./index.css";
const MapView = ({ positions }) => {
  const { loading, data } = useQuery(QUERY_USER);
  const [addFavorite, { error }] = useMutation(CREATE_FAVORITE);

  const user = data?.me || data?.user || {};

  const handleFavorite = async (event) => {
    event.preventDefault();
    const lat = parseFloat(event.target.dataset.lat);
    const lon = parseFloat(event.target.dataset.lon);
    const name = event.target.dataset.name;
    console.log(lat, lon);
    //add favorite mutation
    try {
      const {data} = await addFavorite({
        variables: {
          lat,
          lon,
          name
        }
      })

    } catch (err) {
      console.log(err);
    }


  };

  return (
    <MapContainer
      center={[37.78387, -99.044231]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((position) => (
        <Marker
          position={[position.location.lat, position.location.lon]}
          key={position.uuid}
        >
          <Popup>
            <h1 className="has-text-centered	">{position.name}</h1>
            <br />
            <h4 className="has-text-centered	">
              Available bikes: {position.availableBikes}
            </h4>
            {user?.username && (
              <button
                data-lat={position.location.lat}
                data-lon={position.location.lon}
                data-name={position.name}
                onClick={handleFavorite}
              >
                Add to favorites
              </button>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
