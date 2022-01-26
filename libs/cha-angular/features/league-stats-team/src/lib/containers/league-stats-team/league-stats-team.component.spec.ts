import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsTeamComponent } from './league-stats-team.component';

describe('LeagueStatsTeamComponent', () => {
  let component: LeagueStatsTeamComponent;
  let fixture: ComponentFixture<LeagueStatsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
