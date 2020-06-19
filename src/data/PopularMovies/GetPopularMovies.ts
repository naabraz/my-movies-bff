import { MoviesParser, RestClient } from '~helpers';
import { Movie } from '~interfaces';

export const getPopularMovies = async (): Promise<Movie[]> => {
  const popularMovies = await RestClient('movie/popular');

  return MoviesParser(popularMovies);
};
