import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subject } from 'rxjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { SidebarListenerService } from '../services/sidebar-listener.service';

@Component({
  selector: 'app-trainee-sidebar',
  templateUrl: './trainee-sidebar.component.html',
  styleUrls: ['./trainee-sidebar.component.css'],
  providers: [LoginService]
})
export class TraineeSidebarComponent implements OnInit {

  private name: String;

  changeComponents(event, componentName: String) {
    console.log('changeComponents inside sidebar.ts called! ' + componentName);
    SidebarListenerService.emitEvent(name);
  }

  logout() {
    console.log('logout called');
    this.ls.logout().subscribe();
  }

  constructor(private ls: LoginService) { }

  ngOnInit() {
  }

}
