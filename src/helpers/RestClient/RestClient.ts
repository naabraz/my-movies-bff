import fetch from 'node-fetch';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const request = async (endpoint: string, params = ''): Promise<any> => {
  const { API_URL, API_KEY } = process.env;
  const url = `${API_URL}/${endpoint}?api_key=${API_KEY}${params}`;

  return (await fetch(url)).json();
};
