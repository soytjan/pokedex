export const fetchPokemon = async () => {
  try {
    const url = 'http://localhost:3001/types';
    const response = await fetch(url);
    if (response.status > 226) {
      throw new Error('could not catch any pokemon :(')
    } else {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    throw error
  }
}

export const fetchSinglePokemon = async (pokeId) => {
  try {
    const url = `http://localhost:3001/pokemon/${pokeId}`
    const response = await fetch(url);
    if (response.status > 226) {
      throw new Error('we could not find your pokemon :(')
    } else {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    throw error;
  }
}