import { MoviesParser, RestClient } from '~helpers';
import { Movie } from '~interfaces';

export const getMoviesByGenre = async (genreId: number): Promise<Movie[]> => {
  const url = `discover/movie?with_genres=${genreId}`;
  const moviesByGenre = await RestClient(url);

  return MoviesParser(moviesByGenre);
};
