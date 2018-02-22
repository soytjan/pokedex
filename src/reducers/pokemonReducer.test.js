import pokemonReducer from './pokemonReducer';
import { mockPokemon } from '../mockData';
import * as actions from '../actions'

describe('pokemonReducer', () => {
  it('should return a default state of an empty array', () => {
    const expected = [];

    expect(pokemonReducer(undefined, {})).toEqual(expected);
  });

  it('should return an updated state with added pokemon when the action addPokemon is passed in', () => {
    const expected = mockPokemon;
    const action = actions.addPokemon(mockPokemon);

    expect(pokemonReducer(undefined, action)).toEqual(mockPokemon);
  })
})