export const addPokemon = (pokemon) => ({
  type: 'ADD_POKEMON',
  pokemon
})

export const updatePokemon = (pokemon) => ({
  type: 'UPDATE_POKEMON',
  pokemon
})

export const toggleSelected = card => ({
  type: 'TOGGLE_SELECTED',
  card
})