import React from 'react';
import styles from './MovieList.module.css'
const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.li}>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => onMovieClick(movie)} className={styles.item}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className={styles.image}
            />
            <span className={styles.title}>{movie.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
