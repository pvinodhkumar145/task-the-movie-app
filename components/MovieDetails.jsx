import React from 'react';

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white p-4 rounded-lg w-96 ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <button
            onClick={onClose}
            className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none px-2 py-1 rounded"
          >
            Close
          </button>
        </div>
        <div className="mb-4">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-lg h-80"
          />
        </div>
        <p className="text-gray-700">{movie.overview}</p>
        <div className="flex items-center mt-4">
          <span className="mr-2 text-gray-700">Release Date:</span>
          <span className="font-bold">{movie.releaseDate}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="mr-2 text-gray-700">Rating:</span>
          <span className="font-bold">{movie.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
