/* eslint-disable @typescript-eslint/camelcase */
import { doRequest } from '../../../utils';
import { getImagesConfiguration } from './GetImageConfig';

jest.mock('../../../utils', () => ({
  doRequest: jest.fn().mockResolvedValue({
    images: {
      secure_base_url: 'baseUrl',
      poster_sizes: ['3', '2', '1'],
      backdrop_sizes: ['3', '2', '1'],
    },
  }),
}));

describe('Given GetImageConfig module', () => {
  it('Should have getImagesConfiguration function', () => {
    expect(getImagesConfiguration).toEqual(expect.any(Function));
  });

  describe('Given getImagesConfiguration function', () => {
    it('Should call doRequest to get image configuration', async () => {
      await getImagesConfiguration();
      expect(doRequest).toHaveBeenCalledWith('configuration');
    });
  });
});
