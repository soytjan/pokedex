import React, { Component } from 'react';
import './App.css';
import CardDeck from '../../containers/CardDeck/CardDeck'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <section className='main'>
          <CardDeck />
        </section>
      </div>
    );
  }
}


export default App;
