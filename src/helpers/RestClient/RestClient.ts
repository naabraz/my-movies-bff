import fetch from 'node-fetch';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RestClient = async (endpoint: string): Promise<any> => {
  const { API_URL, API_KEY } = process.env;

  return (await fetch(`${API_URL}/${endpoint}?api_key=${API_KEY}`)).json();
};
