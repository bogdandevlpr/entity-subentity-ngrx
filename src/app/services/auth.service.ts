import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  AuthGet<T>(url: string): Promise<T> {
    return this.http.get<T>(url).toPromise().then((res) => res);
  }

  AuthPut(url: string, data: any): Promise<Object> {
    const body = JSON.stringify(data);
    return this.http.put(url, body).toPromise().then((res) => res);
  }

  AuthDelete(url: string): Promise<Object> {
    return this.http.delete(url).toPromise().then((res) => res);
  }

  AuthPost(url: string, data: any): Promise<Object> {
    const body = JSON.stringify(data);
    return this.http.post(url, body).toPromise().then((res) => res);
  }

}
