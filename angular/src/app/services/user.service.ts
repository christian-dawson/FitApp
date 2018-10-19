import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
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

    readonly url = 'ec2-18-216-239-106.us-east-2.compute.amazonaws.com:8080/FitApp/user/';

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<Array<User>>(this.url);
    }

    postUser(user: User) {
        return this.http.post<User>(this.url, user, httpOptions);
    }
}
