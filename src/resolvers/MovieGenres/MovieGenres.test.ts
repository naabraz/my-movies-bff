import { movieGenres } from '../../data';
import { resolvers } from '..';
import { MovieGenresResolver } from './movieGenres';

jest.mock('../data', () => ({
  getMovieGenres: jest.fn().mockResolvedValue('getMovieGenres'),
}));

describe('Given MovieGenres resolver', () => {
  it('Should have an array of resolvers', () => {
    expect(resolvers).toEqual(expect.any(Array));
  });

  it('Should have Query property', () => {
    expect(MovieGenresResolver).toHaveProperty('Query');
  });

  it('Should have movieGenres query', () => {
    expect(MovieGenresResolver.Query).toHaveProperty('movieGenres');
  });

  describe('Given movieGenres query', () => {
    it('Should call getMovieGenres when movieGenres query is called', async () => {
      await MovieGenresResolver.Query.movieGenres(
        { movieId: 3 },
        { movieId: 3 },
        { movieId: 3 },
      );
      expect(movieGenres).toHaveBeenCalledWith(3);
    });
  });
});
