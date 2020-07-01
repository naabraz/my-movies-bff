import { moviesByGenre } from '_data';
import { request } from '_helpers';

jest.mock('_helpers', () => ({
  request: jest.fn().mockImplementation(() => ({ results: [] })),
  imageConfig: jest.fn(),
  moviesParser: jest.fn(),
}));

describe('Given moviesByGenre module', () => {
  it('Should have getMovieGenres function', () => {
    expect(moviesByGenre).toEqual(expect.any(Function));
  });

  describe('Given moviesByGenre function call', () => {
    it('Should call doRequest', async () => {
      await moviesByGenre(2);
      expect(request).toHaveBeenCalled();
    });
  });
});
