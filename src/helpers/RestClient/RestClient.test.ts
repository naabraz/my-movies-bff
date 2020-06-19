import fetch from 'node-fetch';
import { restClient } from './restClient';

jest.mock('node-fetch', () =>
  jest.fn().mockResolvedValue({ json: () => jest.fn() }),
);

describe('Given Request module', () => {
  beforeEach(() => {
    process.env.API_KEY = 'API_KEY';
    process.env.API_URL = 'API_URL';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should have doRequest function', () => {
    expect(restClient).toEqual(expect.any(Function));
  });

  describe('Given doRequest function', () => {
    it('Should call fetch to request api', async () => {
      await restClient('test');
      expect(fetch).toHaveBeenCalledWith('API_URL/test?api_key=API_KEY');
    });
  });
});
