import { movieGenres } from '~data';
import { request } from '~helpers';

jest.mock('~helpers', () => ({
  request: jest.fn().mockImplementation(() => ({ results: [] })),
  imageConfig: jest.fn(),
  moviesParser: jest.fn(),
}));

describe('Given movieGenres module', () => {
  it('Should have getMovieGenres function', () => {
    expect(movieGenres).toEqual(expect.any(Function));
  });

  describe('Given popularMovies function call', () => {
    it('Should call doRequest', async () => {
      await movieGenres(2);
      expect(request).toHaveBeenCalled();
    });
  });
});
