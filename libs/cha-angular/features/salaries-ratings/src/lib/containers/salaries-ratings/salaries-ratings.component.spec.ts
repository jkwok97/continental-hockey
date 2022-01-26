import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariesRatingsComponent } from './salaries-ratings.component';

describe('SalariesRatingsComponent', () => {
  let component: SalariesRatingsComponent;
  let fixture: ComponentFixture<SalariesRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalariesRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalariesRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
