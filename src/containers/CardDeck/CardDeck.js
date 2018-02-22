import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CardDeck.css';

class CardDeck extends Component {
  render() {
    return (
      <section className='CardDeck'>
        I'm the CardDeck!
      </section>
    )
  }
}

CardDeck.propTypes = {

};

export default CardDeck;