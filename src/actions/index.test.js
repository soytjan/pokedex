import * as actions from './index';
import { mockPokemon } from '../mockData';

describe('actions', () => {
  it('addPokemon should return an object with type ADD_POKEMON and an array of pokemon', () => {
    const expected = {
      type: 'ADD_POKEMON',
      pokemon: mockPokemon
    }

    expect(actions.addPokemon(mockPokemon)).toEqual(expected);
  })
})