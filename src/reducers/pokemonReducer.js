const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [...state, ...action.pokemon];
    case 'UPDATE_POKEMON':
      return [...action.pokemon];
    case 'TOGGLE_SELECTED':
      return state.map(pokemon => {
        if (pokemon.id === action.card.id) {
          return action.card;
        }

        return pokemon;
      }) 
    default: 
      return state;
  }
}

export default pokemonReducer;