import { bindActionCreators } from 'redux';

import * as MoviesActions from '../../model';
import { useAppDispatch } from 'shared/lib';

export const useMoviesActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(MoviesActions, dispatch);
};
