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
      genre: ''
    }
  }

  render() {
    // console.log(Object.keys(movies))
    return (
      <div className="App">
        <GenreList genre={Object.keys(movies)} handleClick={this._setGenre} />
        <MovieList movies={Object.keys(movies.documentaries)} />
        <ActorList actors={movies.documentaries.robocop} />
      </div>
    );
  }
  _setGenre = (genre) => {
    console.log(`the genre is ${genre}`);
    this.setState({
      // genre:genre (if key and value are the same word, you can omit colon and second word)
      genre
    });
  }
}

export default App;
