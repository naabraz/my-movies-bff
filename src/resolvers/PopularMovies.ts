import { getPopularMovies } from '../data';
import { PopularMovies } from '../data/PopularMovies/interfaces';

export const PopularMoviesResolver = {
  Query: {
    async popularMovies(): Promise<PopularMovies[]> {
      return getPopularMovies();
    },
  },
};
