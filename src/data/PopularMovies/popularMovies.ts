import { moviesParser, restClient } from '~helpers';
import { Movie } from '~interfaces';

export const popularMovies = async (): Promise<Movie[]> => {
  const popularMovies = await restClient('movie/popular');

  return moviesParser(popularMovies);
};
