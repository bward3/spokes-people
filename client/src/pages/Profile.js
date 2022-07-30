import React from "react";
import "bulma/css/bulma.min.css";
// import MapView from "../components/MapView"

export default function Profile() {
  return (
    <div>
      <section className="hero has-background-info">
        <div className="hero-body">
          <p className="title">Spokes People</p>
        </div>
      </section>
      <section className="section is-medium has-background-info-light">
        <h2 className="subtitle">Profile Page</h2>
        <div className="content has-addons is-centered">
          
        </div>

      </section>
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
