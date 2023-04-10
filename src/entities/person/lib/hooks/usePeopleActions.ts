import { bindActionCreators } from 'redux';

import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch';
import * as PeopleActions from '../../model/actionCreators';

export const usePeopleActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(PeopleActions, dispatch);
};
