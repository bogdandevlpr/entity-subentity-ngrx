import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';
import { map, tap, filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import * as fromActions from '../store/actions';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() domainID;
  @Input() entityName;
  endGoals$: Observable<any>;
  endGoals: any;
  constructor(private store: Store<fromStore.PlanState>) { }

  ngOnInit() {
    this.store.dispatch(new fromActions.LoadPlanCareEndGoal({ domainID: this.domainID }));
    console.log('this.entityName', this.entityName);
    this.endGoals$ = this.store.pipe(select(this.entityName));
  }

}
