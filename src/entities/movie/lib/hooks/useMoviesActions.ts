import { bindActionCreators } from 'redux';

import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch';
import * as MoviesActions from '../../model/actionCreators';

export const useMoviesActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(MoviesActions, dispatch);
};
