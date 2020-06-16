import { getMoviesByGenre } from '../data';
import { Movie } from '../data/helpers/MoviesParser/interfaces';

export const MoviesByGenreResolver = {
  Query: {
    async moviesByGenre(...args: { genreId: number }[]): Promise<Movie[]> {
      const [, param] = args;
      const { genreId } = param;

      return getMoviesByGenre(genreId);
    },
  },
};
