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

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goal: Goal;
  readonly url = 'http://localhost:8080/FitApp/' + this.goal.userId + 'goal/';

  constructor(private http: HttpClient) { }

  postGoal(goal: Goal) {
      this.goal = goal;
      return this.http.post<Goal>(this.url, goal, httpOptions);
  }
}
