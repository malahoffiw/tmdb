import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { moviesReducer } from 'entities/movie/model/moviesReducer';
import { peopleReducer } from 'entities/person/model/peopleReducer';
import { MoviesAction, MoviesState } from '../entities/movie/model/types';
import { PeopleAction, PeopleState } from '../entities/person/model/types/redux';

const rootReducer = combineReducers<AppState>({
  movies: moviesReducer,
  people: peopleReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppState = {
  movies: MoviesState;
  people: PeopleState;
};
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<AppState, any, MoviesAction | PeopleAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, MoviesAction | PeopleAction>;
