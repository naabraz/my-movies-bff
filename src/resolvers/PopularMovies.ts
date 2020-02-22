import { IResolvers } from 'graphql-tools';

import { getPopularMovies } from '../data';
import { PopularMovies } from '../data/PopularMovies/interfaces';

export const PopularMoviesResolver: IResolvers = {
  Query: {
    async popularMovies(): Promise<PopularMovies[]> {
      return getPopularMovies();
    },
  },
};
