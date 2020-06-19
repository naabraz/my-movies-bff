import fetch from 'node-fetch';
import { request } from './';

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

  it('Should have request function', () => {
    expect(request).toEqual(expect.any(Function));
  });

  describe('Given request function', () => {
    it('Should call fetch to request api', async () => {
      await request('test');
      expect(fetch).toHaveBeenCalledWith('API_URL/test?api_key=API_KEY');
    });
  });
});
