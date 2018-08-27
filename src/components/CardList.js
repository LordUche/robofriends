import React from 'react';
import Card from './Card';

const CardList = ({ array }) => {
  return (
    <div className='flex flex-wrap justify-center mt3 bt b--black-10'>
      {array.map(_ => <Card key={_.id} name={_.name} email={_.email} />)}
    </div>
  );
}

export default CardList;
