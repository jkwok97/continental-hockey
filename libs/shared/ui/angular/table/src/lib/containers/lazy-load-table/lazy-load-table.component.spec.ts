import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadTableComponent } from './lazy-load-table.component';

describe('LazyLoadTableComponent', () => {
  let component: LazyLoadTableComponent;
  let fixture: ComponentFixture<LazyLoadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
