import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeSidebarComponent } from './trainee-sidebar.component';

describe('SidebarComponent', () => {
  let component: TraineeSidebarComponent;
  let fixture: ComponentFixture<TraineeSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
