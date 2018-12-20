import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import * as approachSectionActions from '../actions/approach-section.actions';
import * as fromServices from '../../services';

@Injectable()
export class ApproachSectionEffects {

  @Effect()
  loadDomain$ = this.actions$.pipe(
    ofType(approachSectionActions.LOAD_DOMAIN),
    map((action: approachSectionActions.LoadDomain) => { }),
    switchMap((payload) => {
      return this.approachSectionServiceApi
        .getDomain()
        .pipe(
          map(domain => new approachSectionActions.LoadDomainSuccess(domain)),
          catchError(error => of(new approachSectionActions.LoadDomainFail(error))),
        );
    })
  );

  @Effect()
  loadPlanCareEndGoal$ = this.actions$.pipe(
    ofType(approachSectionActions.LOAD_PLAN_CARE_END_GOAL),
    map((action: approachSectionActions.LoadPlanCareEndGoal) => action.payload),
    mergeMap((payload) => {
      return this.approachSectionServiceApi
        .getPlanCareEndGoal(payload.domainID)
        .pipe(
          map(planCareEndGoal => new approachSectionActions.LoadPlanCareEndGoalSuccess(planCareEndGoal)),
          catchError(error => of(new approachSectionActions.LoadPlanCareEndGoalFail(error))),
        );
    })
  );

  constructor(
    private actions$: Actions,
    private approachSectionServiceApi: fromServices.ApproachSectionServiceApi
  ) { }
}
