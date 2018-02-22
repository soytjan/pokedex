import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

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
