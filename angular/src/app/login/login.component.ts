import { Component, OnInit, Injectable } from '@angular/core';
import { UserAccount } from '../types/user_account';
import { Alert } from '../types/alert';
import { LoginService } from '../services/login.service';
import { AlertService } from '../services/alert.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  alert: Alert = new Alert('', '', false);

  username: string;
  password: string;
  user: UserAccount;

  login() {
    this.user = new UserAccount();
    this.user.username = this.username;
    this.user.password = this.password;
    this.loginService.login(this.user)
  .subscribe(data => {
    if (!data) {
      this.alert.message = 'Invalid User Credentials';
      this.alert.type = 'danger';
      this.alert.display = true;
      AlertService.setAlert(this.alert);
      this.router.navigateByUrl('login');
    } else {
      this.router.navigateByUrl('home');
    }
  }
);
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

}
