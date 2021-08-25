import { genreList } from '~data';
import { genreListResolver } from './genreList';

jest.mock('~data', () => ({
  genreList: jest.fn().mockResolvedValue('genreList'),
}));

describe('Given genreList resolver', () => {
  it('should request genre list', async () => {
    await genreListResolver.Query.genreList();

    expect(genreList).toHaveBeenCalled();
  });
});
