import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPokemon } from '../../actions';
import { fetchPokemon } from '../../helper';
import pikachu from '../../loading.gif';
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
    const pokemon = await fetchPokemon();
    this.props.addPokemon(pokemon);
    this.setState({ isLoading: false })
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