import React, { Component } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(users => this.setState({ robots: users }))
      .catch(err => console.log('Something went wrong'));
  }

  handleSearchChange = (event) => this.setState({searchField: event.target.value});

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className='flex-column tc'>
        <Header />
        <SearchBox handleChange={this.handleSearchChange} />
        <CardList array={filteredRobots} />
      </div>
    );
  }
}

export default App;
