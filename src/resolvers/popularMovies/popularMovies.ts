import { popularMovies } from '~data';
import { Movie } from '~interfaces';

export const popularMoviesResolver = {
  Query: {
    async popularMovies(): Promise<Movie[]> {
      return popularMovies();
    },
  },
};
