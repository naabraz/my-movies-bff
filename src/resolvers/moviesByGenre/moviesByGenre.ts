import { moviesByGenre } from '_data';
import { Movie } from '_interfaces';

export const moviesByGenreResolver = {
  Query: {
    async moviesByGenre(...args: { genreId: number }[]): Promise<Movie[]> {
      const [, param] = args;
      const { genreId } = param;

      return moviesByGenre(genreId);
    },
  },
};
