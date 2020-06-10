import { doRequest } from '../utils';
import { MovieGenres } from './interfaces';

export const getMovieGenres = async (movieId: number): Promise<MovieGenres> => {
  const movieDetails = await doRequest(`movie/${movieId}`);

  const { genres } = movieDetails;

  return genres;
};
