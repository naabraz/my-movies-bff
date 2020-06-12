/* eslint-disable @typescript-eslint/camelcase */
import { doRequest } from '../../../utils';
import { ImagesConfig } from '../interfaces';

export const getImagesConfiguration = async (): Promise<ImagesConfig> => {
  const { images } = await doRequest('configuration');

  const { secure_base_url, poster_sizes, backdrop_sizes } = images;

  return {
    baseUrl: secure_base_url,
    posterSize: poster_sizes[2],
    backdropSize: backdrop_sizes[0],
  };
};
