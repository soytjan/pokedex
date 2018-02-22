import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({pokemon, onClick}) => {
  const moreDetails = pokemon.pokemon.map(pokemon => {
    const img = pokemon.sprites ? pokemon.sprites.back_default : null;
    return (
      <div>
        <h3>{pokemon.name}</h3>
        <h3>{pokemon.weight}</h3>
        <img src={img} alt={`pic of ${pokemon.name}`}/>
      </div>
    )
  })
  const renderedDetails = pokemon.isSelected ? moreDetails : null;

  return (
    <article className='Card' onClick={() =>onClick(pokemon)}>
      <h2>{pokemon.name}</h2>
      {renderedDetails} 
    </article>
  )
}

Card.propTypes = {
  pokemon: PropTypes.object,
};

export default Card;
