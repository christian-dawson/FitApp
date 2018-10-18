import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../types/user';

@Component({
  selector: 'app-search-trainees',
  templateUrl: './search-trainees.component.html',
  styleUrls: ['./search-trainees.component.css']
})
export class SearchTraineesComponent implements OnInit {

  private users: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}

