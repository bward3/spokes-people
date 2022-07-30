import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import MapView from "../components/MapView";

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  const matchupList = data?.matchups || [];

  return (
    <div className="container">
      <section className="hero has-background-info">
        <div className="hero-body">
          <p className="title">Spokes People</p>
        </div>
      </section>
      <MapView />
      <footer className="footer has-background-info">
        <div className="content has-text-centered">
          <p>
            CSS by
            <strong> Bulma</strong> site by{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MapView;
