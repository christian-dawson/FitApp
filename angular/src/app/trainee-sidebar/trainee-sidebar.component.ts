import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subject } from 'rxjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-trainee-sidebar',
  templateUrl: './trainee-sidebar.component.html',
  styleUrls: ['./trainee-sidebar.component.css'],
  providers: [LoginService]
})
export class TraineeSidebarComponent implements OnInit {

  private name: String;

  componentSwap: Subject<String> = new Subject();

  changeComponents(event, componentName: String) {
    console.log('changeComponents inside sidebar.ts called! ' + componentName);
    this.componentSwap.next(name);
  }

  logout() {
    console.log('logout called');
    this.ls.logout().subscribe();
  }

  constructor(private ls: LoginService) { }

  ngOnInit() {
  }

}
