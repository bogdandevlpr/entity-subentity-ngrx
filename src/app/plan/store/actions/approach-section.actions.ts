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

export const CREATE_PLAN_CARE_END_GOAL = 'CREATE_PLAN_CARE_END_GOAL';
export const CREATE_PLAN_CARE_END_GOAL_FAIL = 'CREATE_PLAN_CARE_END_GOAL_FAIL';
export const CREATE_PLAN_CARE_END_GOAL_SUCCESS = 'CREATE_PLAN_CARE_END_GOAL_SUCCESS';


export class CreatePlanCareEndGoal implements Action {
  readonly type = CREATE_PLAN_CARE_END_GOAL;
  constructor(public payload: any) { }
}

export class CreatePlanCareEndGoalFail implements Action {
  readonly type = CREATE_PLAN_CARE_END_GOAL_FAIL;
  constructor(public payload: any) { }
}

export class CreatePlanCareEndGoalSuccess implements Action {
  readonly type = CREATE_PLAN_CARE_END_GOAL_SUCCESS;
  constructor(public payload: any) {
  }
}

export const UPDATE_PLAN_CARE_END_GOAL = 'UPDATE_PLAN_CARE_END_GOAL';
export const UPDATE_PLAN_CARE_END_GOAL_FAIL = 'UPDATE_PLAN_CARE_END_GOAL_FAIL';
export const UPDATE_PLAN_CARE_END_GOAL_SUCCESS = 'UPDATE_PLAN_CARE_END_GOAL_SUCCESS';

export class UpdatePlanCareEndGoal implements Action {
  readonly type = UPDATE_PLAN_CARE_END_GOAL;
  constructor(public payload: any) { }
}

export class UpdatePlanCareEndGoalFail implements Action {
  readonly type = UPDATE_PLAN_CARE_END_GOAL_FAIL;
  constructor(public payload: any) { }
}

export class UpdatePlanCareEndGoalSuccess implements Action {
  readonly type = UPDATE_PLAN_CARE_END_GOAL_SUCCESS;
  constructor(public payload: any) {
  }
}

export const DELETE_PLAN_CARE_END_GOAL = 'DELETE_PLAN_CARE_END_GOAL';
export const DELETE_PLAN_CARE_END_GOAL_FAIL = 'DELETE_PLAN_CARE_END_GOAL_FAIL';
export const DELETE_PLAN_CARE_END_GOAL_SUCCESS = 'DELETE_PLAN_CARE_END_GOAL_SUCCESS';

export class DeletePlanCareEndGoal implements Action {
  readonly type = DELETE_PLAN_CARE_END_GOAL;
  constructor(public payload: any) { }
}

export class DeletePlanCareEndGoalFail implements Action {
  readonly type = DELETE_PLAN_CARE_END_GOAL_FAIL;
  constructor(public payload: any) { }
}

export class DeletePlanCareEndGoalSuccess implements Action {
  readonly type = DELETE_PLAN_CARE_END_GOAL_SUCCESS;
  constructor(public payload: any) {
  }
}


export const LOAD_PLAN_CARE_GOAL = 'LOAD_PLAN_CARE_GOAL';
export const LOAD_PLAN_CARE_GOAL_FAIL = 'LOAD_PLAN_CARE_GOAL_FAIL';
export const LOAD_PLAN_CARE_GOAL_SUCCESS = 'LOAD_PLAN_CARE_GOAL_SUCCESS';
export const RESET_PLAN_CARE_GOAL = 'RESET_PLAN_CARE_GOAL';


export class LoadPlanCareGoal implements Action {
  readonly type = LOAD_PLAN_CARE_GOAL;
  constructor(public payload: any) { }
}

export class LoadPlanCareGoalFail implements Action {
  readonly type = LOAD_PLAN_CARE_GOAL_FAIL;
  constructor(public payload: any) { }
}

export class LoadPlanCareGoalSuccess implements Action {
  readonly type = LOAD_PLAN_CARE_GOAL_SUCCESS;
  constructor(public payload: any) {
  }
}

export class ResetPlanCareGoal implements Action {
  readonly type = RESET_PLAN_CARE_GOAL;
}

export const CREATE_PLAN_CARE_GOAL = 'CREATE_PLAN_CARE_GOAL';
export const CREATE_PLAN_CARE_GOAL_FAIL = 'CREATE_PLAN_CARE_GOAL_FAIL';
export const CREATE_PLAN_CARE_GOAL_SUCCESS = 'CREATE_PLAN_CARE_GOAL_SUCCESS';


export class CreatePlanCareGoal implements Action {
  readonly type = CREATE_PLAN_CARE_GOAL;
  constructor(public payload: any) { }
}

export class CreatePlanCareGoalFail implements Action {
  readonly type = CREATE_PLAN_CARE_GOAL_FAIL;
  constructor(public payload: any) { }
}

export class CreatePlanCareGoalSuccess implements Action {
  readonly type = CREATE_PLAN_CARE_GOAL_SUCCESS;
  constructor(public payload: any) {
  }
}

export const UPDATE_PLAN_CARE_GOAL = 'UPDATE_PLAN_CARE_GOAL';
export const UPDATE_PLAN_CARE_GOAL_FAIL = 'UPDATE_PLAN_CARE_GOAL_FAIL';
export const UPDATE_PLAN_CARE_GOAL_SUCCESS = 'UPDATE_PLAN_CARE_GOAL_SUCCESS';

export class UpdatePlanCareGoal implements Action {
  readonly type = UPDATE_PLAN_CARE_GOAL;
  constructor(public payload: any) { }
}

export class UpdatePlanCareGoalFail implements Action {
  readonly type = UPDATE_PLAN_CARE_GOAL_FAIL;
  constructor(public payload: any) { }
}

export class UpdatePlanCareGoalSuccess implements Action {
  readonly type = UPDATE_PLAN_CARE_GOAL_SUCCESS;
  constructor(public payload: any) {
  }
}

export const DELETE_PLAN_CARE_GOAL = 'DELETE_PLAN_CARE_GOAL';
export const DELETE_PLAN_CARE_GOAL_FAIL = 'DELETE_PLAN_CARE_GOAL_FAIL';
export const DELETE_PLAN_CARE_GOAL_SUCCESS = 'DELETE_PLAN_CARE_GOAL_SUCCESS';

export class DeletePlanCareGoal implements Action {
  readonly type = DELETE_PLAN_CARE_GOAL;
  constructor(public payload: any) { }
}

export class DeletePlanCareGoalFail implements Action {
  readonly type = DELETE_PLAN_CARE_GOAL_FAIL;
  constructor(public payload: any) { }
}

export class DeletePlanCareGoalSuccess implements Action {
  readonly type = DELETE_PLAN_CARE_GOAL_SUCCESS;
  constructor(public payload: any) {
  }
}

export type ApproachSectionActions =
  | LoadDomain
  | LoadDomainFail
  | LoadDomainSuccess
  | ResetDomain

  | LoadPlanCareEndGoal
  | LoadPlanCareEndGoalFail
  | LoadPlanCareEndGoalSuccess
  | ResetPlanCareEndGoal

  | CreatePlanCareEndGoal
  | CreatePlanCareEndGoalFail
  | CreatePlanCareEndGoalSuccess

  | UpdatePlanCareEndGoal
  | UpdatePlanCareEndGoalFail
  | UpdatePlanCareEndGoalSuccess

  | DeletePlanCareEndGoal
  | DeletePlanCareEndGoalFail
  | DeletePlanCareEndGoalSuccess

  | LoadPlanCareGoal
  | LoadPlanCareGoalFail
  | LoadPlanCareGoalSuccess
  | ResetPlanCareGoal

  | CreatePlanCareGoal
  | CreatePlanCareGoalFail
  | CreatePlanCareGoalSuccess

  | UpdatePlanCareGoal
  | UpdatePlanCareGoalFail
  | UpdatePlanCareGoalSuccess

  | DeletePlanCareGoal
  | DeletePlanCareGoalFail
  | DeletePlanCareGoalSuccess;
