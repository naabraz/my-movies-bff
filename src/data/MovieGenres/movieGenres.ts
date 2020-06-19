import { restClient } from '~helpers';
import { MovieGenres } from '~interfaces';

export const movieGenres = async (movieId: number): Promise<MovieGenres> => {
  const movieDetails = await restClient(`movie/${movieId}`);

  const { genres } = movieDetails;

  return genres;
};
