import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [LoginService]
})
export class SidebarComponent implements OnInit {

  private name: String = 'goal';

  @Output()
  swapComponents: EventEmitter<String> = new EventEmitter<String>();

  changeComponents(event, componentName: String) {
    console.log('changeComponents inside sidebar.ts called! ' + componentName);
    this.swapComponents.emit(componentName);
  }

  logout() {
    console.log('logout called');
    this.ls.logout().subscribe();
  }

  constructor(private ls: LoginService) { }

  ngOnInit() {
  }

}
