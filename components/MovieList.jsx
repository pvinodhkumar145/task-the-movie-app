// components/MovieList.js
import React from 'react';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => onMovieClick(movie)}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <span>{movie.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;