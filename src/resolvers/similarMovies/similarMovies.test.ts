import { similarMovies } from '_data';
import { resolvers } from '_resolvers';
import { similarMoviesResolver } from './similarMovies';

jest.mock('_data', () => ({
  similarMovies: jest.fn().mockResolvedValue('similarMovies'),
}));

describe('Given similarMovies resolver', () => {
  it('Should have an array of resolvers', () => {
    expect(resolvers).toEqual(expect.any(Array));
  });

  it('Should have Query property', () => {
    expect(similarMoviesResolver).toHaveProperty('Query');
  });

  it('Should have similarMovies query', () => {
    expect(similarMoviesResolver.Query).toHaveProperty('similarMovies');
  });

  it('Should have similarMovies query', () => {
    expect(similarMoviesResolver.Query).toHaveProperty('similarMovies');
  });

  describe('Given moviesByGenre query', () => {
    it('Should call similarMovies data when similarMovies query is called', async () => {
      await similarMoviesResolver.Query.similarMovies(
        { movieId: 3 },
        { movieId: 3 },
        { movieId: 3 },
      );
      expect(similarMovies).toHaveBeenCalledWith(3);
    });
  });
});
