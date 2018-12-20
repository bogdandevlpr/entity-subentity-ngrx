import { Injectable } from '@angular/core';
/** Rxjs */
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
/** Services */
import { AuthService } from '../../services/auth.service';
import { from } from 'rxjs';

@Injectable()
export class ApproachSectionServiceApi {

  constructor(private authService: AuthService) { }

  // {{baseURL}}/Plan/92110/DomainSummary
  getDomain(): Observable<any> {
    const url = `http://localhost:3000/Domain/list`;
    return from(this.authService.AuthGet(url)).pipe(
      catchError((error: any) => observableThrowError(error))
    );
  }

  // {{baseURL}}/Plan/92110/Domain/1/PlanCareEndGoalSummary
  getPlanCareEndGoal(domainID: number): Observable<any> {
    const url = `http://localhost:3000/Domain/list/${domainID}/PlanCareEndGoalSummary${domainID}`;
    return from(this.authService.AuthGet(url)).pipe(
      catchError((error: any) => observableThrowError(error))
    );
  }
}


