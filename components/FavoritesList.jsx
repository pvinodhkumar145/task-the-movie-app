import React from 'react';
import styles from './FavoritesList.module.css'

const FavoritesList = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h2 className={styles.h2}>Favorites</h2>
      <ul className={styles.ul}>
        {favorites.map((movie) => (
          <div className={styles.movieItem} key={movie.id}>
            <li>
              {movie.title}
              <button className={styles.closeButton} onClick={() => removeFromFavorites(movie.id)}>
                Remove
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
