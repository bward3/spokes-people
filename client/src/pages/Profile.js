import React from "react";
import "bulma/css/bulma.min.css";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import FavoritesList from "../components/FavoritesList";

export default function Profile() {
  

  const { loading, data } = useQuery(QUERY_USER);

  const user = data?.me || data?.user || {};
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4 className="title">
        You must be logged in to see your profile.
      </h4>
    );
  }



  return (
    <div>
      <section className="hero has-background-info">
        <div className="hero-body">
          <p className="title has-text-light">Spokes People</p>
          <h2 className="title has-text-light">Hello, {`${user.username}` }</h2>
        </div>
      </section>
      <section className="section is-medium has-background-info-light">
        <div className="content has-addons is-centered">
        </div>
        <div className="content">
          < FavoritesList favorites={user.favorites}/>
        </div>
      </section>
      <footer className="footer has-background-info">
        <div className="content has-text-centered has-text-light">
          <p>
            CSS by
            <strong className="has-text-light"> Bulma</strong> site by{" "}
            <a className="has-text-primary"  href="https://github.com/bward3/spokes-people"> Group 4</a>. July
            2022.
          </p>
        </div>
      </footer>
    </div>
  );
}
