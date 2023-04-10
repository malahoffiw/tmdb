import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { moviesReducer, MoviesAction, MoviesState } from 'entities/movie';
import { peopleReducer, PeopleAction, PeopleState } from 'entities/person';

const rootReducer = combineReducers<AppState>({
  movies: moviesReducer,
  people: peopleReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppState = {
  movies: MoviesState;
  people: PeopleState;
};
export type AppThunkDispatch = ThunkDispatch<AppState, unknown, MoviesAction | PeopleAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, MoviesAction | PeopleAction>;
