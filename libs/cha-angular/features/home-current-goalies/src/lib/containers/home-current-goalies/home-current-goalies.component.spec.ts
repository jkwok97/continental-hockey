import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCurrentGoaliesComponent } from './home-current-goalies.component';

describe('HomeCurrentGoaliesComponent', () => {
  let component: HomeCurrentGoaliesComponent;
  let fixture: ComponentFixture<HomeCurrentGoaliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCurrentGoaliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCurrentGoaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
