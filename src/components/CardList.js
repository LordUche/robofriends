import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users/')
			.then(res => res.json())
			.then(users => this.setState({ robots: users }));
	}

  render() {
  	const { robots } = this.state;
    return (
      <div className='flex flex-wrap'>
        {robots.map(robot => {
        	return <Card id={robot.id} name={robot.name} email={robot.email} />
        })}
      </div>
    );
  }
}

export default CardList;
