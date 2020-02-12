import { PopularMovies } from './IPopularMovies';
import { doRequest } from '../utils';

const handlePopularMovies = ({ results }: { results: any }): PopularMovies[] => {
  const popularMovies = results.map((movie: any) => ({
    id: movie.id,
    posterPath: movie.poster_path,
    title: movie.title,
    releaseDate: movie.release_date,
    overview: movie.overview,
  }));

  return popularMovies;
}

export const getPopularMovies = async (): Promise<PopularMovies[]> => {
  const endpoint = 'movie/popular';

  const popularMovies = await doRequest(endpoint);

  return handlePopularMovies(popularMovies);
};
