import { Movie } from '@interfaces';
import { handleMovies } from '../helpers';
import { doRequest } from '../utils';

export const getPopularMovies = async (): Promise<Movie[]> => {
  const popularMovies = await doRequest('movie/popular');

  return handleMovies(popularMovies);
};
