import React from 'react';
import './App.css';
import MovieList from './Components/MovieList';

const App = () => {
  return (
    <div className="App">
      <h1>Popular Movies</h1>
      <MovieList />
    </div>
  );
};

export default App; 