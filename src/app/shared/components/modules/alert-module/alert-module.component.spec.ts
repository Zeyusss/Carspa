import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModuleComponent } from './alert-module.component';

describe('AlertModuleComponent', () => {
  let component: AlertModuleComponent;
  let fixture: ComponentFixture<AlertModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertModuleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
