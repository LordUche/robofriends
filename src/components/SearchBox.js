import React from 'react';

const SearchBox = ({ handleChange }) => {
  return (
    <div className='mb3 pv1 ph3'>
      <input
      	className='pa2 bg-lightest-blue ba b--light-blue'
      	type='search'
      	placeholder='search robots...'
      	onChange={handleChange} />
    </div>
  );
}

export default SearchBox;
