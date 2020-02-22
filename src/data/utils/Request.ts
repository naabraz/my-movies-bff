import fetch from 'node-fetch';

export const doRequest = async (endpoint: string): Promise<{ results: [] }> => {
  const { API_URL, API_KEY } = process.env;

  return (await fetch(`${API_URL}/${endpoint}?api_key=${API_KEY}`)).json();
};
