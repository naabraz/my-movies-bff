/* eslint-disable @typescript-eslint/camelcase */
import { moviesParser, request } from '~helpers';
import { popularMovies } from './';

jest.mock('~helpers', () => ({
  request: jest.fn().mockImplementation(() => ({ results: [] })),
  moviesParser: jest.fn(),
}));

describe('Given popularMovies module', () => {
  it('Should have popularMovies function', () => {
    expect(popularMovies).toEqual(expect.any(Function));
  });

  describe('Given popularMovies function call', () => {
    it('Should call request', async () => {
      await popularMovies();
      expect(request).toHaveBeenCalled();
    });
  });

  describe('Given moviesParser function', () => {
    it('Should return parsed popular movies', async () => {
      expect(moviesParser).toHaveBeenCalled();
    });
  });
});
