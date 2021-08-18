import { request } from '~helpers';
import { Genre } from '~interfaces';

export const genreList = async (): Promise<Genre[]> => {
  const { genres } = await request('genre/movie/list');

  return genres;
};
