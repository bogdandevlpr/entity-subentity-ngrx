import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';
import { map, tap, filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import * as fromActions from '../store/actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  @Input() domainID;
  endGoals$: Observable<any>;
  isLoading: boolean;
  increment = 0;
  incrementCare = 0;
  constructor(private store: Store<fromStore.PlanState>) { }

  ngOnInit() {
    this.endGoals$ = this.store.pipe(
      select(fromStore.getPlanCareEndGoalById(), { id: this.domainID }),
      tap(e => this.isLoading = e.loading),
      filter(e => e.loaded),
      map(e => {
        console.log('list', e);
        return this.denormalizePlanCareEndGoals(e.items);
      })
    );

    this.store.dispatch(new fromActions.LoadPlanCareEndGoal({ id: this.domainID }));
  }

  createEndGoal() {
    this.increment++;
    this.store.dispatch(
      new fromActions.CreatePlanCareEndGoal({id: this.domainID, body: {name: 'somename' + this.increment}})
    );
  }

  updateEndGoal(endGoalID) {
    this.increment++;
    this.store.dispatch(
      new fromActions.UpdatePlanCareEndGoal({id: this.domainID, endGoalID: endGoalID, body: {'name': 'somename-updated'}})
    );
  }

  deleteEndGoal(endGoalID) {
    this.store.dispatch(
      new fromActions.DeletePlanCareEndGoal({id: this.domainID, endGoalID: endGoalID})
    );
  }

  denormalizePlanCareEndGoals(items) {
    return Object.keys(items).map(idd =>
      Object.assign({}, items[parseInt(idd, 10)], {
        careGoals: items[parseInt(idd, 10)].careGoals ?
          Object.keys(items[parseInt(idd, 10)].careGoals).map(cid => items[parseInt(idd, 10)].careGoals[cid]) : []
      })
    );
  }

  get lastRefresh(): string {
    return Date.now().toString();
  }

}
