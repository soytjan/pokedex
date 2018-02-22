import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let renderedComponent;
  let mockPokemon;

  beforeAll(() => {
    mockPokemon = {
      "id": "1",
      "name": "normal",
      "pokemon": [
        "16",
        "17",
        "18",
        "19",
        "20"
      ]
    };
  })

  beforeEach(() => {
    renderedComponent = shallow(
      <Card 
        pokemon={mockPokemon}
        key={mockPokemon.id}
      />
    )
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  })
})