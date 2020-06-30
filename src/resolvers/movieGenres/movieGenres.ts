import { movieGenres } from '~data';
import { MovieGenres } from '~interfaces';

export const movieGenresResolver = {
  Query: {
    async movieGenres(...args: { movieId: number }[]): Promise<MovieGenres> {
      const [, param] = args;
      const { movieId } = param;

      return movieGenres(movieId);
    },
  },
};
