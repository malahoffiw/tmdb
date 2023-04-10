import { fetchApi } from 'shared/api';

const fetchExactMovieCredits = async (movieId: number) => {
  const response = await fetchApi(`/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`);
  return response.json();
};

const fetchExactMovieRecommended = async (movieId: number) => {
  const response = await fetchApi(`/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`);
  const data = await response.json();
  return data.results;
};

const fetchExactMovieReviews = async (movieId: number) => {
  const response = await fetchApi(`/3/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}`);
  const data = await response.json();
  return data.results;
};

const fetchExactMovie = async (movieId: number) => {
  const response = await fetchApi(`/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`);

  const movie = await response.json();
  const credits = await fetchExactMovieCredits(movieId);
  const recommended = await fetchExactMovieRecommended(movieId);
  const reviews = await fetchExactMovieReviews(movieId);

  return {
    ...movie,
    credits,
    recommended,
    reviews,
  };
};

export { fetchExactMovie };
