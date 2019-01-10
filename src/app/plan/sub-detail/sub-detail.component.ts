import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';
import { map, tap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as fromActions from '../store/actions';
@Component({
  selector: 'app-sub-detail',
  templateUrl: './sub-detail.component.html',
  styleUrls: ['./sub-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubDetailComponent implements OnInit {
  @Input() domainID;
  @Input() careGoals;
  @Input() endGoal;
  endGoals$: Observable<any>;
  isLoading: boolean;
  constructor(private store: Store<fromStore.PlanState>) { }

  ngOnInit() {}

  createCareGoal() {
    this.store.dispatch(
      new fromActions.CreatePlanCareGoal(
        {
          id: this.domainID,
          endGoalID: this.endGoal.id,
          body: { careGoalName: 'somename' }
        }
      )
    );
  }

  updateCareGoal(careGoalID) {
    this.store.dispatch(
      new fromActions.UpdatePlanCareGoal(
        {id: this.domainID, endGoalID: this.endGoal.id, careGoalID: careGoalID, body: {'careGoalName': 'careGoal-updated'}
      })
    );
  }

  deleteCareGoal(careGoalID) {
    this.store.dispatch(
      new fromActions.DeletePlanCareGoal(
        {id: this.domainID, endGoalID: this.endGoal.id, careGoalID: careGoalID}
      )
    );
  }

  get lastRefresh(): string {
    return Date.now().toString();
  }

}
