import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input type='search' placeholder='Search...' />
        <button>Search Friend</button>
      </div>
    );
  }
}

export default SearchBox;
