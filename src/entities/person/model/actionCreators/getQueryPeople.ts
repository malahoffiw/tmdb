import { AppThunk } from 'app/store';
import { fetchQueryPeople } from '../../api';

export const getQueryPeople = (query: string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'GET_QUERY_PEOPLE' });

      const response = await fetchQueryPeople(query);
      const people = response.results.map((person: { id: number; name: string; profile_path: string }) => ({
        id: person.id,
        name: person.name,
        imagePath: person.profile_path,
      }));

      dispatch({ type: 'GET_QUERY_PEOPLE_SUCCESS', payload: people });
    } catch (error) {
      if (error instanceof Error) {
        console.warn(error.message);
        dispatch({ type: 'GET_QUERY_PEOPLE_ERROR', payload: error.message });
      } else {
        console.warn('Something went wrong at "GET_QUERY_PEOPLE" action');
        dispatch({ type: 'GET_QUERY_PEOPLE_ERROR', payload: 'Something went wrong at "GET_QUERY_PEOPLE" action' });
      }
    }
  };
};
