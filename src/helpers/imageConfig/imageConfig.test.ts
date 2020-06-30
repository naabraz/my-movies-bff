/* eslint-disable @typescript-eslint/camelcase */
import { request } from '~helpers';
import { imageConfig } from './';

jest.mock('~helpers', () => ({
  request: jest.fn().mockResolvedValue({
    images: {
      secure_base_url: 'baseUrl',
      poster_sizes: ['3', '2', '1'],
      backdrop_sizes: ['3', '2', '1'],
    },
  }),
}));

describe('Given imageConfig module', () => {
  it('Should have imageConfig function', () => {
    expect(imageConfig).toEqual(expect.any(Function));
  });

  describe('Given imageConfig function', () => {
    it('Should call request to get image configuration', async () => {
      await imageConfig();
      expect(request).toHaveBeenCalledWith('configuration');
    });
  });
});
