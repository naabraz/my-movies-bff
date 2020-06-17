/* eslint-disable @typescript-eslint/camelcase */
import { RestClient } from 'helpers';
import { ImageConfig } from './ImageConfig';

jest.mock('helpers', () => ({
  doApiRequest: jest.fn().mockResolvedValue({
    images: {
      secure_base_url: 'baseUrl',
      poster_sizes: ['3', '2', '1'],
      backdrop_sizes: ['3', '2', '1'],
    },
  }),
}));

describe('Given GetImageConfig module', () => {
  it('Should have getImagesConfiguration function', () => {
    expect(ImageConfig).toEqual(expect.any(Function));
  });

  describe('Given getImagesConfiguration function', () => {
    it('Should call doRequest to get image configuration', async () => {
      await ImageConfig();
      expect(RestClient).toHaveBeenCalledWith('configuration');
    });
  });
});
