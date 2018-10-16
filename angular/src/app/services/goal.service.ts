import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
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
  userId: number;
  goal: Goal;
  readonly posturl = 'http://localhost:8080/FitApp/user/' + userId + '/goal/';

  constructor(private http: HttpClient) { }

  postGoal(goal: Goal) {
      this.goal = goal;
      return this.http.post<Goal>(this.posturl, goal, httpOptions);
  }
}
