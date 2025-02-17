import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

// MovieCard component inside MovieList.jsx
const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}  
          className="card-img-top" 
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  
 
  const API_KEY = '88afb9ebe92c8f81bb0430a439004847';  // Your actual API key
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);  

  return (
    <div className="container">
      <div className="row">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
