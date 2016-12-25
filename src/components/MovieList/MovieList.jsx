import React, { Component } from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';

 // inside 'MovieList' class -- reference info from 'App.js' in a html structure.
class MovieList extends Component {
  render() {

    const movies = this.props.movies.map((movie) =>{
      return (
        //going even deeper -- into 'MovieListItem.jsx' for specific movie information
        <MovieListItem
          // key={i}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          imdb={movie.imdbID}
          plot={movie.Plot}

        />
      );
    });

    return (
      <div id="results-container">
        {movies}
      </div>
    );
  }
}

export default MovieList;
