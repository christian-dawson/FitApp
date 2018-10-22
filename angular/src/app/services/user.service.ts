import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from '../types/user_account';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  @Injectable({
    providedIn: 'root'
})
export class UserService {

    readonly url = 'http://localhost:8080/FitApp/user/';

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<Array<UserAccount>>(this.url);
    }

    postUser(user: UserAccount) {
        return this.http.post<UserAccount>(this.url, user, httpOptions);
    }
}
