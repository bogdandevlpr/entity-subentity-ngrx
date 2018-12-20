// angular
import { Injectable } from '@angular/core';
// core
import { AuthService } from './auth.service';
// rxjs
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable()
export class UserService {
    constructor(private authService: AuthService) {}

    getCurrentUser(): Observable<any> {
        const url = 'http://localhost:3000/User';
        return from(this.authService.AuthGet(url)).pipe(
          catchError((error: any) => observableThrowError(error))
        );
    }
}
