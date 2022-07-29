import React from "react";
import "bulma/css/bulma.min.css";
import MapView from "../components/MapView";

export default function Home() {
  return (
    <div>
      <section class="hero has-background-info">
        <div class="hero-body">
          <p class="title">Spokes People</p>
        </div>
      </section>
      <section class="section is-medium has-background-info-light">
        <h2 class="subtitle">Search Input</h2>
        <input class="input is-info column is-one-fifth" type="text" placeholder="Info input"></input>
        <input class="input is-info column is-one-fifth" type="text" placeholder="Info input"></input>
      </section>
      <div class="container">
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <div class="content">
              <p class="title">Search Map</p>
              <p class="subtitle">Add map</p>
              <div class="content"> <MapView /></div>
            </div>
          </article>
        </div>
      </div>
      <footer class="footer has-background-info">
        <div class="content has-text-centered">
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
