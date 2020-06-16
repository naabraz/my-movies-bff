import { getPopularMovies } from '../data';
import { Movie } from '../data/helpers/MoviesParser/interfaces';

export const PopularMoviesResolver = {
  Query: {
    async popularMovies(): Promise<Movie[]> {
      return getPopularMovies();
    },
  },
};
