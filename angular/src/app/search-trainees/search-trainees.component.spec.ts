import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTraineesComponent } from './search-trainees.component';

describe('SearchTraineesComponent', () => {
  let component: SearchTraineesComponent;
  let fixture: ComponentFixture<SearchTraineesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTraineesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTraineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
