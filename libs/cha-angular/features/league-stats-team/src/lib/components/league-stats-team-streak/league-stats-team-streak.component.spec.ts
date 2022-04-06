import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsTeamStreakComponent } from './league-stats-team-streak.component';

describe('LeagueStatsTeamStreakComponent', () => {
  let component: LeagueStatsTeamStreakComponent;
  let fixture: ComponentFixture<LeagueStatsTeamStreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsTeamStreakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsTeamStreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
