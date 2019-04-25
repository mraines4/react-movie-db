import React from 'react';
import logo from './logo.svg';
import './App.css';

import movies from './movies'
import GenreList from './GenreList';

function App() {
  console.log(movies)
  return (
    <div className="App">
      <GenreList genres={} />
    </div>
  );
}

export default App;
