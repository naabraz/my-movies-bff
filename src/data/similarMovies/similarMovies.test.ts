import { similarMovies } from '~data';
import { moviesParser, request } from '~helpers';

jest.mock('~helpers', () => ({
  request: jest.fn().mockImplementation(() => ({ results: [] })),
  imageConfig: jest.fn(),
  moviesParser: jest.fn(),
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
      expect(moviesParser).toHaveBeenCalled();
    });
  });
});
