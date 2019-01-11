import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromApproachSection from '../reducers/approach-section.reducers';

export const getDomainState = createSelector(
  fromFeature.getPlanState,
  (state: fromFeature.PlanState) => state.domain
);
export const getDomain = createSelector(
  getDomainState,
  fromApproachSection.getDomain
);
export const getDomainLoading = createSelector(
  getDomainState,
  fromApproachSection.getDomainLoading
);

export const getPlanCareEndGoalState = createSelector(
  fromFeature.getPlanState,
  (state: fromFeature.PlanState) => state.details
);

export const getSelectedEndGoal = createSelector(
  getPlanCareEndGoalState,
  (state) => state.selectedEndGoal
);

export const getAllIds = createSelector(
  getPlanCareEndGoalState,
  (state) => state.allIds
);

export const getPlanCareEndGoalById = () => {
  return createSelector(
    getPlanCareEndGoalState,
    (entities, props: {id}) => {
      return entities[props.id];
    }
  );
};


