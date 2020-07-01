import { request } from '_helpers';
import { MovieGenres } from '_interfaces';

export const movieGenres = async (movieId: number): Promise<MovieGenres> => {
  const movieDetails = await request(`movie/${movieId}`);

  const { genres } = movieDetails;

  return genres;
};
