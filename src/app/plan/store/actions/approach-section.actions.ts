import { Action } from '@ngrx/store';

export const LOAD_DOMAIN = 'LOAD_DOMAIN';
export const LOAD_DOMAIN_FAIL = 'LOAD_DOMAIN_FAIL';
export const LOAD_DOMAIN_SUCCESS = 'LOAD_DOMAIN_SUCCESS';
export const RESET_DOMAIN = 'RESET_DOMAIN';


export class LoadDomain implements Action {
  readonly type = LOAD_DOMAIN;
  constructor() { }
}

export class LoadDomainFail implements Action {
  readonly type = LOAD_DOMAIN_FAIL;
  constructor(public payload: any) { }
}

export class LoadDomainSuccess implements Action {
  readonly type = LOAD_DOMAIN_SUCCESS;
  constructor(public payload: any) {
  }
}

export class ResetDomain implements Action {
  readonly type = RESET_DOMAIN;
}

export const LOAD_PLAN_CARE_END_GOAL = 'LOAD_PLAN_CARE_END_GOAL';
export const LOAD_PLAN_CARE_END_GOAL_FAIL = 'LOAD_PLAN_CARE_END_GOAL_FAIL';
export const LOAD_PLAN_CARE_END_GOAL_SUCCESS = 'LOAD_PLAN_CARE_END_GOAL_SUCCESS';
export const RESET_PLAN_CARE_END_GOAL = 'RESET_PLAN_CARE_END_GOAL';


export class LoadPlanCareEndGoal implements Action {
  readonly type = LOAD_PLAN_CARE_END_GOAL;
  constructor(public payload: any) { }
}

export class LoadPlanCareEndGoalFail implements Action {
  readonly type = LOAD_PLAN_CARE_END_GOAL_FAIL;
  constructor(public payload: any) { }
}

export class LoadPlanCareEndGoalSuccess implements Action {
  readonly type = LOAD_PLAN_CARE_END_GOAL_SUCCESS;
  constructor(public payload: any) {
  }
}

export class ResetPlanCareEndGoal implements Action {
  readonly type = RESET_PLAN_CARE_END_GOAL;
}

export type ApproachSectionActions =
  | LoadDomain
  | LoadDomainFail
  | LoadDomainSuccess
  | ResetDomain

  | LoadPlanCareEndGoal
  | LoadPlanCareEndGoalFail
  | LoadPlanCareEndGoalSuccess
  | ResetPlanCareEndGoal;
