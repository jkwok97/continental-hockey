import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsTeamPenaltiesComponent } from './league-stats-team-penalties.component';

describe('LeagueStatsTeamPenaltiesComponent', () => {
  let component: LeagueStatsTeamPenaltiesComponent;
  let fixture: ComponentFixture<LeagueStatsTeamPenaltiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsTeamPenaltiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsTeamPenaltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
