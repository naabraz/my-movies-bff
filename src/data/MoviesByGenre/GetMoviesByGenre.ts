import { MoviesResponse } from '../PopularMovies/interfaces';
import { doRequest } from '../utils';

export const getMoviesByGenre = async (
  genreId: number,
): Promise<MoviesResponse> => {
  const moviesByGenre = doRequest(`with_genres=${genreId}`);

  return moviesByGenre;
};
