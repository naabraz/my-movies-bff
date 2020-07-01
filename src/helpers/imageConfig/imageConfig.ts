/* eslint-disable @typescript-eslint/camelcase */
import { request } from '_helpers';
import { ImagesConfig } from '_interfaces';

export const imageConfig = async (): Promise<ImagesConfig> => {
  const { images } = await request('configuration');

  const { secure_base_url, poster_sizes, backdrop_sizes } = images;

  return {
    baseUrl: secure_base_url,
    posterSize: poster_sizes[2],
    backdropSize: backdrop_sizes[0],
  };
};
