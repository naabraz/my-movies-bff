import { getMovieGenres } from '../data';
import { MovieGenres } from '../data/MovieGenres/interfaces/IMovieGenres';

export const MovieGenresResolver = {
  Query: {
    async movieGenres(...args: { movieId: number }[]): Promise<MovieGenres> {
      const [, param] = args;
      const { movieId } = param;

      return getMovieGenres(movieId);
    },
  },
};
