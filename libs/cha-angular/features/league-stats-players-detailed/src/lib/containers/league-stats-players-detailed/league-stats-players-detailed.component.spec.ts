import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsPlayersDetailedComponent } from './league-stats-players-detailed.component';

describe('LeagueStatsPlayersDetailedComponent', () => {
  let component: LeagueStatsPlayersDetailedComponent;
  let fixture: ComponentFixture<LeagueStatsPlayersDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsPlayersDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsPlayersDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
