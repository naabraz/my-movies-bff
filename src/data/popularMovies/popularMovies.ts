import { moviesParser, request } from '~helpers';
import { Movie } from '~interfaces';

export const popularMovies = async (): Promise<Movie[]> => {
  const movies = await request('movie/popular');

  return moviesParser(movies);
};
