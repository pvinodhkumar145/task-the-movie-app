import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
import FavoritesList from '../components/FavoritesList';
import styles from './index.module.css'

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    handleAddToFavorites(movie);
  };

  const handleMovieClose = () => {
    setSelectedMovie(null);
  }

  const handleAddToFavorites = (movie) => {
    const isFavorite = favorites.some((fav) => fav.id === movie.id);
  
    if (!isFavorite) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
  
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
      setFavorites(updatedFavorites);
  
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter(m => m.id !== movieId)
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  useEffect(() => {
    // Load favorites from local storage
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={searchResults} onMovieClick={handleMovieClick} />
      {selectedMovie && <MovieDetails movie={selectedMovie} onClose={handleMovieClose} />}
      <FavoritesList favorites={favorites} removeFromFavorites={removeFromFavorites} />
    </div>
  );
};

export default Home;