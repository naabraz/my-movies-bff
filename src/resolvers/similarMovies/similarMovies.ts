import { similarMovies } from '_data';
import { SimilarMovie } from '_interfaces';

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
