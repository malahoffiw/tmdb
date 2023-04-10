import { fetchApi } from 'shared/api/setup';

const fetchPeople = async (page: number) => {
  const response = await fetchApi(`/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
  return response.json();
};

export { fetchPeople };
