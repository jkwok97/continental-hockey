import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueHistoryGoaliesComponent } from './league-history-goalies.component';

describe('LeagueHistoryGoaliesComponent', () => {
  let component: LeagueHistoryGoaliesComponent;
  let fixture: ComponentFixture<LeagueHistoryGoaliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueHistoryGoaliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueHistoryGoaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
