import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [LoginService]
})
export class SidebarComponent implements OnInit {
  logout() {
    console.log('logout called');
    this.ls.logout().subscribe();
  }

  constructor(private ls: LoginService) { }

  ngOnInit() {
  }

}
