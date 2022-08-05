import React, {useState, useEffect} from "react";
import MapView from "../components/MapView";
import "bulma/css/bulma.min.css";


export default function Home() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    getData()
  }, [])
  
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    iframe?.remove();
  }, [positions]);
  

  function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function getData() {
    let bikes = [];
    fetch('http://api.citybik.es/v2/networks/') 
    .then(res => res.json()) // response to json
    .then(function (response) {
      var networks = response.networks; 
      var usNetworks = networks.filter((network) => network.location.country === 'US'); // filters of US networks
      var splice = usNetworks.slice(0, 1)
      var api = "http://api.citybik.es";
      for (var i = 0; i < splice.length; i++) {
        const href = splice[i].href; // gets individual hrefs
        fetch(api + href) 
          .then(data => data.json())
          .then(function (data) {
            var station = data.network.stations;
            for (var j = 0; j < station.length; j++) { //inner loop to search of individual stations
              var name = station[j].name;
              var lat = station[j].latitude;
              var lon = station[j].longitude;
              var emptySlots = station[j].empty_slots;
              var availableBikes = station[j].free_bikes;
              let info = { //takes infor to pass on
                name, 
                location: { lat, lon },
                emptySlots,
                availableBikes,
                uuid: createUUID()
              };
              bikes.push(info); // sends the info to our original empty array
            }
            return bikes;
          })
        }
      // console.log(bikes);
      setPositions(bikes);
  } 
)}
  
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
              <input className="input is-info column is-one-fifth" type="text" placeholder="City"></input>
              <div class="content"> <MapView positions={positions} /></div>
            </div>
          </article>
        </div>
      </div>
      <footer className="footer has-background-info">
        <div className="content has-text-centered has-text-light">
          <p>
            CSS by
            <strong className="has-text-light"> Bulma</strong> site by{" "}
            <a className="has-text-primary" href="https://github.com/bward3/spokes-people"> Group 4-Project 3</a>. July
            2022.
          </p>
        </div>
      </footer>
    </div>
  );
}
