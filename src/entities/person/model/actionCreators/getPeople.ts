import { AppThunk } from 'app/store';
import { fetchPeople } from '../../api';

export const getPeople = (page: number): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'GET_PEOPLE' });

      const response = await fetchPeople(page);
      const people = response.results.map((person: { id: number; name: string; profile_path: string }) => ({
        id: person.id,
        name: person.name,
        imagePath: person.profile_path,
      }));

      dispatch({ type: 'GET_PEOPLE_TOTAL_PAGES', payload: response.total_pages > 500 ? 500 : response.total_pages });
      dispatch({ type: 'GET_PEOPLE_SUCCESS', payload: people });
    } catch (error) {
      if (error instanceof Error) {
        console.warn(error.message);
        dispatch({ type: 'GET_PEOPLE_ERROR', payload: error.message });
      } else {
        console.warn('Something went wrong at "GET_PEOPLE" action');
        dispatch({ type: 'GET_PEOPLE_ERROR', payload: 'Something went wrong at "GET_PEOPLE" action' });
      }
    }
  };
};
