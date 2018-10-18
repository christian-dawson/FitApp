import { TestBed } from '@angular/core/testing';

import { DynamicComponentDashboardService } from './dynamic-component-dashboard.service';

describe('DynamicComponentDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicComponentDashboardService = TestBed.get(DynamicComponentDashboardService);
    expect(service).toBeTruthy();
  });
});
