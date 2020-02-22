import fetch from 'node-fetch';

export const doRequest = async (endpoint: string): Promise<any> => {
  const API_URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;

  return (await fetch(`${API_URL}/${endpoint}?api_key=${API_KEY}`)).json();
};
