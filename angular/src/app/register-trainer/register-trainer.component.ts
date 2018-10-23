import { Component, OnInit } from '@angular/core';
import { Trainer } from '../types/Trainer';
import { TrainerService } from '../services/trainer.service';
import { SessionInfoService } from '../services/session-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-trainer',
  templateUrl: './register-trainer.component.html',
  styleUrls: ['./register-trainer.component.css']
})
export class RegisterTrainerComponent implements OnInit {

  private experience: string;
  private trainerId: number;
  private address: string;
  private firstName: string;
  private lastName: string;
  private gender: string;
  private birthdate: string;
  private trainer = new Trainer();

  createTrainer() {
    this.trainer = {
      id: this.trainerId,
      experience: this.experience,
      rating: 0,
      address: this.address,
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      birthdate: this.birthdate
    };
    this.trainerService.post(this.trainer).subscribe();
    this.router.navigateByUrl('home');
  }

  constructor(private trainerService: TrainerService, private sess: SessionInfoService,
    private router: Router) { }

  ngOnInit() {
    this.sess.getLoggedInUser().subscribe(data => {
      if (!data) {
        this.router.navigateByUrl('login');
      } else {
        this.trainerId = data.id;
      }
   });
  }

}
