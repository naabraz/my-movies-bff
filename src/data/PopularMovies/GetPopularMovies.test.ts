/* eslint-disable @typescript-eslint/camelcase */
import { getPopularMovies } from '../';
import { doRequest } from '../utils';
import { handlePopularMovies } from './GetPopularMovies';
import { getImagesConfiguration } from './utils';

jest.mock('../utils', () => ({
  doRequest: jest.fn().mockImplementation(() => ({ results: [] })),
}));

jest.mock('./utils', () => ({
  getImagesConfiguration: jest.fn().mockResolvedValue({
    baseUrl: 'baseUrl/',
    posterSize: '100',
    backdropSize: '200',
  }),
}));

describe('Given GetPopularMovies module', () => {
  const mockResults = [
    {
      popularity: 451.291,
      id: 419704,
      title: 'Foo title',
      release_date: '0000-00-00',
      poster_path: '/foo.jpg',
      overview: '',
      original_language: 'en',
      backdrop_path: '/backdrop_path.jpg',
      vote_average: 8.1,
    },
  ];

  it('Should have getPopularMovies function', () => {
    expect(getPopularMovies).toEqual(expect.any(Function));
  });

  it('Should have handlePopularMovies function', () => {
    expect(handlePopularMovies).toEqual(expect.any(Function));
  });

  describe('Given getPopularMovies function call', () => {
    it('Should call doRequest', async () => {
      await getPopularMovies();
      expect(doRequest).toHaveBeenCalled();
    });
  });

  describe('Given handlePopularMovies function', () => {
    it('Should return handled popular movies', async () => {
      const popularMovies = await handlePopularMovies({ results: mockResults });
      const moviesExpected = {
        id: 419704,
        overview: '',
        posterPath: 'baseUrl/100/foo.jpg',
        releaseDate: '0000-00-00',
        title: 'Foo title',
        backdropPath: 'baseUrl/200/backdrop_path.jpg',
        voteAverage: 8.1,
      };

      expect(popularMovies).toEqual([moviesExpected]);
    });

    it('Should call getImagesConfiguration', () => {
      expect(getImagesConfiguration).toHaveBeenCalled();
    });
  });
});
