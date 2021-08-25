import { genreList } from '~data';
import { Genre } from '~interfaces';

export const genreListResolver = {
  Query: {
    async genreList(): Promise<Genre[]> {
      return genreList();
    },
  },
};
