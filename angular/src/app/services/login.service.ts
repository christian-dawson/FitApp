import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from '../types/user_account';
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

    readonly url = 'http://ec2-18-216-239-106.us-east-2.compute.amazonaws.com:8080/FitApp/login';

    readonly logoutUrl = 'http://ec2-18-216-239-106.us-east-2.compute.amazonaws.com:8080/FitApp/logout';

    constructor(private http: HttpClient) {}

    login(user: UserAccount): Observable<UserAccount> {
        return this.http.post<UserAccount>(this.url, JSON.stringify(user), httpOptions);
    }
    logout() {
        return this.http.get(this.logoutUrl);
    }

}
