import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarForDashboardComponent } from './car-for-dashboard.component';

describe('CarForDashboardComponent', () => {
  let component: CarForDashboardComponent;
  let fixture: ComponentFixture<CarForDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarForDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarForDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
