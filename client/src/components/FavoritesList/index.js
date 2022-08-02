import React from 'react';


const FavoritesList = ({
  favorites,
}) => {
  if (!favorites.length) {
    return <h3>Choose a favorite terminal</h3>;
  }

  return (
    <div>
      {favorites && favorites.map((favorite) => (
        <div key={favorite._id} className="content">
          <p key={`${favorite._id}-name`}>{favorite.name}</p>
          <p key={`${favorite._id}-lat`}>{favorite.lat}</p>
          <p key={`${favorite._id}-long`}>{favorite.long}</p>
        </div>
      ))}
    </div>
  )
}

export default FavoritesList;