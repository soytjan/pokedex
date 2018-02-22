import React from 'react';
import { shallow } from 'enzyme';
import { CardDeck, mapStateToProps, mapDispatchToProps } from './CardDeck';
import { mockPokemon } from '../../mockData';

describe('CardDeck', () => {
  let renderedComponent;
  let mockAddPokemon;
  
  beforeEach(() => {
    mockAddPokemon = jest.fn()
    renderedComponent = shallow(
      <CardDeck 
        addPokemon={mockAddPokemon}
        pokemon={mockPokemon} 
      />
    )
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should map to the store correctly', () => {
    const mockState = {
      pokemon: mockPokemon
    }
    const mapped = mapStateToProps(mockState)

    expect(mapped).toEqual(mockState);
  });

  it('should call the dispatch function when using a function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    
    mapped.addPokemon(mockPokemon);

    expect(mockDispatch).toHaveBeenCalled();
  });
})