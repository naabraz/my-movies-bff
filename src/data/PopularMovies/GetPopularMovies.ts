import { handleMovies } from '../helpers';
import { Movie } from '../helpers/MoviesParser/interfaces';
import { doRequest } from '../utils';

export const getPopularMovies = async (): Promise<Movie[]> => {
  const popularMovies = await doRequest('movie/popular');

  return handleMovies(popularMovies);
};
