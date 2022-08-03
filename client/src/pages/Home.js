import React, { useState, useEffect } from "react";
// import MapView from "./MapView";
import "bulma/css/bulma.min.css";
import MapView from "../components/MapView";

export default function Home() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    var api = "http://api.citybik.es/v2/networks/";
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then(function (response) {
        var networks = response.networks;
        var usNetworks = networks.filter(
          (network) => network.location.country === "US"
        );
        // console.log(usNetworks);
        var newApi = "http://api.citybik.es";
        let tempPositions = [];
        for (var i = 0; i < usNetworks.length; i++) {
          const href = usNetworks[i].href;
          // const city = usNetworks[i].location.city;
          // const lat = usNetworks[i].location.latitude;
          // const lon = usNetworks[i].location.longitude;
          // console.log(`The city is ${city} lat is ${lat} lon is ${lon}`);
          fetch(newApi + href)
            .then((data) => {
              return data.json();
            })
            .then(function (data) {
              var station = data.network.stations;
              // console.log(station);
              for (var j = 0; j < station.length; j++) {
                var name = station[j].name;
                // var emptySlots = station[j].empty_slots;
                // var availableBikes = station[j].free_bikes;
                var latitude = station[j].latitude;
                var longitude = station[j].longitude;
                // console.log(name,latitude,longitude);

                let position = {
                  name,
                  location: {
                    latitude,
                    longitude,
                  }
                }

                tempPositions.push(position);
                // console.log(`${availableBikes} bikes at ${name}`);
                // console.log(`${emptySlots} slots available at ${name}`);
              }
            });
        }
        let tpSlice = tempPositions.slice(0,100);
        console.log(tpSlice);
        return tpSlice;
      }).then((tp) => {
        setPositions(tp);
        console.log(positions);
      });
  }, []);

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
              <div class="content">
                {" "}
                <MapView positions={positions} />
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
