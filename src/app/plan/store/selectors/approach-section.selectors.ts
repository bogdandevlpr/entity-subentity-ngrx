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

// export const getPlanCareEndGoalState = createSelector(
//   fromFeature.getPlanState,
//   (state: fromFeature.PlanState) => state.domain1
// );
// export const getPlanCareEndGoal = createSelector(
//   getPlanCareEndGoalState,
//   fromApproachSection.getPlanCareEndGoal
// );
// export const getPlanCareEndGoalLoading = createSelector(
//   getPlanCareEndGoalState,
//   fromApproachSection.getPlanCareEndGoalLoading
// );
