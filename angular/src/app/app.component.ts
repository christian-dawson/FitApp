import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location: Location;
  constructor(location: Location) {
    this.location = location;
  }
  title = 'Fit App';
}

