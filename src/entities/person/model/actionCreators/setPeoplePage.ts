import { PeopleAction } from '../types/redux';

export const setPeoplePage = (page: number): PeopleAction => ({
  type: 'SET_PEOPLE_PAGE',
  payload: page,
});
