import { Movie } from 'interfaces';
import { getPopularMovies } from '../data';

export const PopularMoviesResolver = {
  Query: {
    async popularMovies(): Promise<Movie[]> {
      return getPopularMovies();
    },
  },
};
