import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsTeamTableComponent } from './league-stats-team-table.component';

describe('LeagueStatsTeamTableComponent', () => {
  let component: LeagueStatsTeamTableComponent;
  let fixture: ComponentFixture<LeagueStatsTeamTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsTeamTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsTeamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
