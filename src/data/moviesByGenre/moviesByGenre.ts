import { moviesParser, request } from '_helpers';
import { Movie } from '_interfaces';

export const moviesByGenre = async (genreId: number): Promise<Movie[]> => {
  const url = 'discover/movie';
  const params = `&with_genres=${genreId}`;
  const movies = await request(url, params);

  return moviesParser(movies);
};
