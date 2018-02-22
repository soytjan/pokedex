import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let renderedComponent;
  let mockPokemon;
  let mockOnClick;

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
    mockOnClick = jest.fn();
    renderedComponent = shallow(
      <Card 
        pokemon={mockPokemon}
        key={mockPokemon.id}
        onClick={mockOnClick}
      />
    )
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  })

  it('should match snapshot when toggled', () => {
    renderedComponent.find('article').simulate('click');

    expect(renderedComponent).toMatchSnapshot();
  })
})