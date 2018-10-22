import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from '../types/user_account';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  @Injectable({
    providedIn: 'root'
})
export class RegisterService {

    readonly url = 'http://localhost:8080/FitApp/user';

    constructor(private http: HttpClient) {}

    register(user: UserAccount): Observable<UserAccount> {
        return this.http.post<UserAccount>(this.url, JSON.stringify(user), httpOptions);
    }
    put(account: UserAccount): Observable<UserAccount> {
        return this.http.put<UserAccount>(this.url + '/' + account.id, account, httpOptions);
    }

}

