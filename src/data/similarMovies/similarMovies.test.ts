import { similarMovies } from '_data';
import { request, similarMoviesParser } from '_helpers';

jest.mock('_helpers', () => ({
  request: jest.fn().mockImplementation(() => ({ results: [] })),
  imageConfig: jest.fn(),
  similarMoviesParser: jest.fn(),
}));

describe('Given similarMovies data', () => {
  it('Should have similarMovies function', () => {
    expect(similarMovies).toEqual(expect.any(Function));
  });

  describe('Given similarMovies function call', () => {
    it('Should call request', async () => {
      await similarMovies(3);
      expect(request).toHaveBeenCalled();
    });

    it('Should return parsed similar movies', async () => {
      expect(similarMoviesParser).toHaveBeenCalled();
    });
  });
});
