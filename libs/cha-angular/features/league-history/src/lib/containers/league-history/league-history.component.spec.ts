import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueHistoryComponent } from './league-history.component';

describe('LeagueHistoryComponent', () => {
  let component: LeagueHistoryComponent;
  let fixture: ComponentFixture<LeagueHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
