import { bindActionCreators } from 'redux';

import * as PeopleActions from '../../model';
import { useAppDispatch } from 'shared/lib';

export const usePeopleActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(PeopleActions, dispatch);
};
