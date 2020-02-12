import fetch from 'node-fetch';

import { PopularMovies } from './IPopularMovies';

const handlePopularMovies = ({ results }: { results: any }): PopularMovies[] => {
  const popularMovies = results.map((movie: any) => ({
    id: movie.id,
    posterPath: movie.posterPath,
    title: movie.title,
    releaseDate: movie.releaseDate,
    overview: movie.overview,
  }));

  return popularMovies;
}

export const getPopularMovies = async (): Promise<PopularMovies[]> => {
  const API_URL = process.env.API_URL
  const API_KEY = process.env.API_KEY

  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  const jsonResponse = await response.json();

  return handlePopularMovies(jsonResponse);
};
