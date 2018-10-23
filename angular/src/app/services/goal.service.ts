import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Goal } from '../types/goal';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const userId = 10;

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  readonly url = 'http://localhost:8080/FitApp/trainee/';

  constructor(private http: HttpClient) { }

  // postGoal(goal: Goal) {
  //     return this.http.post<Goal>(this.url + goal.traineeId + '/goal', goal, httpOptions);
  // }
  getGoal(traineeId: number) {
    return this.http.get<Goal>(this.url + traineeId + '/goal');
  }
}
