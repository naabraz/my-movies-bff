/* eslint-disable @typescript-eslint/camelcase */
import { doRequest } from '../utils';
import { getPopularMovies, handlePopularMovies } from './';

jest.mock('../utils', () => ({
  doRequest: jest.fn().mockImplementation(() => ({ results: [] })),
}));

describe('Given GetPopularMovies', () => {
  const mockResults = [
    {
      popularity: 451.291,
      id: 419704,
      title: 'Foo title',
      release_date: '0000-00-00',
      poster_path: '/foo.jpg',
      overview: '',
      original_language: 'en',
    },
  ];

  it('Should call doRequest util to get popularMovies', async () => {
    await getPopularMovies();

    expect(doRequest).toHaveBeenCalled();
  });

  it('Should return handled popular movies', () => {
    const popularMovies = handlePopularMovies({ results: mockResults });
    expect(popularMovies).toEqual([
      {
        id: 419704,
        overview: '',
        posterPath: '/foo.jpg',
        releaseDate: '0000-00-00',
        title: 'Foo title',
      },
    ]);
  });
});
