import { User } from './../../models/user.model';
import { Action } from '@ngrx/store';

// LOAD CURRENT USER
export const LOAD_CURRENT_USER = '[App] Load Current user';
export const LOAD_CURRENT_USER_FAIL = '[App] Load Current user Fail';
export const LOAD_CURRENT_USER_SUCCESS = '[App] Load Current user Success';

export class LoadCurrentUser implements Action {
  readonly type = LOAD_CURRENT_USER;
  constructor() { }
}

export class LoadCurrentUserSuccess implements Action {
  readonly type = LOAD_CURRENT_USER_SUCCESS;
  constructor(public payload: User) { }
}

export class LoadCurrentUserFail implements Action {
  readonly type = LOAD_CURRENT_USER_FAIL;
  constructor(public payload: any) { }
}

export type CurrentUserAction =
  | LoadCurrentUser
  | LoadCurrentUserFail
  | LoadCurrentUserSuccess;
