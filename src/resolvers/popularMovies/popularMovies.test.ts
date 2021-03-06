import { popularMovies } from '~data';
import { resolvers } from '~resolvers';
import { popularMoviesResolver } from './popularMovies';

jest.mock('~data', () => ({
  popularMovies: jest.fn().mockResolvedValue('popularMovies'),
}));

describe('Given PopularMovies resolver', () => {
  it('Should have an array of resolvers', () => {
    expect(resolvers).toEqual(expect.any(Array));
  });

  it('Should have Query property', () => {
    expect(popularMoviesResolver).toHaveProperty('Query');
  });

  it('Should have popularMovies query', () => {
    expect(popularMoviesResolver.Query).toHaveProperty('popularMovies');
  });

  describe('Given popularMovies query', () => {
    it('Should call ppularMovies when popularMovies query is called', async () => {
      await popularMoviesResolver.Query.popularMovies();
      expect(popularMovies).toHaveBeenCalled();
    });
  });
});
