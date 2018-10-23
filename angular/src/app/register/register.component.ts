import { Component, OnInit, Injectable } from '@angular/core';
import { UserAccount } from '../types/user_account';
import { RegisterService } from '../services/register.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Goal } from '../types/goal';

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
  type: string;
  user: UserAccount;

  register() {
    this.user = {
      id: 0,
      username: this.username,
      password: this.password,
      type: this.type
    };
    this.registerService.register(this.user)
      .subscribe(data => {
        if (this.user.type === 'trainer') {
          this.router.navigateByUrl('register-trainer');
        } else {
          this.router.navigateByUrl('register-trainee');
        }
      }
      );
  }

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

}
