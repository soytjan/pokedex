import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPokemon, updatePokemon, toggleSelected } from '../../actions';
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
    this.setState({ isLoading: true })
    await this.getInitialPokemonTypes();
    this.setState({ isLoading: false })
    this.getPokemonDetails(this.props.pokemon);
  }

  getInitialPokemonTypes = async () => {
    const { addPokemon } = this.props;
    const pokemonType = await fetchPokemonType();
    addPokemon(pokemonType);
  }

  getPokemonDetails = async (pokemon) => {
    const { updatePokemon } = this.props;
    const allPokemon = await fetchAllPokemon(pokemon);
    updatePokemon(allPokemon);
  } 

  handleCardClick = (card) => {
    const { toggleSelected } = this.props;
    const updatedCard = {...card, isSelected: !card.isSelected}
    toggleSelected(updatedCard);
  }

  renderCards = () => {
    const { pokemon } = this.props;
    return pokemon.map(pokemon => {
      return <Card 
        pokemon={pokemon}
        onClick={this.handleCardClick}
        key={pokemon.id} 
      />
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className='gif'>
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
  updatePokemon: (pokemon) => dispatch(updatePokemon(pokemon)),
  toggleSelected: (card) => dispatch(toggleSelected(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDeck);