import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStatsPlayersComponent } from './league-stats-players.component';

describe('LeagueStatsPlayersComponent', () => {
  let component: LeagueStatsPlayersComponent;
  let fixture: ComponentFixture<LeagueStatsPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStatsPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStatsPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
