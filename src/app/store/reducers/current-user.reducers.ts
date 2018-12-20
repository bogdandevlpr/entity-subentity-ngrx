import { User } from './../../models/user.model';
import * as fromCurrentUser from '../actions/current-user.actions';

export interface CurrentUserState {
  data: User;
  loading: boolean;
  loaded: boolean;
  error: any;
  sideEffect: boolean;
}

export const initialState: CurrentUserState = {
  data: null,
  loading: false,
  loaded: false,
  error: null,
  sideEffect: false
};

export function reducer(state = initialState, action: fromCurrentUser.CurrentUserAction): CurrentUserState {
  switch (action.type) {
    case fromCurrentUser.LOAD_CURRENT_USER:
      return {
        ...state,
        loading: true
      };
    case fromCurrentUser.LOAD_CURRENT_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          loaded: true,
          sideEffect: true,
          data: action.payload
        };
    case fromCurrentUser.LOAD_CURRENT_USER_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        sideEffect: false,
        error: action.payload
      };
    default: return state;
  }
}

export const getCurrentUser = (state: CurrentUserState) => state;
