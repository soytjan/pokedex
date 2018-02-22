import * as helper from './helper';

describe('helper', () => {
  describe('fetchPokemon', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          array: 'array of pokemon'
        })
      }))
    });

    it('should call fetch with the expected params', () => {
      const url = 'http://localhost:3001/types';

      expect(window.fetch).not.toHaveBeenCalled()

      helper.fetchPokemon()

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return an object if status code is ok', () => {
      const expected = {array: 'array of pokemon'};
      const response = helper.fetchPokemon();

      expect(response).resolves.toEqual(expected);
    });

    it('should throw an error if status code is not ok', () => {
      window.fetch = jest.fn().
        mockImplementation(() => Promise.resolve({ status: 500 }
        )
      )
      const expected = Error('could not catch any pokemon :(');
      const response = helper.fetchPokemon();

      expect(response).rejects.toEqual(expected);
    });
  })

  describe('fetchSinglePokemon', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          object: 'poke obj'
        })
      }))
    });

    it('should call fetch with the expected params', () => {
      const url = 'http://localhost:3001/pokemon/1';

      expect(window.fetch).not.toHaveBeenCalled()

      helper.fetchSinglePokemon(1)

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return an object if status code is ok', () => {
      const expected = { object: 'poke obj' };
      const response = helper.fetchSinglePokemon(1);

      expect(response).resolves.toEqual(expected);
    });

    it('should throw an error if status code is not ok', () => {
      window.fetch = jest.fn().
        mockImplementation(() => Promise.resolve({ status: 500 }
        )
      )
      const expected = Error('we could not find your pokemon :(');
      const response = helper.fetchSinglePokemon(1);

      expect(response).rejects.toEqual(expected);
    });
  })
})
