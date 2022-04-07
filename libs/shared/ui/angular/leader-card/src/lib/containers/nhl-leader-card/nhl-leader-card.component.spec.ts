import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlLeaderCardComponent } from './nhl-leader-card.component';

describe('LeaderCardComponent', () => {
  let component: NhlLeaderCardComponent;
  let fixture: ComponentFixture<NhlLeaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NhlLeaderCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhlLeaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
