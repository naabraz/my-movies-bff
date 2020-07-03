import { moviesParser, request } from '~helpers';
import { Movie } from '~interfaces';

export const similarMovies = async (movieId: number): Promise<Movie[]> => {
  const url = `movie/${movieId}/similar`;

  const movies = await request(url);

  return moviesParser(movies);
};
