import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsGoaliesComponent } from './league-stats-goalies.component';

describe('LeagueStatsGoaliesComponent', () => {
  let component: LeagueStatsGoaliesComponent;
  let fixture: ComponentFixture<LeagueStatsGoaliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsGoaliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsGoaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
