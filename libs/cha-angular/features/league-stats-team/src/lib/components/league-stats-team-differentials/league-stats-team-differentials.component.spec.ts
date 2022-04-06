import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsTeamDifferentialsComponent } from './league-stats-team-differentials.component';

describe('LeagueStatsTeamDifferentialsComponent', () => {
  let component: LeagueStatsTeamDifferentialsComponent;
  let fixture: ComponentFixture<LeagueStatsTeamDifferentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsTeamDifferentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsTeamDifferentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
