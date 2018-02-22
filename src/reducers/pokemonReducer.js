const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [...state, ...action.pokemon];
    case 'UPDATE_POKEMON':
      return [...action.pokemon];
    default: 
      return state;
  }
}

export default pokemonReducer;