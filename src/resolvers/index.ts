import { IResolvers } from 'graphql-tools';

import { genreListResolver } from './genreList';
import { movieGenresResolver } from './movieGenres';
import { moviesByGenreResolver } from './moviesByGenre';
import { popularMoviesResolver } from './popularMovies';
import { similarMoviesResolver } from './similarMovies';

export const resolvers: IResolvers[] = [
  movieGenresResolver,
  moviesByGenreResolver,
  popularMoviesResolver,
  similarMoviesResolver,
  genreListResolver,
];
