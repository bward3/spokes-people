import React from "react";
import "bulma/css/bulma.min.css";


export default function Home() {
  return(
    <div>
    <section className="hero has-background-info">
      <div className="hero-body">
        <p className="title">Spokes People</p>
      </div>
    </section>
    <footer className="footer has-background-info">
        <div className="content has-text-centered">
          <p>
            CSS by
            <strong> Bulma</strong> site by{" "}
          </p>
        </div>
      </footer>
  </div>
  )
}