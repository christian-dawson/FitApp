import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  @Injectable({
    providedIn: 'root'
})
export class LoginService {

    readonly url = 'ec2-18-216-239-106.us-east-2.compute.amazonaws.com/FitApp/login';

    readonly logoutUrl = 'ec2-18-216-239-106.us-east-2.compute.amazonaws.com/FitApp/logout';

    constructor(private http: HttpClient) {}

    login(user: User): Observable<User> {
        return this.http.post<User>(this.url, JSON.stringify(user), httpOptions);
    }
    logout() {
        return this.http.get(this.logoutUrl);
    }

}
