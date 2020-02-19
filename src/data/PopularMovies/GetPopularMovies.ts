import utils from '../utils';
import { PopularMovies } from './IPopularMovies';

export const handlePopularMovies = ({ results }: { results: any }): PopularMovies[] => {
  const popularMovies = results.map((movie: any) => ({
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
