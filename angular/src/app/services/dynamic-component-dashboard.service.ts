import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
 } from '@angular/core';
import { SearchTrainersComponent } from '../search-trainers/search-trainers.component';

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
    const factory = this.factoryResolver.resolveComponentFactory(SearchTrainersComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
}
