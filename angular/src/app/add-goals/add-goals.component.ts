import { Component, OnInit } from '@angular/core';
import { Goal } from '../types/goal';
import { GoalService } from '../services/goal.service';
import { SessionInfoService } from '../services/session-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-goals',
  templateUrl: './add-goals.component.html',
  styleUrls: ['./add-goals.component.css']
})
export class AddGoalsComponent implements OnInit {
  goalId: number;
  targetWeight: number;
  type: string;
  goal: Goal;

  postGoal() {
    this.sess.getLoggedInUser().subscribe(data => {
      if (!data) {
        this.router.navigateByUrl('login');
      } else {
        console.log(data.id);
        this.goal = {
          id: this.goalId,
          targetWeight: this.targetWeight,
          type: this.type
        };
        //  this.goalService.postGoal(this.goal).subscribe(doSomething => {
        //     this.router.navigateByUrl('home');
        //  }
        // );
      }
    });
  }
  constructor(private sess: SessionInfoService, private goalService: GoalService, private router: Router) { }

  ngOnInit() {
    console.log('ngOnInit in add-goals called()');
    this.sess.getLoggedInUser().subscribe(data => {
      console.log(data);
      if (!data) {
        this.router.navigateByUrl('login');
      }
   });
  }
}
