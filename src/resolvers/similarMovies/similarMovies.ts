import { similarMovies } from '~data';
import { SimilarMovie } from '~interfaces';

export const similarMoviesResolver = {
  Query: {
    async similarMovies(
      ...args: { movieId: number }[]
    ): Promise<SimilarMovie[]> {
      const [, param] = args;
      const { movieId } = param;
      return similarMovies(movieId);
    },
  },
};
