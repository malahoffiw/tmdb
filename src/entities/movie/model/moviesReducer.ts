import { MoviesAction, MoviesState } from './types';

const initialState: MoviesState = {
  movies: [],
  movieType: 'top_rated',
  page: 1,
  totalPages: 1,
  isLoading: false,
  error: null,
};

export const moviesReducer = (state = initialState, action: MoviesAction): MoviesState => {
  switch (action.type) {
    case 'GET_MOVIES':
      return { ...state, isLoading: true, error: null };
    case 'GET_MOVIES_SUCCESS':
      return { ...state, isLoading: false, movies: action.payload };
    case 'GET_MOVIES_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'GET_MOVIES_TOTAL_PAGES':
      return { ...state, totalPages: action.payload };
    case 'SET_MOVIES_PAGE':
      return { ...state, page: action.payload };
    case 'SET_MOVIE_TYPE':
      return { ...state, movieType: action.payload, page: 1, isLoading: true };
    case 'TOGGLE_MOVIE_FAVORITE':
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.payload) {
            return { ...movie, favorite: !movie.favorite };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};
