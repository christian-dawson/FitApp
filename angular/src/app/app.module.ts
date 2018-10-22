import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddGoalsComponent } from './add-goals/add-goals.component';
import { TraineeSidebarComponent } from './trainee-sidebar/trainee-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';
import { SearchTrainersComponent } from './search-trainers/search-trainers.component';
import { TrainerPipePipe } from './trainer-pipe.pipe';
import { InsertComponentDirective } from './directives/insert-component.directive';

import { TraineePipePipe } from './trainee-pipe.pipe';
import { SearchTraineesComponent } from './search-trainees/search-trainees.component';
import { RegisterTraineeComponent } from './register-trainee/register-trainee.component';
import { RegisterTrainerComponent } from './register-trainer/register-trainer.component';
import { TrainerSidebarComponent } from './trainer-sidebar/trainer-sidebar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: DashboardComponent},
  { path: 'goal', component: AddGoalsComponent },
  { path: 'register-trainee', component: RegisterTraineeComponent},
  { path: 'register-trainer', component: RegisterTrainerComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddGoalsComponent,
    TraineeSidebarComponent,
    HeaderComponent,
    AlertComponent,
    SearchTrainersComponent,
    SearchTraineesComponent,
    TrainerPipePipe,
    InsertComponentDirective,
    TraineePipePipe,
    TrainerPipePipe,
    InsertComponentDirective,
    RegisterTraineeComponent,
    RegisterTrainerComponent,
    TrainerSidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SearchTrainersComponent, SearchTraineesComponent,
    TraineeSidebarComponent, TrainerSidebarComponent]
})
export class AppModule { }
