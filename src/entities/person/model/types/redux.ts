import { PersonShort } from './person';

export interface PeopleState {
  people: PersonShort[];
  queryPeople: PersonShort[];
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
  | SetPeoplePageAction
  | GetQueryPeopleAction
  | GetQueryPeopleSuccessAction
  | GetQueryPeopleErrorAction;

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
interface GetQueryPeopleAction {
  type: 'GET_QUERY_PEOPLE';
}
interface GetQueryPeopleSuccessAction {
  type: 'GET_QUERY_PEOPLE_SUCCESS';
  payload: PersonShort[];
}
interface GetQueryPeopleErrorAction {
  type: 'GET_QUERY_PEOPLE_ERROR';
  payload: string;
}
