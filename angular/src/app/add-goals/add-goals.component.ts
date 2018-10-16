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
  userId: number;
  targetWeight: number;
  type: string;
  goal: Goal;

  postGoal() {
    this.goal = {
      goalId: this.goalId,
      userId: this.userId,
      targetWeight: this.targetWeight,
      type: this.type
    };
     this.goalService.postGoal(this.goal).subscribe(data => {
        this.router.navigateByUrl('home');
     }
    );
  }
  constructor(private sess: SessionInfoService, private goalService: GoalService, private router: Router) { }

  ngOnInit() {
    console.log(this.sess);
    this.sess.getLoggedInUser().subscribe(data => {
      if (!data.id) {
        this.router.navigateByUrl('login');
      } else {
        this.userId = data.id;
        console.log(data.id);
      }
    });
    console.log('onInitCalled()');
  }

}
