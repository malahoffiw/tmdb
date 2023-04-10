import { fetchApi } from 'shared/api/setup';

const fetchExactMovieCredits = async (movieId: number) => {
  const response = await fetchApi(`/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`);
  return response.json();
};

const fetchExactMovieSimilar = async (movieId: number) => {
  const response = await fetchApi(`/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}`);
  const data = await response.json();
  return data.results;
};

const fetchExactMovie = async (movieId: number) => {
  const response = await fetchApi(`/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`);

  const movie = await response.json();
  const credits = await fetchExactMovieCredits(movieId);
  const similar = await fetchExactMovieSimilar(movieId);

  return {
    ...movie,
    credits,
    similar,
  };
};

export { fetchExactMovie };
