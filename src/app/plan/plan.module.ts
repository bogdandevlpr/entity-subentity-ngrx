import { ApproachSectionServiceApi } from './services/approach-section.service';
import { PlanRoutingModule } from './plan.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan/plan.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects
} from './store';
import { DetailComponent } from './detail/detail.component';

import * as fromApproachSection from './store/reducers/approach-section.reducers';

@NgModule({
  imports: [
    CommonModule,
    PlanRoutingModule,
    StoreModule.forFeature('plan', {
      domain: fromApproachSection.reducerDomain,
      domain1: fromApproachSection.mainReducer('PLAN_CARE_END_GOAL', 'domain1'),
      domain2: fromApproachSection.mainReducer('PLAN_CARE_END_GOAL', 'domain2'),
      domain3: fromApproachSection.mainReducer('PLAN_CARE_END_GOAL', 'domain3')
    }),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    // reducerProvider,
    ApproachSectionServiceApi],
  declarations: [PlanComponent, DetailComponent],
})
export class PlanModule { }
