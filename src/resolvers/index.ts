import { IResolvers } from 'graphql-tools';

import { movieGenresResolver } from './movieGenres';
import { moviesByGenreResolver } from './moviesByGenre';
import { popularMoviesResolver } from './popularMovies';
import { similarMoviesResolver } from './similarMovies';
import { genreListResolver } from './genreList';

export const resolvers: IResolvers[] = [
  movieGenresResolver,
  moviesByGenreResolver,
  popularMoviesResolver,
  similarMoviesResolver,
  genreListResolver,
];
