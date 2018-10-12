import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../types/user';
import { RegisterService } from '../services/register.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  id: number;
  address: string;
  firstName: string;
  lastName: string;
  type: string;
  birthdate: string;
  weight: number;
  height: number;
  user: User;

  login() {
    this.user = {
      username: this.username,
      password: this.password,
      id: this.id,
      address: this.address,
      firstName: this.firstName,
      lastName: this.lastName,
      type: this.type,
      birthdate: this.birthdate,
      weight: this.weight,
      height: this.height
    };
    this.registerService.register(this.user)
  .subscribe();
  }

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

}
