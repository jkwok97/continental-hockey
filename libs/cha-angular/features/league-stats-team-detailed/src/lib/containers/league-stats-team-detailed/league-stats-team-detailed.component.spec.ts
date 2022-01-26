import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsTeamDetailedComponent } from './league-stats-team-detailed.component';

describe('LeagueStatsTeamDetailedComponent', () => {
  let component: LeagueStatsTeamDetailedComponent;
  let fixture: ComponentFixture<LeagueStatsTeamDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsTeamDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsTeamDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
