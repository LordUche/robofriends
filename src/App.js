import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';

class App extends Component {
  render() {
    return (
      <div className='tc'>
        <Header />
        <SearchBox />
        <CardList />
      </div>
    );
  }
}

export default App;
