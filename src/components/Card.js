import React from 'react';

const Card = ({name, email}) => {
	return (
		<div className='tc br3 bg-light-green shadow-1 ma2 grow'>
			<img src={`https://robohash.org/${name}?200x200`} alt='robot'/>
			<h3 className='f3'>{name}</h3>
			<p>{email}</p>
		</div>
	);
}

export default Card;