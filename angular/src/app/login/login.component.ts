import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../types/user';
import { LoginService } from '../services/login.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

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
    this.loginService.login(this.user)
  .subscribe(data => {
    this.user = data;
    console.log(this.user);
    this.router.navigateByUrl('register');
  }
);
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

}
