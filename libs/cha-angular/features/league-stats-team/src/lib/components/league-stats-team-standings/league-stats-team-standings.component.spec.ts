import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsTeamStandingsComponent } from './league-stats-team-standings.component';

describe('LeagueStatsTeamStandingsComponent', () => {
  let component: LeagueStatsTeamStandingsComponent;
  let fixture: ComponentFixture<LeagueStatsTeamStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsTeamStandingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsTeamStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
