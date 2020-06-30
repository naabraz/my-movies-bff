import { movieGenres } from '~data';
import { resolvers } from '~resolvers';
import { movieGenresResolver } from './movieGenres';

jest.mock('~data', () => ({
  movieGenres: jest.fn().mockResolvedValue('movieGenres'),
}));

describe('Given MovieGenres resolver', () => {
  it('Should have an array of resolvers', () => {
    expect(resolvers).toEqual(expect.any(Array));
  });

  it('Should have Query property', () => {
    expect(movieGenresResolver).toHaveProperty('Query');
  });

  it('Should have movieGenres query', () => {
    expect(movieGenresResolver.Query).toHaveProperty('movieGenres');
  });

  describe('Given movieGenres query', () => {
    it('Should call getMovieGenres when movieGenres query is called', async () => {
      await movieGenresResolver.Query.movieGenres(
        { movieId: 3 },
        { movieId: 3 },
        { movieId: 3 },
      );
      expect(movieGenres).toHaveBeenCalledWith(3);
    });
  });
});
