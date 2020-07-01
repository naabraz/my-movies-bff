/* eslint-disable @typescript-eslint/camelcase */
import { similarMoviesParser } from '~helpers';

jest.mock('~helpers/imageConfig', () => ({
  imageConfig: jest.fn().mockResolvedValue({
    baseUrl: 'baseUrl',
    posterSize: '300',
    backdropSize: '300',
  }),
}));

describe('Given similarMoviesParser util', () => {
  it('Should return correct object with movies', async () => {
    const movieResponseMock = {
      results: [
        {
          id: 1,
          poster_path: 'posterPath',
          title: 'title',
          release_date: '2020-02-21',
          overview: 'overview',
          backdrop_path: 'backDropPath',
          vote_average: 10,
        },
      ],
    };

    const moviesParsedExpected = [
      {
        id: 1,
        posterPath: 'baseUrl300posterPath',
        title: 'title',
      },
    ];

    const moviesParsed = await similarMoviesParser(movieResponseMock);

    expect(moviesParsed).toEqual(moviesParsedExpected);
  });
});
