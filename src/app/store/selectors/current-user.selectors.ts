import { createSelector } from '@ngrx/store';
import * as fromCurrentUserReducers from '../reducers/current-user.reducers';
import * as fromFeature from '../reducers';

export const getCurrentUserState = createSelector(
  fromFeature.getAppState,
  (state: fromFeature.ApplicationState) => state ? state.currentUser : null
);

export const getCurrentUser = createSelector(
  getCurrentUserState,
  fromCurrentUserReducers.getCurrentUser
);
