import { moviesByGenre } from '~data';
import { resolvers } from '~resolvers';
import { moviesByGenreResolver } from './moviesByGenre';

jest.mock('~data', () => ({
  moviesByGenre: jest.fn().mockResolvedValue('moviesByGenre'),
}));

describe('Given MoviesByGenre resolver', () => {
  it('Should have an array of resolvers', () => {
    expect(resolvers).toEqual(expect.any(Array));
  });

  it('Should have Query property', () => {
    expect(moviesByGenreResolver).toHaveProperty('Query');
  });

  it('Should have movieGenres query', () => {
    expect(moviesByGenreResolver.Query).toHaveProperty('moviesByGenre');
  });

  describe('Given moviesByGenre query', () => {
    it('Should call getMovieGenres when movieGenres query is called', async () => {
      await moviesByGenreResolver.Query.moviesByGenre(
        { genreId: 3 },
        { genreId: 3 },
        { genreId: 3 },
      );
      expect(moviesByGenre).toHaveBeenCalledWith(3);
    });
  });
});
