import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from '../types/user_account';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Trainee } from '../types/trainee';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  @Injectable({
    providedIn: 'root'
})
export class TraineeService {

    readonly url = 'http://ec2-18-216-239-106.us-east-2.compute.amazonaws.com:8080/FitApp/trainee';

    constructor(private http: HttpClient) {}

    getAll() {
      return this.http.get<Array<Trainee>>(this.url);
    }
    getSpecific(id: number) {
      return this.http.get<Trainee>(this.url + '/' + id);
    }
    post(trainee: Trainee): Observable<Trainee> {
        return this.http.post<Trainee>(this.url, trainee, httpOptions);
    }
    put(trainee: Trainee): Observable<Trainee> {
        return this.http.put<Trainee>(this.url + '/' + trainee.id, trainee, httpOptions);
    }

}

