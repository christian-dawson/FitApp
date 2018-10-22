import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
 } from '@angular/core';
import { SearchTrainersComponent } from '../search-trainers/search-trainers.component';
import { AddGoalsComponent } from '../add-goals/add-goals.component';
import { TraineeSidebarComponent } from '../trainee-sidebar/trainee-sidebar.component';
import { TrainerSidebarComponent } from '../trainer-sidebar/trainer-sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentDashboardService {

   private factoryResolver;
   private rootViewContainer;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }
  addSearchTrainersComponent() {
    this.rootViewContainer.clear();
    const factory = this.factoryResolver.resolveComponentFactory(SearchTrainersComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
  addGoalComponent() {
    this.rootViewContainer.clear();
    const factory = this.factoryResolver.resolveComponentFactory(AddGoalsComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
  addTraineeSidebar() {
    this.rootViewContainer.clear();
    const factory = this.factoryResolver.resolveComponentFactory(TraineeSidebarComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
  addTrainerSidebar() {
    this.rootViewContainer.clear();
    const factory = this.factoryResolver.resolveComponentFactory(TrainerSidebarComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
}
