import { InjectionToken } from '@angular/core';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromApproachSection from './approach-section.reducers';
import { storeFreeze } from 'ngrx-store-freeze';

export interface Goal {
  id: number;
  careGoalName: string;
}

export interface EndGoal {
  id: number;
  name: string;
  careGoals: Goal;
}

export interface PlanState {
  domain: any;
  details: {
    [id: string]: {
      [id: string]: EndGoal,
    }
  };
}

export function getReducers(): ActionReducerMap<PlanState> {
  return {
    domain: fromApproachSection.reducerDomain,
    details: fromApproachSection.reducerSubEntities
  };
}

export const getPlanState = createFeatureSelector<PlanState>('plan');
export const metaReducers = [storeFreeze];
export const reducerToken = new InjectionToken<ActionReducerMap<PlanState>>('PlanReducers');
export const reducerProvider = [{ provide: reducerToken, useFactory: getReducers }];
