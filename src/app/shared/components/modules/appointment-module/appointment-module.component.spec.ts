import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentModuleComponent } from './appointment-module.component';

describe('AppointmentModuleComponent', () => {
  let component: AppointmentModuleComponent;
  let fixture: ComponentFixture<AppointmentModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentModuleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
