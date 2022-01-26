import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueHistoryPlayersComponent } from './league-history-players.component';

describe('LeagueHistoryPlayersComponent', () => {
  let component: LeagueHistoryPlayersComponent;
  let fixture: ComponentFixture<LeagueHistoryPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueHistoryPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueHistoryPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
