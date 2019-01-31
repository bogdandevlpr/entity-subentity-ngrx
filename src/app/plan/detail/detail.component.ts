import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as fromActions from '../store/actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  @Input() domainID: number;
  endGoals$: Observable<any>;
  endGoalsLoading$: Observable<any>;

  constructor(private store: Store<fromStore.PlanState>) { }

  ngOnInit() {
    this.read();
    this.getLoadingStatus();
  }

  create() {
    this.store.dispatch(
      new fromActions.CreatePlanCareEndGoal({id: this.domainID, body: {name: 'somename'}})
    );
  }

  read() {
    this.endGoals$ = this.store.pipe(
      select(fromStore.getPlanCareEndGoalById(), { id: this.domainID }),
      filter(endGoals => endGoals && endGoals.loaded),
      map(endGoals => this.denormalize(endGoals.items))
    );
  }

  update(endGoalID) {
    this.store.dispatch(
      new fromActions.UpdatePlanCareEndGoal({id: this.domainID, endGoalID: endGoalID, body: {'name': 'somename-updated'}})
    );
  }

  delete(endGoalID) {
    this.store.dispatch(
      new fromActions.DeletePlanCareEndGoal({id: this.domainID, endGoalID: endGoalID})
    );
  }

  denormalize(items) {
    return Object.keys(items).map(idd =>
      Object.assign({}, items[parseInt(idd, 10)], {
        careGoals: items[parseInt(idd, 10)].careGoals ?
          Object.keys(items[parseInt(idd, 10)].careGoals).map(cid => items[parseInt(idd, 10)].careGoals[cid]) : []
      })
    );
  }

  endGoalFn(index: number, item) {
    return item.id;
  }

  getLoadingStatus() {
    this.endGoalsLoading$ = this.store.pipe(select(fromStore.getPlanCareEndGoalsLoading(), { id: this.domainID }), map(loading => loading));
  }

  get lastRefresh(): string {
    return Date.now().toString();
  }

}
