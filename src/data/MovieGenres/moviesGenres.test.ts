import { doRequest } from '../utils';
import { movieGenres } from '.';

jest.mock('../utils', () => ({
  doRequest: jest.fn().mockImplementation(() => ({ results: [] })),
}));

describe('Given GetMovieGenres module', () => {
  it('Should have getMovieGenres function', () => {
    expect(movieGenres).toEqual(expect.any(Function));
  });

  describe('Given getPopularMovies function call', () => {
    it('Should call doRequest', async () => {
      await movieGenres(2);
      expect(doRequest).toHaveBeenCalled();
    });
  });
});
