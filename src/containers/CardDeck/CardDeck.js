import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPokemon } from '../../actions';
import { fetchPokemon } from '../../helper';
import './CardDeck.css';

export class CardDeck extends Component {
  componentDidMount = async () => {
    const pokemon = await fetchPokemon();

    this.props.addPokemon(pokemon);
  }

  render() {
    return (
      <section className='CardDeck'>
        I'm the CardDeck!
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