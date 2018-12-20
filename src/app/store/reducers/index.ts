import { ActionReducerMap, createFeatureSelector, createSelector, combineReducers } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as fromCurrentUser from './current-user.reducers';
import { storeFreeze } from 'ngrx-store-freeze';
export interface ApplicationState {
  currentUser: fromCurrentUser.CurrentUserState;
}

export const reducers = combineReducers({
  currentUser: fromCurrentUser.reducer,
});

export const getAppState = createFeatureSelector<ApplicationState>(
  'app'
);

export function getReducers() {
  return {
    app: reducers,
  };
}

export const metaReducers = environment.production ? [] : [storeFreeze];

export const reducerToken = new InjectionToken<ActionReducerMap<ApplicationState>>('Reducers');

export const reducerProvider = [
  { provide: reducerToken, useFactory: getReducers }
];
