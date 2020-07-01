import { popularMovies } from '_data';
import { Movie } from '_interfaces';

export const popularMoviesResolver = {
  Query: {
    async popularMovies(): Promise<Movie[]> {
      return popularMovies();
    },
  },
};
