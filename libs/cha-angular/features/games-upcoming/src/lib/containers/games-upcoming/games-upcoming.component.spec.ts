import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesUpcomingComponent } from './games-upcoming.component';

describe('GamesUpcomingComponent', () => {
  let component: GamesUpcomingComponent;
  let fixture: ComponentFixture<GamesUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesUpcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
