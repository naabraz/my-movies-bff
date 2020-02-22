import utils from '../utils';
import { MoviesResponse, PopularMovies } from './interfaces';

export const handlePopularMovies = (movies: { results: [] }): PopularMovies[] => {
  const { results } = movies;
  const popularMovies = results.map((movie: MoviesResponse) => ({
    id: movie.id,
    posterPath: movie.poster_path,
    title: movie.title,
    releaseDate: movie.release_date,
    overview: movie.overview,
  }));

  return popularMovies;
};

export const getPopularMovies = async (): Promise<PopularMovies[]> => {
  const endpoint = 'movie/popular';

  const popularMovies = await utils.doRequest(endpoint);

  return handlePopularMovies(popularMovies);
};
