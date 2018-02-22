import * as actions from './index';
import { mockPokemon, updatedMockPokemon } from '../mockData';

describe('actions', () => {
  it('addPokemon should return an object with type ADD_POKEMON and an array of pokemon', () => {
    const expected = {
      type: 'ADD_POKEMON',
      pokemon: mockPokemon
    }

    expect(actions.addPokemon(mockPokemon)).toEqual(expected);
  })

  it('updatePokemon should return an object with type UPDATE_POKEMON and an array of pokemon', () => {
    const expected = {
      type: 'UPDATE_POKEMON',
      pokemon: updatedMockPokemon
    }

    expect(actions.updatePokemon(updatedMockPokemon)).toEqual(expected);
  })

  it('toggleSelected should return an object with type TOGGLE_SELECTED and an object', () => {
    const card = {
        id: "2", 
        name: "fighting", 
        pokemon: Array(5)
      }
    const expected = {
      type: 'TOGGLE_SELECTED',
      card
    }

    expect(actions.toggleSelected(card)).toEqual(expected);
  })
})