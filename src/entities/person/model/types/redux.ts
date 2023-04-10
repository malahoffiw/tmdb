import { PersonShort } from './person';

export interface PeopleState {
  people: PersonShort[];
  isLoading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
}

export type PeopleAction =
  | GetPeopleAction
  | GetPeopleSuccessAction
  | GetPeopleErrorAction
  | GetPeopleTotalPagesAction
  | SetPeoplePageAction;

interface GetPeopleAction {
  type: 'GET_PEOPLE';
}
interface GetPeopleSuccessAction {
  type: 'GET_PEOPLE_SUCCESS';
  payload: PersonShort[];
}
interface GetPeopleErrorAction {
  type: 'GET_PEOPLE_ERROR';
  payload: string;
}
interface GetPeopleTotalPagesAction {
  type: 'GET_PEOPLE_TOTAL_PAGES';
  payload: number;
}
interface SetPeoplePageAction {
  type: 'SET_PEOPLE_PAGE';
  payload: number;
}
