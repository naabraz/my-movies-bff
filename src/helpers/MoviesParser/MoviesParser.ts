import { ImageConfig } from '../../helpers';
import { Movie, MoviesResponse } from '../../interfaces';

export const MoviesParser = async (movies: {
  results: MoviesResponse[];
}): Promise<Movie[]> => {
  const { results } = movies;
  const { baseUrl, posterSize, backdropSize } = await ImageConfig();

  const popularMovies = results.map((movie: MoviesResponse) => ({
    id: movie.id,
    posterPath: `${baseUrl}${posterSize}${movie.poster_path}`,
    title: movie.title,
    releaseDate: movie.release_date,
    overview: movie.overview,
    backdropPath: `${baseUrl}${backdropSize}${movie.backdrop_path}`,
    voteAverage: movie.vote_average,
  }));

  return popularMovies;
};
