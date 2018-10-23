import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef } from '@angular/core';
import { DynamicComponentDashboardService } from '../services/dynamic-component-dashboard.service';
import { UserAccount } from '../types/user_account';
import { SessionInfoService } from '../services/session-info.service';
import { Router } from '@angular/router';
import { TraineeSidebarComponent } from '../trainee-sidebar/trainee-sidebar.component';
import { SidebarListenerService } from '../services/sidebar-listener.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  type: String;

  @ViewChild('dynamic', {
    read: ViewContainerRef
  })
  viewContainerRef: ViewContainerRef;
  @ViewChild('sidebar', {
    read: ViewContainerRef
  })
  sideVCF: ViewContainerRef;

  constructor(private injectorService: DynamicComponentDashboardService,
    private sess: SessionInfoService, private router: Router) {}

  changeComponent(name: String) {
    console.log('changeComponent called inside dashboard.ts ' + name);
    if (name === 'goal') {
      this.injectorService.addGoalComponent();
    }
  }

  displaySearchTrainersComponent() {
    this.injectorService.setRootViewContainerRef(this.viewContainerRef);
    this.injectorService.addSearchTrainersComponent();
  }
  displaySearchTraineesComponent() {
    this.injectorService.setRootViewContainerRef(this.viewContainerRef);
    this.injectorService.addSearchTraineesComponent();
  }

  displayTraineeSidebar() {
    this.injectorService.setRootViewContainerRef(this.sideVCF);
    this.injectorService.addTraineeSidebar();
  }
  displayTrainerSidebar() {
    this.injectorService.setRootViewContainerRef(this.sideVCF);
    this.injectorService.addTrainerSidebar();
  }

  ngOnInit() {
    SidebarListenerService.getObservable().subscribe(data => {
      this.changeComponent(data);
    });
    this.sess.getLoggedInUser().subscribe(data => {
      if (!data) {
        this.router.navigateByUrl('login');
      } else {
        if (data.type === 'trainer') {
          this.displayTrainerSidebar();
          this.displaySearchTraineesComponent();
        } else {
          this.displayTraineeSidebar();
          this.displaySearchTrainersComponent();
        }
      }
   });
  }

}
