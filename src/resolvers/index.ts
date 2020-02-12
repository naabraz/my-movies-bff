import { IResolvers } from 'graphql-tools';

import { PopularMoviesResolver } from './PopularMovies';

export const resolvers: IResolvers[] = [
  PopularMoviesResolver
];
