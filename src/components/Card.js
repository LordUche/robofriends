import React, { Component } from 'react';

const Card = ({id, name, email}) => {
	return (
		<div className='tc br3 bg-moon-gray'>
			<img src={`https://robohash.org/${id}?200x200`} alt='robot'/>
			<h3 className='f3'>{name}</h3>
			<p>{email}</p>
		</div>
	);
}

export default Card;