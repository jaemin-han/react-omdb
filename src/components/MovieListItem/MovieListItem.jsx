import React, { Component } from 'react';
import './MovieListItem.css';

  // 'year, title, poster, imdb' from 'MovieList.jsx'
class MovieListItem extends Component {
  render() {
    return (
      <div className="movie-item">
        <h1>{`${this.props.year}`}</h1>
        <h2>{`${this.props.title}`}</h2>
        <img src={this.props.poster} alt={this.props.title} /><br />
        <a href={`http://www.imdb.com/title/${this.props.imdb}`} target="_blank">Link Here</a>
      </div>
    );
  }
}

export default MovieListItem;
