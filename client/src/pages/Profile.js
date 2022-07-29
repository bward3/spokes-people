import React from "react";
import "bulma/css/bulma.min.css";

export default function Profile() {
  return (
    <div>
      <section class="hero has-background-info">
        <div class="hero-body">
          <p class="title">Spokes People</p>
        </div>
      </section>
      <section class="section is-medium has-background-info-light">
        <h2 class="subtitle">Profile Page</h2>
      </section>
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
