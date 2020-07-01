import { moviesParser, request } from '_helpers';
import { Movie } from '_interfaces';

export const popularMovies = async (): Promise<Movie[]> => {
  const movies = await request('movie/popular');

  return moviesParser(movies);
};
