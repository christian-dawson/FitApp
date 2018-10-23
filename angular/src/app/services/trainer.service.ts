import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Trainer } from '../types/Trainer';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  @Injectable({
    providedIn: 'root'
})
export class TrainerService {

    readonly url = 'http://ec2-18-216-239-106.us-east-2.compute.amazonaws.com:8080/FitApp/trainer';

    constructor(private http: HttpClient) {}

    getAll() {
      return this.http.get<Array<Trainer>>(this.url);
    }
    getSpecific(id: number) {
      return this.http.get<Trainer>(this.url + '/' + id);
    }
    post(trainer: Trainer): Observable<Trainer> {
        return this.http.post<Trainer>(this.url, trainer, httpOptions);
    }
    put(trainer: Trainer): Observable<Trainer> {
        return this.http.put<Trainer>(this.url + '/' + trainer.id, trainer, httpOptions);
    }

}

