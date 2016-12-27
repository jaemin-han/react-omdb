import React, { Component } from 'react';
import './SearchHeader.css';

 // Inside 'SearchHeader' class -- reference info from 'App.js' in a html structure.
 // One 'div' header, input, and a button
class SearchHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>OMDB Search Movies!</h1>
        </header>
        <div id="search-container">
          <input
          type="text"
          value={this.props.searchTerm}
          onChange={this.props.handleUpdateSearch}
          />
          <button onClick={this.props.handleSubmitSearch}>Seach</button>
        </div>
      </div>
    );
  }
}

export default SearchHeader;
