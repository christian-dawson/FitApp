import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class SessionInfoService {

  readonly url: 'http://localhost:8080/FitApp/session';

  constructor(private http: HttpClient) {}

  getLoggedInUser(): Observable<User> {
      return this.http.get<User>(this.url);
  }
}
