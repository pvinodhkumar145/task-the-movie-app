// components/SearchBar.js
import React, { useState } from 'react';
import styles from './SearchBar.module.css'
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${searchTerm}`
      );
      const results = response.data.results;
      onSearch(results);
    } catch (error) {
      console.log('Error searching movies:', error);
    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange}  className={styles.input}/>
      <button className={styles.button} onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;