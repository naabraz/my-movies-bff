import { moviesParser, request } from '~helpers';
import { Movie } from '~interfaces';

export const popularMovies = async (): Promise<Movie[]> => {
  const popularMovies = await request('movie/popular');

  return moviesParser(popularMovies);
};
