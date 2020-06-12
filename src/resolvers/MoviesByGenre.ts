import { getMoviesByGenre } from '../data';
import { MoviesResponse } from '../data/PopularMovies/interfaces';

export const MoviesByGenreResolver = {
  Query: {
    async moviesByGenre(
      ...args: { genreId: number }[]
    ): Promise<MoviesResponse[]> {
      const [, param] = args;
      const { genreId } = param;

      return getMoviesByGenre(genreId);
    },
  },
};
