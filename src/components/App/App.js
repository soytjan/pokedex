import React, { Component } from 'react';
import './App.css';
import CardDeck from '../../containers/CardDeck/CardDeck'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <CardDeck />
      </div>
    );
  }
}


export default App;
