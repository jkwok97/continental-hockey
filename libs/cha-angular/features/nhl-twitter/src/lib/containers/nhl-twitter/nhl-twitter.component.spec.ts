import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlTwitterComponent } from './nhl-twitter.component';

describe('NhlTwitterComponent', () => {
  let component: NhlTwitterComponent;
  let fixture: ComponentFixture<NhlTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhlTwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhlTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
