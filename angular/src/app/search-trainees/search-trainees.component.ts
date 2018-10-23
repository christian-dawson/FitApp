import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserAccount } from '../types/user_account';
import { Trainee } from '../types/trainee';
import { TraineeService } from '../services/trainee.service';

@Component({
  selector: 'app-search-trainees',
  templateUrl: './search-trainees.component.html',
  styleUrls: ['./search-trainees.component.css']
})
export class SearchTraineesComponent implements OnInit {

  private trainees: Array<Trainee>;
  private searchText = '';

  constructor(private traineeService: TraineeService) { }

  ngOnInit() {
    this.traineeService.getAll().subscribe(data => {
      this.trainees = data;
    });
  }
}

