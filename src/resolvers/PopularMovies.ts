import { IResolvers } from 'graphql-tools';

import { getPopularMovies } from '../data';
import { PopularMovies } from '../data/PopularMovies/IPopularMovies';

export const PopularMoviesResolver: IResolvers = {
  Query: {
    async popularMovies(): Promise<PopularMovies[]> {
      return getPopularMovies();
    },
  },
};
