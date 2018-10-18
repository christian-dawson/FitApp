import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../types/user';

@Component({
  selector: 'app-search-trainers',
  templateUrl: './search-trainers.component.html',
  styleUrls: ['./search-trainers.component.css']
})
export class SearchTrainersComponent implements OnInit {

  private users: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
