import { Movie } from '@interfaces';
import { handleMovies } from '../helpers';
import { doRequest } from '../utils';

export const getMoviesByGenre = async (genreId: number): Promise<Movie[]> => {
  const url = `discover/movie?with_genres=${genreId}`;
  const moviesByGenre = await doRequest(url);

  return handleMovies(moviesByGenre);
};
