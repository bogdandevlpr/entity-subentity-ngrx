import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, mergeMap, delay } from 'rxjs/operators';

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
        .getPlanCareEndGoal(payload.id)
        .pipe(
          delay(500),
          map(planCareEndGoal => new approachSectionActions.LoadPlanCareEndGoalSuccess(
            {
              id: payload.id,
              planCareEndGoal: planCareEndGoal
            }
          )),
          catchError(error => of(new approachSectionActions.LoadPlanCareEndGoalFail(error))),
        );
    })
  );


  @Effect()
  createPlanCareEndGoal$ = this.actions$.pipe(
    ofType(approachSectionActions.CREATE_PLAN_CARE_END_GOAL),
    map((action: approachSectionActions.CreatePlanCareEndGoal) => action.payload),
    mergeMap((payload) => {
      return this.approachSectionServiceApi
        .createPlanCareEndGoal(payload.id, payload.body)
        .pipe(
          delay(500),
          map(planCareEndGoal => new approachSectionActions.CreatePlanCareEndGoalSuccess(
            {
              id: payload.id, planCareEndGoal: planCareEndGoal
            }
          )),
          catchError(error => of(new approachSectionActions.CreatePlanCareEndGoalFail(error))),
        );
    })
  );


  @Effect()
  updatePlanCareEndGoal$ = this.actions$.pipe(
    ofType(approachSectionActions.UPDATE_PLAN_CARE_END_GOAL),
    map((action: approachSectionActions.UpdatePlanCareEndGoal) => action.payload),
    mergeMap((payload) => {
      return this.approachSectionServiceApi
        .updatePlanCareEndGoal(payload.id, payload.endGoalID, payload.body)
        .pipe(
          delay(500),
          map(planCareEndGoal => {
            return new approachSectionActions.UpdatePlanCareEndGoalSuccess(
            {
              id: payload.id, endGoalID: payload.endGoalID, planCareEndGoal: planCareEndGoal
            });
          }),
          catchError(error => of(new approachSectionActions.UpdatePlanCareEndGoalFail(error))),
        );
    })
  );

  @Effect()
  deletePlanCareEndGoal$ = this.actions$.pipe(
    ofType(approachSectionActions.DELETE_PLAN_CARE_END_GOAL),
    map((action: approachSectionActions.DeletePlanCareEndGoal) => action.payload),
    mergeMap((payload) => {
      return this.approachSectionServiceApi
        .deletePlanCareEndGoal(payload.id, payload.endGoalID)
        .pipe(
          delay(500),
          map(planCareEndGoal => {
            return new approachSectionActions.DeletePlanCareEndGoalSuccess(
            {
              id: payload.id, endGoalID: payload.endGoalID, planCareEndGoal: planCareEndGoal
            });
          }),
          catchError(error => of(new approachSectionActions.DeletePlanCareEndGoalFail(error))),
        );
    })
  );

  @Effect()
  createPlanCareGoal$ = this.actions$.pipe(
    ofType(approachSectionActions.CREATE_PLAN_CARE_GOAL),
    map((action: approachSectionActions.CreatePlanCareGoal) => action.payload),
    mergeMap((payload) => {
      return this.approachSectionServiceApi
        .createPlanCareGoal(payload.id, payload.body)
        .pipe(
          delay(500),
          map(planCareGoal => new approachSectionActions.CreatePlanCareGoalSuccess(
            {
              id: payload.id,
              endGoalID: payload.endGoalID,
              planCareGoal: planCareGoal
            }
          )),
          catchError(error => of(new approachSectionActions.CreatePlanCareGoalFail(error))),
        );
    })
  );

  @Effect()
  updatePlanCareGoal$ = this.actions$.pipe(
    ofType(approachSectionActions.UPDATE_PLAN_CARE_GOAL),
    map((action: approachSectionActions.UpdatePlanCareGoal) => action.payload),
    mergeMap((payload) => {
      return this.approachSectionServiceApi
        .updatePlanCareGoal(payload.id, payload.careGoalID, payload.body)
        .pipe(
          delay(500),
          map(planCareGoal => {
            return new approachSectionActions.UpdatePlanCareGoalSuccess(
            {
              id: payload.id, endGoalID: payload.endGoalID, careGoalID: payload.careGoalID, planCareGoal: planCareGoal
            });
          }),
          catchError(error => of(new approachSectionActions.UpdatePlanCareGoalFail(error))),
        );
    })
  );

  @Effect()
  deletePlanCareGoal$ = this.actions$.pipe(
    ofType(approachSectionActions.DELETE_PLAN_CARE_GOAL),
    map((action: approachSectionActions.DeletePlanCareGoal) => action.payload),
    mergeMap((payload) => {
      return this.approachSectionServiceApi
        .deletePlanCareGoal(payload.id, payload.careGoalID)
        .pipe(
          delay(500),
          map(planCareGoal => {
            return new approachSectionActions.DeletePlanCareGoalSuccess(
            {
              id: payload.id, endGoalID: payload.endGoalID, careGoalID: payload.careGoalID, planCareGoal: planCareGoal
            });
          }),
          catchError(error => of(new approachSectionActions.DeletePlanCareGoalFail(error))),
        );
    })
  );

  constructor(
    private actions$: Actions,
    private approachSectionServiceApi: fromServices.ApproachSectionServiceApi
  ) { }
}
