import React from "react";
// import MapView from "./MapView";
import "bulma/css/bulma.min.css";
import MapView from "../components/MapView";

export default function Home() {
  // const [positions, setPositions] = useState([]);
  // useEffect(() => {
  //   fetch('http://api.citybik.es/v2/networks/')
  //   .then(res => res.json())
  //   .then(function (response) {
  //     var networks = response.networks;
  //     var usNetworks = networks.filter((network) => network.location.country === 'US');
  //     var api = "http://api.citybik.es";
  //     let tempPositions = [];
  //     for (var i = 0; i < usNetworks.length; i++) {
  //       const href = usNetworks[i].href;
  //       fetch(api + href)
  //         .then(data => data.json())
  //         .then(function (data) {
  //           var station = data.network.stations;
  //           for (var j = 0; j < station.length; j++) {
  //             var name = station[j].name;
  //             var lat = station[j].latitude;
  //             var lon = station[j].longitude;
  //             var emptySlots = station[j].empty_slots;
  //             var availableBikes = station[j].free_bikes;
  //             let bikes = {
  //               name, 
  //               location: { lat, lon },
  //               emptySlots,
  //               availableBikes
  //             };
  //             tempPositions.push(bikes);
  //           }
  //         })
  //     } console.log(tempPositions);
  //   })
  //   })
  // }

  return (
    <div>
      <section className="hero has-background-info is-align-items-center">
        <div className="hero-body">
          <p className="title has-text-light">Spokes People</p>
        </div>
      </section>

      <div className="container">
        <div className="title is-parent">
          <article className="title is-child notification is-info-light">
            <div className="content">
              <p className="title ">City Search</p>
              <input
                className="input is-info column is-one-fifth"
                type="text"
                placeholder="City"
              ></input>
              <div className="content">
                {" "}
                <MapView />
              </div>
            </div>
          </article>
        </div>
      </div>
      <footer className="footer has-background-info">
        <div className="content has-text-centered has-text-light">
          <p>
            CSS by
            <strong className="has-text-light"> Bulma</strong> site by{" "}
            <a
              className="has-text-primary"
              href="https://github.com/bward3/spokes-people"
            >
              {" "}
              Group 4-Project 3
            </a>
            . July 2022.
          </p>
        </div>
      </footer>
    </div>
  );
  }
