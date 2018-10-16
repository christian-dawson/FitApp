import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../types/user';
import { RegisterService } from '../services/register.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

const maxYear = (new Date).getFullYear() - 18;
const minYear = (new Date).getFullYear() - 100;
const day = (new Date).getDay();
const month = (new Date).getMonth();

const maxDate = '' + month + '/' + day + '/' + maxYear;
const minDate = '' + month + '/' + day + '/' + minYear;
console.log(maxDate);
console.log(minDate);

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  address: string;
  firstName: string;
  lastName: string;
  type: string;
  birthdate: string;
  weight: number;
  height: number;
  user: User;

  register() {
    this.user = {
      id: 0,
      username: this.username,
      password: this.password,
      address: this.address,
      firstName: this.firstName,
      lastName: this.lastName,
      type: this.type,
      birthdate: this.birthdate,
      weight: this.weight,
      height: this.height
    };
    console.log(this.user.type);
    this.registerService.register(this.user)
      .subscribe(data => {
        this.user = data;
        this.router.navigateByUrl('addGoals');
      }
      );
  }

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

}
