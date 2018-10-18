import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef } from '@angular/core';
import { DynamicComponentDashboardService } from '../services/dynamic-component-dashboard.service';
import { User } from '../types/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('dynamic', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef;

  constructor(private injectorService: DynamicComponentDashboardService) {}

  displaySearchTrainersComponent() {
    this.injectorService.addSearchTrainersComponent();
  }

  ngOnInit() {
    this.injectorService.setRootViewContainerRef(this.viewContainerRef);
    this.injectorService.addSearchTrainersComponent();
  }

}
