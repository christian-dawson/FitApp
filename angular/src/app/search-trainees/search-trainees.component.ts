import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserAccount } from '../types/user_account';

@Component({
  selector: 'app-search-trainees',
  templateUrl: './search-trainees.component.html',
  styleUrls: ['./search-trainees.component.css']
})
export class SearchTraineesComponent implements OnInit {

  private users: Array<UserAccount>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}

