import pokemonReducer from './pokemonReducer';
import { mockPokemon, updatedMockPokemon, toggledMockPokemon } from '../mockData';
import * as actions from '../actions'

describe('pokemonReducer', () => {
  it('should return a default state of an empty array', () => {
    const expected = [];

    expect(pokemonReducer(undefined, {})).toEqual(expected);
  });

  it('should return an updated state with added pokemon when the action addPokemon is passed in', () => {
    const expected = mockPokemon;
    const action = actions.addPokemon(mockPokemon);

    expect(pokemonReducer(undefined, action)).toEqual(expected);
  });

  it('should update state with a complete array of Pokemon when the action updatePokemon is passed in', () => {
    const expected = updatedMockPokemon;
    const action = actions.updatePokemon(updatedMockPokemon);

    expect(pokemonReducer(mockPokemon, action)).toEqual(expected)
  });

  it('should update state with the correct card when the action toggleSelected is passed in', () => {
    const expected = toggledMockPokemon;
    const card =  {
      "id": "1",
      "name": "normal",
      "isSelected": true,
      "pokemon": [
        "16",
        "17",
        "18",
        "19",
        "20"
      ]
    }
    const action = actions.toggleSelected(card);

    expect(pokemonReducer(mockPokemon, action)).toEqual(expected);
  });
})