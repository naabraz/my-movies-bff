import { similarMovies } from '~data';
import { Movie } from '~interfaces';

export const similarMoviesResolver = {
  Query: {
    async similarMovies(...args: { movieId: number }[]): Promise<Movie[]> {
      const [, param] = args;
      const { movieId } = param;
      return similarMovies(movieId);
    },
  },
};
