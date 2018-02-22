import React from 'react';
import { shallow } from 'enzyme';
import { CardDeck, mapStateToProps, mapDispatchToProps } from './CardDeck';
import { mockPokemon, mockSinglePokemon } from '../../mockData';

describe('CardDeck', () => {
  let renderedComponent;
  let mockAddPokemon;
  let mockUpdatePokemon;
  let mockToggleSelected;
  
  beforeEach(() => {
    mockAddPokemon = jest.fn();
    mockUpdatePokemon = jest.fn();
    mockToggleSelected = jest.fn();
    renderedComponent = shallow(
      <CardDeck 
        addPokemon={mockAddPokemon}
        updatePokemon={mockUpdatePokemon}
        toggleSelected={mockToggleSelected}
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

  describe('getInitialPokemonTypes', () => {
    it('expect fetch to have been called', () => {
      window.fetch = jest.fn()
      renderedComponent.instance().getInitialPokemonTypes();
      expect(window.fetch).toHaveBeenCalled();
    });
    
    it('expect addPokemon to have been called', async () => {
      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          mockPokemon
        )
      }))

      await renderedComponent.instance().getInitialPokemonTypes();

      expect(mockAddPokemon.mock.calls.length).toEqual(1)
    })
  })

  describe('getPokemonDetails', () => {
    it('expect fetch to have been called', () => {
      window.fetch = jest.fn()
      renderedComponent.instance().getPokemonDetails(mockPokemon);
      expect(window.fetch).toHaveBeenCalled();
    });
    
    it('expect updatePokemon to have been called', async () => {
      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          mockSinglePokemon
        )
      }))

      await renderedComponent.instance().getPokemonDetails(mockPokemon);

      expect(mockUpdatePokemon).toHaveBeenCalled();
    })
  })

  describe('handleCardClick', () => {
    it('expect toggleSelected to have been called with an updated card passed in', () => {
      const card = {
        id: "2", 
        name: "fighting", 
        pokemon: Array(5)
      }
      const updatedCard = {
        id: "2", 
        name: "fighting", 
        pokemon: Array(5),
        isSelected: true
      }

      renderedComponent.instance().handleCardClick(card)

      expect(mockToggleSelected).toHaveBeenCalledWith(updatedCard)
    })
  })
})