import React from 'react';
// import logo from './logo.svg';
import './App.css';

import movies from './movies'
import GenreList from './GenreList';
import MovieList from './MovieList';
import ActorList from './ActorList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    // console.log(Object.keys(movies))
    return (
      <div className="App">
        <GenreList genre={Object.keys(movies)} />
        <MovieList movies={Object.keys(movies.documentaries)} />
        <ActorList actors={movies.documentaries.robocop} />
      </div>
    );
  }
}

export default App;
