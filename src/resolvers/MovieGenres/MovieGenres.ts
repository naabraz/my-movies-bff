import { getMovieGenres } from '~data';
import { MovieGenres } from '~interfaces';

export const MovieGenresResolver = {
  Query: {
    async movieGenres(...args: { movieId: number }[]): Promise<MovieGenres> {
      const [, param] = args;
      const { movieId } = param;

      return getMovieGenres(movieId);
    },
  },
};
