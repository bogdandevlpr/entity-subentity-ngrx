// import { DomainState, PlanCareEndGoalState } from './../store/reducers/approach-section.reducers';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';
import { map, tap, filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import * as fromActions from '../store/actions';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  domains$: Observable<any>;
  domains;
  allIds$: Subscription;
  loadedDomains: any;

  @ViewChild('matAccordion') matAccordion: MatAccordion;

  constructor(private store: Store<fromStore.PlanState>) {
    this.store.dispatch(new fromActions.LoadDomain());
  }

  ngOnInit() {
    this.domains$ = this.store.pipe(select(fromStore.getDomain), map((res) => { this.domains = res.data; return this.domains; }));
    this.allIds$ = this.store.pipe(select(fromStore.getAllIds)).subscribe((ids) => this.loadedDomains = Object.keys(ids).map(e => +e));
  }

  isVisibleFn(index: number, item) {
    return item.id;
  }

  loadPlanCareEndGoals(id) {
    const loaded = this.loadedDomains.some(did => did === id);
    if (!loaded) {
      this.store.dispatch(new fromActions.LoadPlanCareEndGoal({ id: id }));
    }
  }

  expand() {
    this.matAccordion.openAll();
    this.domains.forEach(domain => this.loadPlanCareEndGoals(domain.id));
  }

  collapse() {
    this.matAccordion.closeAll();
  }

}
