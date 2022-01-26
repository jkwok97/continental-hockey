import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCurrentPlayersComponent } from './home-current-players.component';

describe('HomeCurrentPlayersComponent', () => {
  let component: HomeCurrentPlayersComponent;
  let fixture: ComponentFixture<HomeCurrentPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCurrentPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCurrentPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
