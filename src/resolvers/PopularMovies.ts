import { IResolvers } from 'graphql-tools';

import { getPopularMovies } from '../data';
import { PopularMovies } from '../data/PopularMovies/IPopularMovies';

export const PopularMoviesResolver: IResolvers = {
  Query: {
    async popularMovies(_: void, args: void): Promise<PopularMovies[]> {
      return getPopularMovies();
    },
  },
};
