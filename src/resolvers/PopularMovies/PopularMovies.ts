import { getPopularMovies } from '../../data';
import { Movie } from '../../interfaces';

export const PopularMoviesResolver = {
  Query: {
    async popularMovies(): Promise<Movie[]> {
      return getPopularMovies();
    },
  },
};
