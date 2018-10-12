import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
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

    readonly url = 'http://localhost:8080/FitApp/register';

    constructor(private http: HttpClient) {}

    register(user: User): Observable<User> {
        return this.http.post<User>(this.url, JSON.stringify(user), httpOptions);
    }

}

