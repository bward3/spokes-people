import React from "react";
import "bulma/css/bulma.min.css";
// import MapView from "../components/MapView";

export default function Home() {
  return (
    <div>
      <section className="hero has-background-info is-align-items-center">
        <div className="hero-body">
          <p className="title">Spokes People</p>
        </div>
      </section>
      <section className="section is-medium has-background-info-light">
        <h2 className="subtitle">Search Input</h2>
        <input className="input is-info column is-one-fifth" type="text" placeholder="Info input"></input>
        <input className="input is-info column is-one-fifth" type="text" placeholder="Info input"></input>
      </section>
      <div className="container">
        <div className="title is-parent">
          <article className="title is-child notification is-info">
            <div className="content">
              <p className="title ">Search Map</p>
              <p className="subtitle">Add map</p>
              {/* <div className="content"> <MapView /></div> Ellen's map */}
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
