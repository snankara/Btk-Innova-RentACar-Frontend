import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentStepComponent } from './rent-step.component';

describe('RentStepComponent', () => {
  let component: RentStepComponent;
  let fixture: ComponentFixture<RentStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
