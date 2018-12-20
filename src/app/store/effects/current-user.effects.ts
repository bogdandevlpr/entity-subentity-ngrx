import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, delay } from 'rxjs/operators';

import * as currentUserActions from '../actions/current-user.actions';

import { UserService } from '../../services/user.service';

@Injectable()
export class CurrentUserEffects {
  @Effect()
  loadCurrentUser$ = this.actions$.pipe(
    ofType(currentUserActions.LOAD_CURRENT_USER),
    map((action: currentUserActions.LoadCurrentUser) => { }),
    switchMap((payload) => {
      return this.userService.getCurrentUser()
        .pipe(
          delay(300),
          map(currentUser => new currentUserActions.LoadCurrentUserSuccess(currentUser)),
          catchError(error => of(new currentUserActions.LoadCurrentUserFail(error))),
        );
    })
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }
}
