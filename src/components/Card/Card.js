import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

// need to pass down a handleClick function from CardDeck
// need to check and see isOpened = true || false


const Card = ({pokemon}) => {
  return (
    <article className='Card'>
      <h3>{pokemon.name}</h3> 
    </article>
  )
}

Card.propTypes = {
  pokemon: PropTypes.object,
};

export default Card;
