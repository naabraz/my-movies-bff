import { moviesByGenre } from '~data';
import { Movie } from '~interfaces';

export const moviesByGenreResolver = {
  Query: {
    async moviesByGenre(...args: { genreId: number }[]): Promise<Movie[]> {
      const [, param] = args;
      const { genreId } = param;

      return moviesByGenre(genreId);
    },
  },
};
