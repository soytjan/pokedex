import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPokemon } from '../../actions';
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

  componentDidMount = async () => {
    this.setState({ isLoading: true })
    const pokemon = await fetchAllPokemon();
    this.props.addPokemon(pokemon);
    this.setState({ isLoading: false })
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
  pokemon: PropTypes.array
};

export const mapStateToProps = state => ({
  pokemon: state.pokemon,
})

export const mapDispatchToProps = dispatch => ({
  addPokemon: (pokemon) => dispatch(addPokemon(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDeck);