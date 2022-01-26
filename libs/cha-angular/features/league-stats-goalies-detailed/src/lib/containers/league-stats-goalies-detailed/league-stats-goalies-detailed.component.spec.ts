import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsGoaliesDetailedComponent } from './league-stats-goalies-detailed.component';

describe('LeagueStatsGoaliesDetailedComponent', () => {
  let component: LeagueStatsGoaliesDetailedComponent;
  let fixture: ComponentFixture<LeagueStatsGoaliesDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsGoaliesDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsGoaliesDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
