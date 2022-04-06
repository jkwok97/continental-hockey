import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsTeamPpComponent } from './league-stats-team-pp.component';

describe('LeagueStatsTeamPpComponent', () => {
  let component: LeagueStatsTeamPpComponent;
  let fixture: ComponentFixture<LeagueStatsTeamPpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsTeamPpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsTeamPpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
