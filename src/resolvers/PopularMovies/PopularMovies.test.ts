import { getPopularMovies } from '../../data';
import { resolvers } from '..';
import { PopularMoviesResolver } from './PopularMovies';

jest.mock('../data', () => ({
  getPopularMovies: jest.fn().mockResolvedValue('getPopularMovies'),
}));

describe('Given PopularMovies resolver', () => {
  it('Should have an array of resolvers', () => {
    expect(resolvers).toEqual(expect.any(Array));
  });

  it('Should have Query property', () => {
    expect(PopularMoviesResolver).toHaveProperty('Query');
  });

  it('Should have popularMovies query', () => {
    expect(PopularMoviesResolver.Query).toHaveProperty('popularMovies');
  });

  describe('Given popularMovies query', () => {
    it('Should call getPopularMovies when popularMovies query is called', async () => {
      await PopularMoviesResolver.Query.popularMovies();
      expect(getPopularMovies).toHaveBeenCalled();
    });
  });
});
