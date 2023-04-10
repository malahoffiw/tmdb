import { fetchApi } from 'shared/api';

const fetchExactPersonCredits = async (personId: number) => {
  const response = await fetchApi(`/3/person/${personId}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}`);
  return response.json();
};

const fetchExactPerson = async (personId: number) => {
  const response = await fetchApi(`/3/person/${personId}?api_key=${process.env.REACT_APP_API_KEY}`);
  const person = await response.json();

  const credits = await fetchExactPersonCredits(personId);

  return {
    ...person,
    credits,
  };
};

export { fetchExactPerson };
