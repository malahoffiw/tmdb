import { PeopleAction } from '../types';

export const setPeoplePage = (page: number): PeopleAction => ({
  type: 'SET_PEOPLE_PAGE',
  payload: page,
});
