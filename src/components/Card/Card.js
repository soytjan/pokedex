import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({pokemon, onClick}) => {
  const type = pokemon.name;
  const moreDetails = pokemon.pokemon.map(pokemon => {
    const img = pokemon.sprites ? pokemon.sprites.back_default : null;
    return (
      <div className='details'>
        <h3>Name: <span className='capitalize'>{pokemon.name}</span></h3>
        <h3>Type: <span className='capitalize'>{type}</span></h3>
        <h3>Weight: {pokemon.weight}</h3>
        <img src={img} alt={`pic of ${pokemon.name}`}/>
      </div>
    )
  })
  const renderedDetails = pokemon.isSelected ? moreDetails : null;

  return (
    <article className='Card' onClick={() =>onClick(pokemon)}>
      <h2 className='capitalize card-header'>{pokemon.name}</h2>
      {renderedDetails} 
    </article>
  )
}

Card.propTypes = {
  pokemon: PropTypes.object,
  onClick: PropTypes.func,
};

export default Card;
