import { IResolvers } from 'graphql-tools';

import { MovieGenresResolver } from './MovieGenres';
import { PopularMoviesResolver } from './PopularMovies';

export const resolvers: IResolvers[] = [
  MovieGenresResolver,
  PopularMoviesResolver,
];
