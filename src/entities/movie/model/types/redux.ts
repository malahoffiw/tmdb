import { MovieShort } from './movie';

export interface MoviesState {
  movies: MovieShort[];
  queryMovies: MovieShort[];
  movieType: MovieType;
  isLoading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
}

export type MovieType = 'popular' | 'top_rated' | 'now_playing' | 'upcoming';

export type MoviesAction =
  | GetMoviesAction
  | GetMoviesSuccessAction
  | GetMoviesErrorAction
  | GetMoviesTotalPagesAction
  | SetMoviesPageAction
  | SetMovieTypeAction
  | ToggleMovieFavoriteAction
  | GetQueryMoviesAction
  | GetQueryMoviesSuccessAction
  | GetQueryMoviesErrorAction;

interface GetMoviesAction {
  type: 'GET_MOVIES';
}
interface GetMoviesSuccessAction {
  type: 'GET_MOVIES_SUCCESS';
  payload: MovieShort[];
}
interface GetMoviesErrorAction {
  type: 'GET_MOVIES_ERROR';
  payload: string;
}
interface GetMoviesTotalPagesAction {
  type: 'GET_MOVIES_TOTAL_PAGES';
  payload: number;
}
interface SetMoviesPageAction {
  type: 'SET_MOVIES_PAGE';
  payload: number;
}
interface SetMovieTypeAction {
  type: 'SET_MOVIE_TYPE';
  payload: MovieType;
}
interface ToggleMovieFavoriteAction {
  type: 'TOGGLE_MOVIE_FAVORITE';
  payload: number;
}
interface GetQueryMoviesAction {
  type: 'GET_QUERY_MOVIES';
}
interface GetQueryMoviesSuccessAction {
  type: 'GET_QUERY_MOVIES_SUCCESS';
  payload: MovieShort[];
}
interface GetQueryMoviesErrorAction {
  type: 'GET_QUERY_MOVIES_ERROR';
  payload: string;
}
