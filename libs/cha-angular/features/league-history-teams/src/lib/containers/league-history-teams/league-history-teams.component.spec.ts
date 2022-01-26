import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueHistoryTeamsComponent } from './league-history-teams.component';

describe('LeagueHistoryTeamsComponent', () => {
  let component: LeagueHistoryTeamsComponent;
  let fixture: ComponentFixture<LeagueHistoryTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueHistoryTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueHistoryTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
