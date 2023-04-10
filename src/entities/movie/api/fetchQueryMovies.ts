import { fetchApi } from 'shared/api';

const fetchQueryMovies = async (query: string) => {
  const response = await fetchApi(`/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
  return response.json();
};

export { fetchQueryMovies };
