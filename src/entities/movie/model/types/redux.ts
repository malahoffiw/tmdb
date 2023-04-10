import { MovieShort } from './movie';

export interface MoviesState {
  movies: MovieShort[];
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
  | SetMovieTypeAction;

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
