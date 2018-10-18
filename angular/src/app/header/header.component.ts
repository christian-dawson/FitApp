import { Component, OnInit, DoCheck } from '@angular/core';
import { Location } from '@angular/common';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  location: Location;
  message: string;
  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.message = makeMessage(this.location);
  }

}

function makeMessage(location: Location): string {
  console.log(location.path());
  if (location.path() === '/home') {
    return 'Welcome Home';
  } else if (location.path() === '/login') {
    return 'Login';
  } else if (location.path() === '/register') {
    return 'Register';
  } else if (location.path() === '/findTrainer') {
    return 'Find a Trainer';
  } else if (location.path() === '/goal') {
    return 'Goals';
  } else {
    return '';
  }
}
