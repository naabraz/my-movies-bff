import { moviesParser, restClient } from '~helpers';
import { Movie } from '~interfaces';

export const moviesByGenre = async (genreId: number): Promise<Movie[]> => {
  const url = `discover/movie?with_genres=${genreId}`;
  const moviesByGenre = await restClient(url);

  return moviesParser(moviesByGenre);
};
