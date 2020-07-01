import { movieGenres } from '_data';
import { MovieGenres } from '_interfaces';

export const movieGenresResolver = {
  Query: {
    async movieGenres(...args: { movieId: number }[]): Promise<MovieGenres> {
      const [, param] = args;
      const { movieId } = param;

      return movieGenres(movieId);
    },
  },
};
