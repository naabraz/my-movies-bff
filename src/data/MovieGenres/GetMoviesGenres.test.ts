import { doRequest } from '../utils';
import { getMovieGenres } from './';

jest.mock('../utils', () => ({
  doRequest: jest.fn().mockImplementation(() => ({ results: [] })),
}));

describe('Given GetMovieGenres module', () => {
  it('Should have getMovieGenres function', () => {
    expect(getMovieGenres).toEqual(expect.any(Function));
  });

  describe('Given getPopularMovies function call', () => {
    it('Should call doRequest', async () => {
      await getMovieGenres(2);
      expect(doRequest).toHaveBeenCalled();
    });
  });
});
