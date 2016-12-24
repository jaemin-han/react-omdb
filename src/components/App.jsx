import React, { Component } from 'react';
import SearchHeader from './SearchHeader/SearchHeader';
import MovieList from './MovieList/MovieList';
import './App.css';
// Downward structure

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      movies: [],
      currentPage: 1,
      totalResults: 0
    }
  }

  // 'handleUpdateSearch' function is referenced in the 'constructor'
  // and then down in the render-return below
  // transferred to 'SearchHeader.jsx' as 'this.props.--'
  handleUpdateSearch(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  // 'handleSubmitSearch' function is called in render-return and passed to
  // 'SearchHeader.jsx' file as a button* as 'this.props.--'
  handleSubmitSearch(e) {
    fetch(`http:www.omdbapi.com/?s=${this.state.searchTerm}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        movies:data.Search,
        totalResults: data.totalResults
      });
    })
    .carch(err => console.log('Error: ', err));
  }

  render() {
    return (
      <div className="App">
        <SearchHeader
          searchTerm={this.state.searchTerm}
          handleUpdateSearch={event => this.handleUpdateSearch}
          handleSubmitSearch={event => this.handleSubmitSearch}
        />
      </div>
    );
  }

}

export default Appl
