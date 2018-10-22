import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../types/user_account';
import { Router } from '@angular/router';
import { SessionInfoService } from '../services/session-info.service';
import { Goal } from '../types/goal';
import { Trainee } from '../types/trainee';
import { TraineeService } from '../services/trainee.service';
import { GoalService } from '../services/goal.service';

@Component({
  selector: 'app-register-trainee',
  templateUrl: './register-trainee.component.html',
  styleUrls: ['./register-trainee.component.css']
})
export class RegisterTraineeComponent implements OnInit {

  private account: UserAccount;
  private height: number;
  private weight: number;
  private targetWeight: number;
  private type: string;
  private trainee: Trainee;
  private goal: Goal;

  createTrainee() {
      this.trainee = {
      id: this.account.id,
      height: this.height,
      weight: this.weight,
    };
    this.goal = {
      id: 0,
      traineeId: this.account.id,
      targetWeight: this.targetWeight,
      type: this.type
    };
    console.log(this.trainee);
    this.traineeServ.post(this.trainee).subscribe(data => console.log('success!'));
    this.goalServ.postGoal(this.goal).subscribe(data => console.log('sucecss!'));
    this.router.navigateByUrl('home');
  }

  constructor(private router: Router, private sess: SessionInfoService,
    private traineeServ: TraineeService, private goalServ: GoalService) { }

  ngOnInit() {
    console.log('ngOnInit in add-goals called()');
    this.sess.getLoggedInUser().subscribe(data => {
      if (!data) {
        this.router.navigateByUrl('login');
      } else {
        this.account = data;
      }
   });
  }

}
