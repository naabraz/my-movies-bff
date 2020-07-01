import { request, similarMoviesParser } from '_helpers';
import { SimilarMovie } from '_interfaces';

export const similarMovies = async (
  movieId: number,
): Promise<SimilarMovie[]> => {
  const url = `movie/${movieId}/similar`;

  const movies = await request(url);

  return similarMoviesParser(movies);
};
