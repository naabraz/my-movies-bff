import fetch from 'node-fetch';

import { PopularMovies } from './IPopularMovies';

export const getPopularMovies = async (): Promise<PopularMovies[]> => {
  const API_URL = process.env.API_URL
  const API_KEY = process.env.API_KEY

  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  const jsonResponse = await response.json();

  const popularMovies = jsonResponse.results.map((movie: any ) => ({
    id: movie.id,
    posterPath: movie.poster_path,
    title: movie.title,
    releaseDate: movie.release_date,
    overview: movie.overview
  }));

  return popularMovies;
};
