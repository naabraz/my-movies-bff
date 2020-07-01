import { imageConfig } from '_helpers';
import { MoviesResponse, SimilarMovie } from '_interfaces';

export const similarMoviesParser = async (movies: {
  results: MoviesResponse[];
}): Promise<SimilarMovie[]> => {
  const { results } = movies;
  const { baseUrl, posterSize } = await imageConfig();

  const similarMovies = results.map((movie: MoviesResponse) => ({
    id: movie.id,
    title: movie.title,
    posterPath: `${baseUrl}${posterSize}${movie.poster_path}`,
  }));

  return similarMovies;
};
