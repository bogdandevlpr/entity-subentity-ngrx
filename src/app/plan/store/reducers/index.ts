import { InjectionToken } from '@angular/core';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromApproachSection from './approach-section.reducers';

export interface PlanState {
  domain: any;
  domain1: any;
  domain2: any;
  domain3: any;
}

// export function getReducers(): ActionReducerMap<PlanState> {
//   return {
//     domain: fromApproachSection.reducerDomain,
//     domain1: fromApproachSection.mainReducer('PLAN_CARE_END_GOAL', 'domain1'),
//     domain2: fromApproachSection.mainReducer('PLAN_CARE_END_GOAL', 'domain2'),
//     domain3: fromApproachSection.mainReducer('PLAN_CARE_END_GOAL', 'domain3')
//   };
// }

export const getPlanState = createFeatureSelector<PlanState>(
  'plan'
);

// export const reducerToken = new InjectionToken<ActionReducerMap<PlanState>>('PlanReducers');

// export const reducerProvider = [
//   { provide: reducerToken, useFactory: getReducers }
// ];
