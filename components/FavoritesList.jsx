// components/FavoritesList.js
import React from 'react';

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      <h3>Favorites</h3>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;