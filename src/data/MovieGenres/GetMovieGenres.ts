import { MovieGenres } from '@interfaces';
import { doRequest } from '../utils';

export const getMovieGenres = async (movieId: number): Promise<MovieGenres> => {
  const movieDetails = await doRequest(`movie/${movieId}`);

  const { genres } = movieDetails;

  return genres;
};
