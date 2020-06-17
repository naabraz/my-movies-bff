import { MovieGenres } from 'interfaces';
import { getMovieGenres } from '../data';

export const MovieGenresResolver = {
  Query: {
    async movieGenres(...args: { movieId: number }[]): Promise<MovieGenres> {
      const [, param] = args;
      const { movieId } = param;

      return getMovieGenres(movieId);
    },
  },
};
