import { fetchApi } from 'shared/api';

const fetchQueryPeople = async (query: string) => {
  const response = await fetchApi(`/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
  return response.json();
};

export { fetchQueryPeople };
