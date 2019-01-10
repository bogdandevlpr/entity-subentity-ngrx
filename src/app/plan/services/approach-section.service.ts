import { Injectable } from '@angular/core';
/** Rxjs */
import { Observable, throwError as observableThrowError ,  from } from 'rxjs';
import { catchError } from 'rxjs/operators';
/** Services */
import { AuthService } from '../../services/auth.service';

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

  createPlanCareEndGoal(domainID: number, body): Observable<any> {
    const url = `http://localhost:3000/PlanCareEndGoalSummary${domainID}`;
    return from(this.authService.AuthPost(url, body)).pipe(
      catchError((error: any) => observableThrowError(error))
    );
  }

  updatePlanCareEndGoal(domainID: number, endGoalID, body): Observable<any> {
    const url = `http://localhost:3000/PlanCareEndGoalSummary${domainID}/${endGoalID}`;
    return from(this.authService.AuthPut(url, body)).pipe(
      catchError((error: any) => observableThrowError(error))
    );
  }

  deletePlanCareEndGoal(domainID: number, endGoalID): Observable<any> {
    const url = `http://localhost:3000/PlanCareEndGoalSummary${domainID}/${endGoalID}`;
    return from(this.authService.AuthDelete(url)).pipe(
      catchError((error: any) => observableThrowError(error))
    );
  }


  createPlanCareGoal(domainID: number, body): Observable<any> {
    const url = `http://localhost:3000/PlanCareGoalSummary${domainID}`;
    return from(this.authService.AuthPost(url, body)).pipe(
      catchError((error: any) => observableThrowError(error))
    );
  }

  updatePlanCareGoal(domainID: number, careGoalID, body): Observable<any> {
    const url = `http://localhost:3000/PlanCareGoalSummary${domainID}/${careGoalID}`;
    return from(this.authService.AuthPut(url, body)).pipe(
      catchError((error: any) => observableThrowError(error))
    );
  }

  deletePlanCareGoal(domainID: number, careGoalID): Observable<any> {
    const url = `http://localhost:3000/PlanCareGoalSummary${domainID}/${careGoalID}`;
    return from(this.authService.AuthDelete(url)).pipe(
      catchError((error: any) => observableThrowError(error))
    );
  }


}


