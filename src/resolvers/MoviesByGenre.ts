import { Movie } from 'interfaces';
import { getMoviesByGenre } from '../data';

export const MoviesByGenreResolver = {
  Query: {
    async moviesByGenre(...args: { genreId: number }[]): Promise<Movie[]> {
      const [, param] = args;
      const { genreId } = param;

      return getMoviesByGenre(genreId);
    },
  },
};
