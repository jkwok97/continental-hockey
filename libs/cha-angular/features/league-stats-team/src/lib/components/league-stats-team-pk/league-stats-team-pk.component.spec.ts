import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsTeamPkComponent } from './league-stats-team-pk.component';

describe('LeagueStatsTeamPkComponent', () => {
  let component: LeagueStatsTeamPkComponent;
  let fixture: ComponentFixture<LeagueStatsTeamPkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsTeamPkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsTeamPkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
