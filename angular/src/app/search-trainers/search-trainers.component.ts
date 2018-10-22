import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserAccount } from '../types/user_account';
import { TrainerService } from '../services/trainer.service';
import { Trainer } from '../types/Trainer';

@Component({
  selector: 'app-search-trainers',
  templateUrl: './search-trainers.component.html',
  styleUrls: ['./search-trainers.component.css']
})
export class SearchTrainersComponent implements OnInit {

  private trainers: Array<Trainer>;

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainerService.getAll().subscribe(data => {
      this.trainers = data;
    });
  }

}
