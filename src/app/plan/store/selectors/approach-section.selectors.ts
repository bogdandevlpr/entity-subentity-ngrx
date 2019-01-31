import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromApproachSection from '../reducers/approach-section.reducers';

export const getDomainState = createSelector(
  fromFeature.getPlanState,
  (state: fromFeature.PlanState) => state.domain
);
export const getDomainLoading = createSelector(
  getDomainState,
  fromApproachSection.getDomainLoading
);

export const getPlanCareEndGoalState = createSelector(
  fromFeature.getPlanState,
  (state: fromFeature.PlanState) => state.details
);

export const getDomain = createSelector(
  getDomainState,
  (state) => {
    if (state && state.data) {
      return Object.keys(state.data).map(s => state.data[s]);
    }
  }
);

export const getSelectedEndGoal = createSelector(
  getPlanCareEndGoalState,
  (state) => state.selectedEndGoal
);

export const getAllIds = createSelector(
  getPlanCareEndGoalState,
  (state) => Object.keys(state.allIds).map(id => +id)
);

export const getPlanCareEndGoalById = () => {
  return createSelector(
    getPlanCareEndGoalState,
    (entities, props: {id}) => {
      return entities[props.id];
    }
  );
};

export const getPlanCareEndGoalsLoading = () => {
  return createSelector(
    getPlanCareEndGoalState,
    (entities, props: {id}) => entities[props.id] ? entities[props.id].loading : undefined
  );
};


