import React from "react";

const FavoritesList = ({ favorites }) => {
  if (!favorites.length) {
    return <h3 className="title">Choose a favorite terminal</h3>;
  }

  return (
    <div className="is-inline-flex">
      {favorites &&
        favorites.map((favorite) => (
          <div className="tile is-ancestor px-3 py-3">
          <div key={favorite._id} className="tile is-parent">
            <article className="tile is-child box notification is-info">
            <p className="title" key={`${favorite._id}-name`}>
              {favorite.name}
            </p>
            <p className="subtitle" key={`${favorite._id}-lat`}>
              {favorite.lat}
            </p>
            <p className="subtitle" key={`${favorite._id}-lon`}>
              {favorite.lon}
            </p>
            <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png" alt="Shop Pic"></img>
          </figure>
            </article>
          </div>
          </div>
        ))}
    </div>
  );
};

export default FavoritesList;
