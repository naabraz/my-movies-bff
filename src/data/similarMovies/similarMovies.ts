import { request, similarMoviesParser } from '~helpers';
import { SimilarMovie } from '~interfaces';

export const similarMovies = async (
  movieId: number,
): Promise<SimilarMovie[]> => {
  const url = `movie/${movieId}/similar`;
  const movies = await request(url);

  return similarMoviesParser(movies);
};
