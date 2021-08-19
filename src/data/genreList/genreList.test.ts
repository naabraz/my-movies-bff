import { genreList } from '~data';
import { request } from '~helpers';

jest.mock('~helpers', () => ({
  request: jest.fn().mockReturnValue(() => ({ genres: [] })),
}));

describe('Given genreList module', () => {
  it('should call request function to genre list api', () => {
    genreList();

    expect(request).toHaveBeenCalledWith('genre/movie/list');
  });
});
