import React, { Component } from 'react';
// make sure to import 'SearchHeader' & 'MovieList' as 'App.jsx' is the main .jsx file
// what was the terminology?? Downward structure.
import SearchHeader from './SearchHeader/SearchHeader';
import MovieList from './MovieList/MovieList';
import './App.css';

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

  // 'handleUpdateSearch' function is referenced in the 'constructor()'
  // and then down in the render-return below
  // and transferred to 'SearchHeader.jsx' as 'this.props.--'
  handleUpdateSearch(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  // 'handleSubmitSearch' function is called in render-return and passed to
  // 'SearchHeader.jsx' file as a button* as 'this.props.--'
  handleSubmitSearch(e) {
    //this is coming from this.state.searchTerm above
    fetch(`http://www.omdbapi.com/?s=${this.state.searchTerm}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        movies: data.Search,
        totalResults: data.totalResults
      });
    })
    .catch(err => console.log('Error: ', err));
  }

  // this function is referenced in the constructor and render-return below
  handleSubmitNextPage(e) {
    //this is coming from this.state.searchTerm & currentpages above
    fetch(`http://www.omdbapi.com/?s=${this.state.searchTerm}&page=${this.state.currentPage + 1}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        movies: data.Search,
        totalResults: data.totalResults,
        currentPage: this.state.currentPage + 1
      });
    })
    .catch(err => console.log('Error: ', err));
  }

  // this function is referenced in the constructor and render-return below
  handleSubmitPrevPage() {
    //this is coming from this.state.searchTerm above
    fetch(`http://www.omdbapi.com/?s=${this.state.searchTerm}&page=${this.state.currentPage - 1}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        movies: data.Search,
        totalResults: data.totalResults,
        currentPage: this.state.currentPage - 1
      });
    })
    .catch(err => console.log('Error: ', err));
  }

  // 'displayNext()' function is called render-returned function* below
  displayNext() {
    if (this.state.totalResults > this.state.currentPage * 10) {
      return (
        <button id="next-button" onClick={() => this.handleSubmitNextPage()}>
          Next Page
        </button>
        );
    }
  }
  // 'displayPrev()' function is called bottom and not transferred
  displayPrev() {
    if (this.state.currentPage > 1) {
      return (
        <button id="prev-button" onClick={() => this.handleSubmitPrevPage()}>
          Previous Page
        </button>
        );
    }
  }


  // this is the place where <SearchHeader /> and <MovieList /> info are tranferred to their
  // own folders ---- all the green fonts are passed to corresponding folders/files.
  render() {
    return (
      <div className="App">
        {/*'<SearchHeader /> below is transferred to 'SearchHeader.jsx file' '*/}
        <SearchHeader
          searchTerm={this.state.searchTerm}
          handleUpdateSearch={event => this.handleUpdateSearch(event)}
          handleSubmitSearch={event => this.handleSubmitSearch(event)}
        />
        {/*<MovieList /> data is transferred to MovieList.jsx file*/}
        <MovieList
          movies={this.state.movies}
        />
        {/*Not going anywhere but created this. functions for pages*/}
        {this.displayPrev()} {this.displayNext()}
      </div>
    );
  }
}

export default App;
