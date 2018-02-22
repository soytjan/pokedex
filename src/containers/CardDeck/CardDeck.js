import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPokemon, updatePokemon } from '../../actions';
import { fetchPokemonType, fetchAllPokemon } from '../../helper';
import pikachu from '../../loading.gif';
import Card from '../../components/Card/Card';
import './CardDeck.css';

export class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }

  // refactor this to break this out into different functions
  componentDidMount = async () => {
    const { addPokemon, updatePokemon } = this.props;
    this.setState({ isLoading: true })
    const pokemonType = await fetchPokemonType();
    addPokemon(pokemonType);
    this.setState({ isLoading: false });
    const allPokemon = await fetchAllPokemon(pokemonType);
    updatePokemon(allPokemon);
  }

  handleCardClick = (card) => {
    
  }

  renderCards = () => {
    const { pokemon } = this.props;
    return pokemon.map(pokemon => {
      return <Card 
        pokemon={pokemon}
        key={pokemon.id} 
      />
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <img src={pikachu} alt="pikachu loading gif"/>
        </div>
      )
    }

    return (
      <section className='CardDeck'>
        I'm the CardDeck!
        {this.renderCards()}
      </section>
    )
  }
}

CardDeck.propTypes = {
  addPokemon: PropTypes.func,
  updatePokemon: PropTypes.func,
  pokemon: PropTypes.array
};

export const mapStateToProps = state => ({
  pokemon: state.pokemon,
})

export const mapDispatchToProps = dispatch => ({
  addPokemon: (pokemon) => dispatch(addPokemon(pokemon)),
  updatePokemon: (pokemon) => dispatch(updatePokemon(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDeck);