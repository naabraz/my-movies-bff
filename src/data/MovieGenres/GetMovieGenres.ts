import { RestClient } from 'helpers';
import { MovieGenres } from 'interfaces';

export const getMovieGenres = async (movieId: number): Promise<MovieGenres> => {
  const movieDetails = await RestClient(`movie/${movieId}`);

  const { genres } = movieDetails;

  return genres;
};
