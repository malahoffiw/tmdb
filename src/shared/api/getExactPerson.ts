const getExactPersonCredits = async (personId: number) => {
  const response = await fetch(`/3/person/${personId}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}`);
  return response.json();
};

const getExactPersonImages = async (personId: number) => {
  const response = await fetch(`/3/person/${personId}/images?api_key=${process.env.REACT_APP_API_KEY}`);
  return response.json();
};

const getExactPerson = async (personId: number) => {
  const response = await fetch(`/3/person/${personId}?api_key=${process.env.REACT_APP_API_KEY}`);
  const person = await response.json();

  const credits = await getExactPersonCredits(personId);
  const images = await getExactPersonImages(personId);

  return {
    ...person,
    credits,
    images,
  };
};

export { getExactPerson };
