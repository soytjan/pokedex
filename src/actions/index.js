export const fakeAction = () => ({ type: 'FAKE'})

export const addPokemon = (pokemon) => ({
  type: 'ADD_POKEMON',
  pokemon
})

export const updatePokemon = (pokemon) => ({
  type: 'UPDATE_POKEMON',
  pokemon
})