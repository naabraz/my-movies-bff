import { handlePopularMovies } from '../helpers';
import { doRequest } from '../utils';
import { PopularMovies } from './interfaces';

export const getPopularMovies = async (): Promise<PopularMovies[]> => {
  const popularMovies = await doRequest('movie/popular');

  return handlePopularMovies(popularMovies);
};
