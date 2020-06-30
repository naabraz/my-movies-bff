import { request } from '~helpers';
import { MovieGenres } from '~interfaces';

export const movieGenres = async (movieId: number): Promise<MovieGenres> => {
  const movieDetails = await request(`movie/${movieId}`);

  const { genres } = movieDetails;

  return genres;
};
