import { PeopleAction, PeopleState } from './types';

const initialState: PeopleState = {
  people: [],
  queryPeople: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: 1,
};

export const peopleReducer = (state = initialState, action: PeopleAction): PeopleState => {
  switch (action.type) {
    case 'GET_PEOPLE':
      return { ...state, isLoading: true, error: null };
    case 'GET_PEOPLE_SUCCESS':
      return { ...state, isLoading: false, people: action.payload };
    case 'GET_PEOPLE_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'GET_PEOPLE_TOTAL_PAGES':
      return { ...state, totalPages: action.payload };
    case 'SET_PEOPLE_PAGE':
      return { ...state, page: action.payload };
    case 'GET_QUERY_PEOPLE':
      return { ...state, isLoading: true, error: null };
    case 'GET_QUERY_PEOPLE_SUCCESS':
      return { ...state, queryPeople: action.payload, isLoading: false };
    case 'GET_QUERY_PEOPLE_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
