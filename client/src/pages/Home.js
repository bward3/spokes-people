import React, {useState,useEffect} from "react";
import MapView from "./MapView";
import "bulma/css/bulma.min.css";
// import MapView from "../components/MapView";

export default function Home() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    names()
  }, [])
  
  const names = async () => {
    const responce = await fetch('http://api.citybik.es/v2/networks/?rapidapi-key=f17db1dcddmsh3dce12092ca5ebep17ef72jsn4fcd0fdb0eeb')
  const json = await responce.json();
  console.log(json);
    setPositions(json?.networks)
  }
  
  return (
    <div>
      <section className="hero has-background-info is-align-items-center">
        <div className="hero-body">
          <p className="title">Spokes People</p>
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
        <div className="content has-text-centered">
          <p>
            CSS by
            <strong> Bulma</strong> site by{" "}
            <a href="https://github.com/bward3/spokes-people"> Group 4</a>. July
            2022.
          </p>
        </div>
      </footer>
    </div>
  );
}
