import { IResolvers } from 'graphql-tools';

import { MovieGenresResolver } from './MovieGenres';
import { MoviesByGenreResolver } from './MoviesByGenre';
import { PopularMoviesResolver } from './PopularMovies';

export const resolvers: IResolvers[] = [
  MovieGenresResolver,
  MoviesByGenreResolver,
  PopularMoviesResolver,
];
