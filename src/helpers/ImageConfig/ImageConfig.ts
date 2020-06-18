/* eslint-disable @typescript-eslint/camelcase */
import { RestClient } from '../../helpers';
import { ImagesConfig } from '../../interfaces';

export const ImageConfig = async (): Promise<ImagesConfig> => {
  const { images } = await RestClient('configuration');

  const { secure_base_url, poster_sizes, backdrop_sizes } = images;

  return {
    baseUrl: secure_base_url,
    posterSize: poster_sizes[2],
    backdropSize: backdrop_sizes[0],
  };
};
