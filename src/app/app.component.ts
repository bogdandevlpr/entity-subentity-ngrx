import { User } from './models/user.model';
import { CurrentUserState } from './store/reducers/current-user.reducers';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from './store';
import { Observable, Subscription } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // currentUser: Observable<User>;
  currentUser: Subscription;
  user: any;

  constructor(private store: Store<fromStore.ApplicationState>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCurrentUser());
    this.currentUser = this.store.pipe(
      select(fromStore.getCurrentUser),
    ).subscribe((res: CurrentUserState) => {
      if (res && res.loaded) {
        this.user = res.data;
      }
    });
  }

}

